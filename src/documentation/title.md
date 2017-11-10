# Title

Titles are title of a part of the screen.

## Syntax

```javascript
import React, { Component } from 'react'
import { Screen, Title, Text } from 'react-native-ovh-uikit'

export default class TitleExample extends Component {
    render() {
        return (
            <Screen>
                <Title>Main Title</Title>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus leo sodales, commodo enim in, malesuada lacus. Aenean eget quam bibendum, accumsan purus id, interdum justo. Phasellus aliquet orci sed dignissim egestas. Duis blandit suscipit diam sit amet aliquet. Mauris tincidunt volutpat leo sit amet sollicitudin. Curabitur ultricies, magna nec pulvinar mollis, leo nulla malesuada purus, pellentesque rhoncus velit turpis in lorem.</Text>
                <Title description="Describe here the goal of the section.">Title of a Section</Title>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus leo sodales, commodo enim in, malesuada lacus. Aenean eget quam bibendum, accumsan purus id, interdum justo. Phasellus aliquet orci sed dignissim egestas. Duis blandit suscipit diam sit amet aliquet. Mauris tincidunt volutpat leo sit amet sollicitudin. Curabitur ultricies, magna nec pulvinar mollis, leo nulla malesuada purus, pellentesque rhoncus velit turpis in lorem.</Text>
            <Screen>
        )
    }
}
```

## Properties

| Name | Type | Default | Definition |
| - | - | - | - |
| description | string | - | Describes the title. |

## Examples

![Example of Screen component](https://raw.githubusercontent.com/cygy/ovh-ui-kit-documentation/react-native/src/assets/components/example.png)