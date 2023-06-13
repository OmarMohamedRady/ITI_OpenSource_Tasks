import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 50 : 0,
    height: "100%",
    marginHorizontal: 10,
  },

  header: {
    fontSize: 19,
    fontWeight: "bold",
    backgroundColor: "green",
    color: "white",
    padding: 15,
  },
  itemStyle: {
    backgroundColor: "lightgreen",
    margin: 5,
    padding: 6,
  },
  btnContainer: {
    backgroundColor: "aliceblue",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 50,
  },
  txt: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  largeBoxStyle: {
    backgroundColor: "yellow",
    width: 500,
    height: 500,
    // ,zIndex:1
  },
  miniBox: {
    backgroundColor: "green",
    width: 100,
    height: 100,
    position: "absolute",
    bottom: 50,
    left: 50,
    //   margin:50,
    marginHorizontal: 20,
    marginVertical: 60,
  },
});
