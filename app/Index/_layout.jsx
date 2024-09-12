import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Importa GestureHandlerRootView

export default function TabLayout() {
  const iconSize = 30; // Tamaño global para los íconos
  const labelSize = 12; // Tamaño global para el texto

  return (
    // Envuelve con GestureHandlerRootView
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs
        initialRouteName="Home" // Define la pantalla inicial
        screenOptions={{
          tabBarActiveTintColor: 'blue',
          tabBarLabelStyle: {
            fontSize: labelSize, // Ajusta el tamaño del texto aquí
          },
        }}
      >
        {/* Pestaña de Mis Tarjetas */}
        <Tabs.Screen
          name="MisTarjetas"
          options={{
            title: 'Mis Tarjetas',
            tabBarIcon: ({ color }) => <FontAwesome size={iconSize} name="credit-card" color={color} />,
          }}
        />

        {/* Pestaña de inicio (Home) */}
        <Tabs.Screen
          name="Home"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <FontAwesome size={iconSize} name="home" color={color} />,
            headerShown: false,
          }}
        />

        {/* Pestaña de Perfil */}
        <Tabs.Screen
          name="Perfil"
          options={{
            title: 'Settings',
            tabBarIcon: ({ color }) => <FontAwesome size={iconSize} name="cog" color={color} />,
            headerShown: false,
          }}
        />

        {/* Ocultar pestañas de Retirar, Depositar y Reportes */}
        <Tabs.Screen
          name="Retirar"
          options={{ href: null }} // Oculta la pestaña de "Retirar"
        />
        <Tabs.Screen
          name="Depositar"
          options={{ href: null }} // Oculta la pestaña de "Depositar"
        />
        <Tabs.Screen
          name="Reportes"
          options={{ href: null }} // Oculta la pestaña de "Reportes"
        />
        <Tabs.Screen
          name="Transferir"
          options={{ href: null }} // Oculta la pestaña de "Reportes"
        />
      </Tabs>
    </GestureHandlerRootView>
  );
}
