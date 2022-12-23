import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CourseApi from "../ApiFrontend/CourseApi";

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function CourseDetailScreen({ route }) {
    const Id = route.params.id
    const selectedCourse = CourseApi.find((elem) => {
        return (Id === elem.Id)
    })
    return (
        <View style={{ top: 45, alignItems: 'center', flex: 1, backgroundColor: '#1434A4' }}>
            <Image
                source={selectedCourse.Image}
                style={{ height: 280, width: width, marginBottom: 10 }}
            />
            <ScrollView>
                <TouchableOpacity>
                    <View style={{ padding: 15, height: 1 / 6 * height, width: width - 15, padding: 8, borderColor: 'black', borderWidth: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginTop: 10, marginBottom: 55 }}>
                        <Text style={{ fontSize: 20, fontWeight: '700' }}>
                            {selectedCourse.chapter.chapter_01}
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ padding: 15, height: 1 / 6 * height, width: width - 15, padding: 8, borderColor: 'black', borderWidth: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginTop: 10, marginBottom: 55 }}>
                        <Text style={{ fontSize: 20, fontWeight: '700' }}>
                            {selectedCourse.chapter.chapter_02}
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ padding: 15, height: 1 / 6 * height, width: width - 15, padding: 8, borderColor: 'black', borderWidth: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginTop: 10, marginBottom: 55 }}>
                        <Text style={{ fontSize: 20, fontWeight: '700' }}>
                            {selectedCourse.chapter.chapter_03}
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ padding: 15, height: 1 / 6 * height, width: width - 15, padding: 8, borderColor: 'black', borderWidth: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginTop: 10, marginBottom: 55 }}>
                        <Text style={{ fontSize: 20, fontWeight: '700' }}>
                            {selectedCourse.chapter.chapter_04}
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ padding: 15, height: 1 / 6 * height, width: width - 15, padding: 8, borderColor: 'black', borderWidth: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginTop: 10, marginBottom: 55 }}>
                        <Text style={{ fontSize: 20, fontWeight: '700' }}>
                            {selectedCourse.chapter.chapter_05}
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ padding: 15, height: 1 / 6 * height, width: width - 15, padding: 8, borderColor: 'black', borderWidth: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginTop: 10, marginBottom: 55 }}>
                        <Text style={{ fontSize: 20, fontWeight: '700' }}>
                            {selectedCourse.chapter.chapter_06}
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ padding: 15, height: 1 / 6 * height, width: width - 15, padding: 8, borderColor: 'black', borderWidth: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginTop: 10, marginBottom: 55 }}>
                        <Text style={{ fontSize: 20, fontWeight: '700' }}>
                            {selectedCourse.chapter.chapter_07}
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ padding: 15, height: 1 / 6 * height, width: width - 15, padding: 8, borderColor: 'black', borderWidth: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginTop: 10, marginBottom: 55 }}>
                        <Text style={{ fontSize: 20, fontWeight: '700' }}>
                            {selectedCourse.chapter.chapter_08}
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ padding: 15, height: 1 / 6 * height, width: width - 15, padding: 8, borderColor: 'black', borderWidth: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginTop: 10, marginBottom: 55 }}>
                        <Text style={{ fontSize: 20, fontWeight: '700' }}>
                            {selectedCourse.chapter.chapter_09}
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ padding: 15, height: 1 / 6 * height, width: width - 15, padding: 8, borderColor: 'black', borderWidth: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginTop: 10, marginBottom: 55 }}>
                        <Text style={{ fontSize: 20, fontWeight: '700' }}>
                            {selectedCourse.chapter.chapter_10}
                        </Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({

})