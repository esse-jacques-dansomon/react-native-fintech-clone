import {View, Text, TouchableOpacity} from 'react-native'
import {Ionicons} from "@expo/vector-icons";

const RoundBtn = ({title, iconName, iconColor, bgColor}) => {
    return (
        <View className="flex justify-center items-center">
           <TouchableOpacity className="rounded-[100px] h-[50px] w-[50px] bg-gray-300 flex justify-center items-center">
                <Ionicons name={iconName} size={30} color={iconColor} />
           </TouchableOpacity>
            <Text className="mt-1 text-sm font-medium">{title}</Text>
        </View>
    )
}
export default RoundBtn
