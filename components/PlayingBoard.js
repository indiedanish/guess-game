import React, { useState } from "react";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Button from "./Button.js";

export default function PlayingBoard({
  attemptsP,
  playagainP,
  randomNumberP,
  inputValueP,
  currentValueP,
  scoreP,
  hintP,
  roundP,
  hintCountP,
  totalWinsP
}) {
  const { attempts, setAttempts } = attemptsP;
  const { playagain, setPlayagain } = playagainP;
  const { randomNumber, setRandomNumber } = randomNumberP;

  const { inputValue, setInputValue } = inputValueP;
  const { currentValue, setCurrentValue } = currentValueP;
  const { score, setScore } = scoreP;
  const { hint, setHint } = hintP;
  const {round, setRound } = roundP;
  const {hintCount,setHintCount} = hintCountP;
  const {totalWins,setTotalWins} = totalWinsP;

  function MakeButton(no) {
    return (
      <Button
        no={no}
        attemptsP={{ attempts, setAttempts }}
        playagainP={{ playagain, setPlayagain }}
        randomNumberP={{ randomNumber, setRandomNumber }}
        inputValueP={{ inputValue, setInputValue }}
        currentValueP={{ currentValue, setCurrentValue }}
        scoreP={{ score, setScore }}
        hintP={{ hint, setHint }}
        roundP = {{round,setRound}}
        
      />
    );
  }

  function getHint() {


    const tempRand = 1 + Math.floor(Math.random() * (9))

    if (tempRand > randomNumber) {
      setHint("Number is smaller than " + tempRand);
    } else if (tempRand < randomNumber) {
      setHint("Number is greater than " + tempRand);
    }
    else{
      getHint()
    }
     
      
    setHintCount(hintCount+1)
    setScore(score - 5);
  }

  return (
    <View style={styles.container}>
      <View style={styles.rowsBlock} >
        <Text style={styles.topRows}><MaterialCommunityIcons name="gamepad" size={28} color="white" /> Round: {round}</Text>
        <Text style={styles.topRows}> <Ionicons name="stats-chart" size={28} color="white" /> Score {score} </Text>
        <Text style={styles.topRows}><MaterialCommunityIcons name="chart-line-stacked" size={28} color="white" /> Attempts Left: {5 - attempts}</Text>
        { inputValue != "" ? <Text style={{  fontSize:30, color:"white" }} >" {inputValue} "</Text> :console.log(inputValue)}
      </View>

      <View style={styles.row}>
        {MakeButton("1")}
        {MakeButton("2")}
        {MakeButton("3")}
      </View>

      <View style={styles.row}>
        {MakeButton("4")}
        {MakeButton("5")}
        {MakeButton("6")}
      </View>

      <View style={styles.row}>
        {MakeButton("7")}
        {MakeButton("8")}
        {MakeButton("9")}
      </View>

      <TouchableOpacity onPress={() => getHint()}>
        <Text style={styles.button}>Get Hint</Text>
      </TouchableOpacity>

      <View>
       { hint != null ? <Text  style={styles.hint}>{hint}</Text>: console.log(hint)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: "center",
    justifyContent: "center",
  },

  row: {
    flexDirection: "row",
  },

  rowsBlock:{
    alignItems: "center",
    backgroundColor:"#390010",
    marginBottom:20,
    paddingBottom:20,
    paddingTop:20,
    color: "white"


  },
  topRows: {
    backgroundColor: "#390010",
    color: "white",
    textAlign: "center",
    width: "100%",
    fontSize:30,
    alignItems: "center",
    padding:5,
    
    
    borderRadius:30,
    width: 470,
    
  },

  button: {
    backgroundColor: "#390010",
    color: "white",
    borderWidth: 2,
    fontSize:22,
    textAlign: "center",
    fontWeight: 'bold',

    borderColor: "#390010",


    margin: 5,
    padding: 10,
    borderRadius:50
  },
  textInput: {
    borderWidth: 2,
    width: 320,

    borderColor: "#822d00",
    color: "black",
    padding: 10,

    textAlign: "center",
  },

  hint: {
    backgroundColor: "white",
    fontWeight: 'bold',
    color: "#390010",
    textAlign: "center",
    width: "100%",
    fontSize:25,
    alignItems: "center",
    padding:13,
    
    borderRadius:30,
    width: 400,
    
  }
});
