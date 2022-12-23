import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function MainScreen() {
    const navigation = useNavigation()

    return (
        <View style={{ backgroundColor: '#cfcc1b', height: height, width: width, alignItems: 'center' }}>
            <Image source={require('../assets/Coding_Deb.jpg')}
                style={{
                    height: 1 / 3 * height,
                    width: width,
                    borderBottomRightRadius: 25,
                    borderBottomLeftRadius: 25
                }}
            />
            <Text style={{ fontSize: 30, fontWeight: '700', borderBottomColor: 'black', borderBottomWidth: 2, padding: 8 }}>
                Welcome To World Of Coding
            </Text>

            {/* ------------------------------------------------------------------ */}


            <TouchableOpacity style={{ backgroundColor: '#1434A4', height: 70, width: 325, marginLeft: 105, marginBottom: 30, marginRight: 105, justifyContent: 'center', alignItems: 'center', marginTop: 10, borderRadius: 30, padding: 15 }}
                onPress={() => { navigation.navigate('Course') }}
            >
                <Text style={{ fontSize: 25, fontWeight: '700', color: 'white' }}>
                    Our Courses
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ backgroundColor: '#1434A4', height: 70, width: 335, justifyContent: 'center', alignItems: 'center', borderRadius: 30, marginBottom: 30, padding: 15 }}
                onPress={() => { navigation.navigate('StudentsEntry') }}
            >
                <Text style={{ fontSize: 25, fontWeight: '700', color: 'white' }}>
                    Apply For Courses
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ backgroundColor: '#1434A4', height: 70, width: 350, justifyContent: 'center', marginBottom:30,alignItems: 'center', borderRadius: 30, padding: 15 }}
                onPress={() => { navigation.navigate('Students') }}
            >
                <Text style={{ fontSize: 25, fontWeight: '700', color: 'white' }}>
                    Our Applied Students List
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ backgroundColor: '#1434A4', height: 70, width: 350, justifyContent: 'center', marginBottom:40,alignItems: 'center', borderRadius: 30, padding: 8 }}
                onPress={() => { navigation.navigate('Reg_Student') }}
            >
                <Text style={{ fontSize: 25, fontWeight: '700', color: 'white' }}>
                    Our Registered Students
                </Text>
            </TouchableOpacity>

            {/* ------------------------------------------------------ */}


            <View style={{ backgroundColor: '#1434A4', height: 1 / 3 * height, width: width, borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({})