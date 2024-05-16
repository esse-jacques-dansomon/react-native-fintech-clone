import {View, Text} from 'react-native'
import React from 'react'
import {Stack, Tabs} from "expo-router";

const _Layout = () => {
    return (

        <Tabs>
            <Tabs.Screen name="home"  />
            <Tabs.Screen name="invest"  />
            <Tabs.Screen name="lifestyle"  />
            <Tabs.Screen name="transfers"  />
        </Tabs>

    )
}
export default _Layout
