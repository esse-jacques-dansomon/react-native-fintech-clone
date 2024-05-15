import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {ResizeMode, Video} from "expo-av";
import {useAssets} from "expo-asset";
import {Link} from "expo-router";

const Index = () => {

    const [assets] = useAssets([require('@/assets/videos/intro.mp4')]);
    return (
        <View className={"h-full w-full"}>
            {assets &&
                (
                    <Video
                        className={"w-full h-full absolute"}
                        source={{uri: assets[0].uri}}
                        // rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode={ResizeMode.COVER}
                        shouldPlay={true}
                        isLooping={true}
                    />
                )
            }

            <View className={" w-full h-full items-center justify-between my-10 p-6 border-secondary"}>
                <Text className={"text-3xl text-white font-bold mt-7 "}>
                    READY TO CHANGE YOUR WAY TO MONEY ?
                </Text>

                <View className={"flex-row gap-3 items-center justify-between mb-14"}>
                    <Link
                        className="w-1/2 h-16 rounded-[100px] bg-black-100"
                        href={'/login'}
                        asChild>
                        <TouchableOpacity className={"justify-center items-center"}>
                            <Text className="text-white text-xl font-bold">Log in</Text>
                        </TouchableOpacity>
                    </Link>
                    <Link
                        className="w-1/2 h-16 rounded-[100px] bg-white"
                        href={'/signup'}
                        asChild>
                        <TouchableOpacity className={"justify-center items-center"}>
                            <Text className="text-black text-xl font-bold">Sign up</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>



        </View>


    )
}
export default Index
