import { AdvBackground } from './AdvBackground/AdvBackground';
import { AdvOverlay } from './AdvOverlay/AdvOverlay';
import { BBoxControl } from './BBoxControl/BBoxControl';
import { BButtonGroup } from './BButtonGroup/BButtonGroup';
import { BGradient } from './BGradient/BGradient';
import { BMultiShadowControl } from './BMultiShadowControl/BMultiShadowControl';
import { BorderControl } from './BorderControl/BorderControl';
import { BUnitControl } from './BUnitControl/BUnitControl';
import { CustomCodeEditor } from './CustomCodeEditor/CustomCodeEditor';
import { Device } from './Device/Device';
import { DynamicTag } from './DynamicTag/DynamicTag';
import { Label } from './Label/Label';
import { MediaArea } from './MediaArea/MediaArea';
import { PanelAlign } from './PanelAlign/PanelAlign';
import { PanelColorControl } from './PanelColorControl/PanelColorControl';
import { PanelColorPicker } from './PanelColorPicker/PanelColorPicker';
import {DualColorControl} from "./DualColorControl/DualColorControl"
import { PanelGradientPicker } from './PanelGradientPicker/PanelGradientPicker';
import { PanelRepeater } from './PanelRepeater/PanelRepeater';
import { PanelSingleShadow } from './PanelSingleShadow/PanelSingleShadow';
import { RangeUnitControl } from './RangeUnitControl/RangeUnitControl';
import { SortableProvider } from './SortableProvider/SortableProvider';
import { Tab } from './Tab/Tab';
import { TabPanel } from './TabPanel/TabPanel';

import './style.scss'
import { updateData } from './utils/helper/helper';
export { AdvBackground, AdvOverlay, BBoxControl, BButtonGroup, BGradient, BMultiShadowControl, BorderControl, BUnitControl, CustomCodeEditor, Device, DynamicTag, Label, MediaArea, PanelAlign, PanelColorControl, PanelColorPicker, PanelGradientPicker, PanelRepeater, PanelSingleShadow, RangeUnitControl, SortableProvider, Tab, TabPanel, DualColorControl };

// export * as getCss from "./utils/getCss/getCss"
// export * as helper from "./utils/helper/helper"

export const helper = {
  updateData
}
