import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native';

export default function ChatInput() {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    console.log(message);
    setMessage('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        placeholder="Escribe aquí lo que deseas"
        backgroundColor='gray'
      />
      <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
        <Image source={require('../assets/images/send.png')} style={styles.sendIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    padding: 10,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  sendButton: {
    padding: 10,
  },
  sendIcon: {
    width: 24,
    height: 24,
  },
});
