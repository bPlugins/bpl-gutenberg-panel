# RangeUnitControl Component

The `RangeUnitControl` component is a WP Gutenberg component that combines a range control with a unit selector, allowing users to adjust a numerical value along with its unit.

## Props

- `label`: The label for the range control.
- `units`: An array of units to be displayed in the unit selector.
- `className`: Additional CSS class for styling.
- `style`: Inline styles for the component.
- `value`: The current value of the range control.
- `min`: The minimum value of the range control.
- `max`: The maximum value of the range control.
- `onChange`: A function to handle the change event.
- `...rest`: Additional props to be passed to the underlying `RangeControl`.

## Usage

```jsx
import { RangeUnitControl } from 'bpl-gutenberg-panel';

<RangeUnitControl
  label="Opacity"
  units={[
    { label: "px", value: "px" },
    { label: "%", value: "%" },
    { label: "em", value: "em" },
    { label: "rem", value: "rem" }
    ]}
  value="50%"
  min={0}
  max={100}
  onChange={(newValue) => console.log(newValue)}
/>
```

## Functionality

The `RangeUnitControl` component provides a range control for adjusting numerical values, along with a unit selector for choosing the appropriate unit for the value. Users can interactively modify the value and unit, and the component reflects the changes in real-time.

I hope this README provides a clear understanding of the `RangeUnitControl` component!