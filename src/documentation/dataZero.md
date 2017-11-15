# Data Zero

DataZero is a configured **Screen** component when there is no data to display.

## Syntax

```javascript
import React, { Component } from 'react'
import { Image } from 'react-native'
import { DataZero } from 'react-native-ovh-uikit'

export default class DataZeroExample extends Component {
    render() {
        let logo = <Image src={require('./img/logo.png')} />

        return (
            <DataZero
                backgroundColor="#DDD"
                icon={logo}
                title="No data to display"
                description="Describe here the reason why there is no data to display."
            />
        )
    }
}
```

## Properties

| Name | Type | Default | Definition |
| - | - | - | - |
| backgroundColor | string | #EEE | Color of the background of the screen. |
| icon | component | - | A component displayed at the top of the screen. Used to represent to a user-friendly way there is no data to display. |
| title | string | - | Title of the screen. |
| description | string | - | Description of the data to display. |

## Examples

![Example of DataZero component](https://raw.githubusercontent.com/cygy/ovh-ui-kit-documentation/react-native/src/assets/components/example.png)
