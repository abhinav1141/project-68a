import * as React from "react"
import {createAppContainer} from "react-navigation"
import {createBottomTabNavigator} from "react-navigation-tabs"
import FbScreen from "./screens/fb"
import InScreen from "./screens/in"
export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>

    )
  }
}

const TabNavigators = createBottomTabNavigator(
  { Fb: { screen: FbScreen}, 
  In: { screen: InScreen } });
  
const AppContainer=createAppContainer(TabNavigators)

