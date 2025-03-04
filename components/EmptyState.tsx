import ConstantString from "@/constant/ConstantString";
import { Image, StyleSheet, Text, View } from "react-native";

export default function EmptyState() {
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
            <Text>
                {ConstantString.AddNewMediciationBtn}
            </Text>
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
    }
})