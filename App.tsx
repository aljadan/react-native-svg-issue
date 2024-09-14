import { StyleSheet, Text, View } from 'react-native';
import Logo from './logo';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>react-native-svg: v15.3.0</Text>
      <Logo />
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
});
