import React from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";

export default function InputField({ placeholder, label, formValue, setFormValue, secureTextEntry = false }) {

    const styles = StyleSheet.create({
        container: {
            width: "85%",
            marginBottom: 15,
        },
        input: {
            borderBottomWidth: 1,
            padding: 2,
            marginTop: 5,
        }
    });

    return (
        <View style={styles.container}>
            <Text>{label}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={setFormValue}
                value={formValue}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
}
