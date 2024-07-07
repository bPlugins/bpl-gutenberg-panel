# SortableProvider Component

The `SortableProvider` component is a WP Gutenberg component that provides a sortable container for its children. It uses the `ReactSortable` library to enable drag-and-drop sorting functionality.

## Props

- `onChange`: A function to handle the change event when the sorting order is modified.
- `items`: The list of items to be sorted.
- `children`: The child components to be rendered within the sortable container.
- `style`: Inline styles for the component.
- `className`: Additional CSS class for styling.

## Usage

```jsx
import { SortableProvider } from 'bpl-gutenberg-panel';

const items = ['Item 1', 'Item 2', 'Item 3'];

<SortableProvider
  items={items}
  onChange={(newItems) => console.log('New item order:', newItems)}
>
  {items.map((item, index) => (
    <div key={index}>{item}</div>
  ))}
</SortableProvider>
```

## Functionality

The `SortableProvider` component wraps its children with a sortable container, allowing users to drag and drop the items to change their order. When the order is modified, the `onChange` function is called with the updated list of items.

I hope this README provides a clear understanding of the `SortableProvider` component!