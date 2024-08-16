import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import InputField from '../../src/components/InputField';
import Title from '../../src/components/Title';
import { useNavigation } from '@react-navigation/native';
import ButtonCustom from '../../src/components/Button';
import { TouchableOpacity } from 'react-native-web';

export default function Cadastro() {
    const [form, setForm] = useState({
        nome: "",
        email: "",
        senha: "",
        confirm_senha: ""
    });

    const handleChange = (field, value) => {
        setForm({
            ...form,
            [field]: value,
        });
    };

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Title value="CADASTRO" />
            <InputField
                label="Nome"
                placeholder="Digite seu Nome"
                formValue={form.nome}
                setFormValue={(value) => handleChange("nome", value)}
            />
            <InputField
                label="Email"
                placeholder="Digite seu email"
                formValue={form.email}
                setFormValue={(value) => handleChange("email", value)}
            />
            <InputField
                label="senha"
                placeholder="Digite sua senha"
                formValue={form.senha}
                setFormValue={(value) => handleChange("senha", value)}
                secureTextEntry={true}
            />
            <InputField
                label="Confirme a Senha"
                placeholder="Digite sua senha novamente"
                formValue={form.confirm_senha}
                setFormValue={(value) => handleChange("confirm_senha", value)}
                secureTextEntry={true}
            />
            <ButtonCustom title="Cadastro" onPress={() => { }} />
            <Text>Já tem cadsatro? Clique <TouchableOpacity onPress={() => navigation.push('Login')}>aqui</TouchableOpacity></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:"100%",
        flex:1,
        justifyContent:"center",
        alignItems: "center",
    }
})