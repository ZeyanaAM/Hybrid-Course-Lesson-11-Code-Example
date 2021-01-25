import React from 'react';
import { useState, useContext } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function LogIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setIsLoggedIn, logIn } = useContext(AuthContext);

  const submit = () => {
    // navigation.navigate('Home');
    // setIsLoggedIn(true);
    console.log('submitting log in');
    logIn(email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 24, marginBottom: 10 }}>
        Log In
      </Text>
      <View style={{ width: '50%' }}>
        <Text style={{ fontWeight: '600', fontSize: 16 }}>Email</Text>
        <TextInput
          placeholder="Enter email"
          value={email}
          onChangeText={setEmail}
          style={{
            backgroundColor: 'lightgrey',
            padding: 10,
            borderRadius: 5,
            marginBottom: 10,
          }}
        />
        <Text style={{ fontWeight: '600', fontSize: 16 }}>Password</Text>
        <TextInput
          placeholder="Enter password"
          value={password}
          onChangeText={setPassword}
          style={{ backgroundColor: 'lightgrey', padding: 10, borderRadius: 5 }}
        />
        <Button title="Submit" onPress={submit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
