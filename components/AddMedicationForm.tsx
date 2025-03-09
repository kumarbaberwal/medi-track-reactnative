import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constant/Colors'
import { TypeList } from '@/constant/Options'

export default function AddMedicationForm() {
    interface FormData {
        Name?: string;
        Type?: { icon: string, name: string };
    }

    const [formData, setFormData] = useState<FormData>({});
    const onHandleInputChange = ({ field, value }: {
        field: any; value: any;
    }) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))

        console.log(formData)
    }
    return (
        <View
            style={styles.container}
        >
            <Text
                style={styles.addMedicationText}
            >
                Add New Medication
            </Text>
            <View
                style={styles.inputGroup}
            >
                {/* Form */}
                <Ionicons
                    name='medkit-outline'
                    size={24}
                    color={'black'}
                    style={styles.icon}
                />
                <TextInput
                    placeholder='Medicine name'
                    style={styles.textInput}
                    onChangeText={(value) => onHandleInputChange({ field: 'Name', value: value })}
                />
            </View>
            {/* Type List */}
            <FlatList
                data={TypeList}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={
                    { marginTop: 15, }
                }
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={[styles.inputGroup, { marginRight: 10, }, { backgroundColor: formData.Type && item.name === formData.Type.name ? Colors.PRIMARY : 'white' }]}
                        onPress={() => onHandleInputChange({ field: 'Type', value: item })}
                    >
                        <Text
                            style={styles.typeText}
                        >
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 25,
    },
    addMedicationText: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    inputGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 7,
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.LIGHT_GRAY_BORDER,
    },
    textInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
    },
    icon: {
        color: Colors.PRIMARY,
        borderRightWidth: 1,
        paddingRight: 12,
        borderColor: Colors.GRAY,
    },
    typeText: {
        fontSize: 16,
    }
})