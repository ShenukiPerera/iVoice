from flask import Flask, request, jsonify
import sqlite3
import os
from datetime import datetime

app = Flask(__name__)


DB_NAME = 'ivoice_local.db'

def init_db():
    with sqlite3.connect(DB_NAME) as conn:
        c = conn.cursor()
        c.execute('''CREATE TABLE IF NOT EXISTS UserPreferences (
                        user_id TEXT PRIMARY KEY,
                        preferred_input_lang TEXT,
                        preferred_output_lang TEXT,
                        offline_mode_enabled BOOLEAN,
                        last_sync TIMESTAMP
                    )''')
        c.execute('''CREATE TABLE IF NOT EXISTS TranslationHistory (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        user_id TEXT,
                        original_text TEXT,
                        translated_text TEXT,
                        input_lang TEXT,
                        output_lang TEXT,
                        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
                    )''')
        c.execute('''CREATE TABLE IF NOT EXISTS CachedModels (
                        lang_pair TEXT PRIMARY KEY,
                        model_path TEXT,
                        last_updated DATETIME
                    )''')
        c.execute('''CREATE TABLE IF NOT EXISTS ContextCache (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        location TEXT,
                        context_data TEXT,
                        cached_at DATETIME
                    )''')
        conn.commit()


@app.route("/api/v1/speech-to-text", methods=["POST"])
def speech_to_text():
    audio_file = request.files.get("audio")
    if not audio_file:
        return jsonify({"error": "Audio file is required"}), 400

    # Placeholder for actual STT model integration
    transcribed_text = "Hello, this is a mock transcription."
    return jsonify({"transcribed_text": transcribed_text})


@app.route("/api/v1/translate", methods=["POST"])
def translate_text():
    data = request.json
    original_text = data.get("original_text")
    input_lang = data.get("input_lang")
    output_lang = data.get("output_lang")
    user_id = data.get("user_id", "default")

    # Placeholder for actual translation logic
    translated_text = f"[Translated from {input_lang} to {output_lang}]: {original_text}"

    with sqlite3.connect(DB_NAME) as conn:
        c = conn.cursor()
        c.execute("""
            INSERT INTO TranslationHistory (user_id, original_text, translated_text, input_lang, output_lang)
            VALUES (?, ?, ?, ?, ?)
        """, (user_id, original_text, translated_text, input_lang, output_lang))
        conn.commit()

    return jsonify({"translated_text": translated_text})


@app.route("/api/v1/text-to-speech", methods=["POST"])
def text_to_speech():
    data = request.json
    text = data.get("text")
    output_lang = data.get("output_lang")
    # Placeholder response
    return jsonify({"message": f"Audio stream generated for '{text}' in {output_lang}"})


@app.route("/api/v1/user/preferences", methods=["POST"])
def save_user_preferences():
    data = request.json
    user_id = data.get("user_id", "default")
    preferred_input_lang = data.get("preferred_input_lang")
    preferred_output_lang = data.get("preferred_output_lang")
    offline_mode_enabled = data.get("offline_mode_enabled", False)

    with sqlite3.connect(DB_NAME) as conn:
        c = conn.cursor()
        c.execute("""
            INSERT INTO UserPreferences (user_id, preferred_input_lang, preferred_output_lang, offline_mode_enabled, last_sync)
            VALUES (?, ?, ?, ?, ?)
            ON CONFLICT(user_id) DO UPDATE SET
                preferred_input_lang=excluded.preferred_input_lang,
                preferred_output_lang=excluded.preferred_output_lang,
                offline_mode_enabled=excluded.offline_mode_enabled,
                last_sync=excluded.last_sync
        """, (user_id, preferred_input_lang, preferred_output_lang, offline_mode_enabled, datetime.utcnow()))
        conn.commit()

    return jsonify({"status": "Preferences updated"})


@app.route("/api/v1/user/<user_id>/history", methods=["GET"])
def get_translation_history(user_id):
    with sqlite3.connect(DB_NAME) as conn:
        c = conn.cursor()
        c.execute("SELECT original_text, translated_text, timestamp FROM TranslationHistory WHERE user_id = ? ORDER BY timestamp DESC", (user_id,))
        rows = c.fetchall()
    history = [{"original": row[0], "translated": row[1], "timestamp": row[2]} for row in rows]
    return jsonify({"history": history})


if __name__ == "__main__":
    init_db()
    app.run(debug=True)
