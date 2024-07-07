# PanelAlign Component

The `PanelAlign` component is a WP Gutenberg component that provides a user interface for selecting alignment options within a panel. It allows users to choose from a set of alignment icons and provides visual feedback for the selected alignment.

## Props

- `label`: The label for the alignment options.
- `options`: An array of objects representing the available alignment options.
- `onChange`: A function to handle the change event.
- `value`: The currently selected alignment option.
- `style`: Inline styles for the component.
- `labelPosition`: The position of the label (left, right, top, bottom).
- `className`: Additional class name for custom styling.

## Usage

```jsx
import { PanelAlign } from 'bpl-gutenberg-panel';

<PanelAlign
  label="Alignment"
  options={[
    { label: 'Left', icon: <svg/> },
    { label: 'Center', icon: <svg/> },
    { label: 'Right',icon: <svg/> },
  ]}
  value="C"
  onChange={(value) => console.log('Selected alignment:', value)}
  labelPosition="top"
/>
```

## Functionality

The `PanelAlign` component allows users to select an alignment option from a set of icons representing different alignments. It dynamically updates the selected alignment and triggers the `onChange` event.

## Note

The `PanelAlign` component is designed to be used within a panel or settings interface to provide a user-friendly way to select alignment options, offering visual cues for the selected alignment.

I hope this README provides a clear understanding of the `PanelAlign` component!