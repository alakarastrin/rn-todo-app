import React, { useState, useContext } from 'react';
import { StyleSheet, View, Picker, Button } from 'react-native';
import { Navbar } from './components/Navbar';
import { THEME } from './theme';
import { MainScreen } from './screens/MainScreen';
import { TodoScreen } from './screens/TodoScreen';
import { TodoContext } from './context/todo/todoContext';
import { ScreenContext } from './context/screen/screenContext';

export const MainLayout = () => {
  // const [isPickerDisabled, setIsPickerDisabled] = useState(true);
  // const [selectedColor, setSelectedColor] = useState('3');
  const { todoId } = useContext(ScreenContext);

  // const handleSelectColor = (selectedValue, index) => {
  //   setSelectedColor(selectedValue);
  // };

  // const handlePress = () => setIsPickerDisabled(!isPickerDisabled);

  // const buttonTitle = isPickerDisabled ? 'Activate' : 'Disable';
  // const buttonColor = isPickerDisabled ? 'green' : 'red';

  return (
    <View style={styles.wrapper}>
      <Navbar title="Todo App" />
      {/* <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedColor}
          onValueChange={handleSelectColor}
          style={styles.picker}
          mode="dropdown"
          enabled={!isPickerDisabled}
        >
          <Picker.Item label="black" value="3" />
          <Picker.Item label="white" value="4" />
          <Picker.Item label="red" value="21" />
          <Picker.Item label="orange" value="hello" />
          <Picker.Item label="gold" value="shrimp" />
        </Picker>
        <Button title={buttonTitle} color={buttonColor} onPress={handlePress} />
      </View> */}
      <View style={styles.container}>
        {todoId ? <TodoScreen /> : <MainScreen />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 20,
    flex: 1,
  },
  picker: {
    height: 50,
    width: 200,
  },

  pickerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
  },
});
