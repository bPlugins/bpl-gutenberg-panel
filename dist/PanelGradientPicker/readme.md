# PanelGradientPicker Component

The `PanelGradientPicker` component is a React component that provides a gradient picker with a dropdown for selecting gradients. It allows users to interactively choose a gradient and provides a visual representation of the selected gradient.

## Props

- `value`: The current selected gradient value.
- `onChange`: A function to handle the change event when a gradient is selected.
- `label`: The label for the gradient picker.

## Usage

```jsx
import { PanelGradientPicker } from 'bpl-gutenberg-panel';

<PanelGradientPicker
  label="Select Gradient"
  value={color}
  onChange={(newValue) => setAttributes({color:newValue})}
/>
```

## Functionality

The `PanelGradientPicker` component renders a gradient picker with a dropdown, allowing users to select a gradient from a predefined set of options. Users can interactively choose a gradient, and the `onChange` function is called with the selected gradient value.

I hope this README provides a clear understanding of the `PanelGradientPicker` component!