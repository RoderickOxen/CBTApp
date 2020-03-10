import React, { Component } from 'react';
import { Text, View, StyleSheet,TouchableOpacity, Image} from 'react-native';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';

export default class RightScreen extends Component {
  render() {
    return (
      <HeaderImageScrollView
        maxHeight={150}
        minHeight={100}
        headerImage={require("../assets/images/startup.jpg")}
        renderForeground={() => (
          
          <View style={{ 
              height: 150, 
              justifyContent: "center", 
              alignItems: "center" 
          }} >

            <TouchableOpacity onPress={() => console.log("tap!!")}>
              <Text style={{ backgroundColor: "transparent" }}>Tap Me!</Text>
            </TouchableOpacity>

            <Image
              style={styles.logo}
              source={require("../assets/images/logo2.png")}
            />


          
            
          </View>
          
        )}
      >

        
        <View style={{ height: 1000 }}>
          <TriggeringView onHide={() => console.log("text hidden")}>
            <Text>Scroll Me!</Text>







          </TriggeringView>
        </View>
      </HeaderImageScrollView>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  }
});



