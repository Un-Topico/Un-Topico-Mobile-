import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';


// Obtiene las dimensiones de la pantalla
const { width } = Dimensions.get('window');

const index = () => {
  const appName = "Untopico";
  const logoSource = require('../../images/logo.png');

  // TARJETA  
  const cardData = {
    balance: '$5,000.00',
    cardNumber: '1234 5678 9012 3456',
    cardHolder: 'John Doe',
    cvv: '123',
    expiryDate: '12/26',
  };

  const router = useRouter();

  function handleRetirar() {
    router.push('/Index/Retirar'); // Navega a la pantalla de retiros
  }
  function handleDepositar() {
    router.push('/Index/Depositar'); // Navega a la pantalla de retiros
  }
  function handleReportes() {
    router.push('/Index/Reportes'); // Navega a la pantalla de retiros
  }

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Image style={styles.logo} source={logoSource} />
        <Text style={styles.headtitle}>{appName}</Text>
      </View>

      {/* Tarjeta de débito */}
      <View style={styles.card}>
        <ImageBackground
          source={require('../../images/tarjeta.png')}
          style={styles.cardImage}
          imageStyle={styles.cardImageStyle}
        />
        <View style={styles.cardContent}>
          {/* Saldo */}
          <View style={styles.balanceTextContainer}>
            <Text style={styles.balanceText}>{cardData.balance}</Text>
          </View>

          <View style={styles.cardInfoContainer}>
            {/* Número de la tarjeta y Nombre del propietario*/}
            <View style={styles.view_cardNumber_Holder}>
              <Text style={styles.text_cardNumber_Holder}>{cardData.cardNumber}</Text>
              <Text style={styles.text_cardNumber_Holder}>{cardData.cardHolder}</Text>
            </View>

            {/* CVV y Fecha de expiración */}
            <View style={styles.view_cvv_expire}>
              <Text style={styles.text_cvv_expire}>{`CVV: ${cardData.cvv}`}</Text>
              <Text style={styles.text_cvv_expire}>{`Exp: ${cardData.expiryDate}`}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.Buttoncontainer}>
        {/* Botón de Retirar */}
        <TouchableOpacity style={styles.button} onPress={handleRetirar}>
          <Icon name="rocket" size={40} color="#900" />
          <Text style={styles.buttonText} >Retirar</Text>
        </TouchableOpacity>

        {/* Botón de Reportes */}
        <TouchableOpacity style={styles.button} onPress={handleReportes}>
          <Icon name="file-text-o" size={40} color="#900" />
          <Text style={styles.buttonText} >Reportes</Text>
        </TouchableOpacity>

        {/* Botón de Depositar */}
        <TouchableOpacity style={styles.button} onPress={handleDepositar}>
          <Icon name="rocket" size={40} color="#900" />
          <Text style={styles.buttonText} >Depositar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // General
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },

  // Estilo de la tarjeta
  card: {
    width: width * 0.9, // Usa un porcentaje del ancho de la pantalla
    height: width * 0.6, // Ajusta la altura en proporción al ancho
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
    //backgroundColor: "red",
    marginTop: 120,
  },
  cardContent: {
    // backgroundColor:'yellow',
    position: 'absolute'
  },
  cardImage: {
    flex: 1,
    justifyContent: 'center',
  },
  cardImageStyle: {
    borderRadius: 15,
    resizeMode: 'contain', // Ajusta la imagen para que se vea completa sin recorte
  },
  cardInfoContainer: {
    flex: 1,
    width: width * 0.9, // Usa un porcentaje del ancho de la pantalla
    // height: width * 0.6, // Ajusta la altura en proporción al ancho
    // backgroundColor: 'purple',
    //marginTop:100,
    flexDirection: 'row',
    height: width * 0.37,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    // backgroundColor:'pink'
  },

  // Estilo de los elementos de la tarjeta
  balanceTextContainer: {
    alignSelf: 'flex-end',
    marginRight: '7%',
    height: width * 0.15,
    // backgroundColor: 'purple',
    justifyContent: 'flex-end'

  },
  balanceText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  view_cardNumber_Holder: {
  },
  text_cardNumber_Holder: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  view_cvv_expire: {

  },
  text_cvv_expire: {
    color: 'white',
    fontSize: 16,
  },

  Buttoncontainer: {
    flexDirection: 'row', // Alinea los botones horizontalmente
    flexWrap: 'wrap', // Permite que los botones salten a la siguiente línea
    justifyContent: 'space-between', // Espacio entre los botones
    alignItems: 'center', // Alinea los botones en el centro verticalmente
    marginTop: 20,
    paddingHorizontal: 10, // Espacio horizontal interno
    width: width * 0.9, // Usa un porcentaje del ancho de la pantalla
    height: width * 0.6, // Ajusta la altura en proporción al ancho
    //backgroundColor: 'red',
  },
  button: {
    width: 150,
    height: 150,
    backgroundColor: 'white', // Color de fondo del botón
    alignItems: 'center', // Centra el texto horizontalmente
    justifyContent: 'center', // Centra el texto verticalmente
    borderRadius: 10, // Bordes redondeados
    marginBottom: 20, // Espacio inferior entre filas de botones
    //borderWidth: 4,
    //borderColor: '#4FD290',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'black', // Color del texto
    textAlign: 'center',
    marginTop: 25,
  },

  head: {
    position: 'absolute', // Para colocar el contenedor en la parte superior de la pantalla
    top: 25, // Establece la posición en la parte superior
    width: '100%', // Para asegurarte de que se alinee horizontalmente
    alignItems: 'center', // Centra los elementos horizontalmente
    justifyContent: 'center', // Centra los elementos verticalmente dentro del contenedor
    paddingTop: 35, // Espacio adicional en la parte superior
    paddingBottom: 10, // Espacio adicional en la parte inferior para separar del contenido principal
    flexDirection: 'row', // Coloca los elementos en línea horizontal
  },
  logo: {
    width: 25, // Ancho pequeño para la imagen
    height: 25, // Altura pequeña para la imagen
    marginBottom: 5, // Espacio entre la imagen y el texto
    marginRight: 10,
  },
  headtitle: {
    fontSize: 18, // Tamaño del texto
    fontWeight: 'bold', // Texto en negrita
    color: '#000', // Color del texto
  },
});

export default index;