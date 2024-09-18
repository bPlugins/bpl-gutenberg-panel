# BBoxControl Component

The `BBoxControl` component is a WP Gutenberg component that provides a flexible box control for managing dimensions such as padding, margin, or any other box-related properties. It allows users to input values for different sides of the box and provides options for units and linking/unlinking values.

## Props

- `label`: The label for the box control.
- `values`: An object containing the values for different sides of the box.
- `onChange`: A function to handle the change event when values are updated.
- `resetValues`: An object containing the default values for resetting the box control.
- `defaultValues`: Default values for the box control.
- `units`: An array of units to be displayed in the unit control.
- `sides`: An array of sides for which the values are to be controlled.
- `style`: Inline styles for the component.
- `className`: CSS class for the component.
- `disableUnits`: A boolean to disable the unit control.

## Usage

```jsx
import { BBoxControl } from 'bpl-gutenberg-panel';

<BBoxControl
  label="Padding"
  values={padding}
  onChange={(newValues) => setAttributes({padding:newValues})}
  resetValues={{ top: 0, right: 0, bottom: 0, left: 0 }}
/>
```

## Functionality

The `BBoxControl` component provides a user-friendly interface for managing box dimensions. Users can input values for different sides of the box, choose units, link/unlink values, and reset to default values. The `onChange` function is called whenever the values are updated.

I hope this README provides a clear understanding of the `BBoxControl` component!