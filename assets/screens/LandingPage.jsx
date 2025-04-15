// import React, { useEffect, useState } from 'react';
// import { View, Text, TouchableOpacity, ScrollView, Animated, StyleSheet } from 'react-native';
// // import Feather from 'react-native-vector-icons/Feather';
// // import AntDesign from 'react-native-vector-icons/AntDesign';
// import { styles } from '../styles/LandingPageStyles';

// const LandingPage = ({ navigation }) => {
//   const [fadeAnim] = useState(new Animated.Value(0)); // Initial opacity 0

//   useEffect(() => {
//     // Animation for fade-in effect when the page loads
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 1000,
//       useNativeDriver: true,
//     }).start();
//   }, []);

//   return (
//     <ScrollView style={styles.container}>
//       {/* Hero Section */}
//       <View style={styles.heroSection}>
//         <Text style={styles.heroTitle}>Break Language Barriers with iVoice</Text>
//         <Text style={styles.heroSubtitle}>
//           Instant voice and text translation for seamless communication across languages.
//         </Text>
//         <TouchableOpacity
//           style={styles.heroButton}
//           onPress={() => navigation.navigate('Home')}>
//           <Text style={styles.heroButtonText}>Start Translating</Text>
//           {/* <Feather name="arrow-right" size={20} color="white" style={styles.arrowIcon} /> */}
//         </TouchableOpacity>
//       </View>

//       {/* Features Section */}
//       <View style={styles.featuresSection}>
//         <Text style={styles.featuresTitle}>Powerful Translation Features</Text>

//         <View style={styles.featuresContainer}>
//           {/* Feature 1 */}
//           <Animated.View style={[styles.featureItem, { opacity: fadeAnim }]}>
//             <View style={styles.iconWrapper}>
//               {/* <AntDesign name="sound" size={40} color="white" /> */}
//             </View>
//             <Text style={styles.featureTitle}>Voice Input</Text>
//             <Text style={styles.featureDescription}>
//               Speak naturally in your language and get instant translations with our voice recognition technology.
//             </Text>
//           </Animated.View>

//           {/* Feature 2 */}
//           <Animated.View style={[styles.featureItem, { opacity: fadeAnim }]}>
//             <View style={styles.iconWrapper}>
//               {/* <Feather name="globe" size={40} color="white" /> */}
//             </View>
//             <Text style={styles.featureTitle}>Multiple Languages</Text>
//             <Text style={styles.featureDescription}>
//               Support for a wide range of languages including English, Hindi, Mandarin, and more coming soon.
//             </Text>
//           </Animated.View>

//           {/* Feature 3 */}
//           <Animated.View style={[styles.featureItem, { opacity: fadeAnim }]}>
//             <View style={styles.iconWrapper}>
//               {/* <AntDesign name="message1" size={40} color="white" /> */}
//             </View>
//             <Text style={styles.featureTitle}>Contextual Information</Text>
//             <Text style={styles.featureDescription}>
//               Get additional context and cultural insights alongside your translations for better understanding.
//             </Text>
//           </Animated.View>
//         </View>
//       </View>

//       {/* CTA Section */}
//       <View style={styles.ctaSection}>
//         <Text style={styles.ctaTitle}>Ready to start communicating across languages?</Text>
//         <Text style={styles.ctaDescription}>
//           iVoice makes translation easy and accessible for everyone.
//         </Text>
//         <TouchableOpacity
//           style={styles.ctaButton}
//           onPress={() => navigation.navigate('Home')}>
//           <Text style={styles.ctaButtonText}>Try iVoice Now</Text>
//           {/* <Feather name="arrow-right" size={20} color="#2563eb" style={styles.arrowIcon} /> */}
//         </TouchableOpacity>
//       </View>

//       {/* Footer */}
//       <View style={styles.footer}>
//         <Text style={styles.footerText}>© 2025 iVoice. All rights reserved.</Text>
//       </View>
//     </ScrollView>
//   );
// };

