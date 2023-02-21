import React, { Component } from 'react';
import { Image, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Colors, Constants, Styles } from '../global';
import {
  SignIn,
  ClientDashboard,
  ClientViewReport,
  ReportComp,
  AddEmployerForm,
  AddAddressForm,
  ChooserScreen,
  SignUp,
  ForgotPassword,
  CreateUserProfile,
  SettingScreen,
  UpgradeAccount,
  UpgradeAccountBizForm,
  UpgradeAccountPayment,
  ClientSupport,
  DisputeSupport,
  BusinessDashboard,
  BizCheckReports,
  CreateTransaction,
  BizAdmin,
  BizSupport,
} from '../components';
import { EmptyComponent, ReportDetailsBody } from '../views';
import SubmitDisputeForm from '../components/forms/client/SubmitDisputeForm';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    );
  }
}

function AuthStack() {
  return (
    <Stack.Navigator
      //screenOptions={{headerShown: false}}
      initialRouteName="ChooserScreen">
      <Stack.Screen name="ChooserScreen" component={ChooserScreen} />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SignIn"
        component={SignIn}
      />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen
        name="CreateUserProfile"
        component={CreateUserProfile}
        options={({ navigation, route }) => ({
          title: '',
          headerLeft: () => (
            <Button
              onPress={() => navigation.goBack()}
              title="Back"
              color="green"
            />
          ),
        })}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="ClientAppStack"
        component={ClientAppStack}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="BusinessOwnerAppStack"
        component={BusinessOwnerAppStack}
      />
    </Stack.Navigator>
  );
}

function Logout({ navigation }) {
  navigation.navigate('ChooserScreen');
}

function ClientAppStack() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
      activeColor={Colors.white}
      inactiveColor="gray"
      labeled={false}
      backBehavior
      barStyle={Styles.tabBarStyle}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color }) => (
            <Image
              source={Constants.iconHome}
              resizeMode="contain"
              style={[Styles.tabIconSize, { tintColor: color }]}
            />
          ),
        }}
        name="Home"
        component={ClientDashboard}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Reports',
          tabBarIcon: ({ focused, color }) => (
            <Image
              source={Constants.iconDocuments}
              resizeMode="contain"
              style={[Styles.tabIconSize, { tintColor: color }]}
            />
          ),
        }}
        name="Reports"
        component={ClientReportStack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Biz',
          tabBarIcon: ({ focused, color }) => (
            <Image
              source={Constants.iconSupplierProduct}
              resizeMode="contain"
              style={[Styles.tabIconSize, { tintColor: color }]}
            />
          ),
        }}
        name="Biz"
        component={UpgradeAccountStack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Disputes',
          tabBarIcon: ({ focused, color }) => (
            <Image
              source={Constants.iconSearch}
              resizeMode="contain"
              style={[Styles.tabIconSize, { tintColor: color }]}
            />
          ),
        }}
        name="Disputes"
        component={DisputeSupport}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ focused, color }) => (
            <Image
              source={Constants.iconProfile}
              resizeMode="contain"
              style={[Styles.tabIconSize, { tintColor: color }]}
            />
          ),
        }}
        name="Setting"
        component={SettingScreen}
      />

      <Tab.Screen
        options={{
          tabBarLabel: 'Logout',
          tabBarIcon: ({ focused, color }) => (
            <Image
              source={Constants.iconLogout}
              resizeMode="contain"
              style={[Styles.tabIconSize, Styles.logout, { tintColor: color }]}
            />
          ),
        }}
        name="Logout"
        component={Logout}
      />

    </Tab.Navigator>
  );
}
function ClientReportStack() {
  return (
    <Stack.Navigator
      initialRouteName="ClientReportDashBoard"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ClientReportDashBoard" component={ClientViewReport} />
      <Stack.Screen name="ClientReportComp" component={ReportComp} />
      <Stack.Screen name="AddAddressForm" component={AddAddressForm} />
      <Stack.Screen name="AddEmployerForm" component={AddEmployerForm} />
      <Stack.Screen name="SubmitDisputeForm" component={SubmitDisputeForm} />
    </Stack.Navigator>
  );
}
function UpgradeAccountStack() {
  return (
    <Stack.Navigator
      initialRouteName="UpgradeAccount"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="UpgradeAccount" component={UpgradeAccount} />
      <Stack.Screen
        name="UpgradeAccountBizForm"
        component={UpgradeAccountBizForm}
      />
      <Stack.Screen
        name="UpgradeAccountPayment"
        component={UpgradeAccountPayment}
      />
    </Stack.Navigator>
  );
}
function BusinessOwnerAppStack() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
      activeColor={Colors.white}
      inactiveColor="gray"
      labeled={false}
      backBehavior
      barStyle={Styles.tabBarStyle}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color }) => (
            <Image
              source={Constants.iconHome}
              resizeMode="contain"
              style={[Styles.tabIconSize, { tintColor: color }]}
            />
          ),
        }}
        name="Home"
        component={BusinessDashboard}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Reports',
          tabBarIcon: ({ focused, color }) => (
            <Image
              source={Constants.iconDocuments}
              resizeMode="contain"
              style={[Styles.tabIconSize, { tintColor: color }]}
            />
          ),
        }}
        name="Reports"
        component={BizCheckReports}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Biz',
          tabBarIcon: ({ focused, color }) => (
            <Image
              source={Constants.iconSupplierProduct}
              resizeMode="contain"
              style={[Styles.tabIconSize, { tintColor: color }]}
            />
          ),
        }}
        name="Biz"
        component={CreateTransaction}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Admin',
          tabBarIcon: ({ focused, color }) => (
            <Image
              source={Constants.iconOrders}
              resizeMode="contain"
              style={[Styles.tabIconSize, { tintColor: color }]}
            />
          ),
        }}
        name="Admin"
        component={BizAdmin}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Support',
          tabBarIcon: ({ focused, color }) => (
            <Image
              source={Constants.iconSearch}
              resizeMode="contain"
              style={[Styles.tabIconSize, { tintColor: color }]}
            />
          ),
        }}
        name="Support"
        component={BizSupport}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ focused, color }) => (
            <Image
              source={Constants.iconProfile}
              resizeMode="contain"
              style={[Styles.tabIconSize, { tintColor: color }]}
            />
          ),
        }}
        name="Setting"
        component={SettingScreen}
      />
    </Tab.Navigator>
  );
}

