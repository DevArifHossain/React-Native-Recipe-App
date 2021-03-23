import { Button, Card } from "@ui-kitten/components";
import * as React from "react";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { selectExpense } from "../store/expense";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function TabTwoScreen({ navigation }: any) {
  const expense = useSelector(selectExpense);

  return (
    <View style={styles.container}>
      <Button
        status="danger"
        style={{ margin: 20 }}
        onPress={() => navigation.openDrawer()}
      >
        Menu
      </Button>
      {expense.map((ex: any) => (
        <Card style={styles.card} key={ex.category}>
          <Text>Category: {ex.category}</Text>
          <Text>Amount: {ex.expense}</Text>
        </Card>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  card: {
    margin: 2,
    width: 300,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
