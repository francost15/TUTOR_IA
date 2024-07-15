import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownButton}>
        <Image source={require('../assets/images/menu.png')} style={styles.dropdownIcon} />
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdownContent}>
          <Link href="/chat/1" asChild>
            <Text style={styles.dropdownItem}>Chat 1</Text>
          </Link>
          <Link href="/chat/2" asChild>
            <Text style={styles.dropdownItem}>Chat 2</Text>
          </Link>
          <Link href="/chat/3" asChild>
            <Text style={styles.dropdownItem}>Chat 3</Text>
          </Link>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  dropdownButton: {
    padding: 10,
  },
  dropdownIcon: {
    width: 24,
    height: 24,
  },
  dropdownContent: {
    position: 'absolute',
    top: 40,
    right: 0,
    left: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    zIndex: 1000,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
