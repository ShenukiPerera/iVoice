"""
Simple Speech-to-Text and Text-to-Speech services that work with the existing app.py
"""

import os
import uuid
import speech_recognition as sr
from pydub import AudioSegment
import pyttsx3
import tempfile

class SpeechToTextService:
    def __init__(self):
        self.recognizer = sr.Recognizer()
        self.upload_folder = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'uploads')
        os.makedirs(self.upload_folder, exist_ok=True)
        
    def save_audio_file(self, audio_file):
        """Save the uploaded audio file to disk"""
        filename = str(uuid.uuid4()) + '.wav'
        filepath = os.path.join(self.upload_folder, filename)
        audio_file.save(filepath)
        return filepath
    
    def convert_to_wav(self, audio_path):
        """Convert audio to WAV format if needed"""
        try:
            audio = AudioSegment.from_file(audio_path)
            wav_path = os.path.splitext(audio_path)[0] + '.wav'
            audio.export(wav_path, format='wav')
            return wav_path
        except Exception:
            # If conversion fails, return original path
            return audio_path
    
    def transcribe(self, audio_file, language="en-US"):
        """Transcribe audio to text"""
        # Save and convert audio file
        audio_path = self.save_audio_file(audio_file)
        wav_path = self.convert_to_wav(audio_path)
        
        try:
            with sr.AudioFile(wav_path) as source:
                audio_data = self.recognizer.record(source)
                try:
                    # Use Google's speech recognition
                    text = self.recognizer.recognize_google(audio_data, language=language)
                    return {"transcribed_text": text}
                except sr.UnknownValueError:
                    return {"transcribed_text": "Speech could not be understood", "error": "Speech not recognized"}
                except sr.RequestError:
                    return {"transcribed_text": "Could not request results", "error": "Network error"}
        except Exception as e:
            return {"transcribed_text": "Error processing audio", "error": str(e)}


class TextToSpeechService:
    def __init__(self):
        self.engine = pyttsx3.init()
        self.output_folder = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'outputs')
        os.makedirs(self.output_folder, exist_ok=True)
    
    def synthesize(self, text, language="en"):
        """Generate speech from text"""
        try:
            # Create a temporary file for the output
            output_filename = f"{uuid.uuid4()}.mp3"
            output_path = os.path.join(self.output_folder, output_filename)
            
            # Configure the engine
            self.engine.setProperty('rate', 150)  # Speed
            
            # Limited language support in pyttsx3
            # This is a simplified mapping
            voice_map = {
                'en': 0,  # Default English voice
                'es': 1,  # May not exist on all systems
                'fr': 2,  # May not exist on all systems
            }
            
            voices = self.engine.getProperty('voices')
            if language in voice_map and voice_map[language] < len(voices):
                self.engine.setProperty('voice', voices[voice_map[language]].id)
            
            # Save to file
            self.engine.save_to_file(text, output_path)
            self.engine.runAndWait()
            
            return {
                "audio_path": output_path,
                "success": True
            }
            
        except Exception as e:
            return {"error": f"Failed to generate speech: {str(e)}"}