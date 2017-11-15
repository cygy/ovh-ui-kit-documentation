# Grid

Grids represent a collection of consistent selectable cells displayed horizontally primarily.

## Syntax

```javascript
import React, { Component } from 'react'
import { Image } from 'react-native'
import { Screen, Container, Grid, Text } from 'react-native-ovh-uikit'

export default class GridExample extends Component {
    onSelectCell = (index) => {
        console.log("The cell at index " + index + " is selected.")
    }

    render() {
        let logo = <Image src={require('./img/logo.png')} />
        let children = <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>

        return (
            <Screen>
                <Container>
                    <Grid
                        cells={[
                            {title: "Cell 1",},
                            {title: "Cell 2", subtitle: "Subtitle of cell 2."},
                            {title: "Cell 3", icon: logo},
                            {title: "Cell 4", disabled: true},
                            {title: "Cell 5", children: children},
                            {title: "Cell 6", subtitle: "Subtitle of cell 6.", icon: logo, children: children},
                        ]}
                        onSelect={onSelectCell}
                        numColumns={2}
                    />
                </Container>
            <Screen>
        )
    }
}
```

## Properties

| Name | Type | Default | Definition |
| - | - | - | - |
| cells | array | - | Array of objects to fill in the grid. Each object can define the properties **title**, **subtitle**, **icon** and **disabled**. Each object generates a **Cell** component. |
| onSelect | function | - | Function called when a cell is selected. |
| numColumns | integer | 2 | Number of cells displayed by row. |

## Size

Each cell displayed is a square. More the property **cellsByRow** of the grid is bigger, less the size of the cells is.

## Examples

![Example of Grid component](https://raw.githubusercontent.com/cygy/ovh-ui-kit-documentation/react-native/src/assets/components/example.png)
