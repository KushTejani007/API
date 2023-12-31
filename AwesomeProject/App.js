

import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [lenderName, setLenderName] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const[data,setdata]=useState(undefined);
  
  const getdata=async()=>{
    //api call
    // const url="https://jsonplaceholder.typicode.com/posts/1";
    const url="http://localhost:3000/users";
    let result= await fetch(url);
    result=await result.json();
    console.warn(result);
    setdata(result);
  }
// useEffect(()=>{
//   getdata();
// },[])


  return (
    <View style={styles.container}>
      <Text>Lender name: {lenderName}</Text>
      
      <TextInput
        style={styles.input}
        onChangeText={text => setLenderName(text)}
        placeholder="From..."
      />

      <Text>Receiver Name: {receiverName}</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setReceiverName(text)}
        placeholder="To..."
      />

      <Text>Amount: {amount}</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setAmount(text)}
        placeholder="₹ "
      />

      <Text>Date: {date}</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setDate(text)}
        placeholder="DD/MM/YY"
      />

      <Button
        color="black"
        style={styles.button}
        title="Submit"
        onPress={getdata}
      />
      {
        data?
        <View>
        <Text>id:{data.id}</Text>
        </View>:
        null
      }
      
    </View>
    
  
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    margin: 20,
    marginTop: 35,
    borderRadius: 30,
  },
  input: {
    marginRight: 20,
    padding: 10,
    width: 200,
    borderWidth: 1,
    height: 40,
    borderRadius: 10,
    margin: 10,
  },
  button: {
    backgroundColor: 'black',
  },

  
});
