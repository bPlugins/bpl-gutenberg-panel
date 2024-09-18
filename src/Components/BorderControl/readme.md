# BorderControl Component

The `BorderControl` component is a WP Gutenberg component used to render a control for managing border properties with various options for setting and updating border values.

## Props

- `className` (optional): A string representing the class name for additional styling.
- `label`: The label for the border control.
- `value`: An object representing the border properties.
- `onChange`: A function to handle the change event.
- `defaults` (optional): An object representing the default border properties.

## Usage

### block.json

Add an attribute in `block.json` file.

```json
      "border": {
        "type":"object",
        "default":{
          "width": "2px",
          "style": "solid",
          "color": "#000000",
          "side": "all",
          "radius": "5px",
        }
      }
```

<br />

```jsx
import { BorderControl } from "bpl-gutenberg-panel";

const { border } = attributes;

<BorderControl
  label="Border Settings"
  value={border}
  onChange={(value) => setAttributes({ border: value })}
/>;
```

### Style.js

```jsx
import { getCss } from "bpl-gutenberg-panel";
const { getBorderCSS } = getCss;

const { border } = attributes;

<style>{`
  .border{
    ${getBorderCSS(border)}
  }
`}</style>;
```

<br />

## Note

The component includes options for setting width, style, color, sides, and radius properties for the border. It also provides the ability to reset each property to its default value.
