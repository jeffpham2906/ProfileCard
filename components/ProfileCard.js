import { View, StyleSheet, Text, Image, Alert, Animated } from "react-native"
import { Colors } from "../contants/Colors"
import { Foundation } from '@expo/vector-icons';
import { FontAwesome5, FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import MyButton from "./MyButton";
import { useEffect, useRef } from "react";
function ProfileCard({ onClose,data }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const onClickMessage = () => {
    Alert.alert('Send a message to the user')
  }
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true
    }).start()
  }, [fadeAnim])
 
  return (
    <View style={styles.wrapper}>
      <Animated.View style={{...styles.container,opacity: fadeAnim}}>
      <Image source={data.requireImgUrl}  style={{ width: 140, height: 140, borderRadius: 9999 }} />
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.career}>{data.career}</Text>
        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around', marginTop: 16 }}>
          <View>
            <Text style={styles.fieldHeader}>Projects</Text>
            <Text style={styles.numberOfField}>{data.projects}</Text>
          </View>
          <View>
            <Text style={styles.fieldHeader}>Following</Text>
            <Text style={styles.numberOfField}>{data.following}</Text>
          </View><View>
            <Text style={styles.fieldHeader}>Followers</Text>
            <Text style={styles.numberOfField}>{data.followers}</Text>
          </View>
        </View>
        <View>
          <Text style={{ textAlign: 'center', marginTop: 16, color: `${Colors.grayLight}` }}>{data.description}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: 16 }}>
          <Foundation name="social-facebook" size={61} color="#3f5e9d" />
          <FontAwesome5 name="linkedin" size={52} color="#2d6bb5" />
          <FontAwesome name="twitter-square" size={52} color="#23a4f5" />
          <FontAwesome6 name="square-whatsapp" size={52} color="#1be46a" />
        </View>
        <View style={{ flexDirection: 'row', gap: 16, marginTop: 20 }}>
          <MyButton styleProps={{ width: 130 }} onClick={onClickMessage}>Message</MyButton>
          <MyButton styleProps={{ width: 130 }} onClick={onClose}>Cancel</MyButton>
        </View>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.backGroundProfileCard,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    backgroundColor: 'white',
    width: '85%',
    borderRadius: 8,
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 12
  },
  career: {
    textTransform: 'uppercase',
    color: `${Colors.grayLight}`,
    fontWeight: '500',
    marginTop: 8
  },
  fieldHeader: { fontSize: 20, color: `${Colors.grayLight}` },
  numberOfField: { textAlign: 'center', fontWeight: '600', fontSize: 20, marginTop: 12 }
})
export default ProfileCard
