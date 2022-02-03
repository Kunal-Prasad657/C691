import React, { Component } from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";

export default class TransactionScreen extends Component {
  constructor(props){
    super(props)
    this.state={
      domState:"normal",
      hasCameraPermissions:null,
      scanned:false,
      scannedData:""
    }
    getCameraPermissions = async domState => { const { status } = await Permissions.askAsync(Permissions.CAMERA);
  }
  handleBarCodeScanned = async ({ type, data }) => { this.setState({ scannedData: data, domState: "normal", scanned: true }); };
  render() {
    const { domState, hasCameraPermissions, scannedData, scanned } = this.state;
     if (domState === "scanner") {
        return ( 
        <BarCodeScanner onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned} 
        style={StyleSheet.absoluteFillObject} /> );}
    return (
      <View style={styles.container}>
        <TouchableOpacity 
        onPress={(=>"this.getCameraPermission")}>
        <Text style={styles.text}>Scan QR code Screen</Text>
        </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4"
  },
  text: {
    color: "#ffff",
    fontSize: 30
  }
});
