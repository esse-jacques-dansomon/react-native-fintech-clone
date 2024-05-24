import {View, Text, ScrollView} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {BlurView} from "expo-blur";
import {Ionicons} from "@expo/vector-icons";
import IconTextBtn from "../../components/IconTextBtn";

const Account = () => {
    return (
        <BlurView intensity={100} className={"flex-1 bg-white"}>
            <SafeAreaView className={"flex-1 pt-14 px-4"}>
                <ScrollView className={""}>
                    <View className={"w-full items-center "}>
                        <View className={"h-20 w-20 rounded-[100px] bg-black flex-row  items-center justify-center mb-2"}>
                            <Ionicons name={"person"} color={"white"} className={"w-full h-full bg-white"} size={50} />
                        </View>
                        <Text className={"text-white text-2xl font-bold my-3"}>Esse Jacques</Text>
                    </View>

                    <View className={"bg-gray-700 rounded-[30px] flex px-3 py-3 my-4"}>
                        <IconTextBtn iconName="log-out" title="Log out" />
                        <IconTextBtn iconName="person" title="Account" />
                        <IconTextBtn iconName="bulb" title="Learn" />
                        <IconTextBtn iconName="log-out" title="Log out" />
                        <IconTextBtn iconName="megaphone" title="Log out" />
                    </View>


                    <View className={"bg-gray-700 rounded-[30px] flex px-3 py-3 mt-2"}>
                        <IconTextBtn iconName="logo-apple" title="Default" />
                        <IconTextBtn iconName="moon" title="Dark" />
                        <IconTextBtn iconName="sunny" title="Vivid" />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </BlurView>
    )
}
export default Account
