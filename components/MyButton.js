import { Pressable, Text, StyleSheet, View } from "react-native"

function MyButton({ onClick ,styleProps,children}) {
  return (
    <Pressable style={{...styles.btn,...styleProps}} onPress={()=>onClick()} >
      <Text style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#32b7f5',
    paddingHorizontal: 28,
    paddingVertical: 8,
    borderRadius: 100000,
    alignItems:'center'
  }
});

export default MyButton
