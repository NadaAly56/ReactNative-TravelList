/* eslint-disable */

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffebb3',
    padding: 0,
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    textAlign: 'center',
    backgroundColor: '#f4a226',
    fontFamily: 'Monoton',
    fontSize: 50,
    textTransform: 'uppercase',
    fontWeight: '400',
    letterSpacing: -5,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  addForm: {
    backgroundColor: '#e5771f',
    paddingVertical: 12,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 0,
  },
  addFormControls: {
    marginVertical:15,
    width:'100%',
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around'
    },
  picker: {
    backgroundColor: '#ffebb3',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 32,
    },
  input: {
    backgroundColor: '#ffebb3',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 10,
    width: '50%',
    fontSize: 18,
    fontWeight: '500',
    color: '#5a3e2b',
    fontFamily: 'Quicksand',
    },
  addFormText: {
    marginRight: 16,
    fontSize: 20,
  },
  button: {
    backgroundColor: '#ffebb3',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  addButton: {
    textTransform: 'uppercase',
    backgroundColor: '#76c7ad',
  },
  buttonText: {
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: '700',
    color: '#5a3e2b',
    fontFamily: 'Quicksand',
  },
  list: {
    backgroundColor: '#5a3e2b',
    color: '#ffebb3',
    paddingVertical: 64,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionButton: {
    textTransform: 'uppercase',
    paddingVertical: 8,
    paddingHorizontal: 24,
    fontSize: 14,
    fontWeight: '700',
    marginHorizontal: 8,
  },
  itemList: {
    width: '80%',
    height: '90%',
    overflow: 'scroll',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  checkbox: {
    height: 40,
    width: 40,
    backgroundColor: '#e5771f',
  },
  listItemButton: {
    fontSize: 18,
    padding: 12,
    margin: 0,
  },
  stats: {
    backgroundColor: '#76c7ad',
    textAlign: 'center',
    fontWeight: '700',
    paddingVertical: 32,
  },
});

export default styles;
