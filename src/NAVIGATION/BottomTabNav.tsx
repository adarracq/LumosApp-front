import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../SCREENS/ProfileScreen/ProfileScreen';
import DiariesScreen from '../SCREENS/DiariesScreen/DiariesScreen';
import ReportsScreen from '../SCREENS/ReportsScreen/ReportsScreen';
import TabBarElement from '../COMPONENTS/TabBarElement';
import Colors from '../CONSTANTS/Colors';
import { StyleSheet } from 'react-native';
import DailyScreen from '../SCREENS/Daily/DailyScreen';
import ExercicesScreen from '../SCREENS/ExercicesScreen/ExercicesScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNav() {
    return (
        <Tab.Navigator
            initialRouteName="Daily"
            screenOptions={{
                tabBarStyle: { ...styles.tabBarStyle },
                headerShown: false,
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name="Exercices"
                component={ExercicesScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        TabBarElement({
                            title: 'Exercices',
                            focused: focused,
                            name: 'exercices'
                        })
                    ),

                }}
            />
            <Tab.Screen
                name="Diaries"
                component={DiariesScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        TabBarElement({
                            title: 'Journaux',
                            focused: focused,
                            name: 'diaries'
                        })
                    ),

                }}
            />
            <Tab.Screen
                name="Daily"
                component={DailyScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        TabBarElement({
                            title: 'Suivi',
                            focused: focused,
                            name: 'daily'
                        })
                    ),

                }}
            />
            <Tab.Screen
                name="Bilan"
                component={ReportsScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        TabBarElement({
                            title: 'Bilan',
                            focused: focused,
                            name: 'bilan'
                        })
                    ),

                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        TabBarElement({
                            title: 'Profil',
                            focused: focused,
                            name: 'profile'
                        })
                    ),

                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBarStyle: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
        height: 80,
        borderRadius: 15,
        backgroundColor: Colors.black,
    },
})