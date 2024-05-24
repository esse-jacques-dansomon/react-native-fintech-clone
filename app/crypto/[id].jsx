import {View, Text, ScrollView, SectionList, Image, TouchableOpacity, TextInput} from 'react-native'
import React, {useEffect, useState} from 'react'
import {Stack, useLocalSearchParams} from "expo-router";
import {useHeaderHeight} from "@react-navigation/elements";
import {useQuery} from "@tanstack/react-query";
import {Ionicons} from "@expo/vector-icons";
import {CartesianChart, Line, useChartPressState} from "victory-native";
import {Circle, useFont} from '@shopify/react-native-skia';
import {format} from 'date-fns';
import * as Haptics from 'expo-haptics';
import {Colors} from "../../constants/Colors";
import Animated, { SharedValue, useAnimatedProps } from 'react-native-reanimated';

Animated.addWhitelistedNativeProps({ text: true });
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
function ToolTip({ x, y }: { x: SharedValue<number>; y: SharedValue<number> }) {
    return <Circle cx={x} cy={y} r={8} color="primary" />;
}





const Details = () => {
    const {id} = useLocalSearchParams();
    const [activeIndex, setActiveIndex] = useState(0);
    const headerHeight = useHeaderHeight();
    console.log(`page - details - ${id}`);
    const font = useFont(require('../../assets/fonts/SpaceMono-Regular.ttf'), 12);
    const {state, isActive} = useChartPressState({x: 0, y: {price: 0}});


    const {data} = useQuery({

        queryKey: ['info', id],
        queryFn: async () => {
            const infos = await fetch(`/api/info?ids=${id}`).then((res) => res.json())
            return infos[id]
        },
        enabled: !!id,
    });

    const {data: tickers} = useQuery({
        queryKey: ['tickers'],
        queryFn: async (): Promise<any[]> => fetch(`/api/tickers`).then((res) => res.json()),
    });

    useEffect(() => {
        console.log(`state ${state} ${isActive}`)
        if (isActive) Haptics.selectionAsync();

    }, [isActive]);


    const animatedText = useAnimatedProps(() => {
        return {
            text: `${state.y.price.value.value.toFixed(2)} €`,
            defaultValue: '',
        };
    });

    const animatedDateText = useAnimatedProps(() => {
        const date = new Date(state.x.value.value);
        return {
            text: `${date.toLocaleDateString()}`,
            defaultValue: '',
        };
    });


    console.log("Details", tickers)
    return (
        <>
            <Stack.Screen options={{title: data?.name}}/>
            <SectionList
                // contentContainerStyle={{paddingTop: headerHeight, paddingBottom: headerHeight}}
                contentInsetAdjustmentBehavior={"automatic"}
                sections={[{data: [{title: 'chart'}]}]}
                ListHeaderComponent={() => (
                    <>
                        <View className={"px-4"}>
                            <View className={"flex-row justify-between items-center"}>
                                <Text className={"text-xl h-full font-bold my-3 pt-2 text-gray-100"}>{data?.name}</Text>
                                <Image
                                    source={{uri: data?.logo}}
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
                                {data?.tags.map((item, index) => (
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
                    <View className={"px-4 mx-2"}>

                        <View className={"h-[400px] bg-white px-2 py-4 rounded-xl relative"}>
                            {
                                tickers && (
                                    <>
                                        {
                                            !isActive && (
                                                <View>
                                                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: Colors.dark.background }}>
                                                        {tickers[tickers.length - 1].price.toFixed(2)} €
                                                    </Text>
                                                    <Text style={{ fontSize: 18, color: Colors.dark.text }}>Today</Text>
                                                </View>                                            )
                                        }

                                        {isActive && (
                                            <View>
                                                <AnimatedTextInput
                                                    editable={false}
                                                    underlineColorAndroid={'transparent'}
                                                    style={{ fontSize: 30, fontWeight: 'bold', color: Colors.dark }}
                                                    animatedProps={animatedText}></AnimatedTextInput>
                                                <AnimatedTextInput
                                                    editable={false}
                                                    underlineColorAndroid={'transparent'}
                                                    style={{ fontSize: 18, color: Colors.gray }}
                                                    animatedProps={animatedDateText}></AnimatedTextInput>
                                            </View>
                                        )}


                                            <CartesianChart

                                                data={tickers ?? []}
                                                xKey="timestamp"
                                                children={""}
                                                chartPressState={state}
                                                axisOptions={{
                                                    font,
                                                    tickCount: 5,
                                                    labelOffset: {x: -2, y: 0},
                                                    labelColor: 'gray',
                                                    formatYLabel: (v) => `${v} €`,
                                                    formatXLabel: (ms) => format(new Date(ms), 'MM/yy'),
                                                }}
                                                yKeys={["price"]}>
                                                {({points}) => (
                                                    <>
                                                        <Line points={points.price} color={"blue"} strokeWidth={3} />
                                                        {isActive && <ToolTip x={state.x.position} y={state.y.price.position} />}
                                                    </>
                                                )}
                                            </CartesianChart>

                                    </>

                                )
                            }
                        </View>
                        <View className={"bg-white px-3 mt-4 rounded-xl "}>
                            <Text className={"text-2xl font-bold my-3 pt-2"}>Overview</Text>
                            <Text className={"pb-4 text-sm"}>
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
                    </View>
                }
            >
            </SectionList>
        </>

    )
}
export default Details
