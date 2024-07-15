import React from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Header from '../components/Header';
import ChatMessage from '../components/ChatMessage';
import ChatInput from '../components/ChatInput';

export default function HomePage() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 1 : 10}
    >
      <Header />
      <ScrollView contentContainerStyle={styles.chatContainer}>
        <ChatMessage text="Quiero saber mas sobre campos formativos" sentByUser />
        <ChatMessage text="Los campos formativos son los siguientes: 1. El lenguaje y la comunicación 2. El pensamiento matemático 3. Exploración y conocimiento del mundo" />
      </ScrollView>
      <ChatInput />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  chatContainer: {
    padding: 10,
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
});
