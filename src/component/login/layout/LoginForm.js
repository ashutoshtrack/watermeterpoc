import React from "react";
import { View, Button, TouchableOpacity, Text } from "react-native";
import { Field, reduxForm } from "redux-form";
import { customTextField } from "../../../global/commoncomponent/customTextField";
//import { customCheckBox } from "../../../global/commoncomponent/customCheckbox";
import { submit } from "../functions/submitform";
import { Validate } from "../functions/validation";
import { ChecBox } from "native-base";

const Loginform = props => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <View>
      <Field
        type="numeric"
        label="Mobile No"
        name="mobileno"
        component={customTextField}
      />
      <Field
        type="default"
        label="Password"
        name="password"
        passwordField={true}
        component={customTextField}
      />

      <Button title="Login" onPress={handleSubmit(submit)} />
    </View>
  );
};

export default reduxForm({
  form: "loginform",
  Validate
})(Loginform);
