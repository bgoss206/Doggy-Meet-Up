import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";
import styles from "../styles";

function Landing({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Landing Page</Text>
      {/* Add photo carosel */}
      <Button title="Go Home" onPress={() => navigation.navigate("Home")} />
      <StatusBar style="auto" />
    </View>
  );
}

export default Landing;
