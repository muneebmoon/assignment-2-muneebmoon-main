import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function SignupScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+92-3\d{2}-\d{7}$/;
    if (!username.match(/^[A-Za-z]+$/)) return alert('Username must contain alphabets only.');
    if (!emailRegex.test(email)) return alert('Invalid email format.');
    if (password.length < 8) return alert('Password must be at least 8 characters.');
    if (!phoneRegex.test(phone)) return alert('Phone number must match +92-3xx-xxxxxxx format.');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text>Signup</Text>
      <TextInput placeholder="Username" value={username} onChangeText={setUsername} style={styles.input} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} keyboardType="email-address" />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} style={styles.input} secureTextEntry />
      <TextInput placeholder="Phone" value={phone} onChangeText={setPhone} style={styles.input} keyboardType="phone-pad" />
      <Button title="Signup" onPress={validateForm} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { borderWidth: 1, padding: 10, marginVertical: 10 },
});
