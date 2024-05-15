import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'

const CustomButton = ({title, onSubmit, disabled}) => {
    return (
        <View className="w-full justify-center items-center">
            <TouchableOpacity disabled={disabled} onPress={onSubmit} className={`w-full mt-10 h-14 rounded-3xl  justify-center items-center ${disabled ? 'disabled bg-gray-100 text-black' : 'bg-black'} `}>
                <Text className="text-white text-lg font-bold">
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
export default CustomButton
