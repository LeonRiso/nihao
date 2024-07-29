import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const CategoriesScreen = ({ navigation }) => {
  const handleCategoryPress = (category) => {
    navigation.navigate('Courses', { category });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>中文测验</Text>

      <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryPress('Técnicos')}>
        <Image source={require('../assets/favicon.png')} style={styles.categoryImage} />
      </TouchableOpacity>


      <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryPress('Técnicos')}>
        <Image source={require('../assets/favicon.png')} style={styles.categoryImage} />
      </TouchableOpacity>


      <Text style={styles.footerText}>© 2023 工业学徒服务</Text>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9e9d6',
    paddingVertical: 20,
  },
  headerText: {
    color: '#800000',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 50,
    textAlign: 'center',
    textShadowColor: '#fff',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
  },
  categoryButton: {
    backgroundColor: '#f5deb3',
    padding: 55,
    borderRadius: 150,
    margin: 50,
  },
  categoryImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain', // Adjust the image size and content mode as needed
  },
  categoryButtonText: {
    color: '#800000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#fff',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
  },
  footerText: {
    position: 'absolute',
    bottom: 20,
    color: '#800000',
    fontSize: 16,
    textAlign: 'center',
    textShadowColor: '#fff',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
  },

});

export default CategoriesScreen;