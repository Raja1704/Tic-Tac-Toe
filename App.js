import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import bg from './assets/bg.jpeg';


export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style = {styles.bg}  resizeMode='contain'>
          <View style = {styles.circle}>

          </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bg:{
    width: "100%",
    height: "100%",
    alignItems : "center",
    justifyContent : "center",
  },

  circle:{
    width: 100,
    height: 100, 
    backgroundColor: "white",
    borderRadius: 50,
  },
});
