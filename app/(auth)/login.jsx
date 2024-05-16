import {View, Text, ScrollView, KeyboardAvoidingView, TouchableOpacity, Platform} from 'react-native'
import React, {useState} from 'react'
import {CustomButton, PageTitle, PhoneFormField, TextIconButton} from "../../components";
import {router} from "expo-router";


const Login = () => {
    const [form, setForm] = useState({
        phone: '', countryCode: '',
    });
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 0;

    const onSubmit = () => {
        router.push('/verify/[phone]')
    }
    return (
        <KeyboardAvoidingView
            behavior={"padding"}
            keyboardVerticalOffset={keyboardVerticalOffset}
            className={"flex-1 px-4 bg-white"}>
            <ScrollView>

            <View className="flex-1 mb-10 mt-4">
                <PageTitle
                title='Welcome back !'
                subtitle='Enter your phone number and you will receive instructions on how to connect'
                />

                <PhoneFormField
                    countryCode={form.countryCode}
                    phone={form.phone}
                    countryCodeChanged={(countryCode) => setForm({...form, countryCode})}
                    phoneChanged={(phone) => setForm({...form, phone})}
                />

                <CustomButton
                    title="Sign Up"
                    onSubmit={onSubmit}
                    disabled={form.countryCode === '' || form.countryCode ===''} />

                <View className="flex-row gap-3 mt-3 w-full justify-center items-center">
                    <View className="flex-1 divide-x border-[1px] border-gray-100" />
                    <Text className="text-black px-1">or</Text>
                    <View className="flex-1 divide-x border-[1px] border-gray-100" />
                </View>

                <TextIconButton
                 title="Continue with email"
                 iconName="mail"
                 iconColor="blue"
                 iconSize={20}
                />

                <TextIconButton
                 title="Continue wirh Google"
                 iconName="logo-google"
                 iconColor="blue"
                 iconSize={20}
                />

                <View className="flex-row gap-3 mt-3 w-full justify-center items-center ">
                    <TouchableOpacity onPress={ () => router.replace('/signup')}>
                        <Text className="text-lg">
                            Don't have an account? <Text className="text-blue-700 px-4">Sign Up</Text>
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
export default Login
