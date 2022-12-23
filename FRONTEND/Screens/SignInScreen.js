import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
export default function SignInScreen({ navigation }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cpassword, setCpassword] = useState("")
  const [number, setNumber] = useState("")


  const sign_in = () => {
    const data = { name, email, password, cpassword, number }

    if (name === "" || email === "" || password === "" || cpassword === "" || number === "") {
      console.log("Fill The Blank Page...");
    } else {
      if (password === cpassword) {
        if (number.length > 10 || number.length < 10) {
          console.log("Number Length Should Be 10");
        } else {
          axios.post('http://192.168.112.210:5000/api/sign_in', data)
            .then(res => console.log('Sign_in Completed'))
          navigation.replace('Main')
        }
      } else {
        console.log('password not match');
      }
    }
  }

  return (
    // <View style={styles.container}>
    //   <TouchableOpacity onPress={()=>{navigation.navigate('Main')}} style={{borderColor:'black',borderWidth:2,height:50,width:150}}>
    //     <Text style={{fontSize:18,fontWeight:'700'}}>
    //         Main Page
    //     </Text>
    //   </TouchableOpacity>

    // </View>
    <View style={{ backgroundColor: '#822257', height: height, width: width, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('../assets/Coding_Deb.jpg')}
        style={{
          height: 1 / 3 * height,
          width: width,
          borderBottomRightRadius: 25,
          borderBottomLeftRadius: 25,
          marginBottom: 15
        }}
      />
      <View style={{ height: height - 285, width: width - 30, backgroundColor: 'white', alignItems: 'center', borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
        <Text style={{ fontSize: 25, fontWeight: '600', marginTop: 8, marginBottom: 8 }}>
          Enter Your Details
        </Text>
        <TextInput
          style={{ width: width - 80, height: 50, borderBottomColor: "black", borderBottomWidth: 2, marginBottom: 12, marginTop: 8 }}
          placeholder="Enter Name"
          value={name}
          onChangeText={(val) => setName(val)}
        />
        <TextInput
          style={{ width: width - 80, height: 50, borderBottomColor: "black", borderBottomWidth: 2, marginBottom: 12, marginTop: 8 }}
          placeholder="Enter Email"
          keyboardType='email-address'
          value={email}
          onChangeText={(val) => setEmail(val)}
        />
        <TextInput
          style={{ width: width - 80, height: 50, borderBottomColor: "black", borderBottomWidth: 2, marginBottom: 12, marginTop: 8 }}
          placeholder="Enter Password"
          value={password}
          onChangeText={(val) => setPassword(val)}
        />
        <TextInput
          style={{ width: width - 80, height: 50, borderBottomColor: "black", borderBottomWidth: 2, marginBottom: 12, marginTop: 8 }}
          placeholder="Conform Password"
          value={cpassword}
          onChangeText={(val) => setCpassword(val)}
        />
        <TextInput
          style={{ width: width - 80, height: 50, borderBottomColor: "black", borderBottomWidth: 2, marginBottom: 12, marginTop: 8 }}
          placeholder="Enter Your Contact Number"
          keyboardType='numeric'
          value={number}
          onChangeText={(val) => setNumber(val)}
        />

        <TouchableOpacity
          style={{ height: 60, width: width - 100, backgroundColor: '#822257', justifyContent: 'center', alignItems: 'center', marginTop: 20, borderColor: '#822257', borderWidth: 2, borderRadius: 30 }}
          onPress={sign_in}
        >
          <Text style={{ fontSize: 18, fontWeight: '700', color: 'white', padding: 8 }}>
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ height: 20, width: 150, justifyContent: 'center', alignItems: 'center', marginTop: 8 }} onPress={() => navigation.replace('Main')}>
          <Text style={{ fontSize: 15, fontWeight: '600', color: '#822257', textDecorationLine: 'underline' }}>
            Skip For Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    // justifyContent: 'center',
  },
})