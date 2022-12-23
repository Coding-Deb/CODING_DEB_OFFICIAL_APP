import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CourseApi from "../ApiFrontend/CourseApi";
import { useNavigation } from '@react-navigation/native';

const height = 1 / 4 * Dimensions.get('window').height
const width = Dimensions.get('window').width - 20
const img = require('../assets/Coding_Deb.jpg')

export default function CourseScreen() {
    const navigate = useNavigation()
    return (
        <View style={styles.container}>
            <Image source={img} style={{ height: 300, width: width + 12, marginTop: 0, marginBottom: -20 }} />
            <FlatList
                data={CourseApi}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            navigate.navigate('CourseDetail', {
                                id: item.Id,
                                name: item.Name,
                                img: item.Image,
                                chapter : item.chapter
                            })
                        }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, borderColor: 'black', borderWidth: 2, height: height, width: width, backgroundColor: 'white', marginBottom: 20, marginTop: 20 }}>
                                <Text style={{ fontSize: 22, fontWeight: '700', borderBottomColor: 'black', borderBottomWidth: 2, marginBottom: 15 }}>
                                    {item.Name}
                                </Text>
                                <Text style={{ fontSize: 15, fontWeight: '500', margin: 10 }}>
                                    {item.Description}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1434A4',
        alignItems: 'center',
        justifyContent: 'center',
    },
})