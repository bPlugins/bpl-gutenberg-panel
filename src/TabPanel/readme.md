# TabPanel Component

The `TabPanel` component is a WP Gutenberg component that provides a tabbed interface for switching between different content sections. It allows users to click on tabs to change the active section.

## Props

- `value`: The currently selected tab value.
- `onChange`: A function to handle the change event when a tab is clicked.
- `isAdvanced`: A boolean to determine whether the "Advanced" tab should be displayed.

## Usage

```jsx
import { TabPanel } from 'bpl-gutenberg-panel';

<TabPanel
  value="content"
  onChange={(newValue) => console.log(newValue)}
  isAdvanced={true}
/>
```

## Functionality

The `TabPanel` component renders a set of tabs for different content sections. When a tab is clicked, the `onChange` function is called with the corresponding section value. The active tab is visually distinguished from the inactive tabs. If the `isAdvanced` prop is set to `true`, an "Advanced" tab will be displayed.

I hope this README provides a clear understanding of the `TabPanel` component!