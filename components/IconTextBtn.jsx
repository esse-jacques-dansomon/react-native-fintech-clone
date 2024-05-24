import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons";

const IconTextBtn = ({iconName, title}) => {
    return (
        <TouchableOpacity className={"flex-row items-center px-3 py-3"}>
            <Ionicons name={iconName} size={25} color={"white"} />
            <Text className={"text-white ml-4 text-xl font-medium"}>{title}</Text>
        </TouchableOpacity>
    )
}
export default IconTextBtn
