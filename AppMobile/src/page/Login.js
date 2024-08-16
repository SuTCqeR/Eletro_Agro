import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import InputField from '../../src/components/InputField';
import Title from '../../src/components/Title';
import ButtonCustom from '../../src/components/Button';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

export default function Login() {
    const [form, setForm] = useState({
        email: "",
        senha: "",
    });

    const [error, setError] = useState(null)

    const handleChange = (field, value) => {
        setForm({
            ...form,
            [field]: value,
        });
    };

    const navigation = useNavigation();

    async function sendForm({formData}) {
        try {
            const response = await fetch("http://localhost/api/login", {
                method: "POST",
                body: formData
            })
    
            const data = await response.json()
    
            if (data.status === 'success') {
                localStorage.setItem('sessionId', data.sessionId)
                navigation.push('Home');
            } else {
                setError(data.message)
            }
        } catch(error) {
            setError('Erro ao enviar formulario')
        }
    }

    function handleLogin() {
        const email = form.email
        const senha = form.senha
        const formData = new FormData();

        formData.append('email', email)
        formData.append('senha', senha)

        sendForm({ formData:formData })
    }

    return (
        <View style={styles.container}>
            <Title value="LOGIN" />
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
            <ButtonCustom title="Login" onPress={handleLogin}/>
            {error && <Text style={styles.error}>{error}</Text>}
            <Text>Não tem cadsatro? Clique <TouchableOpacity onPress={() => navigation.push('Cadastro')}>aqui</TouchableOpacity></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:"100%",
        flex:1,
        justifyContent:"center",
        alignItems: "center",
    },
    error: {
        color: 'red',
        fontSize: 15
    }
})