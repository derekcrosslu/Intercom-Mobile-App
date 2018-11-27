import React, { Component } from 'react';
import { StyleSheet, Platform, SafeAreaView, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

export default class KeyCard4Screen extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    console.log('hello screen4 ' , this.props.navigation.state.params);
  }
  render() {
    let shipCost;

    if (this.props.navigation.state.params.step3.shippingOption === 'FedEX') {
      shipCost = 12;
    } else if (this.props.navigation.state.params.step3.shippingOption === 'overnight') {
      shipCost = 30;
    } else if (this.props.navigation.state.params.step3.shippingOption === 'usps') {
      shipCost = 6;
    } else if (this.props.navigation.state.params.step3.shippingOption === 'pickup') {
      shipCost = 0;
    }
    return (
      <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

          <View style={styles.header}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{width: 50, paddingLeft:20}}>
              <Image source={require('../../img/back.png')} style={{width: 25, height: 25}}/>
            </TouchableOpacity>
            <View style={styles.center}>
              <Text style={styles.headerText}>Order Key Cards/FOBs</Text>
            </View>
            <TouchableOpacity style={{width: 60, padding: 5, marginRight: 0}}>
              <Text style={{color: 'white', fontSize: 18}}>Order</Text>
            </TouchableOpacity>
          </View>

          <View style={{width: '100%', padding: 40, paddingBottom: 0, flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold', color: 'black', fontSize: 18}}>Step 4</Text>
            <Text style={{ color: 'black', fontSize: 18}}>    Place Order</Text>
          </View>
          <View style={{width: '100%', padding: 40, paddingTop: 0, paddingBottom: 0}}>
            <Image source={require('../../img/step_four.png')} resizeMode="contain" style={{width: '100%'}}/>
          </View>

        <ScrollView>
          <View style={{width: '90%', marginLeft: '5%', padding: 5}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>Order Summary</Text>
          </View>

          <View style={{width: '90%', marginLeft: '5%', backgroundColor: 'lightgrey', padding: 5}}>
            <View style={{paddingLeft: 10}}>
              <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>{this.props.navigation.state.params.step12.step1.card ? <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>Key Card</Text>: <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>Key Fob</Text>} for:  {this.props.navigation.state.params.step12.step1.user} </Text>
            </View>
            <View style={{paddingLeft: 20}}>
              {this.props.navigation.state.params.step12.step1.packageRoom ? <Text></Text>: <View style={{padding:3, paddingLeft: 0, flexDirection: 'row', alignItems: 'center'}}><Image source={require('../../img/checkmark.png')} style={{width: 16, height: 16, marginRight: 5}}/><Text style={{fontSize: 16, color: 'black'}}>Allows Package Room Access</Text></View>}  
              {this.props.navigation.state.params.step12.step1.frontDoor ? <Text></Text> : <View style={{padding:3, paddingLeft: 0, flexDirection: 'row', alignItems: 'center'}}><Image source={require('../../img/checkmark.png')} style={{width: 16, height: 16,marginRight: 5}}/><Text style={{fontSize: 16, color: 'black'}}>Allows Front Door Access</Text></View>}
            </View>
          </View>

          <View style={{width: '90%', marginLeft: '5%', padding: 5}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>Ships to</Text>
          </View>
          <View style={{width: '90%', marginLeft: '5%', backgroundColor: 'lightgrey', padding: 5}}>
            <Text style={{fontSize: 16, color: 'black'}}>{this.props.navigation.state.params.step12.step2.shipName}</Text>
            <Text style={{fontSize: 16, color: 'black'}}>{this.props.navigation.state.params.step12.step2.shipAddress1}, {this.props.navigation.state.params.step12.step2.shipAddress2}</Text>
            <Text style={{fontSize: 16, color: 'black'}}>{this.props.navigation.state.params.step12.step2.shipCity}, {this.props.navigation.state.params.step12.step2.shipState} {this.props.navigation.state.params.step12.step2.shipZipCode}</Text>
          </View>


          <View style={{width: '90%', marginLeft: '5%', padding: 5}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>Bills to</Text>
          </View>
          <View style={{width: '90%', marginLeft: '5%', backgroundColor: 'lightgrey', padding: 5}}>
            <Text style={{fontSize: 16, color: 'black'}}>{this.props.navigation.state.params.step3.first} {this.props.navigation.state.params.step3.last}</Text>
            <Text style={{fontSize: 16, color: 'black'}}>{this.props.navigation.state.params.step3.address},</Text>
            <Text style={{fontSize: 16, color: 'black'}}>{this.props.navigation.state.params.step3.city}, {this.props.navigation.state.params.step3.stateLive} {this.props.navigation.state.params.step3.zipCode}</Text>
          </View>

          <View style={{width: '90%', marginLeft: '5%'}}>
            <View style={{flexDirection: 'row', paddingVertical: 5}}>
              <View style={{justifyContent:'center'}}>
                <Text style={{fontSize: 18, color: 'black'}}>Items:</Text>
              </View>
              <View style={{flex: 1}}></View>
              <View style={{justifyContent:'center'}}> 
                <Text style={{fontSize: 18, color: 'black'}}>$50</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', paddingVertical: 5}}>
              <View style={{justifyContent:'center'}}>
                <Text style={{fontSize: 18, color: 'black'}}>Shipping: {this.props.navigation.state.params.step3.shippingOption}</Text>
              </View>
              <View style={{flex: 1}}></View>
              <View style={{justifyContent:'center'}}> 
                <Text style={{fontSize: 18, color: 'black'}}>${shipCost}</Text>
              </View>
            </View>         

            <View style={{flexDirection: 'row', paddingVertical: 5}}>
              <View style={{justifyContent:'center'}}>
                <Text style={{fontSize: 18, color: 'black'}}>Tax:</Text>
              </View>
              <View style={{flex: 1}}></View>
              <View style={{justifyContent:'center'}}> 
                <Text style={{fontSize: 18, color: 'black'}}>$0.1775</Text>
              </View>
            </View> 

            <View style={{flexDirection: 'row', paddingVertical: 5}}>
              <View style={{justifyContent:'center'}}>
                <Text style={{fontSize: 18, color: 'black'}}>Total:</Text>
              </View>
              <View style={{flex: 1}}></View>
              <View style={{justifyContent:'center'}}> 
                <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>$ {50 + shipCost + 0.1775}</Text>
              </View>
            </View> 
          </View>
          </ScrollView>
      </View> 
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    width: '100%',
    height: Platform.OS === 'ios' ? 40: 60,
    alignItems: 'center',
    backgroundColor: '#BA2745',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  center: {
    justifyContent : 'center',
    alignItems: 'center',
    flex: 1
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#BA2745'
  }
});