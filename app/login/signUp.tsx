import Colors from "@/constant/Colors";
import { useRouter } from "expo-router";
import { Alert, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "@/configs/FirebaseConfig";

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const onCreateAccount = () => {

    if (!email || !password || !username) {
      ToastAndroid.show("Please fill all details", ToastAndroid.BOTTOM);
      Alert.alert('Fields Missing', 'Please fill all details!');
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        await updateProfile(user, {
          displayName: username
        });
        router.push('/(tabs)');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        if (errorCode === 'auth/email-already-in-use') {
          ToastAndroid.show('Email already exists', ToastAndroid.BOTTOM);
          Alert.alert('Register Failed', 'Email already exists!');
        }
        // ..
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>
        Create New Account
      </Text>
      <View style={styles.textInputContainer}>
        <Text>
          Full Name
        </Text>
        <TextInput placeholder="Full Name"
          style={styles.textInput}
          onChangeText={(value) => setUsername(value)}
        />
      </View>
      <View style={styles.textInputContainer}>
        <Text>
          Email
        </Text>
        <TextInput
          placeholder="Email"
          style={styles.textInput}
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
        onPress={onCreateAccount}
      >
        <Text style={styles.buttonText}>
          Create Account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonCreate} onPress={() => router.push('/login/signIn')}>
        <Text style={styles.buttonCreateText}>
          Already Account? Sign In
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