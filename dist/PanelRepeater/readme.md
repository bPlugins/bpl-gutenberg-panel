# PanelRepeater Component

The `PanelRepeater` component is a WP Gutenberg component that provides a user interface for repeating and managing a set of items within a panel. It allows users to toggle the visibility of the items, copy items, and delete items.

## Props

- `children`: The content to be repeated within the panel.
- `title`: The title for the repeater panel.
- `length`: The number of items to be repeated.
- `onChange`: A function to handle the change event.
- `toggle`: A boolean to control the initial visibility of the panel.
- `copy`: A boolean to enable or disable the copy functionality.
- `delete`: A boolean to enable or disable the delete functionality.
- `index`: The index of the repeater item.
- `handleDelete`: A function to handle the delete event.
- `handleCopy`: A function to handle the copy event.

## Usage

```jsx
import { PanelRepeater } from 'bpl-gutenberg-panel';

<PanelRepeater
  title="Repeater Panel"
  length={3}
  onChange={(open) => console.log('Panel open:', open)}
  toggle={false}
  copy={true}
  delete={true}
  index={1}
  handleDelete={(index) => console.log('Item deleted at index:', index)}
  handleCopy={(index) => console.log('Item copied at index:', index)}
>

  {/* Content to be repeated */}

</PanelRepeater>
```

## Functionality

The `PanelRepeater` component allows users to repeat and manage a set of items within a panel. It provides options to toggle the visibility of the items, copy items, and delete items.

## Note

The `PanelRepeater` component is designed to be used within a panel or settings interface to provide a user-friendly way to manage repeated items, offering control over visibility, copying, and deletion.

I hope this README provides a clear understanding of the `PanelRepeater` component!