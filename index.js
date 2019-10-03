import React from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  NativeModules
} from 'react-native';

const { StatusBarManager } = NativeModules;

let statusBarHeight = 0;
if (Platform.OS === 'ios') {
  StatusBarManager.getHeight((statusBarFrameData) => {
    statusBarHeight = statusBarFrameData.height;
  });
}

const getVerticalOffset = () => Platform.select({
  ios: statusBarHeight + 44,
  android: 0
});

const KeyboardStickyView = ({ style, children }) => (
  <KeyboardAvoidingView
    style={[styles.container, style]}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={getVerticalOffset()}
  >
    {children}
  </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center'
  }
});

export default KeyboardStickyView;
