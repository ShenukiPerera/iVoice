"""
Simple Translation service that works with the existing app.py
"""

import sqlite3
import requests
import os

# Dictionary of supported languages
SUPPORTED_LANGUAGES = {
    'en': 'English',
    'es': 'Spanish',
    'fr': 'French',
    'de': 'German',
    'it': 'Italian',
    'zh': 'Chinese',
    'ja': 'Japanese',
    'ru': 'Russian'
}

# The database name from the original app.py
DB_NAME = 'ivoice_local.db'

class TranslationService:
    def __init__(self):
        # Make sure the database exists
        if not os.path.exists(DB_NAME):
            with sqlite3.connect(DB_NAME) as conn:
                pass
    
    def translate_with_api(self, text, source_lang, target_lang):
        """
        Placeholder for translation API integration.
        In a real implementation, you would call an external API.
        """
        try:
            # This is a mock implementation - in reality you would use a service like:
            # - Google Translate API
            # - DeepL API
            # - Microsoft Translator API
            
            # Simulating a translation
            if source_lang == target_lang:
                return text
                
            translated_text = f"[Translated from {source_lang} to {target_lang}]: {text}"
            
            # You could make an actual API call here like:
            # response = requests.post(
            #     "https://translation-api.example.com/translate",
            #     json={
            #         "text": text,
            #         "source_language": source_lang,
            #         "target_language": target_lang
            #     }
            # )
            # translated_text = response.json()["translated_text"]
            
            return translated_text
            
        except Exception as e:
            print(f"Translation error: {e}")
            return f"Error translating text: {str(e)}"
    
    def translate(self, text, source_lang, target_lang, user_id="default"):
        """Translate text from source language to target language"""
        # Validate input
        if not text:
            return {"error": "Text is required", "translated_text": ""}
            
        if source_lang not in SUPPORTED_LANGUAGES:
            return {"error": f"Unsupported source language: {source_lang}", "translated_text": ""}
            
        if target_lang not in SUPPORTED_LANGUAGES:
            return {"error": f"Unsupported target language: {target_lang}", "translated_text": ""}
        
        # Perform translation
        translated_text = self.translate_with_api(text, source_lang, target_lang)
        
        # Store in database (working with the existing schema from app.py)
        try:
            with sqlite3.connect(DB_NAME) as conn:
                c = conn.cursor()
                c.execute("""
                    INSERT INTO TranslationHistory 
                    (user_id, original_text, translated_text, input_lang, output_lang)
                    VALUES (?, ?, ?, ?, ?)
                """, (user_id, text, translated_text, source_lang, target_lang))
                conn.commit()
        except Exception as e:
            print(f"Database error: {e}")
        
        return {
            "translated_text": translated_text
        }
    
    def get_supported_languages(self):
        """Return the list of supported languages"""
        return SUPPORTED_LANGUAGES