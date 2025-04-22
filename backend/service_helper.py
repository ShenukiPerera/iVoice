"""
Helper module to connect the existing app.py with the service implementations.
This file doesn't modify app.py but provides functions that can be imported and used there.
"""

from speech_service import SpeechToTextService, TextToSpeechService
from translation_service import TranslationService
from user_service import UserService
import os
from flask import send_file 
from datetime import datetime

# Initialize services
stt_service = SpeechToTextService()
tts_service = TextToSpeechService()
translation_service = TranslationService()
user_service = UserService()

def handle_speech_to_text(audio_file, language=None, user_id="default"):
    """
    Process speech-to-text request without modifying app.py
    
    This can be called from the existing route in app.py
    """
    if not audio_file:
        return {"error": "Audio file is required"}, 400
    
    # If language not provided, get from user preferences
    if not language:
        preferences = user_service.get_preferences(user_id)
        language = preferences["preferred_input_lang"]
    
    # Process the audio
    result = stt_service.transcribe(audio_file, language)
    return result


def handle_translation(original_text, input_lang=None, output_lang=None, user_id="default"):
    """
    Process translation request without modifying app.py
    
    This can be called from the existing route in app.py
    """
    if not original_text:
        return {"error": "Original text is required"}, 400
    
    # If languages are not provided, get from user preferences
    if not input_lang or not output_lang:
        preferences = user_service.get_preferences(user_id)
        input_lang = input_lang or preferences["preferred_input_lang"]
        output_lang = output_lang or preferences["preferred_output_lang"]
    
    # Perform translation
    result = translation_service.translate(original_text, input_lang, output_lang, user_id)
    return result


def handle_text_to_speech(text, output_lang=None, user_id="default"):
    """
    Process text-to-speech request without modifying app.py
    
    This can be called from the existing route in app.py
    """
    if not text:
        return {"error": "Text is required"}, 400
    
    # If language is not provided, get from user preferences
    if not output_lang:
        preferences = user_service.get_preferences(user_id)
        output_lang = preferences["preferred_output_lang"]
    
    # Generate speech
    result = tts_service.synthesize(text, output_lang)
    
    if "error" in result:
        return result, 400
        
    # Return the audio file
    if os.path.exists(result["audio_path"]):
        return send_file(
            result["audio_path"],
            mimetype="audio/mpeg",
            as_attachment=True,
            download_name=f"ivoice_speech_{datetime.now().strftime('%Y%m%d%H%M%S')}.mp3"
        )
    else:
        return {"error": "Failed to generate audio file"}, 500


def handle_user_preferences(user_data):
    """
    Process user preferences request without modifying app.py
    
    This can be called from the existing route in app.py
    """
    user_id = user_data.get("user_id", "default")
    preferred_input_lang = user_data.get("preferred_input_lang")
    preferred_output_lang = user_data.get("preferred_output_lang")
    offline_mode_enabled = user_data.get("offline_mode_enabled")
    
    # Save preferences
    result = user_service.save_preferences(
        user_id, 
        preferred_input_lang, 
        preferred_output_lang, 
        offline_mode_enabled
    )
    
    return result


def handle_translation_history(user_id, limit=50):
    """
    Process translation history request without modifying app.py
    
    This can be called from the existing route in app.py
    """
    history = user_service.get_translation_history(user_id, limit)
    return history