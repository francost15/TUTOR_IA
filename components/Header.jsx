import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import DropdownMenu from './DropDownMenu.jsx';

export default function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.menuButton}>
        <Image source={require('../assets/images/menu.png')} style={styles.menuIcon} />
      </TouchableOpacity>
      <Image source={require('../assets/images/profile-user.png')} style={styles.profileIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuButton: {
    padding: 5,
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  profileIcon: {
    width: 30,
    height: 30,
  },
});
