import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../../assets/styles/Home1PageStyles';

const Home1Page = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../assets/images/worldMap.png')} style={styles.map} />

      <Image source={require('../../assets/images/flag_australia.png')} style={styles.flagTopLeft} resizeMode="cover" />
      <Image source={require('../../assets/images/flag_india.png')} style={styles.flagTopRight} resizeMode="cover" />
      <Image source={require('../../assets/images/flag_france.png')} style={styles.flagRightMid} resizeMode="cover" />
      <Image source={require('../../assets/images/flag_china.png')} style={styles.flagLeftMid} resizeMode="cover" />
      <Image source={require('../../assets/images/flag_germany.png')} style={styles.flagCenterTop} resizeMode="cover" />

      <View style={styles.characterContainer}>
        <View style={styles.characterWithBubble}>
          <Image source={require('../../assets/images/character_girl.png')} style={styles.character} />
          <Text style={styles.bubble}>Привіт!</Text>
        </View>
        <View style={styles.characterWithBubble}>
          <Image source={require('../../assets/images/character_boy.png')} style={styles.character} />
          <Text style={styles.bubble}>Hello!</Text>
        </View>
      </View>

      <View style={styles.holaContainer}>
        <Image source={require('../../assets/images/emoji_hola.png')} style={styles.emoji} />
        <Text style={styles.holaText}>Hola!</Text>
      </View> 

      <Text style={styles.heading}>SPEAK, UNDERSTAND, CONNECT</Text>

      <View style={styles.buttonGrid}>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Voice</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Object</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Conversation</Text></TouchableOpacity>
        {/* <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Text</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Camera</Text></TouchableOpacity> */}
      </View>
    </ScrollView>
  );
};

export default Home1Page;
