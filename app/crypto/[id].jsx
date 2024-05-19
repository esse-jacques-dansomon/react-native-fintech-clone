import {View, Text, ScrollView, SectionList, Image, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import {Stack, useLocalSearchParams} from "expo-router";
import {useHeaderHeight} from "@react-navigation/elements";
import {useQuery} from "@tanstack/react-query";
import {Ionicons} from "@expo/vector-icons";

const Details = () => {
    const {id} = useLocalSearchParams();
    const [activeIndex, setActiveIndex] = useState(0);
    const headerHeight = useHeaderHeight();

    const {data} = useQuery({
        queryKey: ['info', id],
        queryFn: async () => {
            const infos = await fetch(`/api/info?ids=${id}`).then((res) => res.json())
            return infos[id]
        },
        enabled: !!id,
    });

    console.log("Details", data)
    return (
        <>
            <Stack.Screen options={{title: "Bitcoin"}}/>
            <SectionList
                // contentContainerStyle={{paddingTop: headerHeight, paddingBottom: headerHeight}}
                contentInsetAdjustmentBehavior={"automatic"}
                sections={[{data: [{title: 'chart'}]}]}
                ListHeaderComponent={() => (
                    <>
                        <View className={"px-4"}>
                            <View className={"flex-row justify-between items-center"}>
                                <Text className={"text-xl h-full font-bold my-3 pt-2 text-gray-100"}>{data.name}</Text>
                                <Image
                                    source={{uri: data.logo}}
                                    className={"w-[40px] h-[40px]"}
                                />
                            </View>
                            <View className={"flex-row my-4 gap-3"}>
                                <TouchableOpacity
                                    className={"px-3 flex-row items-center justify-between bg-blue-900 h-[35px] w-[85px] rounded-3xl"}>
                                    <Ionicons name={"add"} size={20} color={"white"}/>
                                    <Text className={"text-sm font-bold text-white "}>Buy</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    className={"px-3 flex-row items-center justify-between bg-blue-200 h-[35px] w-max  rounded-3xl"}>
                                    <Ionicons name={"add"} size={20} color={"white"}/>
                                    <Text className={"text-sm font-bold text-white "}>Receive</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </>
                )}
                renderSectionHeader={() => {
                    return (
                        <>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{paddingTop: 10, paddingBottom: 20}}
                            >
                                {data.tags.map((item, index) => (
                                    <TouchableOpacity onPress={() => setActiveIndex(index)} key={index}
                                                      className={` ${index === activeIndex ? 'bg-blue-900' : 'bg-white'} h-[30px] mx-3 items-center justify-center px-4 rounded-2xl`}>
                                        <Text
                                            className={`${index === activeIndex ? 'text-white' : 'text-black'}`}>{item}</Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </>
                    )
                }}
                keyExtractor={(i) => i.title}
                renderItem={({item}) =>
                    <>
                        <View className={"bg-green-950 px-3 rounded "}>
                            <Text className={"text-2xl font-bold my-3 pt-2"}>Overview</Text>
                            <Text className={"py-2"}>
                                By ensuring @tanstack/react-query is installed, clearing the cache, and verifying your
                                import statements and project configuration, you should be able to resolve the module
                                and
                                use React Query in your React Native project.
                                By ensuring @tanstack/react-query is installed, clearing the cache, and verifying your
                                import statements and project configuration, you should be able to resolve the module
                                and
                                use React Query in your React Native project.
                                By ensuring @tanstack/react-query is installed, clearing the cache, and verifying your
                                import statements and project configuration, you should be able to resolve the module
                                and
                                use React Query in your React Native project.
                            </Text>
                        </View>
                    </>
                }
            >
            </SectionList>
        </>

    )
}
export default Details
