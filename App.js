import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [number, setNumber] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.resetButton} onPress={() => setNumber(null)}>
          <Text>RESET</Text>
        </Pressable>
        <View style={styles.buttons}>
          <Pressable
            style={styles.button}
            onPress={() => setNumber(number !== null ? number + 1 : 1)}>
            <Text style={styles.buttonText}>Increase</Text>
          </Pressable>
          <View style={{width: 20}} />
          <Pressable
            style={styles.button}
            onPress={() => setNumber(number !== null ? number - 1 : -1)}>
            <Text style={styles.buttonText}>Decrease</Text>
          </Pressable>
        </View>
      </View>
      <Text style={styles.number}>
        {number !== null ? number : 'Button is not clicked yet'}
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    width: '100%',
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'purple',
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  resetButton: {
    backgroundColor: 'orange',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
  number: {
    fontSize: 30,
    marginVertical: 40,
  },
});
