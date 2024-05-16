import { Tabs} from "expo-router";
import {Ionicons} from "@expo/vector-icons";

const tabs = [
    {
        name: 'home',
        component: 'home',
        icon: 'home'
    },
    {
        name: 'invest',
        component: 'invest',
        icon: 'invest'
    },
    {
        name: 'lifestyle',
        component: 'lifestyle',
        icon: 'lifestyle'
    },
    {
        name: 'transfers',
        component: 'transfers',
        icon: 'transfers'
    },
    {
        name: 'crypto',
        component: 'crypto',
        icon: 'crypto'
    }
]
const _Layout = () => {
    return (

        <Tabs screenOptions={{
            tabBarActiveTintColor: 'primary'
        }}>
            {/*{ tabs.map((tab, i) => {*/}
            {/*    return (*/}
            {/*        <Tabs.Screen*/}
            {/*            key={i}*/}
            {/*            name={tab.name}*/}
            {/*            component={tab.component}*/}
            {/*            options={{*/}
            {/*                tabBarIcon: ({color, size}) => (*/}
            {/*                    <Ionicons name={tab.icon} size={size} color={color} />*/}
            {/*                ),*/}
            {/*            }}*/}
            {/*        />*/}
            {/*    )*/}
            {/*})}*/}
        </Tabs>

    )
}
export default _Layout
