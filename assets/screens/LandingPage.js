import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Animated, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { styles } from '../styles/LandingPageStyles';

const LandingPage = ({ navigation }) => {
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial opacity 0

  useEffect(() => {
    // Animation for fade-in effect when the page loads
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

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
          <Feather name="arrow-right" size={20} color="white" style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>

      {/* Features Section */}
      <View style={styles.featuresSection}>
        <Text style={styles.featuresTitle}>Powerful Translation Features</Text>

        <View style={styles.featuresContainer}>
          {/* Feature 1 */}
          <Animated.View style={[styles.featureItem, { opacity: fadeAnim }]}>
            <View style={styles.iconWrapper}>
              <AntDesign name="sound" size={40} color="white" />
            </View>
            <Text style={styles.featureTitle}>Voice Input</Text>
            <Text style={styles.featureDescription}>
              Speak naturally in your language and get instant translations with our voice recognition technology.
            </Text>
          </Animated.View>

          {/* Feature 2 */}
          <Animated.View style={[styles.featureItem, { opacity: fadeAnim }]}>
            <View style={styles.iconWrapper}>
              <Feather name="globe" size={40} color="white" />
            </View>
            <Text style={styles.featureTitle}>Multiple Languages</Text>
            <Text style={styles.featureDescription}>
              Support for a wide range of languages including English, Hindi, Mandarin, and more coming soon.
            </Text>
          </Animated.View>

          {/* Feature 3 */}
          <Animated.View style={[styles.featureItem, { opacity: fadeAnim }]}>
            <View style={styles.iconWrapper}>
              <AntDesign name="message1" size={40} color="white" />
            </View>
            <Text style={styles.featureTitle}>Contextual Information</Text>
            <Text style={styles.featureDescription}>
              Get additional context and cultural insights alongside your translations for better understanding.
            </Text>
          </Animated.View>
        </View>
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
          <Feather name="arrow-right" size={20} color="#2563eb" style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 iVoice. All rights reserved.</Text>
      </View>
    </ScrollView>
  );
};

export default LandingPage;