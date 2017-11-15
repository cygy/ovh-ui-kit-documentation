# Cell

Cells represent the children components used by the **List** and the **Grid** components. Usually you do not have to use directly this component.

## Syntax

```javascript
import React, { Component } from 'react'
import { Image } from 'react-native'
import { Screen, Container, Cell, Text } from 'react-native-ovh-uikit'

export default class CellExample extends Component {
    onPress = () => {
        console.log("A cell is selected.")
    }

    render() {
        let logo = <Image src={require('./img/logo.png')} />

        return (
            <Screen>
                <Container>
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
                    <Cell title="Cell 7" onPress={onPress} />
                    <Cell title="Cell 8" size={200} type="Grid" />
                    <Cell title="Cell 9" backgroundColor="#DDD" />
                    <Cell title="Cell 10" style={{margin: 10}} />
                </Container>
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
| backgroundColor | string | #FFF | Background color of the cell. |
| type | enum(List, Grid) | List | Type of the cell to display, list (full screen-width) or grid (square). |
| size | integer | 150 | Width and height values of a cell in the Grid mode. |
| style | object | - | Style applied to the cell. |
| onPress | func | - | Function called when this cell is selected. |

## Children

Some components can be added as children to the **Cell** component. These children will be displayed after the default ones defined by the component **Cell**.

## Examples

![Example of Cell component](https://raw.githubusercontent.com/cygy/ovh-ui-kit-documentation/react-native/src/assets/components/example.png)
