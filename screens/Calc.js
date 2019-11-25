import React, { Component} from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar
} from 'react-native';
//import styles.Commonstyle from '../../components/styles.Commonstyle'
import {Calendar} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';

import HeaderComponentHyrUtKalender from '../components/HeaderComponentHyrUtKalender';

// Change the names of the days into swedish
LocaleConfig.locales['dayNames'] = {
  monthNames: ['Januari','Februari','Mars','April','Maj','Juni','Juli','Augusti','September','Oktober','November','December'],
  monthNamesShort: ['Jan','Feb','Mars','April','Maj','Juni','Juli','Aug','Sept','Okt','Nov','Dec'],
  dayNames: ['Måndag','Tisdag','Onsdag','Torsdag','Fredag','Lördag','Söndag'],
  dayNamesShort: ['Mån','Tis','Ons','Tors','Fre','Lör','Sön'],
};
LocaleConfig.defaultLocale = 'dayNames';



export default class Calc extends Component {

  static navigationOptions = {
    headerTitle: () => <HeaderComponentHyrUtKalender navigation={this.props.navigation} />,
  };

  constructor(props) {
    super(props);
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
  }
  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
    this.props.navigation.navigate('Slots', { bookingDate : day })
  }
  _onPressBack(){
    const {goBack} = this.props.navigation
      goBack()
  }
  render() {
    return (
      <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <View style={styles.iconLight.toolbar}>
        <TouchableOpacity onPress={() => this._onPressBack() }><Text style={styles.iconLight.toolbarButton}>Back</Text></TouchableOpacity>
                    <Text style={styles.iconLight.toolbarTitle}></Text>
                    <Text style={styles.iconLight.toolbarButton}></Text>
      </View>
        <Calendar
          onDayPress={this.onDayPress}
          style={styles.calendar}
          hideExtraDays
          markedDates={{[this.state.selected]: {selected: true}}}
          theme={{
            selectedDayBackgroundColor: "rgba(202,63,6,1)",
            todayTextColor: "rgba(202,63,6,1)",
            arrowColor: 'black',
            textDayFontFamily:  "montserrat-font",
            textMonthFontFamily:  "montserrat-font",
            textDayHeaderFontFamily:  "montserrat-font",
            textDayFontSize: 20,
            textMonthFontSize: 25,
            textDayHeaderFontSize: 12,
            paddingTop: 0,

          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#ffffff',
    height: 350

  },
  Commonstyle: {
    fontSize: 20,
  },
  iconLight: {
    color: "rgba(128,128,128,1)",
    fontSize: 25,
    opacity: 1,
    fontFamily: "montserrat-font"
},
});

//202,63,6
