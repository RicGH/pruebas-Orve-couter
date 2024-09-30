// components/Counter.tsx
import React, {useState} from 'react';
import {View, Text,  StyleSheet, TouchableOpacity} from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  const suma = () => {
    setCount(count + 1);
  };

  const resta = () => {
    setCount(count - 1);
    if (count <= 0) {
      setCount(0);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contador: {count}</Text>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} onPress={() => suma()}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => resta()}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        {/* <Button title="+" style={styles.button} onPress={() => setCount(count + 1)} />
    <Button title="-" onPress={() => setCount(count + 1)} /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
    text: {
      color: '#000',
      fontSize: 36,
    },
    containerButton: {
      marginVertical: 40,
      flexDirection: 'row',
      gap: 10
    },
    button: {
      width: 50,
      height: 50,
      borderRadius: 40,
      backgroundColor: '#4CAF50',
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.3,
      shadowRadius: 3,
    },
    buttonText: {
      fontSize: 26,
      color: '#fff',
      fontWeight: 'bold'
    }
});

export default Counter;
