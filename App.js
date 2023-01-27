import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Sentry from 'sentry-expo'

Sentry.init({
  dsn:"https://2525057fadcf4ed792af76b57e76200e@o4504575825674240.ingest.sentry.io/4504575836028928",
  enableInExpoDevelopment:true,
  debug:true
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:30}}>Jest Unit Testing</Text>
      <Text style={{fontSize:35,color:"blue"}}>Welcome to Deployed App</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
