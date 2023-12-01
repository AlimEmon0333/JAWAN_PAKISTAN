import rncstyles from "rncstyles"
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from "react-native";
import MAIconButton from "./MAIconButton";

export default function MACamera() {
    const [imageUri, setImageUri] = useState<any>('https:');
    let openCamera = async () => {
        let res: any = await launchCamera({
            mediaType: "photo",
            includeBase64: true
        })
        let file: any = res.assets[0]
        setImageUri(`data:image/png;base64,${file.base64}`)
    }
    let openGallery = async () => {
        let res: any = await launchImageLibrary({
            mediaType: "photo",
            includeBase64: true
        })
        let file: any = res.assets[0]
        setImageUri(`data:image/png;base64,${file.base64}`)
    }
    return (
        <>
            <View style={[rncstyles.m1]}>
                <View style={[rncstyles.flexRow]}>
                    <TouchableOpacity onPress={openCamera}>
                        <MAIconButton name="camera" size={35} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={openGallery}>
                        <MAIconButton name="image" size={35} color="black" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Image source={{ uri: imageUri }} width={150} height={150} style={[rncstyles.rounded]} />
                </View>
            </View>
        </>
    )
}
