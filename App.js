/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
//import { Platform, StyleSheet, Text, View } from "react-native";
import { RouterConfig } from "./src/router/routerConfig";
import { Provider } from "react-redux";
import stores from "./src/store/reduxstore";

export default class App extends Component {
  render() {
    return (
      <Provider store={stores}>
        <RouterConfig />
      </Provider>
    );
  }
}
