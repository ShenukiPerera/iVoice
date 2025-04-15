import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Animated, TextInput } from 'react-native';
import Tts from 'react-native-tts';  // Import TTS library
import { styles } from '../../styles/LandingPageStyles';

const TTSOutputTest = ({ navigation }) => {
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial opacity 0
  const [textInput, setTextInput] = useState(''); // State to hold the input text

  useEffect(() => {
    // Animation for fade-in effect when the page loads
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  // Function to handle text-to-speech when submit is pressed
  const handleTextToSpeech = () => {
    if (textInput) {
      Tts.speak(textInput);  // Use TTS to speak the input text
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Text style={styles.heroTitle}>Break Language Barriers with iVoice</Text>
        <Text style={styles.heroSubtitle}>
          Instant voice and text translation for seamless communication across languages.
        </Text>
        <TouchableOpacity
          style={styles.heroButton}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.heroButtonText}>Start Translating</Text>
        </TouchableOpacity>
      </View>

      {/* Features Section */}
      <View style={styles.featuresSection}>
        <Text style={styles.featuresTitle}>Powerful Translation Features</Text>

        <View style={styles.featuresContainer}>
          <Animated.View style={[styles.featureItem, { opacity: fadeAnim }]}>
            <Text style={styles.featureTitle}>Voice Input</Text>
            <Text style={styles.featureDescription}>
              Speak naturally in your language and get instant translations with our voice recognition technology.
            </Text>
          </Animated.View>

          <Animated.View style={[styles.featureItem, { opacity: fadeAnim }]}>
            <Text style={styles.featureTitle}>Multiple Languages</Text>
            <Text style={styles.featureDescription}>
              Support for a wide range of languages including English, Hindi, Mandarin, and more coming soon.
            </Text>
          </Animated.View>

          <Animated.View style={[styles.featureItem, { opacity: fadeAnim }]}>
            <Text style={styles.featureTitle}>Contextual Information</Text>
            <Text style={styles.featureDescription}>
              Get additional context and cultural insights alongside your translations for better understanding.
            </Text>
          </Animated.View>
        </View>
      </View>

      {/* Text Input Section */}
      <View style={styles.textInputSection}>
        <Text style={styles.textInputTitle}>Enter Text to Read Out Loud</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Type something here..."
          value={textInput}
          onChangeText={setTextInput}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleTextToSpeech}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      {/* CTA Section */}
      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>Ready to start communicating across languages?</Text>
        <Text style={styles.ctaDescription}>
          iVoice makes translation easy and accessible for everyone.
        </Text>
        <TouchableOpacity
          style={styles.ctaButton}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.ctaButtonText}>Try iVoice Now</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 iVoice. All rights reserved.</Text>
      </View>
    </ScrollView>
  );
};

export default TTSOutputTest;