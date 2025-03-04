import Colors from "@/constant/Colors";
import { useRouter } from "expo-router";
import { Alert, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/configs/FirebaseConfig";
import { useState } from "react";
import { setLocalStorage } from "@/service/Storage";


export default function SignIn() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSignIn = () => {


        if (!email || !password) {
            ToastAndroid.show("Please fill all details", ToastAndroid.BOTTOM);
            Alert.alert('Fields Missing', 'Please fill all details!');
        }

        signInWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                // Signed in 
                const user = userCredential.user;
                ToastAndroid.show("Login Successful!", ToastAndroid.BOTTOM);
                // Alert.alert("Login Successfull", '')
                await setLocalStorage({ key: 'user', value: user });
                router.push('/(tabs)');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                if (errorCode === 'auth/invalid-credential') {
                    ToastAndroid.show('Please provide valid email or password', ToastAndroid.BOTTOM);
                    Alert.alert('Login Failed', 'Please provide the correct email or password');
                }
            });
    }

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
            <View style={styles.textInputContainer}>
                <Text>
                    Email
                </Text>
                <TextInput placeholder="Email" style={styles.textInput}
                    onChangeText={(value) => setEmail(value)}
                />
            </View>
            <View style={styles.textInputContainer}>
                <Text>
                    Password
                </Text>
                <TextInput placeholder="Password"
                    style={styles.textInput}
                    secureTextEntry={true}
                    onChangeText={(value) => setPassword(value)}
                />
            </View>
            <TouchableOpacity style={styles.button}
                onPress={onSignIn}
            >
                <Text style={styles.buttonText}>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonCreate} onPress={() => router.push('/login/signUp')}>
                <Text style={styles.buttonCreateText}>
                    Create Account
                </Text>
            </TouchableOpacity>
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
    },
    textInput: {
        padding: 10,
        borderWidth: 1,
        fontSize: 17,
        borderRadius: 10,
        marginTop: 5,
        backgroundColor: 'white'
    },
    textInputContainer: {
        marginTop: 25,
    },
    button: {
        marginTop: 35,
        padding: 20,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 17,
        color: 'white',
        textAlign: 'center'
    },
    buttonCreate: {
        marginTop: 20,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
    },
    buttonCreateText: {
        fontSize: 17,
        color: Colors.PRIMARY,
        textAlign: 'center'
    }
});