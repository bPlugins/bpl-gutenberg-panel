# BGradient Component

The `BGradient` component is a WP Gutenberg component used to render a gradient control with various options for setting gradient types, colors, positions, and more.

## Props

- `value`: The current value of the gradient.
- `onChange`: A function to handle the change event.

## Usage

### block.json
Add an attribute in `block.json` file.

```json
"gradient": {
  "type": "linear",
  "radialType": "ellipse",
  "colors": [
    { "color": "", "position": 0 },
    { "color": "", "position": 80 }
  ],
  "centerPositions": { "x": 0, "y": 0 },
  "angel": 90
}

```

<br />


```jsx
import { BGradient } from 'bpl-gutenberg-panel';

<BGradient
  value={{
    type: 'linear',
    radialType: 'ellipse',
    colors: [
      { color: '#ffffff', position: 0 },
      { color: '#000000', position: 100 },
    ],
    centerPositions: { x: 50, y: 50 },
    angel: 90,
  }}
  onChange={(value) => console.log('Updated gradient:', value)}
/>
```

### Style.js
```jsx
import { getCss } from 'bpl-gutenberg-panel';
const { getGradientCSS }= getCss;
const { gradient } = attributes;

  <style>{`
    .background:{
      ${getGradientCSS(gradient)}
    }
  `}</style>
```

## Functionality

The `BGradient` component provides functionality for setting and updating gradient properties, including type, colors, positions, and more.
