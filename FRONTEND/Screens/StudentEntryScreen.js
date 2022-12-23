import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'

// import { launchImageLibrary } from 'react-native-image-picker';
// import * as imagePicker from 'expo-image-picker'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function StudentEntryScreen({ navigation }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [courses, setCourses] = useState("")

    const submit = (e) => {
        const data = { name, email, courses }

        if (name === "" || email === "" || courses === "") {
            console.log("Fill The Blank Page...");
        } else {
            axios.post('http://192.168.112.210:5000/api/login', data)
                .then(res => console.log('1 Data Inserted Successfully'))
            navigation.navigate('Main')
        }
    }

    return (
        <View style={{ backgroundColor: '#822257', height: height, width: width, justifyContent: 'center', alignItems: 'center' }}>
            <Image
                source={require('../assets/Coding_Deb.jpg')}
                style={{
                    height: 1 / 2.2 * height,
                    width: width,
                    borderBottomRightRadius: 25,
                    borderBottomLeftRadius: 25,
                    marginBottom: 15
                }}
            />
            <View style={{ height: height - 385, width: width - 30, backgroundColor: 'white', alignItems: 'center', borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
                <Text style={{ fontSize: 25, fontWeight: '600', marginTop: 8, marginBottom: 8 }}>
                    Enter Details Here
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
                    placeholder="Enter Your Applied Course"
                    value={courses}
                    onChangeText={(val) => setCourses(val)}
                />
                <TouchableOpacity onPress={submit}
                    style={{ height: 60, width: width - 100, backgroundColor: '#822257', justifyContent: 'center', alignItems: 'center', marginTop: 40, borderColor: '#822257', borderWidth: 2, borderRadius: 30 }}
                >
                    <Text style={{ fontSize: 18, fontWeight: '700', color: 'white', padding: 8 }}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})