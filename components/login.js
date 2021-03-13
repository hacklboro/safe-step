import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Icon,
} from "react-native";
import React, { Component } from "react";
import Svg, {
  Path,
  Circle,
  Rect,
  Use,
  Defs,
  Pattern,
  Image,
} from "react-native-svg";
import * as Animatable from "react-native-animatable";

function Login() {
  // const navigation = useNavigation();

  return (
    <View style={styles.Login}>
      <Animatable.View
        animation="pulse"
        duration={8000}
        easing="linear"
        iterationCount="infinite"
        style={styles.bloba}
      >
        <Svg viewBox="0 0 200 200">
          <Path
            fill="#7CC0FF"
            d="M132.2 57c11.7 7.1 24.8 13.7 27.7 23.3 2.9 9.7-4.5 22.5-10.7 33.9-6.2 11.4-11.1 21.4-19.1 32.9-8 11.5-19.1 24.6-32.4 27.7-13.3 3.1-28.8-3.7-35.1-15.8-6.2-12.1-3.1-29.5-6.2-43.7-3-14.2-12.1-25.3-10.3-33.5 1.7-8.2 14.4-13.5 25.2-21 10.8-7.4 19.7-17.1 29.4-18 9.6-.9 19.8 7 31.5 14.2z"
          />
        </Svg>
        <Svg
          viewBox="0 0 200 200"
          style={{
            position: "absolute",
            top: 90,
            left: 340,
            width: "80%",
            height: "80%",
            zIndex: 1,
            transform: [{ rotate: "190deg" }],
          }}
        >
          <Path
            fill="#7CC0FF"
            d="M140.5 24.4c9.3 10.9 12.3 27.1 21 40.6s23 24.2 23.3 35.1c.2 10.9-13.7 21.9-22.3 35.6-8.6 13.7-11.9 30-21.4 36.8-9.5 6.9-25.3 4.3-40.1 2.6-14.8-1.7-28.6-2.6-38.8-9.1-10.2-6.5-16.8-18.6-26.2-30.5-9.5-12-21.8-23.7-22.8-36.1-1.1-12.4 9.2-25.3 18.4-37.7C40.9 49.4 49 37.6 60.3 27.9c11.2-9.8 25.4-17.5 40.4-18.6 14.9-1.2 30.5 4.3 39.8 15.1z"
          />
        </Svg>
        <Svg
          viewBox="0 0 200 200"
          style={{
            position: "absolute",
            top: 510,
            left: 200,
            width: "80%",
            height: "80%",
            zIndex: 1,
          }}
        >
          <Path
            fill="#7CC0FF"
            d="M132.6 54.2c9.3-5.3 16.3 4.1 15.6 14.2-.7 10.1-9.1 20.8-7.8 32.4 1.3 11.5 12.4 23.8 12.3 32.4-.1 8.7-11.4 13.7-22.1 18.3-10.6 4.6-20.6 8.7-31.5 10.3-11 1.6-22.8.7-36.8-1.9-14-2.7-30.1-7-25.8-17.3 4.4-10.3 29.2-26.4 31-41.5 1.8-15.2-19.3-29.2-20-33-.6-3.9 19.3 2.5 31.4 9.4 12.2 7 16.7 14.6 24.7 8.3 8.1-6.2 19.7-26.3 29-31.6z"
          />
        </Svg>
      </Animatable.View>
      <Animatable.View
        animation="pulse"
        duration={8000}
        easing="linear"
        iterationCount="infinite"
        style={styles.blobb}
      >
        <Svg
          viewBox="0 0 200 200"
          style={{ transform: [{ rotate: "260deg" }] }}
        >
          <Path
            fill="#92E5FF"
            d="M139.4 70.4c9.6 10.1 13.6 26.3 8.9 38-4.8 11.7-18.3 18.8-33.4 28.3-15.1 9.4-31.7 21.2-40.7 16.8-8.9-4.3-10-24.7-9.5-40.3.6-15.6 2.8-26.5 8.9-35.8 6.2-9.3 16.3-17 28.8-19 12.6-1.9 27.5 1.9 37 12z"
          />
        </Svg>
        <Svg
          viewBox="0 0 200 200"
          style={{
            position: "absolute",
            top: -80,
            left: 350,
            width: "120%",
            height: "120%",
            zIndex: 2,
            transform: [{ rotate: "20deg" }],
          }}
        >
          <Path
            fill="#92E5FF"
            d="M139.4 70.4c9.6 10.1 13.6 26.3 8.9 38-4.8 11.7-18.3 18.8-33.4 28.3-15.1 9.4-31.7 21.2-40.7 16.8-8.9-4.3-10-24.7-9.5-40.3.6-15.6 2.8-26.5 8.9-35.8 6.2-9.3 16.3-17 28.8-19 12.6-1.9 27.5 1.9 37 12z"
          />
        </Svg>
        <Svg
          viewBox="0 0 200 200"
          style={{
            position: "absolute",
            top: 590,
            left: 280,
            width: "60%",
            height: "60%",
            zIndex: 3,
            transform: [{ rotate: "40deg" }],
          }}
        >
          <Path
            fill="#92E5FF"
            d="M121.7 64.1c2.8 4.1-.8 16.1 1.2 24.3 2.1 8.3 9.9 12.9 11.1 17.7 1.2 4.9-4.1 10.1-9.8 12.6-5.7 2.6-11.8 2.6-20.3 14S84.5 167 77.6 168.5c-6.8 1.5-9.7-18.4-7.7-33 1.9-14.6 8.8-24 9-31.6.3-7.6-5.9-13.3-5.2-16.3.8-2.9 8.5-3.1 14.1-5.9 5.5-2.8 8.9-8.3 15.2-13 6.4-4.7 15.8-8.6 18.7-4.6z"
          />
        </Svg>
      </Animatable.View>
      <Animatable.View
        animation="pulse"
        duration={8000}
        easing="linear"
        iterationCount="infinite"
        style={styles.blobc}
      >
        <Svg viewBox="0 0 200 200">
          <Path
            fill="#D2EFFF"
            d="M161.4 84.6c9.6 24.9 2.8 59.7-18.8 75.8-21.7 16.2-58.2 13.7-77.7-2.7s-22-46.7-13.3-70.4c8.6-23.7 28.5-40.7 51.4-41.7s48.8 14.1 58.4 39z"
          />
        </Svg>
        <Svg
          viewBox="0 0 200 200"
          style={{
            position: "absolute",
            top: -20,
            left: 380,
            width: "120%",
            height: "120%",
            zIndex: 3,
            transform: [{ rotate: "20deg" }],
          }}
        >
          <Path
            fill="#D2EFFF"
            d="M121.7 64.1c2.8 4.1-.8 16.1 1.2 24.3 2.1 8.3 9.9 12.9 11.1 17.7 1.2 4.9-4.1 10.1-9.8 12.6-5.7 2.6-11.8 2.6-20.3 14S84.5 167 77.6 168.5c-6.8 1.5-9.7-18.4-7.7-33 1.9-14.6 8.8-24 9-31.6.3-7.6-5.9-13.3-5.2-16.3.8-2.9 8.5-3.1 14.1-5.9 5.5-2.8 8.9-8.3 15.2-13 6.4-4.7 15.8-8.6 18.7-4.6z"
          />
        </Svg>
        <Svg
          viewBox="0 0 200 200"
          style={{
            position: "absolute",
            top: 625,
            left: 315,
            width: "25%",
            height: "25%",
            zIndex: 3,
            transform: [{ rotate: "250deg" }],
          }}
        >
          <Path
            fill="#D2EFFF"
            d="M143.1 32c12 8.5 20.2 21.9 25 35.9 4.8 14 6.3 28.5 6.7 44.6.5 16.2-.1 34-8.3 47.1-8.3 13.2-24.2 21.7-40.9 25.6-16.6 4-34 3.4-50.9-.8-16.9-4.1-33.2-11.8-41.3-24.7-8.2-12.9-8.1-30.9-8.9-47.8-.7-16.8-2.3-32.5 2.4-46.3 4.7-13.8 15.7-25.8 29-33.7 13.2-7.9 28.6-11.7 44.2-11.8 15.5-.1 31.1 3.4 43 11.9z"
          />
        </Svg>
      </Animatable.View>
      <Animatable.View
      animation="fadeIn"
      duration={8000}
      iterationCount="infinite"
      >
        <Svg
          width={90}
          height={90}
          viewBox="0 0 59 59"
          fill="black"
          style={{
            position: "absolute",
            top: 60,
            left: 130,
            width: "100%",
            height: "100%",
            transform: [{ rotate: "160deg" }],
          }}
        >
          <Rect
            x={58.1}
            y={51.63}
            width={52.033}
            height={52.033}
            rx={6}
            transform="rotate(172.857 58.1 51.63)"
            fill="url(#prefix__pattern0)"
            fillOpacity={0.2}
          />
          <Defs>
            <Pattern
              id="prefix__pattern0"
              patternContentUnits="objectBoundingBox"
              width={1}
              height={1}
            >
              <Use xlinkHref="#prefix__image0" transform="scale(.00195)" />
            </Pattern>
            <Image
              id="prefix__image0"
              width={512}
              height={512}
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAgAElEQVR4Ae3da9BtZX0Y8P+XtpNpZtovHTP90pmm2kkmTT/ZJqEhlzo2HceYJjGJYoyXNKZNaIxiyMVLEYMGa41Ag1EJBqKiIEYhoMDhLne5BFDkoiCIIFe5eUA47Txw3p79vufd+91r73V5Lr81c+a87373Xut5fs9/Pf//WnvvtSIsBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBEYT+MWIODwijouIz0fEORFxZkS8PyJeN1orbIgAAQIECBAYTODDEXFxRNweEf+3479bIuK8iPj1wVpnxQQIECBAgEAvAi/fm7Qf7pjsdyoOdkfEWb200EoIECBAgACBXgReuDfpP9Fz0p9XFFwbEf+ql5ZbCQECBAgQINBZ4MiI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Aq0I3KUIeLYIcOq/lYjXTwIECBB4VuA4BcCzBcC/EA8ECBAgQKA1gacbLwKOaG3A9ZcAAQIECCSB0xouAC4VAgQIECBAoGWBVi7vO9vPO1secH0nQIAAAQJJ4JONnQV4wrATIECAAAECzwk81kgR8FREPN+gEyBAgAABAs8J/H4DBcCeiDjAgBMgQIAAAQKbBa6suAhIyf/XNnfXbwQIECBAgMCGQI1vBXwvIn5qo4P+J0CAAAECBPYXSNfDn/20fOk/pw/8/ej+3fQIAQIECBAgsFXgjyopAu7e2jG/EyBAgAABAosFjiy8CEh3O7QQIECAAAECKwi8t8Ai4JmIeOsKffUSAgQIECBAYEbgkIKKgJtn2u1HAgQIECBAYE2B74+IhzMuBNLFff5kzT56OQECBAgQIDBH4IwMi4BT5rTVwwQIECBAgECPAi+KiBsnLgTSLYzTXQwtBAgQIECAwMgCvxIRV4xcCNwVEceP3E+bI0CAAAECBOYIfCIi0gfwhrho0H0RcU5E/MycbXuYAAECBAgQyEDgjRFxQUTcsmJBcEdEfDEi/jSDvmgCAQIECBAgsIbAz0VE+jrhsRFxakR8eu//H4yId0TES9dYt5cSIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQWEXg/wHN4ElnegNuBwAAAABJRU5ErkJggg=="
            />
          </Defs>
        </Svg>
      </Animatable.View>

      <Text style={styles.logo}>SafeSteps</Text>
      <View style={styles.inputView}>
        {/* <Icon style={styles.searchIcon} name="" size={20} color="#000"/> */}
        <TextInput
          style={styles.innerInput}
          placeholder="Email."
          onChangeText={(email) => setEmail(email)}
          placeholderTextColor="#ddd"
        />
        {/* <Svg
      style
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Circle cx={12} cy={12} r={4} />
      <Path d="M16 8v5a3 3 0 006 0v-1a10 10 0 10-3.92 7.94" />
    </Svg> */}
      </View>

      <View>
        {/* <Icon style={styles.searchIcon} name="" size={20} color="#000"/> */}
        <TextInput
          style={styles.innerInput}
          placeholder="Password."
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          placeholderTextColor="#ddd"
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => console.log("touchable opacity pressed")}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => console.log("touchable opacity pressed")}
      >
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};


