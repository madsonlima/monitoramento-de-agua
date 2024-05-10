import { Image, StyleSheet, Platform, View } from 'react-native';

import DadosDB from '../components/DadosDB'

export default function HomeScreen() {

  return (
    <View style={styles.titleContainer}>

      <DadosDB />

    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7F4F2'
  },
});
