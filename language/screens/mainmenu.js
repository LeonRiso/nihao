import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView,ImageBackground } from 'react-native';

const CategoriesScreen = ({ navigation }) => {
  const handleCategoryPress = (category) => {
    navigation.navigate('Quiz', { category });
  };

  return (
    <ImageBackground 
    source={require('../assets/background.png')} // Replace with your background image
    style={styles.background}
  >
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>中文测验</Text>

      <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryPress('Greetings')}>
        <Image source={require('../assets/hi.png')} style={styles.categoryImage} />
      </TouchableOpacity>

      <Text style={styles.footerText}>© 2023 工业学徒服务</Text>
      </ScrollView>
      </ImageBackground>

  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'contain', // Adjust the image size and content mode as needed
  },

  container: {
    flex: 1,  
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  headerText: {
    color: '#000000',
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
    padding: 45,
    borderRadius: 150,
    margin: 50,
  },
  categoryImage: {
    width: 80,
    height: 80,
    resizeMode: 'cover', // Adjust the image size and content mode as needed
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
    bottom: 20,
    color: '#000000',
    fontSize: 16,
    textAlign: 'center',
    textShadowColor: '#ffff',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
  },

});

export default CategoriesScreen;