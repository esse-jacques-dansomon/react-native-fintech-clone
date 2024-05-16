import {View, Text} from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons";

const Transaction = ({transaction}) => {
    return (
        <View key={transaction.id}
              className="flex-row flex justify-between items-center w-full h-16 bg-white mt-1 ">
            <View className={"ml-4 flex-row justify-center items-center "}>
                <View className="rounded-[100px] h-12 w-12 bg-gray-300 justify-center items-center">
                    <Ionicons name={transaction.type === 'deposit' ? 'remove' : 'add'} size={20} className={"font-bold"} />
                </View>
                <View className={"ml-3 flex gap-y-1"}>
                    <Text className="text-[14px] font-bold">{transaction.name}</Text>
                    <Text className="text-[12px] text-gray-500">{transaction.date}</Text>
                </View>
            </View>

            <Text
                className="mr-4 text-[14px]">{(transaction.type === 'deposit' ? '-' : '') + transaction.amount + '$'}</Text>

        </View>
    )
}
export default Transaction
