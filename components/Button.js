import React, { useState } from "react";
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function Button({
  no,
  attemptsP,
  playagainP,
  randomNumberP,
  inputValueP,
  currentValueP,
  scoreP,
  hintP,
  roundP
}) {
  const { attempts, setAttempts } = attemptsP;
  const { playagain, setPlayagain } = playagainP;
  const { randomNumber, setRandomNumber } = randomNumberP;
  const { inputValue, setInputValue } = inputValueP;
  const { currentValue, setCurrentValue } = currentValueP;
  const { score, setScore } = scoreP;
  const { hint, setHint } = hintP;
  const {round, setRound } = roundP;
  
  

  function onClick(no) {
    setCurrentValue(no);
    setInputValue(inputValue + no);
    setAttempts(attempts + 1);
  }

  return (
    <TouchableOpacity  onPress={() => onClick(no)}>
      <Text style={styles.button} >{no} <Fontisto name="question" size={23} color="white" /></Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    color: "white",
    borderWidth: 2,
    fontSize:28,
    textAlign: "center",
    fontWeight: 'bold',
    

    borderColor: "#390010",
    backgroundColor:"#390010",

    margin: 5,
    padding: 10,
    borderRadius: 10
  },
});
