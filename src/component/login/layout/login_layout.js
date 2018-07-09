import React, { Component } from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";

import LoginForm from "./LoginForm";
import { styles } from "../stylesheet/styles";

class LoginScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View alignItems="center" justifyContent="center" paddingTop={30}>
          <View>
            <Text style={{ fontSize: 13 }}> Login Here!</Text>
          </View>
          <LoginForm />
          <View style={{ paddingTop: 10, alignItems: "center" }}>
            <TouchableOpacity onPress={() => {}}>
              <Text> Forgot Password ? </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Register")}
            >
              <Text> Register Here! </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default LoginScreen;
