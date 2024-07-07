# MediaArea Component

The `MediaArea` component is a WP Gutenberg component that provides a user interface for selecting and displaying media, such as images or SVGs, within the context of a WordPress block editor.

## Props

- `types`: An array of allowed media types (default: ['image']).
- `value`: The selected media value.
- `onChange`: A function to handle the change event.
- `default`: The default media value.
- `height`: The height of the media area (default: '50px').
- `width`: The width of the media area (default: '50px').
- `label`: The label for the media selection button.
- `style`: Inline styles for the component.
- `className`: Additional class name for custom styling.

## Usage

```jsx
import { MediaArea } from 'bpl-gutenberg-panel';

<MediaArea
  value={selectedMedia}
  onChange={(value) => setSelectedMedia(value)}
  types={['image', 'video']}
  label="Choose Media"
  style={{ margin: '10px' }}
/>
```


## Note

The `MediaArea` component is designed to be used within the WordPress block editor to facilitate the selection and display of media, providing a user-friendly interface for managing media content within the editor.

I hope this README provides a clear understanding of the `MediaArea` component!