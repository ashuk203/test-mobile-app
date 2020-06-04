import Dropdown from "./react-native-material-dropdown";
import { View, Picker, StyleSheet } from "react-native";

  return (
    <View style={styles.container}>
      <Dropdown
        theme={theme}
        data={props.options ? props.options : options ?? []}
        itemCount={4}
        searchContainerStyle={styles.pickerContainer}
        pickerStyle={styles.picker}
        inputTextStyle={styles.inputText}
        onChangeText={
          props.onValueChange ? props.onValueChange : handleValueChange
        }
        value={
          props.selectedValue ? props.selectedValue : selectedValue ?? null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
    margin: 10
  },
  label: {
    marginBottom: 5
  },
  pickerContainer: {
    borderWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 10
  },
  picker: {
    marginTop: 1
  },
  inputText: {
    flex: 1,
    paddingLeft: 5,
    fontWeight: "bold",
    fontSize: 18
  }
});

export default DropdownComponent;
