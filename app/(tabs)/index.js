import MyButton from '@/components/MyButton';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Colors } from '../../contants/Colors';
import { useState } from 'react';
import ProfileCard from '../../components/ProfileCard';

const tempData = {
  name: 'Vel Kuma P',
  career: 'ui/ux designer',
  requireImgUrl: require('@/assets/images/profile-image.jpg'),
  projects: 11,
  following: 250,
  followers: 185,
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
}
export default function HomeScreen() {
  const [showCard, setShowCard] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <MyButton onClick={() => setShowCard(true)} >Show User Profile</MyButton>
      {showCard && <ProfileCard onClose={() => setShowCard(false)} data={tempData} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `${Colors.backGround}`,
    position: 'relative'
  },
  btn: {
    backgroundColor: `${Colors.primary}`,
    paddingHorizontal: 28,
    paddingVertical: 8,
    borderRadius: 100000,
  }
});
