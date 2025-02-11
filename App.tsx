import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";


import DicasScreen from "./screens/DicasScreen";
import ExerciciosScreen from "./screens/ExerciciosScreen";
import AlimentacaoScreen from "./screens/AlimentacaoScreen";
import DesafiosScreen from "./screens/DesafiosScreen";

// Tipo para a navegação
type RootStackParamList = {
  Home: undefined;
  Dicas: undefined;
  Exercicios: undefined;
  Alimentacao: undefined;
  Desafios: undefined;
};

// Navegação por abas
const Tab = createBottomTabNavigator<RootStackParamList>();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bem-vindo ao Saúde na Mão! 💪</Text>
      <Text style={styles.motivationText}>
        "A sua saúde está em suas mãos! Pequenas mudanças diárias fazem grandes
        diferenças. 🚀 Cuide-se, mova-se, descanse e alimente-se bem!"
      </Text>
    </View>
  );
}



export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: string = "";

            if (route.name === "Home") iconName = "home";
            else if (route.name === "Dicas") iconName = "book";
            else if (route.name === "Exercicios") iconName = "fitness";
            else if (route.name === "Alimentacao") iconName = "nutrition";
            else if (route.name === "Desafios") iconName = "trophy";

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#28a745",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: "Início" }} />
        <Tab.Screen name="Dicas" component={DicasScreen} options={{ title: "Dicas" }} />
        <Tab.Screen name="Exercicios" component={ExerciciosScreen} options={{ title: "Exercícios" }} />
        <Tab.Screen name="Alimentacao" component={AlimentacaoScreen} options={{ title: "Alimentação" }} />
        <Tab.Screen name="Desafios" component={DesafiosScreen} options={{ title: "Desafios" }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f8ff",
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#28a745",
    marginBottom: 10,
    textAlign: "center",
  },
  motivationText: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    fontStyle: "italic",
  },
});


