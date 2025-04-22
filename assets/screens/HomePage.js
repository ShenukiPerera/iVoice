// File: HomePage.jsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Corrected import
import appStyles from '../styles/HomePageStyles'; // Import the styles

const HomePage = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [inputLanguage, setInputLanguage] = useState('en');
  const [outputLanguage, setOutputLanguage] = useState('es');
  const [autoDetect, setAutoDetect] = useState(false);

  const handleLanguageToggle = () => {
    setAutoDetect(!autoDetect);
  };

  const handleTranslate = () => {
    alert(`Translating "${inputText}" from ${autoDetect ? '(auto-detected)' : inputLanguage} to ${outputLanguage}...`);
    setOutputText(`Translation of "${inputText}" will appear here.`);
  };

  const handleVoiceInput = () => {
    alert('Voice input functionality will be implemented here.');
  };

  const handleReadOutput = () => {
    if (outputText) {
      alert(`Reading aloud: "${outputText}"`);
    } else {
      alert('No text to read aloud.');
    }
  };

  return (
    <View style={appStyles.container}>
      {/* Auto Detect Section */}
      <View style={appStyles.autoDetectSection}>
        <Text style={appStyles.autoDetectText}>Auto Detect Input Language</Text>
        <Switch
          value={autoDetect}
          onValueChange={handleLanguageToggle}
        />
      </View>

      {/* Language Selection Section */}
      <View style={appStyles.languageSection}>
        <View style={appStyles.languageSelector}>
          <Text style={appStyles.sectionSubText}>Input Language</Text>
          <Picker
            selectedValue={inputLanguage}
            style={appStyles.picker}
            enabled={!autoDetect}
            onValueChange={(itemValue) => setInputLanguage(itemValue)}
          >
            <Picker.Item label="English" value="en" />
            <Picker.Item label="Hindi" value="hi" />
            <Picker.Item label="Mandarin" value="mn" />
            {/* Add more languages as needed */}
          </Picker>
        </View>

        <View style={[appStyles.languageSelector, appStyles.languageSelectorLast]}>
          <Text style={appStyles.sectionSubText}>Output Language</Text>
          <Picker
            selectedValue={outputLanguage}
            style={appStyles.picker}
            onValueChange={(itemValue) => setOutputLanguage(itemValue)}
          >
            <Picker.Item label="English" value="en" />
            <Picker.Item label="Hindi" value="hi" />
            <Picker.Item label="Mandarin" value="mn" />
            {/* Add more languages as needed */}
          </Picker>
        </View>
      </View>

      {/* Input Section */}
      <View style={appStyles.inputSection}>
        <Text style={appStyles.sectionTitle}>Input</Text>
        <TextInput
          style={appStyles.textArea}
          placeholder="Enter text or speak..."
          value={inputText}
          onChangeText={setInputText}
          multiline
          textAlignVertical="top"
          editable={!autoDetect}
        />
        <TouchableOpacity style={appStyles.voiceButton} onPress={handleVoiceInput}>
          <Text style={appStyles.voiceButtonText}>Speak</Text>
        </TouchableOpacity>
      </View>

      

      {/* Output Section */}
      <View style={appStyles.outputSection}>
        <Text style={appStyles.sectionTitle}>Output</Text>
        <View style={appStyles.outputTextAreaContainer}>
          <Text style={appStyles.outputTextArea}>{outputText}</Text>
        </View>
        <TouchableOpacity style={appStyles.readButton} onPress={handleReadOutput}>
          <Text style={appStyles.readButtonText}>Read Aloud</Text>
        </TouchableOpacity>
      </View>

      {/* Translate Button */}
      <TouchableOpacity style={appStyles.translateButton} onPress={handleTranslate}>
        <Text style={appStyles.translateButtonText}>Translate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;