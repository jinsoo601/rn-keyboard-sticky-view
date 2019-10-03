# rn-keyboard-sticky-view

This component accomplishes the animation using `KeyboardAvoidingView` provided by `react-native`, without the complicated animation code.

## Preview

## Installation

```
npm i rn-keyboard-sticky-view
```

### or

```
yarn add rn-keyboard-sticky-view
```

## Example
```
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import KeyboardStickyView from 'rn-keyboard-sticky-view';

const KeyboardInput = (props) => {
  const [value, setValue] = React.useState('');

  return (
    <KeyboardStickyView style={styles.keyboardView}>
      <TextInput
        value={value}
        onChangeText={setValue}
        onSubmitEditing={() => alert(value)}
        placeholder="Write something..."
        style={styles.input}
      />
    </KeyboardStickyView>
  );
}

const styles = StyleSheet.create({
  keyboardView: { ... },
  input: { ... }
});

export default KeyboardInput;
```

## Props
| Props    | Type   | Description                                                | Default  |
| -------- | ------ | ---------------------------------------------------------- | -------- |
| style    | object | Style of the KeyboardStickyView (background, border, etc.) | {}       |
| children | node   | Content of the KeyboardStickyView                          | null     |

## Give me a Star
If you think this project is helpful just give me a ⭐️ :D

## License
This project is licensed under the MIT License.

## Author
Brought to you by Jinsoo Lim
