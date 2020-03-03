import React, { Component } from 'react';
import { View,Animated, Easing, StyleSheet, TouchableOpacity, ScrollView, Text, Linking } from 'react-native';


export default class LeftScreen extends Component {

  static navigationOptions = {
    headerShown: false
  }

  constructor(props) {
    super(props);
    this.state = { spinAnim: new Animated.Value(0) }
  }

    callFun = () => {
    alert("Image oooo!!!");
  }
  
   componentDidMount(){
   Animated.loop(Animated.timing(
      this.state.spinAnim,
    {
      toValue: 1,
      duration: 8000,
      easing: Easing.linear,
      useNativeDriver: true
    }
  )).start();
   }
  
    render() {
      const spin = this.state.spinAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
      });
      const { navigate } = this.props.navigation;

      return (
        <View style={styles.container}>

          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
            
            <View style={{ flex: 1, justifyContent:'center', alignItems:'center' }}>
              <TouchableOpacity activeOpacity = { .5 } 
                onPress={() =>navigate('FlashLight')}
                >
              </TouchableOpacity>
            </View>

            <View>
              <Text style={styles.secretLight}> LEFT-SCREEN </Text>
            </View> 

            <View style={styles.getStartedContainer}>
               <IntroText />
            </View>

            <View style={styles.helpContainer}>
            <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>
                Learn Morse Code
              </Text>
            </TouchableOpacity>
          </View>


          </ScrollView>
        </View>

      );
    }
  }



function IntroText() {
  return (
    <Text style={styles.introText}>
      Secret-Light lets you write a message that 
      will be converted into morse code and displayed using your flashlight.   
    </Text>
    
  );
}


function handleHelpPress() {
  Linking.openURL('https://en.wikipedia.org/wiki/Morse_code');
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#009999',
  },
  myButton:{
    padding: 5,
    height: 200,
    width: 200,  //The Width must be the same as the height
    borderRadius:400, //Then Make the Border Radius twice the size of width or Height   
    backgroundColor:'rgb(255, 255, 255)',

  },
  introText: {
    marginBottom: 30,
    marginTop: 20,
    color: 'rgba(0,0,0,0.7)',
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  secretLight: {
    fontSize: 30,
    color: 'rgba(0,0,0,1)',
    lineHeight: 30,
    textAlign: 'center',
    marginTop: 60,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 16,
    color: '#0000ff',
  },
});
