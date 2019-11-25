import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {Agenda} from 'react-native-calendars';
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import PlusButtonComponent from '../components/PlusButtonComponent';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class Slot extends Component {

  constructor(props) {
    super(props);

    const { navigation } = this.props
    this.state = {
      date: navigation.state.params.bookingDate,
      items: {}
    }

  }

  render() {
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={this.state.date}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        //hideKnob={true}
        theme={{
          // agendaDayTextColor: 'yellow',
          // agendaDayNumColor: 'green',
          agendaTodayColor: "rgba(202,63,6,1)",
          selectedDayBackgroundColor: "rgba(202,63,6,1)",
          dotColor: "rgba(202,63,6,1)",
          todayTextColor: "rgba(202,63,6,1)",
          // textDayFontFamily: "montserrat-font",
          // textMonthFontFamily: "montserrat-font",
          // textDayHeaderFontFamily: "montserrat-font",
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16


        }}
        // markingType={'period'}
        // markedDates={{
        //    '2017-05-08': {textColor: '#666'},
        //    '2017-05-09': {textColor: '#666'},
        //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2017-05-21': {startingDay: true, color: 'blue'},
        //    '2017-05-22': {endingDay: true, color: 'gray'},
        //    '2017-05-24': {startingDay: true, color: 'gray'},
        //    '2017-05-25': {color: 'gray'},
        //    '2017-05-26': {endingDay: true, color: 'gray'}}}
        //  monthFormat={'yyyy'}
        //  theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        // renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
      />


    );


  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 5);

          var startHour = Math.floor(Math.random() * 8 + 5);
          var startMinute = Math.floor(Math.random() * 5);

          var timeSlots = [];

          for (let j = 0; j < numItems + 1; j++) {
            var startHour = startHour + Math.floor(Math.random() * 2 + 2);
            var startMinute = startMinute + Math.floor(Math.random() * 9);

            var startHourPresent = startHour;
            var startMinutePresent = startMinute;

          if (startHour < 10){
            startHourPresent = '0' + startHourPresent
          }
          if (startMinutePresent < 10){
            startMinutePresent = '0' + startMinutePresent
          }

          timeSlots.push(startHourPresent + ':' + startMinutePresent);

          }


          for (let j = 0; j < numItems; j++) {


            this.state.items[strTime].push({
              name: 'Item for ' + strTime,
              height: Math.max(70, Math.floor(Math.random() * 150)),
              date: strTime,
              time: timeSlots[j] + ' - ' + timeSlots[ j + 1 ]
            });


          }
        }
      }
      //console.log(this.state.items);
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);
  }

  renderItem(item) {
    return (
      <View style={[styles.item, {height: item.height}]}>
      <View style={styles.container}>
      <Text style={styles.textStyle}>Din laddplats är tillgänglig: {item.time}</Text>
      </View>
      <View style={styles.containerLower}>
      <TouchableOpacity onPress={() => this.removeTimeSlot(item) }>
        <AntDesign name="closecircle" style = {styles.icon6} />
      </TouchableOpacity>
      </View>

      </View>
    );
  }
  removeTimeSlot(item){

    const newItems = {};

    Object.keys(this.state.items).forEach(key => {

      newItems[key] = this.state.items[key];

      if ( arr[i] === item.key ) {
        this.state.items.splice(i, 1); 
      }

    });

    this.setState({
      items: newItems
    });

  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text style={styles.textStyle}>Du har inga utlagda tider det här datumet</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}



const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  container:{
    flexDirection:'row'
  },
  containerLower:{
    flexDirection:'row-reverse',
    marginTop: 10,
    marginBottom: 3
  },
  closeContainer:{
    height: 15,
    width: 15
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30,
    fontFamily: "montserrat-font"
  },
  icon6: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    // width: 30,
    // height: ,
    marginTop: 3,
  },
  materialBasicFooter4: {
    width: 375,
    height: 56,
    marginLeft: 487
  },
  icon6Row: {
    height: 83,
    flexDirection: "row",
    marginTop: 48,
    marginLeft: 279,
    marginRight: -848,
    marginTop: 300
  },
  textStyle: {
    fontFamily: "montserrat-font"

  }
});
