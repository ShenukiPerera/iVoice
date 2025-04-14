"""
Simple User service for handling preferences and history that works with the existing app.py
"""

import sqlite3
from datetime import datetime
import os

# The database name from the original app.py
DB_NAME = 'ivoice_local.db'

# Default preferences
DEFAULT_INPUT_LANG = 'en'
DEFAULT_OUTPUT_LANG = 'es'
DEFAULT_OFFLINE_MODE = False

class UserService:
    def __init__(self):
        # Make sure the database exists
        if not os.path.exists(DB_NAME):
            with sqlite3.connect(DB_NAME) as conn:
                pass
    
    def get_preferences(self, user_id):
        """Get user preferences from the database"""
        try:
            with sqlite3.connect(DB_NAME) as conn:
                c = conn.cursor()
                c.execute("""
                    SELECT preferred_input_lang, preferred_output_lang, offline_mode_enabled
                    FROM UserPreferences WHERE user_id = ?
                """, (user_id,))
                result = c.fetchone()
            
            if result:
                return {
                    "preferred_input_lang": result[0],
                    "preferred_output_lang": result[1],
                    "offline_mode_enabled": bool(result[2])
                }
            else:
                # Return default preferences
                return {
                    "preferred_input_lang": DEFAULT_INPUT_LANG,
                    "preferred_output_lang": DEFAULT_OUTPUT_LANG,
                    "offline_mode_enabled": DEFAULT_OFFLINE_MODE
                }
        except Exception as e:
            print(f"Error fetching preferences: {e}")
            return {
                "preferred_input_lang": DEFAULT_INPUT_LANG,
                "preferred_output_lang": DEFAULT_OUTPUT_LANG,
                "offline_mode_enabled": DEFAULT_OFFLINE_MODE
            }
    
    def save_preferences(self, user_id, preferred_input_lang=None, preferred_output_lang=None, offline_mode_enabled=None):
        """Save user preferences to the database"""
        try:
            # Get current preferences to only update what's provided
            current_prefs = self.get_preferences(user_id)
            
            # Update only the provided values
            if preferred_input_lang is None:
                preferred_input_lang = current_prefs["preferred_input_lang"]
                
            if preferred_output_lang is None:
                preferred_output_lang = current_prefs["preferred_output_lang"]
                
            if offline_mode_enabled is None:
                offline_mode_enabled = current_prefs["offline_mode_enabled"]
            
            # Save to database
            with sqlite3.connect(DB_NAME) as conn:
                c = conn.cursor()
                c.execute("""
                    INSERT INTO UserPreferences 
                    (user_id, preferred_input_lang, preferred_output_lang, offline_mode_enabled, last_sync)
                    VALUES (?, ?, ?, ?, ?)
                    ON CONFLICT(user_id) DO UPDATE SET
                        preferred_input_lang=excluded.preferred_input_lang,
                        preferred_output_lang=excluded.preferred_output_lang,
                        offline_mode_enabled=excluded.offline_mode_enabled,
                        last_sync=excluded.last_sync
                """, (user_id, preferred_input_lang, preferred_output_lang, offline_mode_enabled, datetime.utcnow()))
                conn.commit()
            
            return {
                "status": "success",
                "preferences": {
                    "preferred_input_lang": preferred_input_lang,
                    "preferred_output_lang": preferred_output_lang,
                    "offline_mode_enabled": offline_mode_enabled
                }
            }
            
        except Exception as e:
            print(f"Error saving preferences: {e}")
            return {
                "status": "error",
                "message": str(e)
            }
    
    def get_translation_history(self, user_id, limit=50):
        """Get translation history for a user"""
        try:
            with sqlite3.connect(DB_NAME) as conn:
                c = conn.cursor()
                c.execute("""
                    SELECT original_text, translated_text, input_lang, output_lang, timestamp 
                    FROM TranslationHistory 
                    WHERE user_id = ? 
                    ORDER BY timestamp DESC
                    LIMIT ?
                """, (user_id, limit))
                rows = c.fetchall()
            
            history = []
            for row in rows:
                history.append({
                    "original": row[0],
                    "translated": row[1],
                    "source_language": row[2],
                    "target_language": row[3],
                    "timestamp": row[4]
                })
            
            return {"history": history}
            
        except Exception as e:
            print(f"Error fetching history: {e}")
            return {"history": [], "error": str(e)}