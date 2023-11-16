import { View, Text, Modal, TextInput, useWindowDimensions, TouchableOpacity, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { CodeContext } from '../App'

const Dropdwn = () => {
    const { height, width } = useWindowDimensions()
    const [dataa, setDataa] = useState('')
    const [typecode, setTypecode] = useContext(CodeContext)
    const [zipCode, setZipCode] = useState('');
    const [locationInfo, setLocationInfo] = useContext(CodeContext)
    const [error, setError] = useState(null);
    // useEffect(() => {
    //     axios.get('https://api.zippopotam.us/in/400093').then(function (response) {
    //         // console.log(response.data);
    //         setDataa(response.data)
    //         console.log(dataa)
    //     });
    // }, [])
    // const Handledata = async () => {
    //     // const response = await axios.get('https://api.zippopotam.us/in/400093')
    //     // console.log(response.data)
    //     // let tempdata = dataa.filter(el=>el.post code==typecode)
    //     console.log(dataa.places.state)
    // }
    const LocationInfo = async () => {
        try {
            const response = await axios.get(`https://api.zippopotam.us/in/${zipCode}`);
            setLocationInfo(response.data);
            setError(null);
            console.log(locationInfo)
        } catch (error) {
            setLocationInfo(null);
            setError('Invalid postal code. Please enter a valid code.');
        }
    };

    const handleSubmit = () => {
        if (zipCode.trim() !== '') {
            LocationInfo();
        }
    };
    return (
        <View>
            <View style={{ flexDirection: 'row', width: width, backgroundColor: 'white', paddingTop: 10, justifyContent: 'space-between', paddingRight: 10, paddingLeft: 10, paddingBottom: 10 }}>
                <TextInput
                    style={{ height: 50, borderColor: 'black', borderWidth: 0.7, width: '70%', borderRadius: 5, paddingLeft: 10 }}
                    placeholder="Enter Postal Code"
                    onChangeText={(text) => setZipCode(text)}
                    value={zipCode} />
                <TouchableOpacity
                    onPress={handleSubmit}
                    style={{ width: '20%', backgroundColor: '#95C343', height: 50, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: '500' }}>Search</Text>
                </TouchableOpacity>


            </View>
            {error && <Text style={{ marginTop: 20 }}>{error}</Text>}
          
        </View>
    )
}

export default Dropdwn