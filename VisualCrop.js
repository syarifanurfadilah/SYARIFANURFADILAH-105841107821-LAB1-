import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const VisualCrop = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Crop the item</Text>
      </View>
      <ImageBackground
        source={require('./assets/sepatubiru.jpg')} 
        style={styles.imageBackground}
      >
        <View style={styles.overlay}>
          <View style={styles.cropArea}>
            <View style={[styles.corner, styles.cornerTopLeft]} />
            <View style={[styles.corner, styles.cornerTopRight]} />
            <View style={[styles.corner, styles.cornerBottomLeft]} />
            <View style={[styles.corner, styles.cornerBottomRight]} />
          </View>
        </View>
      </ImageBackground>
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.searchButton}>
          <MaterialIcons
            name="search"
            size={28}
            color="#FFFFFF"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    padding: 20,
    backgroundColor: '#4A90E2',
    alignItems: 'center',
    marginTop: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF',
  },
  imageBackground: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 40,
    borderRadius: 15,
    overflow: 'hidden',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cropArea: {
    width: 200,
    height: 200,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  corner: {
    width: 30,
    height: 30,
    borderColor: '#FFF',
    borderRadius: 5,
  },
  cornerTopLeft: {
    position: 'absolute',
    top: -15,
    left: -15,
    borderLeftWidth: 4,
    borderTopWidth: 4,
  },
  cornerTopRight: {
    position: 'absolute',
    top: -15,
    right: -15,
    borderRightWidth: 4,
    borderTopWidth: 4,
  },
  cornerBottomLeft: {
    position: 'absolute',
    bottom: -15,
    left: -15,
    borderLeftWidth: 4,
    borderBottomWidth: 4,
  },
  cornerBottomRight: {
    position: 'absolute',
    bottom: -15,
    right: -15,
    borderRightWidth: 4,
    borderBottomWidth: 4,
  },
  searchContainer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  searchButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FF6F61',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default VisualCrop;
