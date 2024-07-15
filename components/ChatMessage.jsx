import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ChatMessage({ text, sentByUser }) {
  return (
    <View style={[styles.messageContainer, sentByUser ? styles.sentMessage : styles.receivedMessage]}>
      <Text style={styles.messageText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    maxWidth: '80%',
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#007bff',
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#e5e5ea',
  },
  messageText: {
    fontSize: 16,
    color: '#fff',
  },
});
