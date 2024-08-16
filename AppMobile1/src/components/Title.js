import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function Title({ value }) {
    const styles = StyleSheet.create({
        container: {
            width: "85%",
            marginBottom: 40
        },
        titulo: {
            fontSize: 25,
        }
    });

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{value}</Text>
        </View>
    );
}

