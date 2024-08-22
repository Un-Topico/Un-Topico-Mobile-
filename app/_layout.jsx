import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const DebitCardScreen = () => {
  // Datos de ejemplo de la tarjeta
  const cardData = {
    balance: '$6,000.00',
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
          {/* Saldo */}
          <Text style={[styles.balanceText, styles.positionBalance]}>{cardData.balance}</Text>

          {/* Número de la tarjeta */}
          <Text style={[styles.cardNumberText, styles.positionCardNumber]}>{cardData.cardNumber}</Text>

          {/* Nombre del propietario */}
          <Text style={[styles.cardHolderText, styles.positionCardHolder]}>{cardData.cardHolder}</Text>

          {/* CVV y Fecha de expiración */}
          <View style={styles.positionBottomRow}>
            <Text style={styles.cvvText}>{`CVV: ${cardData.cvv}`}</Text>
            <Text style={styles.expiryDateText}>{`Exp: ${cardData.expiryDate}`}</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  card: {
    width: 350, // Ajusta el ancho de la tarjeta
    height: 220, // Ajusta la altura de la tarjeta
    borderRadius: 15, // Ajusta el radio del borde si es necesario
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
    position: 'relative', // Necesario para el posicionamiento absoluto de los elementos hijos
  },
  cardImage: {
    flex: 1,
    resizeMode: 'cover', // Ajusta la imagen para cubrir el contenedor
    justifyContent: 'center',
    padding: 20,
  },
  cardImageStyle: {
    borderRadius: 15, // Debe coincidir con el borderRadius del contenedor
  },
  balanceText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    position: 'absolute',
  },
  cardNumberText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    position: 'absolute',
  },
  cardHolderText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    position: 'absolute',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
  },
  positionBalance: {
    top: 20, // Ajusta la posición vertical del saldo
    right: 20, // Ajusta la posición horizontal del saldo
  },
  positionCardNumber: {
    bottom: 45, // Ajusta la posición vertical del número de tarjeta
    left: 17, // Ajusta la posición horizontal del número de tarjeta
  },
  positionCardHolder: {
    bottom: 20, // Ajusta la posición vertical del nombre del propietario
    left: 17, // Ajusta la posición horizontal del nombre del propietario
  },
  positionBottomRow: {
    bottom: -60, // Ajusta la posición vertical de CVV y fecha de expiración
    left: 230, // Ajusta la posición horizontal de CVV y fecha de expiración
  },
  cvvText: {
    color: 'white',
    fontSize: 16,
  },
  expiryDateText: {
    color: 'white',
    fontSize: 16,
  },
});

export default DebitCardScreen;
