import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '@/constant/Colors';
import { useRouter } from 'expo-router';
const loginImage = require('./../../assets/images/login.png');

export default function Login() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <View>
                <Image source={loginImage} style={styles.image} />
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Stay on Track, Stay Healthy!
                </Text>
                <Text style={styles.subText}>
                    Track your meds, take control of your health. Stay consistent, Stay Confident
                </Text>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => router.push('/login/signin')}>
                    <Text style={styles.buttonText}>
                        Continue
                    </Text>
                </TouchableOpacity>
                <Text style={styles.termsAndConditions}>
                    Note: By Clicking continue button, you will agree to our terms and conditions
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 40,
    },
    image: {
        width: 210,
        height: 450,
        borderRadius: 20,
    },
    textContainer: {
        padding: 25,
        backgroundColor: Colors.PRIMARY,
        height: '100%',
        width: '100%',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    subText: {
        fontSize: 17,
        color: 'white',
        textAlign: 'center',
        marginTop: 20,
    },
    buttonContainer: {
        padding: 15,
        backgroundColor: 'white',
        marginTop: 25,
        borderRadius: 99,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 16,
        color: Colors.PRIMARY,
    },
    termsAndConditions: {
        color: 'white',
        marginTop: 4,
    }
})