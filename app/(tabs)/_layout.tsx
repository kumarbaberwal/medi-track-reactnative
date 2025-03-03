import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Tabs, useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/configs/FirebaseConfig";

export default function TabsLayout() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log(uid);
      setAuthenticated(true);
      // ...
    } else {
      // User is signed out
      // ...
      setAuthenticated(false);
    }
  });

  useEffect(() => {
    if (authenticated === false) {
      router.push("/login/logIn");
    }
  }, [authenticated]);
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
