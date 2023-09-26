/* eslint-disable */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import myStyles from './styles/style';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Logo from './components/logo';
import Form from './components/form';
import PackingList from './components/packingList';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const [items, setItems] = useState<any>([])
  const [isOpen, setIsOpen] = useState(false)

  const handleAddItems = (newItem:any)=>{
    setItems((item:any)=> [...item, newItem])
  }

  const handleDeleteItem = (itemId:any)=>{ 
    setItems((items:any) => items.filter((item:any)=> item.id !== itemId))
  }

  const handlePackedItem = (itemId:any) => {
    setItems((items:any)=> items.map((item:any)=> item.id === itemId ?
       {...item, packed: !item.packed}: item))
  }

  const handleClearList = ()=> {
     setIsOpen(true)
    // if(isOpen) setItems([])
  }
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <Logo />
        <Form onAddItem={handleAddItems} />
        <PackingList items={items} onDeleteItem={handleDeleteItem} onPackedItem={handlePackedItem} onClearList={handleClearList} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
