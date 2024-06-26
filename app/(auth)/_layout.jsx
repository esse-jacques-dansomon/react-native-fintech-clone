import React from 'react'
import {router, Stack} from "expo-router";
import {TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import {Colors} from "../../constants/Colors";

const _layout =()  => {
    return (
        <>
            <Stack>
                <Stack.Screen name="login" options={{
                    title: '',
                    headerBackTitle: '',
                    headerShadowVisible: false,
                    headerStyle: { backgroundColor: 'white' },
                    headerLeft: () => (
                        <TouchableOpacity onPress={router.back}>
                            <Ionicons name="arrow-back" size={34} color={Colors.dark.background} />
                        </TouchableOpacity>
                    ),}} />
                <Stack.Screen name="signup" options={{
                    title: '',
                    headerBackTitle: '',
                    headerShadowVisible: false,
                    headerStyle: { backgroundColor: Colors.light.background },
                    headerLeft: () => (
                        <TouchableOpacity onPress={router.back}>
                            <Ionicons name="arrow-back" size={34} color={Colors.dark.background} />
                        </TouchableOpacity>
                    ),
                }} />

                <Stack.Screen name="verify/[phone]" options={{
                    title: '',
                    headerBackTitle: '',
                    headerShadowVisible: false,
                    headerStyle: { backgroundColor: Colors.light.background },
                    headerLeft: () => (
                        <TouchableOpacity onPress={router.back}>
                            <Ionicons name="arrow-back" size={34} color={Colors.dark.background} />
                        </TouchableOpacity>
                    ),
                }} />
            </Stack>
        </>
    )
}

export default _layout
