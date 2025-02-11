import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated } from "react-native";

const desafios = [
  "🚶‍♂️ Caminhe 5.000 passos hoje!",
  "💪 Faça 20 flexões!",
  "🧘‍♀️ Pratique 10 minutos de alongamento.",
  "🏃 Corra por 15 minutos sem parar!",
  "🚴 Ande de bicicleta por 30 minutos."
];

export default function DesafiosScreen() {
  const [indice, setIndice] = useState(0);
  const animacao = useRef(new Animated.Value(1)).current; // Usa useRef para evitar resetar animação

  const proximoDesafio = () => {
    Animated.timing(animacao, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setIndice((indice + 1) % desafios.length);
      animacao.setValue(1); // Volta a opacidade para 1 imediatamente
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔥 Desafio do Dia</Text>

      <Animated.View style={[styles.card, { opacity: animacao }]}>
        <Text style={styles.challengeText}>{desafios[indice]}</Text>
      </Animated.View>

      <TouchableOpacity style={styles.button} onPress={proximoDesafio}>
        <Text style={styles.buttonText}>Próximo Desafio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fffbf0",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ff7f50",
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
    alignItems: "center",
    minWidth: 250,
  },
  challengeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#ff7f50",
    padding: 12,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});
