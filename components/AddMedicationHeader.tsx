import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function AddMedicationHeader() {
    const router = useRouter()
    return (
        <View>
            <Image
                style={styles.consultImage}
                source={require('@/assets/images/consult.png')}
            />
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => router.back()}
            >
                <Ionicons
                    name="arrow-back"
                    size={24}
                    color="black"
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    consultImage: {
        height: 280,
        width: '100%',
    },
    backButton: {
        position: 'absolute',
        padding: 25,
    }
})