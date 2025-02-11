import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const exercicios = [
  { id: "1", nome: "Flexões", descricao: "Fortalece peito, ombros e tríceps. Faça 3 séries de 15 repetições." },
  { id: "2", nome: "Agachamentos", descricao: "Trabalha pernas e glúteos. Faça 3 séries de 20 repetições." },
  { id: "3", nome: "Prancha", descricao: "Fortalece o core. Mantenha a posição por 30 segundos a 1 minuto." },
  { id: "4", nome: "Abdominais", descricao: "Trabalha a musculatura do abdômen. Faça 3 séries de 20 repetições." },
  { id: "5", nome: "Corrida no lugar", descricao: "Melhora o condicionamento. Corra por 1 minuto sem parar." },
];

export default function ExerciciosScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercícios</Text>
      <FlatList
        data={exercicios}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.descricao}>{item.descricao}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
  },
  descricao: {
    fontSize: 14,
    marginTop: 5,
  },
});
