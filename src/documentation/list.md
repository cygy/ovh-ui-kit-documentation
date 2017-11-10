# List

Lists represent a collection of consistent selectable cells displayed vertically.

## Syntax

```javascript
import React, { Component } from 'react'
import { Screen, List, Text } from 'react-native-ovh-uikit'

export default class ListExample extends Component {
    onSelectCell = (index) => {
        console.log("The cell at index " + index + " is selected.")
    }

    render() {
        let logo = <Image src={require('./img/logo.png')} />
        let children = <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>

        return (
            <Screen>
                <List
                    cells={[
                        {title: "Row 1",},
                        {title: "Row 2", subtitle: "Subtitle of row 2."},
                        {title: "Row 3", icon: logo},
                        {title: "Row 4", disabled: true},
                        {title: "Row 5", children: children},
                        {title: "Row 6", subtitle: "Subtitle of row 6.", icon: logo, children: children},
                    ]}
                    onSelect={onSelectCell}
                />
            <Screen>
        )
    }
}
```

## Properties

| Name | Type | Default | Definition |
| - | - | - | - |
| cells | array | - | Array of objects to fill in the list. Each object can define the properties **title**, **subtitle**, **icon**, **children** and **disabled**. Each object represents a **Cell** component. |
| onSelect | function | - | Function called when a cell is selected. |

## Examples

![Example of Screen component](https://github.com/cygy/ovh-ui-kit-documentation/tree/react-native/src/assets/components/example.png)