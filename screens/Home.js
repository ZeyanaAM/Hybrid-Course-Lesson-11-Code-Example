import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function Home() {
  const { setIsLoggedIn, signOut } = useContext(AuthContext);

  const submit = () => {
    // setIsLoggedIn(false);
    signOut();
  };

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Sign Out" onPress={submit} />
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
