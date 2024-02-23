import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Button } from 'react-native';
import Menu from 'react-native-popup-menu';

import Example from './Example';
import BasicExample from './BasicExample';
import ControlledExample from './ControlledExample';
import ExtensionExample from './ExtensionExample';
import ModalExample from './ModalExample';
import StylingExample from './StylingExample';
import NonRootExample from './NonRootExample';
import TouchableExample from './TouchableExample';
import MenuMethodsExample from './MenuMethodsExample';
import CloseOnBackExample from './CloseOnBackExample';
import FlatListExample from './FlatListExample';
import InFlatListExample from './InFlatListExample';
import PopoverExample from './PopoverExample';

const demos = [
  { Component: BasicExample, name: 'Basic example' },
  { Component: Example, name: 'Advanced example' },
  { Component: ControlledExample, name: 'Controlled example' },
  { Component: MenuMethodsExample, name: 'Controlling menu using menu methods' },
  { Component: ExtensionExample, name: 'Extensions example' },
  { Component: ModalExample, name: 'Modal example' },
  { Component: StylingExample, name: 'Styling example' },
  { Component: TouchableExample, name: 'Touchable config example' },
  { Component: NonRootExample, name: 'Non root example' },
  { Component: CloseOnBackExample, name: 'Close on back button press example' },
  { Component: FlatListExample, name: 'Using FlatList' },
  { Component: InFlatListExample, name: 'Menu in FlatList' },
  { Component: PopoverExample, name: 'Popover renderer' },
];

// show debug messages for demos.
Menu.debug = true;

export default class Demo extends Component {
  constructor(props, ctx) {
    super(props, ctx);
    this.state = {
      selected: undefined,
      showText: '?????'
    };
  }
  buttonClickHandle(key){
    this.setState({
      showText: key
    })
  }
  backButtonClickHandle(){
    this.setState({
      showText: '?????'
    })
  }
  render() {

    if (this.state.selected) {
      return <this.state.selected/>;
    }
    return (
        <View style={styles.container}>
          <View>
            <Text>Select example:</Text>
            {demos.map(this.renderDemo, this)}
          </View>
          <Text onPress={() => this.buttonClickHandle('one')}> button 1 </Text>
          <Text onPress={() => this.buttonClickHandle('two')}> button 2 </Text>
          <Text>{this.state.showText}</Text>
          {
            this.state.showText === 'one' && <View style={styles.panel}><Text style={styles.buttonTextOne}>我是按钮 one</Text></View>
          }
          {
            this.state.showText === 'two' && <View style={styles.panel}><Text style={styles.buttonTextTwo}>我是按钮 two</Text></View>
          }
          <View style={styles.backButtonPanel}>
          <Button title="Back" mode="contained" style={{ width: 100 }} onPress={() => this.backButtonClickHandle() }></Button>
          </View>
        </View>
    );
  }

  renderDemo(demo, idx) {
    const type = idx + '. ' + demo.name;
    return (
      <TouchableHighlight key={type} onPress={()=> this.setState({selected: demo.Component})}>
        <View>
          <Text>{type}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    // backgroundColor: '#f00',
    // padding: 24
  },
  panel: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 0, 0, 0.8)',
    zIndex: 99,
    elevation: 99,
    alignItems: 'center'
  },
  buttonTextOne: {
    // backgroundColor: '#f00',
    // position: 'absolute',
    // top:0,
    // left: 0
  },
  buttonTextTwo: {
    // backgroundColor: '#0f0',
    // position: 'absolute',
    // top:10,
    // left: 10
    // right:0,
    // bottom: 0
  },
  backButtonPanel:{
    position: 'absolute',
    width: '100%',
    left: 0,
    bottom: 10,
    // backgroundColor: '#fff',
    zIndex: 100,
    elevation: 100,
    // flexDirection:'column',
    alignItems:'center',
    // justifyContent:'center',
  }
});
