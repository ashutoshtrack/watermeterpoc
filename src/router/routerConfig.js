import React from "react";
import { createStackNavigator } from "react-navigation";
import LoginLayout from "../component/login/layout/login_layout";
import RegisterLayout from "../component/register/layout/register_layout";

export const RouterConfig = createStackNavigator(
  {
    Login: {
      screen: LoginLayout,
      navigationOptions: {
        header: null
      }
    },

    Register: {
      screen: RegisterLayout,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "Login"
  }
);
