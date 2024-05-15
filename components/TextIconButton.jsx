import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons";

const TextIconButton = ({title, iconName, iconColor, iconSize}) => {
    return (
        <>
            <TouchableOpacity className=" w-full bg-gray-300 h-14 rounded-[100px] flex-row items-center justify-center my-3">
                <Ionicons size={iconSize}  className="mx-2" name={iconName} iconColor={iconColor} />
                <Text className="text-lg ml-2">{title}</Text>
            </TouchableOpacity>
        </>
    )
}
export default TextIconButton
