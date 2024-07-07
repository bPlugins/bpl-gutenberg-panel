# PanelColorPicker Component

The `PanelColorPicker` component is a React component that provides a color picker with a dropdown for selecting colors. It allows users to choose a color from a palette and provides an option to display a tooltip.

## Props

- `value`: The current selected color value.
- `onChange`: A function to handle the change event when a color is selected.
- `label`: The label for the color picker.
- `colors`: An array of colors to be displayed in the color palette.
- `tooltip`: The tooltip text to be displayed.
- `children`: Additional child components.
- `style`: Inline styles for the component.

## Usage

```jsx
import { PanelColorPicker } from 'bpl-gutenberg-panel';

<PanelColorPicker
  label="Select Color"
  value="#ff0000"
  onChange={(newValue) => console.log( newValue)}
  tooltip="Choose a color"
/>
```

## Functionality

The `PanelColorPicker` component renders a color picker with a dropdown, allowing users to select a color from a palette. It also provides an option to display a tooltip when hovering over the color picker. Users can interactively choose a color, and the `onChange` function is called with the selected color value.

I hope this README provides a clear understanding of the `PanelColorPicker` component!