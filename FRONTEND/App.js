import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StudentScreen from './Screens/StudentScreen';
import CourseDetailScreen from './Screens/CourseDetailScreen';
import CourseScreen from './Screens/CourseScreen';
import MainScreen from './Screens/MainScreen';
import StudentEntryScreen from './Screens/StudentEntryScreen';
import SignInScreen from './Screens/SignInScreen';
import Registered_Student from './Screens/Registered_Student';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Sign_In' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Main' component={MainScreen} />
        <Stack.Screen name='Sign_In' component={SignInScreen} />
        <Stack.Screen name='Reg_Student' component={Registered_Student} />
        <Stack.Screen name='Course' component={CourseScreen} />
        <Stack.Screen name='CourseDetail' component={CourseDetailScreen} />
        <Stack.Screen name='Students' component={StudentScreen} />
        <Stack.Screen name='StudentsEntry' component={StudentEntryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
