import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import {BlurView} from "expo-blur";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {Ionicons} from "@expo/vector-icons";
import {router} from "expo-router";

const CustomHeader = () => {
    const {top} = useSafeAreaInsets();
    return (
        <BlurView intensity={80} tint={"default"} style={{paddingTop: top}} >
          <View className={`px-4 gap-x-2 h-[55px] flex-1 flex-row justify-center items-end pb-2`} >
              <TouchableOpacity onPress={()=> (router.push('/account'))} className={"h-10 w-10 rounded-[50px] bg-gray-300 justify-center items-center"}>
                  <Text className={"font-bold"}>EJ</Text>
              </TouchableOpacity>

              <View className={"h-10 rounded-3xl bg-white flex-1 flex-row gap-x-4 justify-center items-center"}>
                  <Ionicons name="search" size={20} color={""} />
                  <TextInput
                      className={"font-bold flex-1 mr-4"}
                  />
              </View>

              <View className={"flex-row gap-x-2"}>
                  <TouchableOpacity  onPress={()=> (router.push())} className={"h-10 w-10 rounded-[50px] bg-gray-300 justify-center items-center"}>
                      <Ionicons name={"stats-chart"} size={20} />
                  </TouchableOpacity>
                  <TouchableOpacity  onPress={()=> (router.push())} className={"h-10 w-10  rounded-[50px] bg-gray-300 justify-center items-center"}>
                      <Ionicons name={"card"} size={20} />
                  </TouchableOpacity>
              </View>
          </View>
        </BlurView>
    )
}
export default CustomHeader
