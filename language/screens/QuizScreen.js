import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, FlatList } from 'react-native';
import * as Progress from 'react-native-progress'; // Import all exports as Progress
import quizData from '../assets/quiz.json'

const QuizScreen = ({ route }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerPress = (answer) => {
    const currentQuestion = quizData[currentQuestionIndex];
    if (answer === currentQuestion.answer) {
      setScore(score + 1);
      Alert.alert('Correct!', 'Good job!');
    } else {
      Alert.alert('Incorrect', 'Try again!');
    }

    // Move to the next question or finish the quiz
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      Alert.alert('Quiz Finished', `Your score is ${score} out of ${quizData.length}`);
      setCurrentQuestionIndex(0);
      setScore(0);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.optionButton}
      onPress={() => handleAnswerPress(item)}
    >
      <Text style={styles.optionText}>{item}</Text>
    </TouchableOpacity>
  );

  const currentQuestion = quizData[currentQuestionIndex];
  const progress = (currentQuestionIndex + 1) / quizData.length;

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{currentQuestion.question}</Text>
      <Progress.Bar
        progress={progress}
        width={300}
        color="#3b5998"
        style={styles.progressBar}
      />
      <FlatList
        data={currentQuestion.options}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  questionText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#f5deb3',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    width: '100%',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 18,
    color: '#800000',
  },
  progressBar: {
    marginVertical: 20,
  },
});

export default QuizScreen;
