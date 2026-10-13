import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { db } from './src/firebaseConnection';
import { collection, doc, getDoc, onSnapshot, setDoc, addDoc } from 'firebase/firestore';


export default function App() {

  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [cargo, setCargo] = useState("")

  const [showForm, setShowForm] = useState(true)

  useEffect(() => {

    async function getDados() {
      // const docref = doc(db, "user", "1")

      // getDoc(docref).then((snapshot) => {
      //   setNome(snapshot.data()?.nome)
      //     .catch((err) => {
      //       console.log("error: ")
      //       console.log(err)
      //     })
      // })

      // onSnapshot(doc(db, "users", "1"), (doc) => {
      //   setNome(doc.data()?.nome)
      // })
    }
    getDados()
  }, [])

  async function handleRegister() {
    // await setDoc(doc(db, "users", "1"), {
    //   nome: "João da Silva",
    //   idade: "20",
    //   email: "joao@gmail.com",
    //   senha: "123456",
    // })

    await addDoc(collection(db, "users"), {
      nome: nome,
      idade: idade,
      cargo: cargo,
    })
    setNome("")
    setIdade("")
    setCargo("")
  }

  function handleToggle() {
    setShowForm(!showForm)
  }

  return (
    <View style={styles.container}>
      {showForm && (
        <View>
          <Text style={styles.label}>Nome:</Text>
          <TextInput style={styles.input}
            placeholder='Digite seu nome...'
            value={nome}
            onChangeText={(text) => setNome(text)}
          />

          <Text style={styles.label}>TextInputdade:</Text>
          <TextInput style={styles.input}
            placeholder='Digite seu idade...'
            value={idade}
            onChangeText={(text) => setIdade(text)}
          />

          <Text style={styles.label}>Cargo:</Text>
          <TextInput style={styles.input}
            placeholder='Digite seu cargo...'
            value={cargo}
            onChangeText={(text) => setCargo(text)}
          />

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Adicionar</Text>
          </TouchableOpacity>

        </View>
      )}
      <TouchableOpacity style={styles.button} onPress={handleToggle}>
            <Text style={styles.buttonText}>{showForm ? "Esconder formulário" : "Mostrar formulário"}</Text>
          </TouchableOpacity>
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
  button: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    color: '#000',
    marginBottom: 4,
    marginLeft: 8,
  },
  input: {
    borderWidth: 1,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
  },
});
