/*****************************
      REQUIRED MODULES
******************************/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  Modal
} from 'react-native';
import { Font } from 'exponent';
import { Container, Content, Button } from 'native-base';
import { Ionicons } from '@exponent/vector-icons';

/*****************************
    (EXPORTED) CAPTION VIEW
******************************/

export default class CaptionView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      caption: ''
    };
  }

  /*****************************
      RENDERED (JSX)
  ******************************/

  render() {
    return (


    );
  }

  /*****************************
        MODAL FUNCTIONS
  ******************************/

  setVisibility(show) {
    // Accepts `true` or `false` to define visibility setting
    this.setState({visible: show});
  }


}

/*****************************
    MODAL STYLESHEET
******************************/

const styles = StyleSheet.create({

});
