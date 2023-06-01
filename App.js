import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View , Text, TextInput} from 'react-native';
import MaskInput from 'react-native-mask-input';




 

export default function App() {
  const [phone, setPhone] = useState('');

  const CPF_MASK = [/\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, "-", /\d/, /\d/]
  const CNPJ_MASK = [/\d/, /\d/, ".", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, "/", /\d/, /\d/, /\d/, "-", /\d/, /\d/]
  const [value, setValue] = React.useState('');

  

  return (
    <View style={styles.container}>
      <Text >Cadastro</Text>
      <Text >Nome</Text>
      <TextInput style={styles.input}></TextInput>
      <Text >Telefone</Text>
      <MaskInput
        style={styles.input}
        value={phone}
        onChangeText={(masked, unmasked) => {
          setPhone(masked); 

         
          console.log(masked); // (99) 99999-9999
          console.log(unmasked); // 99999999999
        }}
        mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      />
      <Text >Documento</Text>
        <MaskInput
        style={styles.input}
      value={value}
      onChangeText={setValue}
      mask={(text) => {
        if (text.replace(/\D+/g, "").length <= 11) {
          return CPF_MASK
        } else {
          return CNPJ_MASK
        }
      }}
    />
    

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '90%',
    height:40,
    backgroundColor:'#DDDD',
    borderRadius: 10,
    fontSize:20,
    padding: 5
  }
});
