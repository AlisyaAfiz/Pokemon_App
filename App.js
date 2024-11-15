import React from 'react';
import {View, Text, SectionList, StyleSheet, TouchableOpacity, StatusBar, Image, Button} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const datasource = [
  {data:[
      {key: 'Bulbasaur', image: require('./img/bulbasaur.png')},
      {key: 'Ivysaur', image: require('./img/ivysaur.png')}
    ],
    element: "Grass", bgColor: '#95e699', icon: 'leaf'},
  {data:[
      {key: 'Charmander', image: require('./img/charmander.png')},
      {key: 'Charmeleon', image: require('./img/charmeleon.png')}
    ],
    element: "Fire", bgColor: '#f78181', icon: 'flame'},
  {data:[
      {key: 'Squirtle', image: require('./img/squirtle.png')},
      {key: 'Wartortle', image: require('./img/wartortle.png')}
    ],
    element: "Water", bgColor: '#81d6f7', icon: 'water'}
];

const styles = StyleSheet.create({
  opacityStyle: {
    borderWidth: 1,
      padding: 20,
      flexDirection: 'row'
  },
  textStyle: {
    fontSize: 15,
      padding: 40,
      textAlignVertical: 'center',
      fontWeight: 'bold',
      flex: 1
  },
  headerText: {
    fontSize: 25,
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

const renderItem = ({item}) => {
  return (
      <TouchableOpacity style={styles.opacityStyle}>
        <Text style={styles.textStyle}>{item.key}</Text>
          <Image source={item.image} style={{width: 150, height: 210}}/>
      </TouchableOpacity>
  );
};

const App = () => {
  return (
      <View style={{margin: 20, marginTop: 60, marginBottom: 170}}>
      <View style={{width: 360, height: 60, alignSelf: 'center' }}>
          <Button title="Add Pokemon"/>
      </View>
      <View style={{borderWidth: 1, backgroundColor: '#fffbe8'}}>
          <StatusBar hidden={true}/>
        <SectionList sections={datasource} renderItem={renderItem}
                     renderSectionHeader={({section:{element, bgColor, icon}})=>(
                         <View style={{flexDirection: 'row', alignItems: 'center', borderWidth: 1, backgroundColor: bgColor}}>
                             <Icon name={icon} size={25} style={{marginLeft: 130}}/>
                             <Text style={styles.headerText}>{element}</Text>
                         </View>
                     )}/>
      </View>
      </View>
  );
};

export default App;
