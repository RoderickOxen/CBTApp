import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../styles/colors.js";
import { ScrollView } from "react-native-gesture-handler";
import { SocialIcon } from 'react-native-elements'



export default class Home extends Component {
  render() {
    return (
      <View style={styles.wrapper}> 
        
        <ScrollView>
          <View style={styles.welcomeWrapper}>

            <Image
              style={styles.logo}
              source={require("../assets/images/logo2.png")}
            />
            
            <Text style={styles.welcomeText}>
              Welcome
            </Text>
          </View>

          <View style={{
              backgroundColor: colors.greyCBT,
              marginTop: 300,


            }}>
                <Text>
                    Welcome
                </Text>
                <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                      <View style={{ flexDirection: 'column' }}>
                        <SocialIcon
                          //Social Icon using react-native-elements
                          type="angellist"
                          //Type of Social Icon
                          onPress={() => {
                            //Action to perform onPress of the Icon
                            alert('angellist');
                          }}
                        />
                    </View>

                    <View style={{ flexDirection: 'column' }}>
                        <SocialIcon
                          //Social Icon using react-native-elements
                          type="angellist"
                          //Type of Social Icon
                          onPress={() => {
                            //Action to perform onPress of the Icon
                            alert('angellist');
                          }}
                        />
                    </View>

                    <View style={{ flexDirection: 'column' }}>
                        <SocialIcon
                          //Social Icon using react-native-elements
                          type="angellist"
                          //Type of Social Icon
                          onPress={() => {
                            //Action to perform onPress of the Icon
                            alert('angellist');
                          }}
                        />
                    </View>


                    <View style={{ flexDirection: 'column' }}>
                        <SocialIcon
                          //Social Icon using react-native-elements
                          type="angellist"
                          //Type of Social Icon
                          onPress={() => {
                            //Action to perform onPress of the Icon
                            alert('angellist');
                          }}
                        />
                    </View>


                  </View>
                  
                </View>
                

              
            </View>

        </ScrollView>
      </View>
    );
  }
}
function openLearnMore() {
  Linking.openURL('https://www.cbtalents.com/about-us');
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex",
    backgroundColor: colors.blueCBT 
  },
  welcomeWrapper: {
    flex: 1,
    display: "flex",
    marginTop: 30,
    padding: 20
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 50,
    marginBottom: 50
  },
  welcomeText: {
    fontSize: 30,
    color: colors.white,
    fontWeight: "300",
    marginBottom: 40
  },
  bottomView: {
    fontSize: 30,
    color: colors.black,
    fontWeight: "300",
    backgroundColor: colors.greyCBT,
    marginTop: 50
  },
  bottomText:{
    fontSize: 10,
    color: colors.grey2,
    width: 50,
    height: 50
  }
});