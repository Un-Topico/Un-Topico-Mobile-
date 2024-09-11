import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet, Image, KeyboardAvoidingView, ScrollView, Platform, Alert } from 'react-native';

const logIn = ({ 
  appName= "Untopico", 
  logoSource = require('../../images/logo.png'), 
  backgroundSource = require('../../images/backgroundImage.jpg'),
  title2 = "Restablecer contraseña",
  forgotButton = "Enviar correo",

}) => {
  const [email, setEmail] = useState('');

  const handleSendEmail = () => {

  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <Image style={styles.BackImage} source={backgroundSource} />
          <View style={styles.overlay}></View>
          <Image style={styles.logo} source={logoSource} />
          <Text style={styles.title}>{appName}</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.title2}>{title2}</Text>

            <TextInput
              style={styles.TextInput}
              placeholder="Correo"
              placeholderTextColor='#707070'
              maxLength={100}
              onChangeText={(text) => setEmail(text)}
              value={email}
            />

            <View style={styles.ViewButton}>
              <TouchableOpacity style={styles.button} onPress={handleSendEmail}>
                <Text style={styles.buttonText}>{forgotButton}</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    position: 'relative'
  },
  BackImage: {
    position: 'absolute',
    width: '100%',
    height: '50%',
    zIndex: -1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  text1: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  title2: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10,
    color: 'black',
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 80,
  },
  inputContainer: {
    width: '90%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  TextInput: {
    width: '100%',
    height: 60,
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 5,
    borderColor: '#707070',
    borderWidth: 1,
    fontSize: 16,
  },
  dividerContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginVertical: 20, // Espacio vertical alrededor del contenedor
  },
  ViewButton: {
    alignItems: 'center',
    width: '100%'
  },
  button: {
    backgroundColor: '#4FD290',
    padding: 10,
    borderRadius: 25,
    borderWidth: 1,
    marginTop: 20,
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },

});

export default logIn;