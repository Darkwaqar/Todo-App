import React from "react";
import {Text} from 'react-native'

const Texts = ({userToken}) => {
    console.log('Texts',userToken);
    
    return(
        <Text style={{color:'black',fontWeight:'bold'}}>{userToken}</Text>
    )
}
export default Texts