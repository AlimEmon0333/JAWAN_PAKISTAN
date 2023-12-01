import React from 'react'
import rncstyles from "rncstyles"
import { useState } from "react";
import { View, TouchableOpacity, Text , Image } from 'react-native'
import { Card, Button, Icon } from '@rneui/themed';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default function UploadImage() {
    const [ImageUrl, setImageUrl] = useState<any>({});
    const uploadImageFromCamera = () => {
        launchCamera({ mediaType: "photo" }, (res: any) => {
            let file = res.assests[0]
            setImageUrl({ ...file })
        })
    }
    return (
        <View style={[rncstyles.h100, rncstyles.bgInfo, rncstyles.alignItemsCenter, rncstyles.justifyContentCenter]}>
            <View style={[rncstyles.justifyContentBetween]}>
                <TouchableOpacity onPress={uploadImageFromCamera}>
                    <Text style={[rncstyles.btn, rncstyles.m2]}>
                        Upload image from camera
                        <Icon
                            name="code"
                            color="#ffffff"
                            iconStyle={{ marginRight: 10 }}
                        />
                        <Button
                            icon={
                                <Icon
                                    name="code"
                                    color="#ffffff"
                                    iconStyle={{ marginRight: 10 }}
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
                    </Text>
                    {/* <Image source={ImageUrl.uri} width={100} height={100}/> */}
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={[rncstyles.btnPrimary, rncstyles.m2]}>
                        Upload image from gallery
                    </Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}
