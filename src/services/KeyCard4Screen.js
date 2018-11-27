import React, { Component } from 'react';
import { StyleSheet, Platform, SafeAreaView, Text, View, TouchableOpacity, Image } from 'react-native';

export default class KeyCard4Screen extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    console.log('hello screen4 ' , this.props.navigation.state.params);
  }
  render() {

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

          <View>
            <Text>Order Summary</Text>
          </View>

          <View>
            <Text>for: </Text>
            <Text>Allow Package Room Access</Text>
            <Text>Allow Front Door Access</Text>
          </View>
          <View>
            <Text>Ships to</Text>
          </View>

          <View>
            <Text>Bills to</Text>
          </View>

          <View>
            <View>
              <View>
                <Text>Items: 1</Text>
              </View>
              <View>
                <Text>$50</Text>
              </View>
            </View>

            <View>
              <View>
                <Text>Shipping:</Text>
              </View>
              <View>
                <Text>$12</Text>
              </View>
            </View>

          <View>
              <View>
                <Text>Tax:</Text>
              </View>
              <View>
                <Text>$0.1775</Text>
              </View>
            </View>


          <View>
              <View>
                <Text>Total:</Text>
              </View>
              <View>
                <Text></Text>
              </View>
            </View>
          </View>
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