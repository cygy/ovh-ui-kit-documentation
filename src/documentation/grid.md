# Grid

Lists represent a collection of consistent selectable cells displayed horizontally primarily.

## Syntax

```javascript
import React, { Component } from 'react'
import { Screen, Grid } from 'react-native-ovh-uikit'

export default class GridExample extends Component {
    onSelectCell = (index) => {
        console.log("The cell at index " + index + " is selected.")
    }

    render() {
        let logo = <Image src={require('./img/logo.png')} />
        let children = <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>

        return (
            <Screen>
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
                    cellsByRow={2}
                />
            <Screen>
        )
    }
}
```

## Properties

| Name | Type | Default | Definition |
| - | - | - | - |
| cells | array | - | Array of objects to fill in the grid. Each object can define the properties **title**, **subtitle**, **icon** and **disabled**. Each object represents a **Cell** component. |
| onSelect | function | - | Function called when a cell is selected. |
| cellsByRow | integer | 2 | Number of cells displayed by row. |
| cellSize | integer | - | Size of the cells in pixels. |

## Size

Each cell displayed is a square. More the property **cellsByRow** of the grid is bigger, less the size of the cells is. The size of the cells can be forced with the property **cellSize**.

## Examples

![Example of Screen component](https://raw.githubusercontent.com/cygy/ovh-ui-kit-documentation/react-native/src/assets/components/example.png)