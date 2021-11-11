import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import PlayingBoard from "./components/PlayingBoard";
import Finish from "./components/Finish";

export default function App() {
  const [attempts, setAttempts] = useState(null);
  const [playagain, setPlayagain] = useState(true);
  const [randomNumber, setRandomNumber] = useState(
    1 + Math.floor(Math.random() * 9)
  );
  const [inputValue, setInputValue] = useState("");
  const [currentValue, setCurrentValue] = useState("");
  const [score, setScore] = useState(0);
  const [hint, setHint] = useState(null);
  const [hintCount, setHintCount] = useState(0);
  const [round, setRound] = useState(1);
  const [totalWins, setTotalWins] = useState(0);
  const [completeInfo, setCompleteInfo] = useState([]);

  useEffect(() => {
    if (attempts == 5) {
      setPlayagain(false);
    }

    console.log("Random: ", randomNumber);

    if (randomNumber == currentValue) {
      setScore(score + 10);
      setPlayagain(false);
      setCurrentValue("");
      setInputValue("");
      setTotalWins(totalWins + 1);
    }

    console.log(completeInfo);
  }),
    [attempts];

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <ImageBackground
        source={require("./background.jpg")}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          minWidth: "100%",
        }}
      >
        <View>
          {playagain == true ? (
            attempts === null ? (
              <View style={{ alignItems: "center"}}>
                
                <Text style={styles.heading}> <MaterialCommunityIcons name="gamepad-variant" size={40} color="white" />  Guess Game  </Text>

          

                <TouchableOpacity onPress={() => setAttempts(0)}>
                <AntDesign style={styles.button} name="play" size={100} color="#390010" />
                  
                </TouchableOpacity>
              </View>
            ) : (
              <PlayingBoard
                attemptsP={{ attempts, setAttempts }}
                playagainP={{ playagain, setPlayagain }}
                randomNumberP={{ randomNumber, setRandomNumber }}
                inputValueP={{ inputValue, setInputValue }}
                currentValueP={{ currentValue, setCurrentValue }}
                scoreP={{ score, setScore }}
                hintP={{ hint, setHint }}
                roundP={{ round, setRound }}
                hintCountP={{ hintCount, setHintCount }}
                totalWinsP={{ totalWins, setTotalWins }}
              />
            )
          ) : (
            <Finish
              attemptsP={{ attempts, setAttempts }}
              playagainP={{ playagain, setPlayagain }}
              randomNumberP={{ randomNumber, setRandomNumber }}
              inputValueP={{ inputValue, setInputValue }}
              currentValueP={{ currentValue, setCurrentValue }}
              scoreP={{ score, setScore }}
              hintP={{ hint, setHint }}
              roundP={{ round, setRound }}
              hintCountP={{ hintCount, setHintCount }}
              totalWinsP={{ totalWins, setTotalWins }}
              completeInfoP={{ completeInfo, setCompleteInfo }}
            />
          )}
        </View>
      </ImageBackground>
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

  button: {
    
 
  
  
    textAlign: "center",
    backgroundColor: "white",
    borderRadius:50,
    
 
   
  },
  heading: {
    color: "white",
    padding: 10,
    marginBottom: 100,
    width: 300,
    textAlign: "center",
    borderRadius:30,

    fontSize: 30,
    borderColor: "#390010",
    backgroundColor: "#390010",
  },
});
