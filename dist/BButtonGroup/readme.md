# BButtonGroup Component

The `BButtonGroup` component is a Gutenberg component used to render a group of buttons with various styling and functionality options.

## Props

- `options`: An array of options for the button group.
- `label`: The label for the button group.
- `value`: The current value of the button group.
- `onChange`: A function to handle the change event.
- `borderRadius`: The border radius for the buttons.
- `height`: The height of the buttons.
- `paddingX`: The horizontal padding for the buttons.
- `paddingY`: The vertical padding for the buttons.
- `fontSize`: The font size for the buttons.
- `fontWeight`: The font weight for the buttons.
- `activeBg`: The background color for the active button.
- `activeColor`: The text color for the active button.
- `inactiveColor`: The text color for the inactive buttons.
- `hoverBg`: The background color for the buttons on hover.
- `hoverColor`: The text color for the buttons on hover.
- `style`: The style object for the button group.

## Usage

```js
import { BButtonGroup } from 'bpl-gutenberg-panel';

<BButtonGroup
  label="Button Group"
  options={[
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ]}
  value="option1"
  onChange={(value) => console.log('Selected value:', value)}
  borderRadius="30px"
  height="40px"
  paddingX="8px"
  paddingY="4px"
  fontSize="12px"
  fontWeight={400}
  activeBg="#4527a4"
  activeColor="#fff"
  inactiveColor="#000"
  hoverBg="#fff"
  hoverColor="#4527a4"
/>
```

## Styling

The component includes custom styles for the button group, including hover effects and transitions.

## Functionality

The `BButtonGroup` component provides functionality for handling button clicks, setting active buttons, and updating the button group based on the selected value.

