import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false
            }}
        >
            <Tabs.Screen name='index' options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }: {
                    color: string; size: number;
                }) => {
                    return (
                        <Ionicons name="home" size={size} color={color} />
                    )
                }
            }} />
            <Tabs.Screen name='addnew' options={{
                tabBarLabel: 'Add New',
                tabBarIcon: ({ color, size }: {
                    color: string; size: number;
                }) => {
                    return (
                        <Ionicons name="add-circle-outline" size={size} color={color} />
                    )
                }
            }} />
            <Tabs.Screen name='profile' options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }: {
                    color: string; size: number;
                }) => {
                    return (
                        <Ionicons name="person" size={size} color={color} />
                    )
                }
            }} />
        </Tabs>
    )
}