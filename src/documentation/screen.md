# Screen

Screens are the main containers of the other components.

## Syntax

```javascript
import React, { Component } from 'react'
import { Screen, Title, Text } from 'react-native-ovh-uikit'

export default class ScreenExample extends Component {
    render() {
        return (
            <Screen backgroundColor="#EEE">
                <Title>Main Title</Title>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus leo sodales, commodo enim in, malesuada lacus. Aenean eget quam bibendum, accumsan purus id, interdum justo. Phasellus aliquet orci sed dignissim egestas. Duis blandit suscipit diam sit amet aliquet. Mauris tincidunt volutpat leo sit amet sollicitudin. Curabitur ultricies, magna nec pulvinar mollis, leo nulla malesuada purus, pellentesque rhoncus velit turpis in lorem.</Text>
            </Screen>
        )
    }
}
```

## Properties

| Name | Type | Default | Definition |
| - | - | - | - |
| backgroundColor | string | #999999 | Color of the background of the screen. |

## Examples

![Example of Screen component](https://github.com/cygy/ovh-ui-kit-documentation/blob/react-native/src/assets/components/example.png)