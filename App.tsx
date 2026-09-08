import { ScrollView, StyleSheet, Text, View } from "react-native";

// Nome do usuário usado na saudação
const userName = "Douglas";

// Lista de dados do catálogo: cada objeto vira um card na tela
const dataList = [
  { name: "Fiat Uno 1.0", price: 24900, category: "Hatch", onSale: true },
  { name: "Toyota Corolla XEi", price: 132500, category: "Sedan", onSale: false },
  { name: "Jeep Compass Longitude", price: 158900, category: "SUV", onSale: true },
  { name: "Honda Civic Touring", price: 179000, category: "Sedan", onSale: false },
];

export default function App() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Saudação: o valor da variável é interpolado dentro do Text */}
      <Text style={styles.greeting}>Olá, {userName}!</Text>
      <Text style={styles.subtitle}>Confira os veículos disponíveis hoje</Text>

      {/* Loop de renderização: o .map() transforma cada objeto em um componente */}
      {dataList.map((item, index) => (
        // O índice do map é usado como key
        <View key={index} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.name}>{item.name}</Text>

            {/* O badge só é renderizado quando onSale é true */}
            {item.onSale && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>OFERTA</Text>
              </View>
            )}
          </View>

          <Text style={styles.category}>{item.category}</Text>

          {/* Ternário: verde quando em oferta, cinza quando não está */}
          <Text
            style={[styles.price, { color: item.onSale ? "#4ADE80" : "#9CA3AF" }]}
          >
            R$ {item.price.toFixed(2).replace(".", ",")}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
  },
  content: {
    padding: 20,
    paddingTop: 60,
  },
  greeting: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#F8FAFC",
  },
  subtitle: {
    fontSize: 14,
    color: "#94A3B8",
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#1E293B",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F8FAFC",
    flexShrink: 1,
  },
  badge: {
    backgroundColor: "#4ADE80",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: 8,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#0F172A",
  },
  category: {
    fontSize: 13,
    color: "#94A3B8",
    marginTop: 4,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 12,
  },
});