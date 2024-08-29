import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';

// Obtiene las dimensiones de la pantalla
const { width } = Dimensions.get('window');

const DebitCardScreen = () => {
  // Datos de ejemplo de la tarjeta
  const cardData = {
    balance: '$5,000.00',
    cardNumber: '1234 5678 9012 3456',
    cardHolder: 'John Doe',
    cvv: '123',
    expiryDate: '12/26',
  };

  return (
    <View style={styles.container}>
      {/* Tarjeta de débito */}
      <View style={styles.card}>
        <ImageBackground
          source={require('../images/tarjeta.png')}
          style={styles.cardImage}
          imageStyle={styles.cardImageStyle}
        > 
        </ImageBackground>

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
    </View>
  );
};

const styles = StyleSheet.create({
  // General
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
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
    backgroundColor: "red",
  },
  cardContent:{
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
    flex:1,
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
  balanceTextContainer:{
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
  // view_cardNumber_Holder: {
  //   marginTop: '25%', // Mueve el View hacia abajo usando un porcentaje
  //   marginLeft: '7%'
  // },
  text_cardNumber_Holder: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  // view_cvv_expire: {
  //   position: 'absolute', // Posicionamiento absoluto
  //   marginTop: '45%',
  //   marginLeft: '%',
  // },
  text_cvv_expire: {
    color: 'white',
    fontSize: 16,
  },
});

export default DebitCardScreen;
