import React, { Component } from 'react';
import { 
  Text, 
  View, 
  TouchableOpacity 
} from 'react-native';
import { sendEmail } from '../components/sendEmail.js';
import { Button } from 'react-native-elements';


export default class LeftScreen extends Component {
  render() {
    return (

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity >
          <Button
            title="Contact"
            type="solid"
            onPress={sendEmailSrcDest}
          />
        </TouchableOpacity>
      </View>
    );
    
  }
}


function sendEmailSrcDest(src,dst,msg){
  sendEmail(
    'test@gmail.com',
    'Greeting!',
    'I think you are fucked up how many letters you get.'
  ).then(() => {
    console.log('Our email successful provided to device mail ');
  });
}
