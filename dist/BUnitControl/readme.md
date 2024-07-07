# BUnitControl Component

The `BUnitControl` component is a React component used to render a control for managing numeric values with different units. It provides an input box for the numeric value and a dropdown for selecting the unit.

## Props

- `label`: The label for the unit control.
- `units`: An array of objects representing the available units.
- `className`: Additional class name for styling.
- `style`: Inline styles for the component.
- `value`: The initial value for the unit control.
- `onChange`: A function to handle the change event.
- `labelPosition`: The position of the label (top, bottom, left, right).

## Usage

```jsx
import { BUnitControl } from 'bpl-gutenberg-panel';

<BUnitControl
  label="Margin"
  units={[
    { label: 'px', value: 'px' },
    { label: '%', value: '%' },
    { label: 'em', value: 'em' },
  ]}
  value="20px"
  onChange={(value) => console.log('Updated value:', value)}
  labelPosition="top"
/>
```

## Note

The component provides a flexible and interactive way to manage numeric values with different units, making it suitable for various input scenarios such as margin, padding, font size, and more.