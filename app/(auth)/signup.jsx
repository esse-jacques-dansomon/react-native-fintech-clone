import {View, Text, TouchableOpacity, KeyboardAvoidingView, Platform} from 'react-native'
import React, {useState} from 'react'
import {router} from "expo-router";
import {CustomButton, PageTitle, PhoneFormField} from "../../components";

const Signup = () => {
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
            className={"flex-1 px-6 bg-white"}>
            <View className="flex-1 mb-10 mt-4">
                <PageTitle
                    title="Let's get started !"
                    subtitle='Enter your phone number and you will receive instructions on how to connect'
                />

                <PhoneFormField
                    countryCode={form.countryCode}
                    phone={form.phone}
                    countryCodeChanged={(countryCode) => setForm({...form, countryCode})}
                    phoneChanged={(phone) => setForm({...form, phone})}
                />

                <View>
                    <TouchableOpacity className="flex-row gap-3 mt-3 w-full justify-center "
                                      onPress={() => router.replace('/login')}>
                        <Text className="text-lg text-center">
                            Already have an account? <Text className="text-blue-700 px-4">Log In</Text>
                        </Text>
                    </TouchableOpacity>
                </View>

                <View className="flex-1"></View>

                <CustomButton
                    title="Sign Up"
                    onSubmit={onSubmit}
                    disabled={form.countryCode === '' && form.countryCode === ''}/>

            </View>
        </KeyboardAvoidingView>

    )
}
export default Signup
