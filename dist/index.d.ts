declare enum DeviceType {
  Desktop = "desktop",
  Tablet = "tablet",
  Mobile = "mobile",
}
type IPropsType = {
  value?: DeviceType;
  onChange?: Function;
  style?: object;
  className?: string;
  position?: "horizontal" | "vertical";
};
declare const Device: React.FC<IPropsType>;
interface DynamicTagProps {
  tagName: string;
  [key: string]: string;
}
declare const DynamicTag: React.FC<DynamicTagProps>;
interface IMediaArea {
  types?: [];
  value?: object;
  onChange?: () => void;
  default?: string;
  height?: string;
  width?: string;
  label?: string;
  style?: object;
  className?: string;
}
declare const MediaArea: (props: IMediaArea) => React.JSX.Element;

type IPanelAlign = {
  label?: string;
  value?: string;
  options: { label: string; icon:string | any | React.JSX.Element }[];
  onChange: Function;
  style?: object;
  labelPosition: "left" | "right" | "top" | "bottom";
  className?: string;
  activeBg?: string;
  activeColor?: string;
  hoverBg?: string;
  hoverColor?: string;
  iconHeight?: string;
  iconWidth?: string;
};
declare const PanelAlign: (props: IPanelAlign) => React.JSX.Element;
type IPanelColorType = {
  label?: string;
  value: string;
  colors?: [];
  onChange: Function;
  style?: object;
  className?: string;
};
declare const PanelColorControl: (
  props: IPanelColorType
) => import("react").JSX.Element;
type IPanelColorPickerType = {
  label?: string;
  value?: string;
  colors?: [];
  onChange?: Function;
};
declare const PanelColorPicker: (
  props: IPanelColorPickerType
) => React.JSX.Element;
type IColorControlType = {
  value?: string;
  label?: string;
  onChange?: ()=> void;
};
declare const DualColorControl: ({
  value,
  onChange,
  label,
}: IColorControlType) => React.JSX.Element;
type IGradientPicker = {
  label?: string;
  value?: string;
  onChange?: ()=>void;
};
declare const PanelGradientPicker: ({
  value,
  onChange,
  label,
}: IGradientPicker) => React.JSX.Element;
type IPanelRepeater = {
  children?: React.ReactElement | React.ReactNode | JSX.Element;
  title?: string;
  length?: number;
  onChange?: Function;
  toggle?: boolean;
  copy?: boolean;
  delete?: boolean;
  index?: number;
  handleDelete?: Function;
  handleCopy?: Function;
};
declare const PanelRepeater: React.FC<IPanelRepeater>;
type ISingleShadow = {
  label?: string;
  value?: string;
  onChange?: Function;
};
declare const PanelSingleShadow: (props: ISingleShadow) => React.JSX.Element;
type ITabOptions = {
  label?: string;
  value?: string;
}
type ITabTypes = {
  options: ITabOptions[];
  onChange: (value: any) => void;
  value?: string;
  paddingY?: number;
  paddingX?: number;
  borderColor?: string;
  hoverColor?: string;
  hoverBg?: string;
  activeBg?: string;
  activeColor?: string;
  style?: object;
  className?: string;
};
declare const Tab: (props: ITabTypes) => React.JSX.Element;
type ITabPanelTypes = {
  value?: string;
  onChange?: (value: string) => void;
  isContent?: true | false;
  isStyle?: true | false;
  isAdvanced?: true | false;
};
declare const TabPanel: (props: ITabPanelTypes) => React.JSX.Element;

type ISortableProviderTypes = {
  onChange?: (value: any) => void;
  items?: Array<any>;
  children?: React.ReactNode | React.ReactElement;
};

declare const SortableProvider: ({
  onChange,
  items,
  children,
}: ISortableProviderTypes) => React.JSX.Element;

type IAdvBackground = {
  name?: string;
  onChange?: (value: any) => void;
  value?: object;
};
declare const AdvBackground: (props: IAdvBackground) => React.JSX.Element;

