import { Text, ScrollView, View, Image, TouchableOpacity } from "react-native";
import { Card, Button, Icon } from '@rneui/themed';
export default function SingleProduct({ navigation, route }: any) {
    let obj = route.params
    
    return (
        <View>
            <Card>
                <Card.Title>{obj.title}</Card.Title>
                <Card.Divider />
                <Card.Image
                    style={{ padding: 0 }}
                    source={{ uri: obj.image }}
                    resizeMode='contain'
                />
                <Text style={{ marginBottom: 10 }}>
                    {obj.description}
                </Text>
                <Button
                    icon={
                        <Icon
                            name="visibility"
                            color="#ffffff"
                            iconStyle={{ marginRight: 10 }}
                            type='material'
                        />
                    }
                    buttonStyle={{
                        borderRadius: 0,
                        marginLeft: 0,
                        marginRight: 0,
                        marginBottom: 0,
                    }}
                    title="VIEW NOW"
                />
            </Card>
        </View>
    )
}
