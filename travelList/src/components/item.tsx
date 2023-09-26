/* eslint-disable */

import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { CheckBox } from "react-native-elements";

function Item({ item, onDeleteItem, onPackedItem }:any) {

    return <View>
      <CheckBox  checked={item.item.packed} onPress={() => onPackedItem(item.item.id)}/>
      <Text style={item.item.packed ? { textDecorationLine:'line-through' } : {}}>{item.item.quantity} {item.item.description}</Text>
      <TouchableOpacity onPress={() => onDeleteItem(item.item.id)}><Text>❌</Text></TouchableOpacity>
    </View>;
  }
  export default Item