import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import Api from '../services/Api'

export default function TelaCEP() {

  const [cep,setCep] = useState("")
  const [logradouro,setLogradouro] = useState("")
 
  async function buscarCEP(){


    if (cep === "" || !/^\d+$/.test(cep)) {
      Alert.alert("Cep inválido! Digite somente numeros");
      setCep("");
    }

    try{
      const response = await Api.get(`/${cep}/json/`)
      setLogradouro(response.data.logradouro)
    }catch(error){
      console.log("ERRO" + error)
    }

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digite seu cep...</Text>
      <TextInput
        style={styles.input}
        placeholder="Cep"
        onChangeText={(text) => setCep(text)}
      />
      <TextInput
        style={styles.input}
        value={logradouro}
        placeholder="Logradouro"
        onChangeText={(text) => setLogradouro(text)}
      />
      <Button title="Buscar" onPress={buscarCEP} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});