function Sign_Up() {
  return (
    <View style={styles.Login}>
      <Text style={styles.logo}>SafeSteps</Text>


      
    </View>
  );
}

const styles = StyleSheet.create({
  Login: {
    flex: 1,
    backgroundColor: "white",
    zIndex: 0,
  },
  bloba: {
    position: "absolute",
    top: -260,
    left: -140,
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  blobb: {
    height: "100%",
    width: "100%",
    zIndex: 2,
    position: "absolute",
    top: -240,
    left: -180,
  },
  blobc: {
    height: "55%",
    width: "55%",
    zIndex: 3,
    position: "absolute",
    top: -120,
    left: -130,
  },
  logo: {
    color: "black",
    fontSize: 50,
    textAlign: "center",
    justifyContent: "center",
    marginTop: "60%",
    zIndex: 5,
  },
  inputView: {
    marginTop: "5%",
    marginBottom: "5%",
    zIndex: 5,
  },
  innerInput: {
    color: "black",
    width: "80%",
    fontSize: 20,
    marginTop: "2%",
    alignSelf: "center",
    borderBottomWidth: 2,
    borderBottomColor: "black",
    zIndex: 5,
  },
  forgot_button: {
    marginTop: "5%",
    alignSelf: "center",
    zIndex: 5,
  },
  loginBtn: {
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: "65%",
    marginTop: "5%",
    marginBottom: "2.5%",
    zIndex: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 5,
  },
  loginText: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
    justifyContent: "center",
    padding: 10,
    zIndex: 5,
  },
});

export default Sign_Up;
