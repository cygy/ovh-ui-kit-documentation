# Cell

Cells represent the children components used by the **List** and the **Grid** components.

## Syntax

```javascript
import React, { Component } from 'react'
import { Image } from 'react-native'
import { Screen, Cell, Text } from 'react-native-ovh-uikit'

export default class TitleExample extends Component {
    render() {
        let logo = <Image src={require('./img/logo.png')} />
        return (
            <Screen>
                <Cell title="Cell 1" />
                <Cell title="Cell 2" subtitle="More details about the cell 2." />
                <Cell title="Cell 3" icon={logo} />
                <Cell title="Cell 4" disabled={true} />
                <Cell title="Cell 5">
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </Cell>
                <Cell title="Cell 6" subtitle="More details about the cell 6." icon={logo}>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </Cell>
            <Screen>
        )
    }
}
```

## Properties

| Name | Type | Default | Definition |
| - | - | - | - |
| title | string | - | Title of the cell. |
| subtitle | string | - | Subtitle of the cell. |
| icon | component | - | A component displayed at the left in the cell. Often an image component is used here. |
| disabled | boolean | false | Disabled state of the cell. If it is disabled it can not be selected. |

## Children

Some components can be added as children to the **Cell** component. These children will be displayed after the default ones defined by the component **Cell**.

## Examples

![Example of Screen component](https://raw.githubusercontent.com/cygy/ovh-ui-kit-documentation/react-native/src/assets/components/example.png)