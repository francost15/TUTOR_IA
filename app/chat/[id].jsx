import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function ChatDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <View style={styles.container}>
      <Text>Chat Detail Page for {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
