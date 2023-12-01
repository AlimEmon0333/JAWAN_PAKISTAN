import React from 'react';
import rncstyles from "rncstyles"
import axios from "axios";
import { useState, useEffect } from "react";
import { Text, ScrollView, View, Image, TouchableOpacity } from "react-native";
import { Card, Button, Icon } from '@rneui/themed';


export default function Product({ navigation }: any) {
    let apiUrl = "https://fakestoreapi.com/products"
    const [product, setproduct] = useState<any>([]);
    const getProducts = () => {
        axios.get(apiUrl)
            .then((res) => {
                setproduct([...res.data])
            })
            .catch((err) => {
            })
    }
    useEffect(() => { getProducts() }, [])
    return (
        <>
            <ScrollView >
                <View style={[rncstyles.h100, rncstyles.p2, rncstyles.bgLight]}>
                    {product.map((x: any, i: any) => {
                        return (

                            <View key={i}>
                                <Card>
                                    <Card.Title numberOfLines={1}>{x.title}</Card.Title>
                                    <Card.Divider />
                                    <Card.Image
                                        style={{ padding: 0 }}
                                        source={{ uri: x.image }}
                                        resizeMode='contain'
                                    />
                                    <Text style={{ marginBottom: 10 }}>
                                        {x.description}
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
                                        onPress={() => navigation.navigate("Single product", x)}
                                    />
                                </Card>
                            </View>

                        )
                    })}
                </View>
            </ScrollView>
        </>
    )
}