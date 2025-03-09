import Colors from "@/constant/Colors";
import ConstantString from "@/constant/ConstantString";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function EmptyState() {

    const router = useRouter();
    return (
        <View
            style={styles.container}
        >
            <Image
                source={require('./../assets/images/medicine.png')}
                style={styles.medicineImage}
            />
            <Text
                style={styles.medicineText}
            >
                {ConstantString.NoMedication}
            </Text>
            <Text style={styles.medicationSubText}>
                {ConstantString.MedicationSubText}
            </Text>
            <TouchableOpacity
                style={styles.addNewMedicationBtn}
                onPress={() => router.push('/addNewMedication/addNewMedication')}
            >
                <Text style={styles.addNewMedicationBtnText}>
                    {ConstantString.AddNewMediciationBtn}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        alignItems: 'center',
    },
    medicineImage: {
        width: 120,
        height: 120,
    },
    medicineText: {
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: 30,
    },
    medicationSubText: {
        fontSize: 16,
        color: Colors.DARK_GRAY,
        textAlign: 'center',
        marginTop: 20,
    },
    addNewMedicationBtn: {
        backgroundColor: Colors.PRIMARY,
        padding: 15,
        borderRadius: 10,
        marginTop: 30,
        width: '100%',
    },
    addNewMedicationBtnText: {
        textAlign: 'center',
        fontSize: 17,
        color: 'white',
    }
})