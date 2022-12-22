import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { globalString as strings } from "../components/applicationdata";
import ToastManager, { Toast } from "toastify-react-native";

// assets
import Github from "../../assets/github.png";
import Fb from "../../assets/fb.png";
import Chat from "../../assets/messenger.png";
import Google from "../../assets/google.png";

const Login = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    setIsLoading(true);
    Toast.error("Invalid Credential", "top");

    console.log({ email, password });

    setTimeout(() => {
      // navigation.navigate("TabNavigation");

      setIsLoading(false);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerLogin}>
        <Text style={{ fontSize: 25, fontWeight: "bold", textAlign: "center" }}>
          {strings.sign_in}
        </Text>
      </View>

      <View style={styles.mainLogin}>
        <TextInput
          placeholder={strings.email_address}
          style={styles.mainInput}
          onChangeText={(value) => setEmail(value)}
        />
        <TextInput
          placeholder={strings.password}
          style={styles.mainInput}
          onChangeText={(value) => setPassword(value)}
        />
        <TouchableOpacity style={styles.btnSignIn} onPress={handleLogin}>
          <Text style={styles.textSignIn}>
            {isLoading ? (
              <View style={{ marginHorizontal: "100%", paddingTop: 13 }}>
                <ActivityIndicator />
              </View>
            ) : (
              "Sign In"
            )}
          </Text>
        </TouchableOpacity>        
      </View>
    </View>
  );
};

const Register = () => {

  const navigatation = useNavigation();

  const handleLogin = () => {
    Toast.success("Login Success!")

    setTimeout(() => {
      navigatation.navigate("TabNavigation")
    }, 2000)
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerLogin}>
        <Text style={{ fontSize: 25, fontWeight: "bold", textAlign: "center" }}>
          Sign Up
        </Text>
      </View>

      <View style={styles.mainLogin}>
        <TextInput placeholder="Username" style={styles.mainInput} />
        <TextInput placeholder="Email Adress" style={styles.mainInput} />
        <TextInput placeholder="Password" style={styles.mainInput} />
        <TouchableOpacity style={styles.btnSignIn} onPress={handleLogin}>
          <Text style={styles.textSignIn}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default class Authentication extends React.Component {
  
  constructor() {
    super();
    this.state = {
      isRegisterPage: false,
      isLoadingLoginOrRegister: false,
    };
  }

  render() {
    const handleChangeRegister = () => {
      this.setState({ isRegisterPage: true });
    };

    const handleChangeLogin = () => {
      this.setState({ isRegisterPage: false });
    };

    const btnSubmitWithLoading = () => {
      this.setState({ isLoadingLoginOrRegister: true });

      setTimeout(() => {
        this.setState({ isLoadingLoginOrRegister: false });
      }, 2000);
    };

    return (
      <React.Fragment>
        <View style={{ marginTop: 50, textAlign: "center" }}>
          <ToastManager positionValue={-40} />
          {this.state.isRegisterPage ? <Register /> : <Login />}

          <View style={styles.globalView}>
            {/* button forgot password */}
            <TouchableOpacity style={styles.btnForgotPassword}>
              <Text style={styles.textForgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* manipulated display for or */}
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: "#B2B2B2",
                  width: 150,
                }}
              ></View>
              <Text style={{ textAlign: "center", marginHorizontal: 10 }}>
                Or
              </Text>
              <View
                style={{ borderWidth: 1, borderColor: "#B2B2B2", width: 150 }}
              ></View>
            </View>

            {/* icons */}
            <View style={styles.iconGroups}>
              <Image source={Chat} style={styles.icons} />
              <Image source={Google} style={styles.icons} />
              <Image source={Github} style={styles.icons} />
              <Image source={Fb} style={styles.icons} />
            </View>
          </View>

          {/* button group for login/ register and if user doesn't have any account */}
          <View
            style={{
              padding: 10,
              marginTop: this.state.isRegisterPage ? "55%" : "65%",
            }}
          >
            {!this.state.isRegisterPage && (
              <Text style={{ color: "#B2B2B2", textAlign: "center" }}>
                Don't have an account?
                <Text
                  style={{ color: "black" }}
                  onPress={() => this.setState({ isRegisterPage: true })}
                >
                  Sign Up
                </Text>
              </Text>
            )}

            <TouchableOpacity
              style={styles.btnNavigateRegister}
              onPress={
                this.state.isRegisterPage
                  ? handleChangeLogin
                  : handleChangeRegister
              }
            >
              <Text style={styles.textNavigateRegister}>
                {this.state.isRegisterPage ? "Login" : "Register"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  // global
  container: {
    // borderWidth: 1,
    // borderColor: "red",
    textAlign: "center",
  },
  mainInput: {
    borderWidth: 1,
    borderColor: "#D8D8D8",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  btnForgotPassword: {
    marginTop: 10,
    backgroundColor: "#0000",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  textForgotPassword: {
    textAlign: "center",
  },
  globalView: {
    padding: 10,
  },
  btnNavigateRegister: {
    borderWidth: 1,
    borderColor: "black",
    height: 40,
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  textNavigateRegister: {
    alignItems: "center",
    textAlign: "center",
  },
  iconGroups: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  icons: {
    width: 50,
    height: 50,
    marginHorizontal: 15,
  },

  // Login/register
  mainLogin: {
    // borderWidth: 1,
    // borderColor: "blue",
    marginTop: 20,
    padding: 10,
  },
  textSignIn: {
    color: "#ffff",
    alignItems: "center",
    textAlign: "center",
  },
  btnSignIn: {
    backgroundColor: "black",
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    textAlign: "center",
  },
});

