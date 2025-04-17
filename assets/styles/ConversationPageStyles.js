import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%', 
    paddingTop: 50,
    backgroundColor: '#4169E1',
    
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  topIcon: {
    width: 24,
    height: 24,
    tintColor: '#333',
  },
  topIconPlaceholder: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  mainContainer: {
    flex: 1,
    width: '100%', 
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  illustration: {
    width: 250,
    height: 250,
    marginVertical: 90,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  instruction: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginVertical: -40,
  },
  languageSelectorsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  languageSelectorBox: {
    backgroundColor: '#d3d3d3',
    padding: 10,
    borderRadius: 15,
    width: '40%',
    height: 60,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#333',
    marginHorizontal: 10,
  },
  messageList: {
    flex: 1,
    paddingHorizontal: 10,
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 10,
    backgroundColor: '#eeeeee',
    borderRadius: 10,
    // Don't add fixed height or marginBottom here
  },
  messageBubble: {
    padding: 12,
    borderRadius: 8,
    marginVertical: 5,
    maxWidth: '80%',
    position: 'relative', // Make the bubble container relative for positioning the icon
    paddingBottom: 30, // Add padding at the bottom to avoid overlap with the speaker icon
  },
  blueBubble: {
    backgroundColor: '#d0ebff', // light blue
    alignSelf: 'flex-start',
  },
  greenBubble: {
    backgroundColor: '#d4fcd6', // light green
    alignSelf: 'flex-end',
  },
  leftAlign: {
    alignSelf: 'flex-start',
  },
  rightAlign: {
    alignSelf: 'flex-end',
  },
  transcriptText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  translationText: {
    fontSize: 14,
    color: '#333',
  },
  speakerContainer: {
    position: 'absolute', // Absolute position within the bubble
    bottom: 10, // Ensure the icon is positioned at the bottom of the bubble
    right: 10, // Align it to the right
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  speakerIcon: {
    width: 20, // Reduced size for the speaker icon
    height: 20, // Reduced size for the speaker icon
    tintColor: '#333',
  },
  microphoneButton: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 34,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    backgroundColor: '#fff',
  },
  microphoneIcon: {
    width: 70,
    height: 70,
    
  },
  microphoneRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  bottomControls: {
    position: 'absolute',
    bottom: 80,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 1,
  },
  swapButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    marginHorizontal: 10,
  },
  swapIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
  },
  
});

export default styles;
