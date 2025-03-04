import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Redirect, Tabs, useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/configs/FirebaseConfig";
import { getLocalStorage } from "@/service/Storage";

export default function TabsLayout() {
    const router = useRouter();

    const getUser = async () => {
        const userInfo = await getLocalStorage({ key: 'user' });
        if (!userInfo) {
            router.replace('/login/logIn');
        }
    }

    useEffect(() => {
        getUser();
    }, []);
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }: { color: string; size: number }) => {
                        return <Ionicons name="home" size={size} color={color} />;
                    },
                }}
            />
            <Tabs.Screen
                name="addnew"
                options={{
                    tabBarLabel: "Add New",
                    tabBarIcon: ({ color, size }: { color: string; size: number }) => {
                        return (
                            <Ionicons name="add-circle-outline" size={size} color={color} />
                        );
                    },
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color, size }: { color: string; size: number }) => {
                        return <Ionicons name="person" size={size} color={color} />;
                    },
                }}
            />
        </Tabs>
    );
}
