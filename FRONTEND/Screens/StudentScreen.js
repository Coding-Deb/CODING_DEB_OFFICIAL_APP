import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
// import StudentdataApi from '../ApiFrontend/StudentdataApi'
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios'



const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function StudentScreen({ navigation }) {

  const [student, setStudent] = useState([])

  useEffect(() => {
    async function getAllStudent() {
      try {
        const student = await axios.get("http://192.168.112.210:5000/dataapi/apidata")
        setStudent(student.data)
      } catch (error) {
        console.log(error);
      }
    }
    getAllStudent()
  }, [])

  const DeleteData = (id) => {
    axios.delete("http://192.168.112.210:5000/deleteapi/delete/" + id)
      .then((res) => {
        console.log('1 Data Deleted Successfully');
      })
    loaddata()
  } 


  const loaddata = async () => {
    try {
      const student = await axios.get("http://192.168.112.210:5000/dataapi/apidata")
      setStudent(student.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loaddata()
  }, [])



  return (
    <SafeAreaView style={{ backgroundColor: '#1434A4', height: height, width: width, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{flexDirection:'row'}}>
        <Text style={{ fontSize: 35, fontWeight: '700', marginTop: 45, marginBottom: 12, color: 'white', borderBottomColor: 'white', borderBottomWidth: 5 }}>
          Our Applied Students
        </Text>
        <TouchableOpacity onPress={() => loaddata()}>
          <FontAwesome name="refresh" size={30} color="white" style={{justifyContent: 'center', alignItems: 'center', top:60,left:15}} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={student}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={{ backgroundColor: 'white', height: 130, width: width - 30, marginTop: 30, marginBottom: 15, flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={require('../assets/cartoon.webp')}
                  style={{
                    height: 80,
                    width: 80,
                    borderRadius: 50,
                    margin: 15
                  }}
                />
              </View>
              <View style={{ flexDirection: 'column' }}>
                <TouchableOpacity style={{ width: 120, height: 30, backgroundColor: '#c92a1e', justifyContent: 'center', alignItems: 'center' }} onPress={() => { DeleteData(item._id) }}>
                  <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>
                    Remove
                  </Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: '700' }}>
                  {item.name}
                </Text>
                <Text style={{ fontSize: 15, fontWeight: '700' }}>
                  {item.email}
                </Text>
                <Text style={{ fontSize: 12, fontWeight: '700' }}>
                  {item.courses}
                </Text>
              </View>
            </View>
          )
        }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})