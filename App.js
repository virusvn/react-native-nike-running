import 'expo'
import React from 'react';
import { StyleSheet, Text, View,
} from 'react-native';

import { Font, Components, AppLoading } from 'expo';

import SplashScreen from './src/components/SplashScreen';
import HomeScreen from './src/components/HomeScreen';
import HistoryScreen from './src/components/HistoryScreen';
import BeginRunScreen from './src/components/BeginRunScreen';
import RunningScreen from './src/components/RunningScreen';

import { StackNavigator } from 'react-navigation';

const AppNavigator = StackNavigator({
    splash: {
        screen: SplashScreen
    },
    home: {
        screen: HomeScreen
    },
    begin: {
        screen: BeginRunScreen
    },
    running: {
        screen: RunningScreen
    },
    history: {
        screen: HistoryScreen
    },
},   {
    navigationOptions: {
        header: null,
      },
    // mode: 'modal',
  });

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false
        }
    }

    async componentWillMount() {
        await Font.loadAsync({
            'bebas-neue': require('./src/fonts/BebasNeue.ttf'),
        });

        this.setState({
            fontLoaded: true
        });
    }

    render() {
        if (!this.state.fontLoaded) {
            return <AppLoading />;
        }

        return (
            <AppNavigator />
            );
    }
}

export default App;
