import { StatusBar } from "expo-status-bar";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
export default function App() {
  return (
    <SafeAreaView>
      <ScrollView horizontal showsVerticalScrollIndicator={false}>
        <View style={{ height: 800, width: 400 }}>
          <Image
            // resizeMode="repeat"
            style={{ height: 900, width: 400 }}
            source={require("./assets/Images/2.jpg")}
          ></Image>
        </View>
        <View style={{ height: 1000, width: 415 }}>
          {/* <Text style={{backgroundColor:"red", fontSize:25}}>Helloo <Text onPress={()=>{alert("pressed")}}  style={{color:"white",fontSize:15}}>world</Text></Text> */}
          <Image
            style={{ height: 1000, width: 410 }}
            source={require("./assets/Images/omr.jpg")}
          ></Image>
        </View>
        <View style={{ height: 1000, width: 410 }}>
          {/* <Text style={{backgroundColor:"red", fontSize:25}}>Helloo <Text onPress={()=>{alert("pressed")}}  style={{color:"white",fontSize:15}}>world</Text></Text> */}
          <Image
            style={{ height: 1000, width: 410 }}
            source={require("./assets/Images/oo.jpg")}
          ></Image>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
