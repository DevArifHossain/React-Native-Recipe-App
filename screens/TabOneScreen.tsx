import * as React from "react";
import { StyleSheet } from "react-native";
import { Button, Card, Icon } from "@ui-kitten/components";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { selectCount } from "../store/store";
import { CreateExpenseModal } from "../components/CreateExpenseModal";

export default function TabOneScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Button
        status="danger"
        style={{ margin: 20 }}
        onPress={() => navigation.openDrawer()}
      >
        Menu
      </Button>

      <CreateExpenseModal />
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
