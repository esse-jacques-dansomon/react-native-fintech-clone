import {Text} from 'react-native'

const PageTitle = ({title, subtitle}) => {
    return (<>
            <Text className="text-4xl font-bold">{title}</Text>
            <Text className="text-lg mt-3">
                {subtitle}
            </Text>
        </>)
}
export default PageTitle
