import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const categorias = [
  {
    id: "1",
    nome: "🥩 Proteínas",
    descricao: "Essenciais para a construção muscular e recuperação.",
    alimentos: ["Frango", "Peixe", "Ovos", "Tofu", "Lentilha"],
  },
  {
    id: "2",
    nome: "🍞 Carboidratos",
    descricao: "Fornecem energia para o corpo e ajudam no desempenho físico.",
    alimentos: ["Arroz integral", "Batata doce", "Aveia", "Quinoa", "Banana"],
  },
  {
    id: "3",
    nome: "🥑 Gorduras Boas",
    descricao: "Importantes para a saúde do coração e equilíbrio hormonal.",
    alimentos: ["Abacate", "Azeite de oliva", "Castanhas", "Amêndoas", "Salmão"],
  },
];

export default function AlimentacaoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍽️ Alimentação Saudável</Text>
      <FlatList
        data={categorias}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.categoryTitle}>{item.nome}</Text>
            <Text style={styles.description}>{item.descricao}</Text>
            <Text style={styles.foods}>Exemplos: {item.alimentos.join(", ")}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f8ff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#28a745",
    textAlign: "center",
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  foods: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#444",
  },
});
  