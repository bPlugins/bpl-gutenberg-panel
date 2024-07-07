# PanelSingleShadow Component

The `PanelSingleShadow` component is a WP Gutenberg component that provides a user interface for customizing a single shadow effect. It allows users to adjust the horizontal offset, vertical offset, blur, spread, color, and whether the shadow is inset or not.

## Props

- `value`: The current value of the single shadow effect.
- `onChange`: A function to handle the change event.
- `label`: The label for the single shadow effect.

## Usage

```jsx
import { PanelSingleShadow } from 'bpl-gutenberg-panel';

<PanelSingleShadow
  label="Single Shadow"
  value="2px 2px 4px 0px #000000"
  onChange={(newValue) => console.log(newValue)}
/>
```

## Functionality

The `PanelSingleShadow` component allows users to interactively modify the properties of a single shadow effect, including the horizontal offset, vertical offset, blur, spread, color, and whether the shadow is inset or not. The component provides a user-friendly interface for adjusting these properties and immediately reflects the changes.

I hope this README provides a clear understanding of the `PanelSingleShadow` component!