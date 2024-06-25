import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MantraScreen from '../SCREENS/Daily/MantraScreen/MantraScreen';
import StartDayScreen from '../SCREENS/Daily/StartDayScreen/StartDayScreen';
import DayExerciceScreen from '../SCREENS/Daily/DayExerciceScreen/DayExerciceScreen';
import QuestionsScreen from '../SCREENS/Daily/QuestionsScreen/QuestionsScreen';
import FeelingsScreen from '../SCREENS/Daily/FeelingsScreen/FeelingsScreen';
import DailyDiariesScreen from '../SCREENS/Daily/DailyDiariesScreen/DailyDiariesScreen';
import SummaryScreen from '../SCREENS/Daily/SummaryScreen/SummaryScreen';
import NightExerciceScreen from '../SCREENS/Daily/NightExerciceScreen/NightExerciceScreen';


const Stack = createStackNavigator();

export default function DailyScreenNav() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="StartDay" component={StartDayScreen} />
            <Stack.Screen name="Mantra" component={MantraScreen} />
            <Stack.Screen name="DayExercice" component={DayExerciceScreen} />
            <Stack.Screen name="Questions" component={QuestionsScreen} />
            <Stack.Screen name="Feelings" component={FeelingsScreen} />
            <Stack.Screen name="Diaries" component={DailyDiariesScreen} />
            <Stack.Screen name="NightExercice" component={NightExerciceScreen} />
            <Stack.Screen name="Summary" component={SummaryScreen} />

        </Stack.Navigator>
    )
}