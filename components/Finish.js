import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function Finish({
  attemptsP,
  playagainP,
  randomNumberP,
  inputValueP,
  currentValueP,
  scoreP,
  hintP,
  roundP,
  hintCountP,
  totalWinsP,
  completeInfoP,
}) {
  const { attempts, setAttempts } = attemptsP;
  const { playagain, setPlayagain } = playagainP;
  const { randomNumber, setRandomNumber } = randomNumberP;
  const { inputValue, setInputValue } = inputValueP;
  const { currentValue, setCurrentValue } = currentValueP;
  const { score, setScore } = scoreP;
  const { hint, setHint } = hintP;
  const { round, setRound } = roundP;
  const { hintCount, setHintCount } = hintCountP;
  const { totalWins, setTotalWins } = totalWinsP;
  const { completeInfo, setCompleteInfo } = completeInfoP;

  return (
    <View>
       <Text style={styles.heading}>The number was : {randomNumber}</Text>
       
       <Text style={styles.heading}>Totals Wins : {totalWins}</Text>
        <Text style={styles.heading}>History</Text>

      <View style={{ height: 200, width: 300, backgroundColor:'white',}}>
       
        <ScrollView style={{   borderColor:'white'}}>
          <Text style={styles.heading}>
            {completeInfo.map(
              (ele) =>
                "Round: " +
                ele.Round.round +
                ", Score: " +
                ele.Score.score +
                ", Hints used: " +
                ele.Hints.hintCount +
                " \n"
            )}
            {"Round: " +
              round +
              ", Score: " +
              score +
              ", Hints Used: " +
              hintCount}
          </Text>
        </ScrollView>
      </View>

      

      <TouchableOpacity
        onPress={() => {
          setCompleteInfo((info) => [
            ...info,
            { Round: { round }, Score: { score }, Hints: { hintCount } },
          ]);

          setPlayagain(true);
          setAttempts(0);
          setRandomNumber((preVal) => {
            let rand = Math.floor(Math.random() * 10);
            if (rand == 0 || rand == preVal) {
              return rand + 1;
            } else return rand;
          });
          setRound(round + 1);
          setInputValue("");
          setHintCount(0);
          setScore(0);
          setHint(null);

          return;
        }}
      >
        <Text style={styles.button}> Play Again </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setRandomNumber((preVal) => {
            let rand = Math.floor(Math.random() * 10);
            if (rand == 0 || rand == preVal) {
              return rand + 1;
            } else return rand;
          });
          setPlayagain(true);
          setAttempts(null);
          setRound(1);
          setScore(0);
          setInputValue("");
          setHintCount(0);
          setTotalWins(0);
          setCompleteInfo([]);
          setHint(null);

          return;
        }}
      >
        <Text style={styles.button}>Finish</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    color: "white",
    padding: 10,

    textAlign: "center",

    fontSize: 15,
    fontWeight: "bold",
    borderColor: "#390010",
    backgroundColor: "#390010",
    borderWidth:1,
    borderBottomColor:'white'
  },

  button: {
    backgroundColor: "#390010",
    color: "white",
    borderWidth: 2,
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",

    borderColor: "#390010",

    margin: 5,
    padding: 10,
    borderRadius: 50,
  },
});
