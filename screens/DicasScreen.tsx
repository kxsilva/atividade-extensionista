import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated } from "react-native";

const dicas = [
  "🥗 Mantenha uma alimentação equilibrada com proteínas, carboidratos e gorduras boas.",
  "💧 Beba pelo menos 2 litros de água por dia para manter-se hidratado.",
  "🏃‍♂️ Pratique atividades físicas regularmente para fortalecer seu corpo e mente.",
  "😴 Durma entre 7 a 9 horas por noite para ter mais disposição e recuperação muscular.",
  "🚶‍♀️ Faça pausas ao longo do dia para se movimentar e evitar o sedentarismo.",
];

export default function DicasScreen() {
  const [indice, setIndice] = useState(0);
  const animacao = useRef(new Animated.Value(1)).current; // Usa useRef para manter a animação estável

  const proximaDica = () => {
    Animated.timing(animacao, {
      toValue: 0, // Some antes de trocar
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setIndice((indice + 1) % dicas.length);
      animacao.setValue(1); // Garante que a opacidade volte ao normal imediatamente
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>💡 Dica de Saúde</Text>

      <Animated.View style={[styles.card, { opacity: animacao }]}>
        <Text style={styles.dicaText}>{dicas[indice]}</Text>
      </Animated.View>

      <TouchableOpacity style={styles.button} onPress={proximaDica}>
        <Text style={styles.buttonText}>Próxima Dica</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#e6f7ff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#007acc",
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
  dicaText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007acc",
    padding: 12,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});
