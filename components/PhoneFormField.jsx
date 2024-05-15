import {View, Text, TextInput} from 'react-native'
import React from 'react'

const PhoneFormField = ({countryCode, phone, countryCodeChanged, phoneChanged}) => {
    return (
        <View className="flex-row gap-3 mt-3 w-full ">
            <TextInput
                className="w-[85px] px-4 py-[20px] bg-gray-300 rounded-xl text-gray-900 text-lg"
                onChangeText={countryCodeChanged}
                placeholder="Code"
                placeholderTextColor="gray"
                keyboardType={"numeric"}
                value={countryCode}
            />

            <TextInput
                className="flex-1 px-4 py-[20px] bg-gray-300 rounded-xl text-gray-900 text-lg"
                onChangeText={phoneChanged}
                placeholder="Mobile number"
                placeholderTextColor="gray"
                keyboardType={"number-pad"}
                value={phone}

            />
        </View>
    )
}
export default PhoneFormField
