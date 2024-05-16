import {View, Text, ScrollView} from 'react-native'
import {Dropdown, RoundBtn, Transaction} from "../../components";
import { useHeaderHeight } from '@react-navigation/elements';

const transactions = [
    {
        id: 1,
        name: 'Bitcoin',
        amount: 100,
        type: 'receive',
        date: '2021-10-10'
    },
    {
        id: 2,
        name: 'Ether',
        amount: 10,
        type: 'deposit',
        date: '2021-10-10'
    },
    {
        id: 3,
        name: 'Doll',
        amount: 39,
        type: 'deposit',
        date: '2021-10-10'
    }, {
        id: 4,
        name: 'Paypal',
        amount: 30,
        type: 'receive',
        date: '2021-10-10'
    },
    {
        id: 5,
        name: 'Wave',
        amount: 28,
        type: 'deposit',
        date: '2021-10-10'
    },
    {
        id: 6,
        name: 'EcoBank',
        amount: 483,
        type: 'deposit',
        date: '2021-10-10'
    },
    {
        id: 7,
        name: 'Wise',
        amount: 39,
        type: 'receive',
        date: '2021-10-10'
    },
    {
        id: 8,
        name: 'Free Money',
        amount: 5,
        type: 'receive',
        date: '2021-10-10'
    }
]
const Home = () => {
    const headerHeight = useHeaderHeight();

    return (
        <ScrollView className={`px-4  h-full`} contentContainerStyle={{paddingTop: headerHeight, paddingBottom: headerHeight}}>
            <View className="flex-row flex justify-center items-center h-[150px]">
                <Text className="text-3xl font-bold">1420</Text>
                <Text className="-mb-6 ml-2">$</Text>
            </View>
            <View className="flex-row justify-between items-center">
                <RoundBtn title="Add Money" iconName="add" iconSize={30} iconColor="black" bgColor="white"/>
                <RoundBtn title="Exchange" iconName="refresh" iconSize={30} iconColor="black" bgColor="white"/>
                <RoundBtn title="Details" iconName="list" iconSize={30} iconColor="black" bgColor="white"/>
                <RoundBtn title="More" iconName="ellipsis-horizontal" iconSize={30} iconColor="black" bgColor="white"/>
                {/*<Dropdown />*/}

            </View>
            <View className="flex-col flex justify-between items-start mt-10">
                <Text className="text-[18px] font-bold">Transactions</Text>
                {transactions.map(transaction => {
                    return (
                        <Transaction
                            transaction={transaction}
                        />
                    )
                })}
            </View>

            <View className="flex-col flex justify-between items-start mt-10">
                <Text className="text-[18px] font-bold">Services</Text>
            </View>
        </ScrollView>
    )
}
export default Home
