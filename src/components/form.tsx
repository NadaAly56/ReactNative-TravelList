/* eslint-disable */

import { FormEvent, useState } from "react"
import { Button, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native"
import { Picker } from '@react-native-picker/picker';

import styles from "../styles/style"

function Form({onAddItem}: any){
    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState(1)
  
    const handleSubmit = ()=>{
      if (!description) return
      const newItem = {quantity:quantity, description:description, id: Date.now(), packed:false}
      onAddItem(newItem)
      setDescription('')
      setQuantity(1)
    
    }
    return <View style={styles.addForm}>
      
      <Text style={styles.addFormText}>What do you need for your 👌✨ trip?</Text>
      <View style={styles.addFormControls}>
      <Picker style={styles.picker}
        selectedValue={quantity}
        onValueChange={(itemValue:number, itemIndex:number) => setQuantity(itemValue)}
        placeholder="Quantity"
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
          <Picker.Item label={i.toString()} value={i} key={i} />
        ))}
      </Picker>
        <TextInput style={styles.input} placeholder="Item...." value={description}  onChangeText={(text) => setDescription(text)}></TextInput>
        <TouchableOpacity style={[styles.addButton, styles.button]} onPress={handleSubmit}>
            <Text style={styles.buttonText}>ADD</Text>
        </TouchableOpacity>
      </View>
      
      
    </View>
  }
export default Form