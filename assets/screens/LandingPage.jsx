import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
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
    desc: 'Let iVoice identify your language automatically..............',
  },
  {
    icon: <Feather name="message-square" size={24} color="#9333ea" />,
    title: 'Text Translation',
    desc: 'Type or paste text for accurate translations',
  },
];

const languages = ['English', 'Chinese', 'Hindi'];

const Landing = ({ navigation }) => {
  const flatListRef = useRef(null);
  const scrollIndexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      scrollIndexRef.current = (scrollIndexRef.current + 1) % features.length;
      flatListRef.current?.scrollToIndex({
        index: scrollIndexRef.current,
        animated: true,
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <LinearGradient
      colors={['#e0f2fe', '#ccfbf1']}
      style={styles.gradientBackground}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.iconCircle}>
            <MaterialCommunityIcons name="earth" size={48} color="white" />
          </View>
          <Text style={styles.title}>iVoice</Text>
          <Text style={styles.subtitle}>
            Break language barriers instantly
          </Text>
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
        </View>

        {/* Features Carousel */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Powerful Features</Text>
          <FlatList
            ref={flatListRef}
            data={features}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            pagingEnabled
            snapToAlignment="center"
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            renderItem={({ item }) => (
              <View style={styles.featureCardCarousel}>
                <View style={styles.featureIcon}>{item.icon}</View>
                <Text style={styles.featureTitle}>{item.title}</Text>
                <Text style={styles.featureDesc}>{item.desc}</Text>
              </View>
            )}
          />
        </View>

        {/* Language Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Languages Supported</Text>
          <Text style={styles.sectionSubText}>
            Including English, Hindi, Chinese and more
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
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.ctaCard}
          >
            <View style={styles.ctaIconCircle}>
              <Feather name="globe" size={28} color="white" />
            </View>
            <Text style={styles.ctaTitle}>Ready to communicate globally?</Text>
            <Text style={styles.ctaSubtitle}>
              Join millions breaking language barriers with iVoice.
            </Text>
            <TouchableOpacity style={styles.ctaButton}>
              <Text style={styles.ctaButtonText}>Get Started Now</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>


        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2025 iVoice - All Rights Reserved
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBackground: { flex: 1 },
  scrollContainer: { paddingBottom: 32 },

  heroSection: {
    paddingVertical: 45,
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
  subtitle: {
    fontSize: 16,
    color: '#4b5563',
    marginVertical: 8,
    textAlign: 'center',
  },
  startButton: { marginTop: 20, borderRadius: 999, overflow: 'hidden' },
  startButtonInner: {
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 999,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  startText: { color: 'white', fontWeight: '600', marginRight: 8 },

  section: {
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 16,
    textAlign: 'center',
  },
  sectionSubText: {
    textAlign: 'center',
    color: '#475569',
    marginBottom: 16,
  },
  featureCardCarousel: {
    width: 280,
    marginRight: 16,
    backgroundColor: '#f0fdfa',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureIcon: {
    padding: 12,
    backgroundColor: '#dbeafe',
    borderRadius: 50,
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    textAlign: 'center',
  },
  featureDesc: {
    fontSize: 14,
    color: '#475569',
    textAlign: 'center',
  },
  languageTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    marginTop: 8,
  },
  langTag: {
    backgroundColor: '#bae6fd',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  langText: { fontSize: 12, color: '#0f172a' },

  ctaSection: {
    marginHorizontal: 16,
    marginTop: 24,
    marginBottom: 32,
    borderRadius: 24,
    overflow: 'hidden',
    elevation: 5,
  },
  
  ctaCard: {
    paddingVertical: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
    borderRadius: 24,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  
  ctaIconCircle: {
    backgroundColor: '#ffffff30',
    padding: 16,
    borderRadius: 999,
    marginBottom: 16,
  },
  
  ctaTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
  },
  
  ctaSubtitle: {
    fontSize: 14,
    color: '#f0fdf4',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  
  ctaButton: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 999,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  
  ctaButtonText: {
    color: '#0f172a',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  
  getStartedBtn: {
    backgroundColor: '#3b82f6',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  getStartedText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
  },

  footer: {
    padding: 16,
    alignItems: 'center',
  },
  footerText: { color: '#64748b', fontSize: 12 },
});

export default Landing;
