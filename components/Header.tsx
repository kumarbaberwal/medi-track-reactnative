import { getLocalStorage, removeLocalStorage } from "@/service/Storage";
import { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function Header() {

    interface User {
        displayName: string;
        // Add other properties if needed
    }

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        getUserDetails();
    }, []);

    const getUserDetails = async () => {
        const userInfo = await getLocalStorage({ key: 'user' });
        console.log(userInfo);
        setUser(userInfo);
    }
    return (
        <View>
            <View
                style={styles.container}
            >
                <Image source={require('./../assets/images/smiley.png')}
                    style={styles.smiley}
                />
                <Text
                    style={styles.headerText}
                >
                    Hello! {user?.displayName}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    smiley: {
        width: 40,
        height: 45,
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
    }
})