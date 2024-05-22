import {View, Text, TouchableOpacity} from 'react-native'
import React, {useEffect, useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {router} from "expo-router";
import * as Haptics from "expo-haptics";
import * as LocalAuthentication from "expo-local-authentication";
import Animated, {useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming} from "react-native-reanimated";


const Lock = () => {
    const [code, setCode] = useState([]);
    const codeLength = Array(6).fill(0)
    const offset = useSharedValue(0)


    useEffect(() => {
        if (code.length === 6) {
            if (code.join('') === '111111') {
                router.replace('/home');
                setCode([]);
            } else {
                offset.value = withSequence(
                    withTiming(-OFFSET, { duration: TIME / 2 }),
                    withRepeat(withTiming(OFFSET, { duration: TIME }), 4, true),
                    withTiming(0, { duration: TIME / 2 })
                );
                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
                setCode([]);
            }
        }
    }, [code]);

    const style = useAnimatedStyle(() => {
        return {
            transform: [{
                translateY: offset.value
            }]
        }
    })

    const OFFSET = 20;
    const TIME = 80;


    const onClear = () => {
        //clear last number
        if (code.length > 0) setCode(code.slice(0, code.length - 1))
    }

    const onBiometricAuthPress = async () => {
        const {success} = await LocalAuthentication.authenticateAsync();
        if (success) {
            router.replace('/home')
        } else {
            await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
            setCode([])
        }

    }

    return (<SafeAreaView className={"px-4  h-full"}>
        <View className={"flex-row justify-center items-center mt-20"}>
            <Text className={"text-xl font-bold"}>Welcome back Esse Jacques</Text>
        </View>

        <Animated.View style={style} className={"flex-row justify-center my-20"}>
            {codeLength.map((number, i) => (<View key={i}
                                                  className={`${code[i] ? 'bg-primary' : 'bg-gray-100'} flex-row items-center justify-center mx-3 h-4 w-4 rounded-[10px] `}>
            </View>))}
        </Animated.View>

        <View className={"justify-between gap-y-12"}>
            <View className={"flex-row justify-around"}>
                {[1, 2, 3].map((number, i) => (<TouchableOpacity onPress={() => setCode([...code, number])}>
                    <Text className={"text-3xl"}>{number}</Text>
                </TouchableOpacity>))}
            </View>
            <View className={"flex-row justify-around"}>
                {[4, 5, 6].map((number, i) => (<TouchableOpacity onPress={() => setCode([...code, number])}>
                    <Text className={"text-3xl"}>{number}</Text>
                </TouchableOpacity>))}
            </View>
            <View className={"flex-row justify-around"}>
                {[7, 8, 9].map((number, i) => (<TouchableOpacity onPress={() => setCode([...code, number])}>
                    <Text className={"text-3xl"}>{number}</Text>
                </TouchableOpacity>))}
            </View>
            <View className={"flex-row justify-around"}>
                <TouchableOpacity onPress={onBiometricAuthPress}>
                    <MaterialCommunityIcons name={"face-recognition"} size={25} color={'black'}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setCode([...code, 0])}>
                    <Text className={"text-3xl"}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={onClear}>
                    <MaterialCommunityIcons name={"backspace-outline"} size={25} color={'black'}/>
                </TouchableOpacity>
            </View>


            <View>

            </View>


        </View>
    </SafeAreaView>)
}
export default Lock
