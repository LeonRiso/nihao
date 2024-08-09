import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, FlatList } from 'react-native';
import * as Progress from 'react-native-progress'; // Import all exports as Progress
import quizData from '../assets/quiz.json';

const QuizScreen = ({ route }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1); // Start with -1 to show the description
  const [score, setScore] = useState(0);

  const handleStartQuiz = () => {
    setCurrentQuestionIndex(0); // Start the quiz with the first question
  };

  const handleAnswerPress = (answer) => {
    const currentQuestion = quizData.questions[currentQuestionIndex];
    const explanation = currentQuestion.explanation;

    if (answer === currentQuestion.answer) {
      setScore(score + 1);
      Alert.alert('Correct!', `${explanation}`);
    } else {
      Alert.alert('Incorrect', `${explanation}`);
    }

    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      Alert.alert('Quiz Finished', `Your score is ${score + 1} out of ${quizData.questions.length}`);
      setCurrentQuestionIndex(-1); // Reset to description screen
      setScore(0);
    }
  };

  if (currentQuestionIndex === -1) {
    return (
      <View style={styles.container}>
        <Text style={styles.descriptionText}>{quizData.description}</Text>
        <TouchableOpacity style={styles.startButton} onPress={handleStartQuiz}>
          <Text style={styles.startButtonText}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const currentQuestion = quizData.questions[currentQuestionIndex];
  const progress = (currentQuestionIndex + 1) / quizData.questions.length;

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
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => handleAnswerPress(item)}
          >
            <Text style={styles.optionText}>{item}</Text>
          </TouchableOpacity>
        )}
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
  descriptionText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  startButton: {
    backgroundColor: '#3b5998',
    padding: 15,
    borderRadius: 10,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
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
