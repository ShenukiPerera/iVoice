import { StyleSheet } from 'react-native';

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9', // Very light gray background
    paddingHorizontal: 20,
    paddingTop: 30, // Add some top padding for status bar
  },
  autoDetectSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  autoDetectText: {
    fontSize: 17,
    color: '#444', // Slightly lighter dark gray
  },
  inputSection: {
    marginBottom: 35,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600', // Slightly lighter bold
    color: '#2c3e50', // Darker blue-gray
    marginBottom: 18,
  },
  textArea: {
    height: 140,
    width: '100%',
    borderColor: '#e0e0e0', // Even lighter border
    borderWidth: 1,
    borderRadius: 10, // More rounded corners
    backgroundColor: '#fff',
    color: '#333',
    padding: 15,
    marginBottom: 12,
    fontSize: 17,
    textAlignVertical: 'top',
    shadowColor: '#000', // Subtle shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // For Android
  },
  voiceButton: {
    backgroundColor: '#3498db', // Modern bright blue
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  voiceButtonText: {
    color: 'white',
    fontWeight: '500', // Slightly lighter bold
    fontSize: 17,
  },
  languageSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 35,
  },
  languageSelector: {
    flex: 1,
    marginRight: 15,
  },
  languageSelectorLast: {
    flex: 1,
    marginLeft: 15,
  },
  sectionSubText: {
    fontSize: 16,
    color: '#777', // Medium light gray
    marginBottom: 10,
  },
  picker: {
    height: 52,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    color: '#333',
  },
  outputSection: {
    marginBottom: 35,
  },
  outputTextAreaContainer: {
    minHeight: 140,
    width: '100%',
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#f2f2f2', // Slightly darker light gray
    padding: 15,
    marginBottom: 12,
    justifyContent: 'flex-start',
  },
  outputTextArea: {
    fontSize: 17,
    color: '#444',
  },
  readButton: {
    backgroundColor: '#2ecc71', // Modern bright green
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  readButtonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 17,
  },
  translateButton: {
    backgroundColor: '#00b8d4', // Another modern bright blue
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 4,
  },
  translateButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 19,
  },
});

export default appStyles;