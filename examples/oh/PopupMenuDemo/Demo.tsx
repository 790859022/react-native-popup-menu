import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useState, useMemo, useCallback } from 'react'
import BasicExample from './BasicExample'
import AdvancedExample from './AdvancedExample'

const demos = [
    { Component: BasicExample, name: 'Basic example', key: "BasicExample" },
    { Component: AdvancedExample, name: 'Advanced example'， key: 'AdvancedExample' },
    // { Component: ControlledExample, name: 'Controlled example' },
    // { Component: MenuMethodsExample, name: 'Controlling menu using menu methods' },
    // { Component: ExtensionExample, name: 'Extensions example' },
    // { Component: ModalExample, name: 'Modal example' },
    // { Component: StylingExample, name: 'Styling example' },
    // { Component: TouchableExample, name: 'Touchable config example' },
    // { Component: NonRootExample, name: 'Non root example' },
    // { Component: CloseOnBackExample, name: 'Close on back button press example' },
    // { Component: FlatListExample, name: 'Using FlatList' },
    // { Component: InFlatListExample, name: 'Menu in FlatList' },
    // { Component: PopoverExample, name: 'Popover renderer' },
];

export default function Demo() {
    const [currentDemoKey, setCurrentDemoKey] = useState<string>('')
    const currentDemo = useMemo(() => {
        switch(currentDemoKey){
            case 'BasicExample': {
                return <BasicExample />
            }
            case 'AdvancedExample': {
                return <AdvancedExample />
            }

            default : {
                return <Text>Select Demo</Text>
            }
        }
    }, [currentDemoKey])

    const demoNavClickHandle = useCallback((item) => setCurrentDemoKey(item.key), [currentDemo])

    const demoMenu = useMemo(() => demos.map(item => (<Text onPress={() => demoNavClickHandle(item)}>{item.name}</Text>)), [])
    
    return (
        <View>
            <View style={styles.demoNav}>{demoMenu}</View>
            <View style={styles.demoPanel}>{currentDemo}</View>
            <View style={styles.backButtonPanel}><Button title='Back'></Button></View>
        </View>
    )
}

const styles = StyleSheet.create({
    demoNav: {
        padding: 24
    },
    demoPanel: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        zIndex: 99,
        elevation: 99,
        backgroundColor: '#fff'
    },
    backButtonPanel: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        zIndex: 100,
        elevation: 100,
        width: '100%',
        paddingBottom: 10,
        alignItems: 'center'
    }
})