// export default LandingPage;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const features = [
  {
    icon: <Feather name="mic" size={24} color="#2563eb" />,
    title: 'Voice Translation',
    desc: 'Speak naturally and get instant translations',
  },
  {
    icon: <Feather name="zap" size={24} color="#0d9488" />,
    title: 'Auto Language Detection',
    desc: 'Let iVoice identify your language automatically',
  },
  {
    icon: <Feather name="message-square" size={24} color="#9333ea" />,
    title: 'Text Translation',
    desc: 'Type or paste text for accurate translations',
  },
];

const languages = [
  'English', 'Chinese', 'Hindi'
];

const Landing = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <LinearGradient
        colors={['#eff6ff', '#ccfbf1']}
        style={styles.heroSection}
      >
        <View style={styles.iconCircle}>
          <MaterialCommunityIcons name="earth" size={48} color="white" />
        </View>
        <Text style={styles.title}>iVoice</Text>
        <Text style={styles.subtitle}>Break language barriers instantly</Text>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => navigation.navigate('Home')}
        >
          <LinearGradient
            colors={['#3b82f6', '#14b8a6']}
            style={styles.startButtonInner}
          >
            <Text style={styles.startText}>Start Translating</Text>
            <Feather name="arrow-right" size={20} color="white" />
          </LinearGradient>
        </TouchableOpacity>
      </LinearGradient>

      {/* Features Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Powerful Translation Features</Text>
        {features.map((item, index) => (
          <View key={index} style={styles.featureCard}>
            <View style={styles.featureIcon}>{item.icon}</View>
            <View>
              <Text style={styles.featureTitle}>{item.title}</Text>
              <Text style={styles.featureDesc}>{item.desc}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Language Section */}
      <View style={[styles.section, { backgroundColor: '#ffffffb3' }]}>
        <Text style={styles.sectionTitle}>Multiple Languages Supported</Text>
        <Text style={styles.sectionSubText}>
          Including English, Hindi, Chinese and more in the future
        </Text>
        <View style={styles.languageTags}>
          {languages.map((lang) => (
            <View key={lang} style={styles.langTag}>
              <Text style={styles.langText}>{lang}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* CTA Section */}
      <View style={styles.ctaSection}>
        <LinearGradient
          colors={['#3b82f6', '#14b8a6']}
          style={styles.ctaCard}
        >
          <Text style={styles.ctaTitle}>Ready to communicate globally?</Text>
          <Text style={styles.ctaSubtitle}>
            Start using iVoice today and connect with people around the world.
          </Text>
          <TouchableOpacity style={styles.getStartedBtn}>
            <Text style={styles.getStartedText}>Get Started Now</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 iVoice - All Rights Reserved</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  heroSection: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  iconCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#3b82f6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  title: { fontSize: 32, fontWeight: 'bold', color: '#1f2937' },
  subtitle: { fontSize: 16, color: '#4b5563', marginVertical: 8, textAlign: 'center' },
  startButton: { marginTop: 16, borderRadius: 999, overflow: 'hidden' },
  startButtonInner: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 999,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  startText: { color: 'white', fontWeight: '600', marginRight: 8 },
  section: { paddingVertical: 24, paddingHorizontal: 16 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#1f2937', marginBottom: 16 },
  sectionSubText: { textAlign: 'center', color: '#4b5563', marginBottom: 12 },
  featureCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffffcc',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'flex-start',
    gap: 12,
  },
  featureIcon: {
    padding: 8,
    backgroundColor: '#e0f2fe',
    borderRadius: 50,
  },
  featureTitle: { fontSize: 16, fontWeight: '600', marginBottom: 4 },
  featureDesc: { fontSize: 14, color: '#6b7280' },
  languageTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    marginTop: 8,
  },
  langTag: {
    backgroundColor: '#e5e7eb',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  langText: { fontSize: 12, color: '#374151' },
  ctaSection: { padding: 16 },
  ctaCard: {
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  ctaTitle: { fontSize: 20, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: 8 },
  ctaSubtitle: { color: 'rgba(255,255,255,0.9)', textAlign: 'center', marginBottom: 16 },
  getStartedBtn: {
    backgroundColor: 'white',
    paddingVertical: 12,
    borderRadius: 8,
  },
  getStartedText: {
    textAlign: 'center',
    color: '#0f172a',
    fontWeight: '600',
  },
  footer: { padding: 16 },
  footerText: { textAlign: 'center', color: '#6b7280', fontSize: 12 },
});

export default Landing;

