# AdvOverlay

AdvOverlay is used to set element overlay(background color,gradient color, overlay image, transition, opacity, blend mode, css filters).


## Table of contents

1. [Usage](#usage)
2. [Options](#options)

<br />

## Usage

### block.json
Add an attribute in `block.json` file.

```json
      "overlay": {
        "type":"object",
        "default":{
          "isEnabled": false,
        "colors": {
          "normal": {
            "type": "color",
            "color": "",
            "gradient": {
              "type": "linear",
              "radialType": "ellipse",
              "colors": [
                { "color": "", "position": 0 },
                { "color": "", "position": 0 }
              ],
              "centerPositions": { "x": 0, "y": 0 },
              "angel": 90
            },
            "img": {
              "url": "",
              "desktop": { "position": "" },
              "tablet": { "position": "" },
              "mobile": { "position": "" }
            }
          },
          "hover": {
            "type": "color",
            "color": "#0000",
            "gradient": {
              "type": "linear",
              "radialType": "ellipse",
              "colors": [
                { "color": "", "position": 0 },
                { "color": "", "position": 0 }
              ],
              "centerPositions": { "x": 0, "y": 0 },
              "angel": 90
            },
            "transition": 0.3,
            "img": {
              "url": "",
              "desktop": {},
              "tablet": {},
              "mobile": {}
            }
          },
          "hoverType": "normal"
        },
        "opacity": 1,
        "blend": "normal",
        "isCssFilter": false,
        "blur": 0,
        "brightness": 100,
        "contrast": 100,
        "saturation": 100,
        "hue": 0
        }
      }
```

<br />

### Settings.js

```jsx
import { AdvOverlay } from 'bpl-gutenberg-panel';

const { overlay } = attributes;

return <AdvOverlay  value={overlay} onChange={val => setAttributes({ overlay: val })} />
```

More props in [Options](#options).

<br />

### Style.js
```jsx
import { getCss } from 'bpl-gutenberg-panel';
const { getOverlayCSS } = getCss;

const { overlay } = attributes;

<style>{`
  ${getOverlayCSS(overlay,selector)}
`}</style>
```

<br />

## Options
### Props
Set this options as props of `<AdvOverlay />` component that used in `Settings.js`.
<br />

### value

The current value of the background.

- Type: `Object`
- Required

<br />

### onChange

A function that receives the new value. The value will be an object.

- Type: `function`
- Required
