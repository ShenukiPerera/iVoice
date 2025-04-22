// File: LandingPageStyles.jsx
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', 
    padding: 16,
  },
  // Hero Section Styling
  heroSection: {
    backgroundColor: '#e0f2fe',
    borderRadius: 16,
    paddingVertical: 40,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1e40af',
    marginBottom: 15,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#1f2937',
    maxWidth: 672,
    marginBottom: 25,
    textAlign: 'center',
  },
  heroButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  arrowIcon: {
    marginLeft: 10,
  },
  // Features Section Styling
  featuresSection: {
    width: '100%',
    paddingVertical: 40,
    paddingHorizontal: 16,
    marginBottom: 40,
  },
  featuresTitle: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: '#1e40af',
    marginBottom: 30,
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureItem: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    width: '100%',
    maxWidth: '45%',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
    opacity: 0, // Initially hidden for fade-in animation
  },
  iconWrapper: {
    backgroundColor: '#2563eb',
    padding: 12,
    borderRadius: 9999,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#1f2937',
  },
  featureDescription: {
    color: '#6b7280',
    textAlign: 'center',
  },
  // CTA Section Styling
  ctaSection: {
    backgroundColor: '#2563eb',
    color: 'white',
    paddingVertical: 40,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginBottom: 30,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
    marginBottom: 15,
  },
  ctaDescription: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    maxWidth: 580,
  },
  ctaButton: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctaButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2563eb',
    marginRight: 10,
  },
  // Footer Styling
  footer: {
    backgroundColor: 'white',
    paddingVertical: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#6b7280',
  },
});
