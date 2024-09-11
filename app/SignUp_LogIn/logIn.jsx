import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet, Image, KeyboardAvoidingView, ScrollView, Platform, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // Importa la configuración de Firebase

const logIn = ({ 
  appName= "Untopico", 
  logoSource = require('../../images/logo.png'), 
  backgroundSource = require('../../images/backgroundImage.jpg'),
  title2 = "Iniciar Sesión",
  question1 = "Aún no tienes cuenta?",
  answer1 = "Crea tu cuenta",
  googlesource = require('../../images/Google.png'),
  forgotText = "¿Olvidaste tu contraseña?",

}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        router.push('../Index/Home'); // Navega a la pantalla de inicio
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert('Error', errorMessage); // Muestra un mensaje de error
      });
  };

  const handleLink = () => {
    router.push('/SignUp_LogIn/signUp'); // Navega a la pantalla de registro
  };

  const handleForgotLink = () => {
    router.push('/SignUp_LogIn/forgotPassword');

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
              placeholder="Email"
              placeholderTextColor='#707070'
              maxLength={24}
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor='#707070'
              maxLength={16}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              value={password}
            />

            <View style={styles.ViewForgotPassword}>
              <Text style={styles.forgotPasswordText} onPress={handleForgotLink}>
                {forgotText}
              </Text>
            </View>


            <View style={styles.ViewButton}>
              <TouchableOpacity style={styles.button} onPress={handleLogIn}>
                <Text style={styles.buttonText}>Iniciar Sesión</Text>
              </TouchableOpacity>
            </View>

            <View>
              <Text style={styles.text1}>
                {question1}{' '}
                <Text style={styles.linkText} onPress={handleLink}>
                  {answer1}
                </Text>
              </Text>
            </View>

            <View style={styles.dividerContainer}>
              <View style={styles.line} />
              <Text style={styles.orText}>o</Text>
              <View style={styles.line} />
            </View>

            <View style={styles.ViewButton}>
              <TouchableOpacity style={styles.button_Google}>
                <Image style={styles.Google_img} source={googlesource} />
                <Text style={styles.buttonText_Google}>Continuar con Google</Text>
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
    marginTop: 30,
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
  line: {
    flex: 1, // Hace que la línea se expanda para ocupar el espacio disponible
    height: 1, // Grosor de la línea
    backgroundColor: '#ccc', // Color de la línea
  },
  orText: {
    marginHorizontal: 10, // Espacio horizontal alrededor del texto
    fontSize: 14, 
    color: '#999', 
  },
  button_Google: {
    flexDirection: 'row', // Para colocar elementos en una fila
    alignItems: 'center', // Centra los elementos verticalmente
    justifyContent: 'center', // Centra el contenido horizontalmente dentro del botón
    padding: 10,
    width: '100%',
    height: 60,
    backgroundColor: '#EFEFEF',
    borderRadius: 5,
  },
  Google_img: {
    width: 20,
    height: 20,
    marginRight: 10, // Espacio entre la imagen y el texto
  },
  buttonText_Google: {
    textAlign: 'center',
    color: '#000',
    fontSize: 16,
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
  ViewForgotPassword: {
    alignItems: 'center',
  },
  forgotPasswordText: {
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  ViewButton: {
    alignItems: 'center',
    width: '100%'
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
});

export default logIn;