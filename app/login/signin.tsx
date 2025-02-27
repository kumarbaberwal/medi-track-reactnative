import Colors from "@/constant/Colors";
import { StyleSheet, Text, View } from "react-native";

export default function Signup() {
    return (
        <View style={styles.container}>
            <Text style={styles.textHeader}>
                Let's Sign You In
            </Text>
            <Text style={styles.textSubHeader}>
                Welcome Back
            </Text>
            <Text style={styles.textSubHeader}>
                You've been missed !
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 25,
    },
    textHeader: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 15,
    },
    textSubHeader: {
        marginTop: 10,
        color: Colors.GRAY,
        fontSize: 30,
    }
})