type IAdvOverlay = {
  onChange?: (value: any) => void;
  value?: object;
};
declare const AdvOverlay: (props: IAdvOverlay) => React.JSX.Element;
type IUnit = {
  label?: string;
  value?: string;
};
type IBBoxControl = {
  label?: string;
  values?: object;
  onChange?: (value: any) => void;
  resetValues?: object;
  defaultValues?: object;
  units?: IUnit[];
  sides?: string[];
  style?: object;
  className?: string;
  disableUnits?: true | false;
};
declare const BBoxControl: (props: IBBoxControl) => React.JSX.Element;

type IBButtonGroup = {
  options?: IUnit[];
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  borderRadius?: string;
  height?: string;
  paddingX?: string;
  paddingY?: string;
  fonSize?: string;
  fontWeight?: number;
  activeBg?: string;
  inactiveBg?: string;
  activeColor?: string;
  inactiveColor?: string;
  wrapperBorder?: true | false;
  gap?:string;
  hoverBg?: string;
  hoverColor?: string;
  style?: object;
};
declare const BButtonGroup: (props: IBButtonGroup) => React.JSX.Element;

type IBGradient = {
  onChange?: (value: any) => void;
  value?: object;
};
declare const BGradient: (props: IBGradient) => React.JSX.Element;

type ISvalue = {
  hOffset: any;
  vOffset: any;
  blur: any;
  spreed: any;
  color: string;
  isInset: any;
};
type IBMultiShadowControl = {
  label?: string;
  value?: ISvalue[];
  onChange?: (value: any) => void;
  defaults?: ISvalue[];
  type?: string;
  className?: string;
};
declare const BMultiShadowControl: (
  props: IBMultiShadowControl
) => React.JSX.Element;

type IBorderControl = {
  className?: string;
  label?: string;
  value?: object;
  onChange?: (value: any) => void;
  default?: object;
};
declare const BorderControl: (props: IBorderControl) => React.JSX.Element;

type BUnitControl = {
  label?: string;
  units?: IUnit[];
  value?: string;
  className?: string;
  style?: object;
  onChange?: (value: string) => void;
  labelPosition?: "left" | "right" | "top" | "bottom";
};
declare const BUnitControl: (props: BUnitControl) => React.JSX.Element;

type ICustomCodeEditor = {
  value?: string;
  onChange?: (value: string) => void;
  height?: string;
  width?: string;
};
declare const CustomCodeEditor: (props: ICustomCodeEditor) => React.JSX.Element;

type ILabel = {
  className?: string;
  htmlFor?: string;
};
declare const Label: (props: ILabel) => React.JSX.Element;

type IRangeUnitControl = {
  label?: string;
  units?: IUnit[];
  className?: string;
  style?: object;
  value?: string;
  min?: number;
  max?: number;
  onChange?: (value: string) => void;
};
declare const RangeUnitControl: (props: IRangeUnitControl) => React.JSX.Element;

export {
  AdvBackground,
  AdvOverlay,
  BBoxControl,
  BButtonGroup,
  BGradient,
  BMultiShadowControl,
  BUnitControl,
  BorderControl,
  CustomCodeEditor,
  Device,
  DynamicTag,
  Label,
  MediaArea,
  PanelAlign,
  PanelColorControl,
  PanelColorPicker,
  DualColorControl,
  PanelGradientPicker,
  PanelRepeater,
  PanelSingleShadow,
  RangeUnitControl,
  SortableProvider,
  Tab,
  TabPanel,
};

// export * as getCss from "./utils/getCss/getCss"
  
// declare const getBoxCSS: (value: object, property: string) => string;
// declare const getGradientCSS: (gradient: any) => string;
// declare const getBackgroundCSS: (background: any) => string;
// declare const getOverlayCSS: (overlay: any) => string;
// declare const getBorderCSS: (border: any) => string;
// declare const getSingleShadowCSS: (shadow: any) => string;
// declare const getMultiShadowCSS: (value:any,type:string) => string;

// declare const updateData: () => any;

export const helper: {
  updateData: () => any;
};
