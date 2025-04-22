import React, { useEffect, useState } from 'react';
<<<<<<< Updated upstream:assets/screens/test/TTSOutputTest.js
import { View, Text, TouchableOpacity, ScrollView, Animated, TextInput } from 'react-native';
import Tts from 'react-native-tts';  // Import TTS library
import { styles } from '../../styles/LandingPageStyles';
=======
import { View, Text, TouchableOpacity, ScrollView, Animated } from 'react-native';
// import Feather from 'react-native-vector-icons/Feather';
// import AntDesign from 'react-native-vector-icons/AntDesign';
import { styles } from '../styles/LandingPageStyles';
>>>>>>> Stashed changes:assets/screens/LandingPage.js

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
        <Text style={styles.heroTitle}>Speak. Translate. Connect. Welcome to iVoice</Text>
        <Text style={styles.heroSubtitle}>
          Real-time voice and text translation designed for global conversations.
        </Text>
        <TouchableOpacity
          style={styles.heroButton}
<<<<<<< Updated upstream:assets/screens/test/TTSOutputTest.js
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.heroButtonText}>Start Translating</Text>
=======
          onPress={() => navigation.navigate('Home1')}>
          <Text style={styles.heroButtonText}>Launch Home1 Experience</Text>
          {/* <Feather name="arrow-right" size={20} color="white" style={styles.arrowIcon} /> */}
>>>>>>> Stashed changes:assets/screens/LandingPage.js
        </TouchableOpacity>
      </View>

      {/* Features Section */}
      <View style={styles.featuresSection}>
        <Text style={styles.featuresTitle}>Discover What Home1 Can Do</Text>

        <View style={styles.featuresContainer}>
          <Animated.View style={[styles.featureItem, { opacity: fadeAnim }]}>
<<<<<<< Updated upstream:assets/screens/test/TTSOutputTest.js
            <Text style={styles.featureTitle}>Voice Input</Text>
=======
            <View style={styles.iconWrapper}>
              {/* <AntDesign name="sound" size={40} color="white" /> */}
            </View>
            <Text style={styles.featureTitle}>Live Voice Recognition</Text>
>>>>>>> Stashed changes:assets/screens/LandingPage.js
            <Text style={styles.featureDescription}>
              Say it once—get instant, accurate voice translations powered by smart speech-to-text.
            </Text>
          </Animated.View>

          <Animated.View style={[styles.featureItem, { opacity: fadeAnim }]}>
<<<<<<< Updated upstream:assets/screens/test/TTSOutputTest.js
            <Text style={styles.featureTitle}>Multiple Languages</Text>
=======
            <View style={styles.iconWrapper}>
              {/* <Feather name="globe" size={40} color="white" /> */}
            </View>
            <Text style={styles.featureTitle}>Multi-Language UI</Text>
>>>>>>> Stashed changes:assets/screens/LandingPage.js
            <Text style={styles.featureDescription}>
              iVoice supports UI translations, making it easier for users from different regions to use the app.
            </Text>
          </Animated.View>

          <Animated.View style={[styles.featureItem, { opacity: fadeAnim }]}>
<<<<<<< Updated upstream:assets/screens/test/TTSOutputTest.js
            <Text style={styles.featureTitle}>Contextual Information</Text>
=======
            <View style={styles.iconWrapper}>
              {/* <AntDesign name="message1" size={40} color="white" /> */}
            </View>
            <Text style={styles.featureTitle}>Cultural Relevance</Text>
>>>>>>> Stashed changes:assets/screens/LandingPage.js
            <Text style={styles.featureDescription}>
              Get culturally aware translations that help you communicate beyond words.
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
        <Text style={styles.ctaTitle}>Experience Home1’s Advanced Translation Features</Text>
        <Text style={styles.ctaDescription}>
          Tap into real-time communication like never before with Home1.
        </Text>
        <TouchableOpacity
          style={styles.ctaButton}
<<<<<<< Updated upstream:assets/screens/test/TTSOutputTest.js
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.ctaButtonText}>Try iVoice Now</Text>
=======
          onPress={() => navigation.navigate('Home1')}>
          <Text style={styles.ctaButtonText}>Go to Home1</Text>
          {/* <Feather name="arrow-right" size={20} color="#2563eb" style={styles.arrowIcon} /> */}
>>>>>>> Stashed changes:assets/screens/LandingPage.js
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 iVoice. All rights reserved.</Text>
      </View>
    </ScrollView>
  );
};

<<<<<<< Updated upstream:assets/screens/test/TTSOutputTest.js
export default TTSOutputTest;
=======
export default LandingPage;
>>>>>>> Stashed changes:assets/screens/LandingPage.js
