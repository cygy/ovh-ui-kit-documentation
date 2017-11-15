# Header

Headers represent the top part of a screen.

## Syntax

```javascript
import React, { Component } from 'react'
import { Screen, Header, Container, Title, Text } from 'react-native-ovh-uikit'

export default class HeaderExample extends Component {
    render() {
        return (
            <Screen>
                <Header>
                    <Title>Title of my screen</Title>
                </Header>
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

## Examples

![Example of Header component](https://raw.githubusercontent.com/cygy/ovh-ui-kit-documentation/react-native/src/assets/components/example.png)
