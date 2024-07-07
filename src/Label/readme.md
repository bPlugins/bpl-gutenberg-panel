# Label Component

The `Label` component is a simple WP Gutenberg component that represents a label element in a user interface. It allows for customization of the class name, "for" attribute, and the content of the label.

## Props

- `className`: The CSS class name for styling the label.
- `htmlFor`: The ID of the form element the label is associated with.
- `children`: The content to be displayed within the label.

## Usage

```jsx
import { Label } from 'bpl-gutenberg-panel';

<Label htmlFor="username" className="custom-label">Username:</Label>