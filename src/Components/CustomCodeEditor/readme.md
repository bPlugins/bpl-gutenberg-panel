# CustomCodeEditor Component

The `CustomCodeEditor` component is a WP Gutenberg component that provides a code editor interface using the Ace Editor library. It allows users to edit and view code with syntax highlighting and autocompletion features.

## Props

- `value`: The initial value of the code editor.
- `onChange`: A function to handle the change event.
- `height`: The height of the code editor (default: "300px").
- `width`: The width of the code editor (default: "100%").

## Usage

```jsx
import { CustomCodeEditor } from 'bpl-gutenberg-panel';

<CustomCodeEditor
  value={customCss}
  onChange={(value) => setAttributes({customCss:val})}
  height="400px"
  width="80%"
/>
```

<br />

### Style.js
```jsx
const {customCss} =attributes;

<style>{`

  ${customCss}
  
`}</style>
```

## Note

The `CustomCodeEditor` component is suitable for scenarios where code editing and viewing are required, such as in code editors, IDEs, or any application that involves code input and display.

I hope this README provides a clear understanding of the `CustomCodeEditor` component!