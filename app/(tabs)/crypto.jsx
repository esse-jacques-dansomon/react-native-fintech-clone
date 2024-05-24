import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'expo-router';
// import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import type {Currency} from "../../interfaces/crypto";
import {useHeaderHeight} from "@react-navigation/elements";
import {Colors} from "../../constants/Colors";

const Page = () => {
    const headerHeight = useHeaderHeight();


    const currencies = useQuery({
        queryKey: ['listings'],
        queryFn: () => fetch('/api/listings').then((res) => res.json()),
    });

    const ids = currencies.data?.map((currency: Currency) => currency.id).join(',');

    const { data } = useQuery({
        queryKey: ['info', ids],
        queryFn: () => fetch(`/api/info?ids=${ids}`).then((res) => res.json()),
        enabled: !!ids,
    });
    console.log(`/api/info?ids=${ids}`)

    return (
        <ScrollView
            className={"px-4 py-4"}
            contentContainerStyle={{ paddingTop: headerHeight, paddingBottom: headerHeight }}>
            <Text className={"my-3 text-xl font-bold "}>Latest Crypot</Text>
            <View className={"bg-white gap-2 rounded-2xl"}>
                {currencies.data?.map((currency: Currency) => (
                    <Link  href={`/crypto/${currency.id}`} key={currency.id} asChild>
                        <TouchableOpacity className={"flex-row items-center gap-1 my-2"} >
                            <Image source={{ uri: data?.[currency.id].logo }} className={"w-[40px] h-[40px] mr-2"} />
                            <View style={{ flex: 1, gap: 6 }}>
                                <Text style={{ fontWeight: '600', color: Colors.dark }}>{currency.name}</Text>
                                <Text className={"text-[10px] text-gray-300"}>{currency.symbol}</Text>
                            </View>
                            <View className={"justify-end items-end gap-1 mr-4"}>
                                <Text>{currency.quote.EUR.price.toFixed(2)} €</Text>
                                <View style={{ flexDirection: 'row', gap: 4 }}>
                                    <Ionicons
                                        name={currency.quote.EUR.percent_change_1h > 0 ? 'caret-up' : 'caret-down'}
                                        size={16}
                                        color={currency.quote.EUR.percent_change_1h > 0 ? 'green' : 'red'}
                                    />
                                    <Text
                                        style={{ color: currency.quote.EUR.percent_change_1h > 0 ? 'green' : 'red' }}>
                                        {currency.quote.EUR.percent_change_1h.toFixed(2)} %
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </Link>
                ))}
            </View>
        </ScrollView>
    );
};
export default Page;
