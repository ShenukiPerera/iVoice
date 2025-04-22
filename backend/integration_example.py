"""
This file shows examples of how to integrate the service modules with your existing app.py
without modifying app.py directly.

You can copy these snippets into your app.py or import the service_helper functions.
"""

# Example 1: Import the service helper functions in your app.py
# ------------------------------------------------------------------
# Add this import at the top of your app.py
from urllib import request
from service_helper import (
    handle_speech_to_text,
    handle_translation,
    handle_text_to_speech,
    handle_user_preferences,
    handle_translation_history
)

# Example 2: Modify your speech-to-text route (without changing the route itself)
# ------------------------------------------------------------------------------
# Replace the function body with:

@app.route("/api/v1/speech-to-text", methods=["POST"])
def speech_to_text():
    audio_file = request.files.get("audio")
    language = request.form.get("language")
    user_id = request.form.get("user_id", "default")
    
    result = handle_speech_to_text(audio_file, language, user_id)
    return jsonify(result)


# Example 3: Modify your translation route (without changing the route itself)
# ------------------------------------------------------------------------------
# Replace the function body with:

@app.route("/api/v1/translate", methods=["POST"])
def translate_text():
    data = request.json
    original_text = data.get("original_text")
    input_lang = data.get("input_lang")
    output_lang = data.get("output_lang")
    user_id = data.get("user_id", "default")
    
    result = handle_translation(original_text, input_lang, output_lang, user_id)
    return jsonify(result)


# Example 4: Modify your text-to-speech route (without changing the route itself)
# ------------------------------------------------------------------------------
# Replace the function body with:

@app.route("/api/v1/text-to-speech", methods=["POST"])
def text_to_speech():
    data = request.json
    text = data.get("text")
    output_lang = data.get("output_lang")
    user_id = data.get("user_id", "default")
    
    return handle_text_to_speech(text, output_lang, user_id)


# Example 5: Modify your user preferences route (without changing the route itself)
# ------------------------------------------------------------------------------
# Replace the function body with:

@app.route("/api/v1/user/preferences", methods=["POST"])
def save_user_preferences():
    data = request.json
    result = handle_user_preferences(data)
    return jsonify(result)


# Example 6: Modify your translation history route (without changing the route itself)
# ------------------------------------------------------------------------------
# Replace the function body with:

@app.route("/api/v1/user/<user_id>/history", methods=["GET"])
def get_translation_history(user_id):
    limit = request.args.get("limit", default=50, type=int)
    result = handle_translation_history(user_id, limit)
    return jsonify(result)