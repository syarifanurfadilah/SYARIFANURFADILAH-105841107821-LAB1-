import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Kategori2 = ({ navigation }) => {
  const categories = [
    { key: 'sepatu putih' }, { key: 'sendal hitam' }, { key: 'sepatu abu-abu' },
    { key: 'sepatu biru' }, { key: 'sendal putih' }, { key: 'sepatu hitam' },
    { key: 'sepatu pink' }, { key: 'sendal coklat' },
  ];

  return (
    <View style={styles.wrapper}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backWrapper}>
          <MaterialIcons name="arrow-back" size={28} color="#333" />
        </TouchableOpacity>
        <Text style={styles.screenTitle}>Categories</Text>
        <TouchableOpacity style={styles.searchIconWrapper}>
          <MaterialIcons name="search" size={26} color="#333" />
        </TouchableOpacity>
      </View>

      {/* View All Items Button */}
      <TouchableOpacity style={styles.buttonAll}>
        <Text style={styles.buttonAllText}>VIEW ALL ITEMS</Text>
      </TouchableOpacity>

      {/* Category List */}
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.itemText}>{item.key}</Text>
          </View>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingTop: 20,
  },
  backWrapper: {
    padding: 10,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    textAlign: 'center',
  },
  searchIconWrapper: {
    padding: 10,
  },
  buttonAll: {
    backgroundColor: '#FF6347',
    paddingVertical: 14,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3,
  },
  buttonAllText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
  },
  listItem: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemText: {
    fontSize: 18,
    color: '#333',
    fontWeight: '500',
  },
});

export default Kategori2;
