/* eslint-disable */
import {useState} from 'react';
import Item from './item';
import {Picker} from '@react-native-picker/picker';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import styles from '../styles/style';

function PackingList({items, onDeleteItem, onPackedItem, onClearList}: any) {
  const [sortBy, setSortBy] = useState('input');
  let sortedItems;
  if (sortBy === 'input') sortedItems = items;
  else if (sortBy === 'description')
    sortedItems = items
      .slice()
      .sort((a: any, b: any) => a.description.localeCompare(b.description));
  else
    sortedItems = items
      .slice()
      .sort((a: any, b: any) => Number(a.packed) - Number(b.packed));

  return (
    <View >
      <View >
        <FlatList
        data={sortedItems}
        renderItem={(item)=><Item
            item={item}
            key={item.item.id}
            onDeleteItem={onDeleteItem}
            onPackedItem={onPackedItem}
          />}></FlatList>
        
      </View>
      {items.length ? (
        <View>
          <Picker
            style={styles.actionButton}
            selectedValue={sortBy}
            onValueChange={val => setSortBy(val)}>
            <Picker.Item value="input" label="Sort by input order" />
            <Picker.Item value="description" label="Sort by description" />
            <Picker.Item value="packed" label="Sort by packed statue" />
          </Picker>
          <TouchableOpacity style={styles.actionButton} onPress={onClearList}>
            <Text>Clear List</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}
export default PackingList;
