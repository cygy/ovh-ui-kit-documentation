# Button

Buttons are used for various purposes like, submit or reset a form, navigate, performing interactive actions such as showing or hiding something in an app on click of the button, etc.

## Syntax

```javascript
import React, { Component } from 'react'
import { Button, Text } from 'react-native-ovh-uikit'

export default class ButtonExample extends Component {
    render() {
        return (
            <Button>
                <Text>Button</Text>
            </Button>
        )
    }
}
```

## Properties

| Name | Type | Default | Definition |
| - | - | - | - |
| style | - | - | Defines the button style. |
| disabled | boolean | false | Set to *true* if the button must be disabled. |
| onPress | function | - | Event called when the button is pressed. |

## Examples

![Example of Button component](https://raw.githubusercontent.com/cygy/ovh-ui-kit-documentation/react-native/src/assets/components/example.png)
