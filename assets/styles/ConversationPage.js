import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../styles/ConversationPageStyles';

const ConversationPage = () => {
  const [isRecording1, setIsRecording1] = useState(false);
  const [isRecording2, setIsRecording2] = useState(false);
  const [selectedLanguage1, setSelectedLanguage1] = useState('english');
  const [selectedLanguage2, setSelectedLanguage2] = useState('hindi');
  const [messages, setMessages] = useState([]);
  const [translatedAudio, setTranslatedAudio] = useState(null);
  const [instructionsShown, setInstructionsShown] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();
  const flatListRef = useRef(null);

  useEffect(() => {
    // Automatically scroll to the latest message when a new one is added
    if (flatListRef.current && messages.length > 0) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  const handleMicPress = (micNumber) => {
    if (!instructionsShown) {
      setInstructionsShown(true);  // Show instructions on the first mic press
    }

    // Handle recording for the first or second microphone
    if (micNumber === 1) {
      if (isRecording1) {
        const transcribedText = 'Hello, how are you?';
        const translatedText = 'नमस्ते, आप कैसे हैं?';

        setMessages((prev) => [
          ...prev,
          { mic: 1, transcript: transcribedText, translation: translatedText, audio: 'dummy/audio/path1.mp3' },
        ]);
      }
      setIsRecording1(!isRecording1);  // Toggle recording state for mic 1
    } else {
      if (isRecording2) {
        const transcribedText = 'नमस्ते, क्या हाल है?';
        const translatedText = 'Hello, how’s it going?';

        setMessages((prev) => [
          ...prev,
          { mic: 2, transcript: transcribedText, translation: translatedText, audio: 'dummy/audio/path2.mp3' },
        ]);
      }
      setIsRecording2(!isRecording2);  // Toggle recording state for mic 2
    }
  };

  const handleSpeakerPress = (audioPath) => {
    console.log(`Play translated audio from: ${audioPath}`);
    setTranslatedAudio(audioPath);  // Set the audio to be played when the speaker is pressed
  };

  const clearChat = () => {
    Alert.alert('Clear Chat', 'Are you sure you want to clear the current chat?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Clear',
        onPress: () => {
          setMessages([]);  // Clear all messages
          setInstructionsShown(false);  // Hide instructions after chat is cleared
        },
      },
    ]);
  };

  const handleSwapLanguages = () => {
    setSelectedLanguage1(selectedLanguage2);  // Swap selected languages
    setSelectedLanguage2(selectedLanguage1);
  };

  const renderMessage = ({ item }) => {
    const isBlueMic = item.mic === 1;

    return (
      <View
        style={[
          styles.messageBubble,
          isBlueMic ? styles.blueBubble : styles.greenBubble,
          isBlueMic ? styles.leftAlign : styles.rightAlign,
        ]}
      >
        <Text style={styles.transcriptText}>{item.transcript}</Text>
        <Text style={styles.translationText}>{item.translation}</Text>
        {item.audio && (
          <View style={styles.speakerContainer}>
            <TouchableOpacity onPress={() => handleSpeakerPress(item.audio)}>
              <Image
                source={require('../../assets/speaker-icon.png')}
                style={styles.speakerIcon}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../../assets/back.png')} style={styles.topIcon} />
        </TouchableOpacity>

        <Text style={styles.title}>Conversation</Text>

        {messages.length > 0 ? (
          <TouchableOpacity onPress={clearChat}>
            <Image source={require('../../assets/delete.png')} style={styles.topIcon} />
          </TouchableOpacity>
        ) : (
          <View style={styles.topIconPlaceholder} />
        )}
      </View>

      <View style={styles.mainContainer}>
        {route.params?.screenType !== 'chat' &&
          !instructionsShown &&
          !isRecording1 &&
          !isRecording2 &&
          messages.length === 0 && (
            <>
              <Image
                source={require('../../assets/conversation.png')}
                style={styles.illustration}
              />
              <Text style={styles.instruction}>
                Tap the microphone to speak, then tap again to stop and receive translation.
              </Text>
            </>
          )}

        <View style={{ flex: 1, paddingBottom: 230 }}>
          {(instructionsShown || isRecording1 || isRecording2 || messages.length > 0) && (
            <View style={styles.chatContainer}>
              <FlatList
                ref={flatListRef}
                data={messages}
                renderItem={renderMessage}
                keyExtractor={(_, index) => index.toString()}
                contentContainerStyle={{ paddingBottom: 180 }}
                showsVerticalScrollIndicator={false}
                onContentSizeChange={() =>
                  flatListRef.current?.scrollToEnd({ animated: true })
                }
                onLayout={() => flatListRef.current?.scrollToEnd({ animated: true })}
              />
            </View>
          )}
        </View>

        <View style={styles.bottomControls}>
          <View style={styles.languageSelectorsContainer}>
            <View style={styles.languageSelectorBox}>
              <RNPickerSelect
                onValueChange={(value) => setSelectedLanguage1(value)}
                value={selectedLanguage1}
                items={[
                  { label: 'English', value: 'english' },
                  { label: 'Hindi', value: 'hindi' },
                  { label: 'Mandarin', value: 'mandarin' },
                ]}
                style={pickerSelectStyles}
              />
            </View>

            <TouchableOpacity onPress={handleSwapLanguages}>
              <Image source={require('../../assets/switch-icon.png')} style={styles.icon} />
            </TouchableOpacity>

            <View style={styles.languageSelectorBox}>
              <RNPickerSelect
                onValueChange={(value) => setSelectedLanguage2(value)}
                value={selectedLanguage2}
                items={[
                  { label: 'Hindi', value: 'hindi' },
                  { label: 'Mandarin', value: 'mandarin' },
                  { label: 'English', value: 'english' },
                ]}
                style={pickerSelectStyles}
              />
            </View>
          </View>

          <View style={styles.microphoneRow}>
            <TouchableOpacity
              style={[
                styles.microphoneButton,
                { backgroundColor: isRecording1 ? 'red' : '#007bff' },
              ]}
              onPress={() => handleMicPress(1)}
            >
              <Image
                source={
                  isRecording1
                    ? require('../../assets/microphone-red.png')
                    : require('../../assets/microphone-blue.png')
                }
                style={styles.microphoneIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.microphoneButton,
                { backgroundColor: isRecording2 ? 'red' : 'green' },
              ]}
              onPress={() => handleMicPress(2)}
            >
              <Image
                source={
                  isRecording2
                    ? require('../../assets/microphone-red.png')
                    : require('../../assets/microphone-green.png')
                }
                style={styles.microphoneIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: 'black',
    backgroundColor: '#d3d3d3',
    textAlign: 'center',
    marginTop: -9,
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: 'black',
    backgroundColor: '#d3d3d3',
    textAlign: 'center',
    marginTop: -9,
  },
};

export default ConversationPage;
