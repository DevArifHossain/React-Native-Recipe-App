import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Button,
  ButtonGroup,
  Card,
  IndexPath,
  Input,
  Layout,
  Modal,
  Select,
  SelectItem,
  Text,
} from "@ui-kitten/components";
import DropDownPicker from "react-native-dropdown-picker";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../store/category";
import { addExpense } from "../store/expense";

export const CreateExpenseModal = () => {
  const categories = useSelector(selectCategory);
  const dispatch = useDispatch();
  const [visible, setVisible] = React.useState(false);
  const [expense, setExpense] = React.useState(0);
  const [selectedCategory, setSelectedCategory] = React.useState(
    categories[0].value
  );

  const addRecordHandler = () => {
    console.log(expense, "ex");
    console.log(selectedCategory, "cat");
    dispatch(addExpense({ expense, category: selectedCategory }));
  };

  return (
    <View style={styles.container}>
      <Button onPress={() => setVisible(true)}>Add New Expense</Button>

      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}
      >
        <Card disabled={true} style={{ minWidth: 280, minHeight: 220 }}>
          <DropDownPicker
            items={categories}
            defaultValue={selectedCategory}
            containerStyle={{ height: 40 }}
            onChangeItem={(item) => setSelectedCategory(item.value)}
          />
          <Input
            placeholder="Expense"
            label="Expense Amount"
            style={{ marginTop: 12 }}
            keyboardType="numeric"
            value={expense.toString()}
            onChangeText={(nextValue) => setExpense(Number(nextValue))}
          />
          <Layout style={styles.btnGroup}>
            <Button
              status="danger"
              size="small"
              onPress={() => setVisible(false)}
            >
              CANCEL
            </Button>
            <Button onPress={addRecordHandler} size="small">
              CREATE
            </Button>
          </Layout>
        </Card>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 192,
  },
  btnGroup: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
