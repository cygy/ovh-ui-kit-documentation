# Screen

Screens are the main containers of the other components.

## Syntax

```javascript
import React, { Component } from 'react'
import { Screen, Container, Title, Text } from 'react-native-ovh-uikit'

export default class ScreenExample extends Component {
    render() {
        return (
            <Screen backgroundColor="#EEE">
                <Container>
                    <Title>Main Title</Title>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus leo sodales, commodo enim in, malesuada lacus. Aenean eget quam bibendum, accumsan purus id, interdum justo. Phasellus aliquet orci sed dignissim egestas. Duis blandit suscipit diam sit amet aliquet. Mauris tincidunt volutpat leo sit amet sollicitudin. Curabitur ultricies, magna nec pulvinar mollis, leo nulla malesuada purus, pellentesque rhoncus velit turpis in lorem.</Text>
                </Container>
            </Screen>
        )
    }
}
```

## Properties

| Name | Type | Default | Definition |
| - | - | - | - |
| backgroundColor | string | #EEE | Color of the background of the screen. |

## Examples

![Example of Screen component](https://raw.githubusercontent.com/cygy/ovh-ui-kit-documentation/react-native/src/assets/components/example.png)
