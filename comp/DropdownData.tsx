import { View, Text, useWindowDimensions, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { CodeContext } from '../App'
import axios from 'axios'

const DropdownData = () => {
    const { height, width } = useWindowDimensions()
    const [locationInfo, setLocationInfo] = useContext(CodeContext)
    const [dataa, setDataa] = useState({})
    const [selectedadd, setSelectedadd]=useState(0)
    // useEffect(()=>{
    //     axios.get('https://api.zippopotam.us/in/400093').then(function (response) {
    //         // console.log(response.data);
    //         setDataa(JSON.stringify(response.data))


    //     });
    // })
    return (
        <View style={{ width: width, backgroundColor:'white' }}>
            <View style={{ width: '95%', alignSelf: 'center', marginTop:10 }}>
                <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' }}>Fetched Data</Text>
              
                <FlatList
                data={locationInfo.places}
                style={{marginTop:10}}
                renderItem={({item, index})=>{
                    return(
                        <TouchableOpacity onPress={()=>setSelectedadd(index)}
                        style={{width:'95%', alignSelf:'center', paddingTop:10, paddingBottom:10, borderColor:selectedadd==index?'blue':'gray', borderWidth:selectedadd==index?1:0.7, marginBottom:10, paddingLeft:10, borderRadius:10}}
                        >
                            <Text style={{fontSize:15, color:'black', marginTop:5}}>Place Name: {item["place name"]}</Text>
                        <Text style={{fontSize:15, color:'black', marginTop:5}}>State: {item.state}</Text>
                        <Text style={{fontSize:15, color:'black', marginTop:5}}>Longitude: {item.longitude}</Text>
                        <Text style={{fontSize:15, color:'black', marginTop:5}}>Latitude: {item.latitude}</Text>
                        </TouchableOpacity>
                    )
                }}/>
            </View>
        </View>
    )
}

export default DropdownData