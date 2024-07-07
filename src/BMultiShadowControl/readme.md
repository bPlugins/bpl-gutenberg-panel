# BMultiShadowControl Component

The `BMultiShadowControl` component is a WP Gutenberg component used to render a control for managing multiple shadow properties with various options for setting and updating shadow values.

## Props

- `className` (optional): A string representing the class name for additional styling.
- `label`: The label for the shadow control.
- `value`: An array of shadow properties.
- `onChange`: A function to handle the change event.
- `type` (optional): The type of shadow control (default is "box").
- `defaults` (optional): An array of default shadow properties.

## Usage

### block.json
Add an attribute in `block.json` file.

```json
      "shadow": {
        "type":"array",
        "default":[]
      }
```

<br />

```jsx
import { BMultiShadowControl } from 'bpl-gutenberg-panel';

const {shadow} =attributes

<BMultiShadowControl
  label="Shadow"
  value={shadow}
  onChange={(value) => setAttributes({shadow:value})}
  defaults={[
    { hOffset: '0px', vOffset: '0px', blur: '0px', spreed: '0px', color: '#7090b0', isInset: false },
  ]}
/>
```

<br/>

### Style.js
```jsx
import { getCss } from 'bpl-gutenberg-panel';
const { getMultiShadowCSS } = getCss;

const { shadow } = attributes;

<style>{`
  .shadow {
    box-shadow:${getMultiShadowCSS(shadow)};
  }
`}</style>
```

<br />

## Note

The component includes options for setting horizontal offset, vertical offset, blur, spread, color, and inset properties for each shadow. It also provides the ability to add, remove, and duplicate shadow properties.