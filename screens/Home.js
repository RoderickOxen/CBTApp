import React, { Component } from 'react';
import { Text, View, StyleSheet,TouchableOpacity, Image, Linking} from 'react-native';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import colors from "../styles/colors.js";
import { Button, SocialIcon } from 'react-native-elements';


export default class Home extends Component {
  constructor() {
    super();
    this.state = { showNavTitle: false };
  }
  
  render() {
    return (
      <HeaderImageScrollView
        maxHeight={300}
        minHeight={100}
        headerImage={require("../assets/images/stp.jpg")}
        maxOverlayOpacity={0.6}
        minOverlayOpacity={0.3}
        renderForeground={() => (
          <View>
              <Image
              source={require("../assets/images/logo2.png")}
              style={styles.logoHeader}
            />  
            <View>
              <Text
                style={styles.textHeader}>
                The Best Fit For Your Company
              </Text>
            </View>
          </View>
          )}
        >
  
        
        <View style={{ height: 1000 }}>
          <TriggeringView onHide={() => console.log("text hidden")}>
           
           
            <Text style={styles.textIntro}>
              Every week we share Top Profiles from our pool.             
              We give a taste of our best profiles from Engineering, ICT, and BPO Tech.
            </Text>

            <View>
              <TouchableOpacity >
                <Button
                  title="About us"
                  type="solid"
                  onPress={openWebSite}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.textIntro}>
            Is Your Company Looking For Top Profiles?
            We Have Them!
            </Text>
            
            <View
            style={{
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                      <View style={{ flexDirection: 'column', marginLeft: 90}}>
                        <Image
                          source={require("../assets/images/logo2.png")}
                        />  
                        <Text>
                          Talent Leasing.
                        </Text>
                      </View>

                      <View style={{ flexDirection: 'column', marginLeft: 80}}>
                        <Image
                          source={require("../assets/images/logo2.png")}
                        />  
                        <Text>
                          International recrutment
                        </Text>
                      </View>
                    </View>
              </View>
          </TriggeringView>
        </View>
      </HeaderImageScrollView>
    );
  }
}

function openWebSite(){
  Linking.openURL('https://www.cbtalents.com/about-us');
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  textHeader: {
    fontSize: 25,
    color:colors.white,
  },
  logoHeader:{
    marginTop: 210,
  },
  textIntro:{
    fontSize: 25,
  }

});


