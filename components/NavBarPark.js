import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialBasicFooter5 from "./MaterialBasicFooter5";

export default class NavBarPark extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <MaterialBasicFooter5 style={styles.materialBasicFooter5} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  materialBasicFooter5: {
    width: 375,
    height: 112
  }
});
