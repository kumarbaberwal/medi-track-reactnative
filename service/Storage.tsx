import AsyncStorage from "@react-native-async-storage/async-storage";

export const setLocalStorage = async ({ key, value }: {
    key: string;
    value: JSON;
}) => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
}

export const getLocalStorage = async ({ key }: {
    key: string;
}) => {
    const result = await AsyncStorage.getItem(key);
    return JSON.parse(result!);
}