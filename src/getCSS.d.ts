declare const getBoxCSS: (value: object, property: string) => string;
declare const getGradientCSS: (gradient:object) => string;
declare const getBackgroundCSS: (background:object,selector:string) => string;
declare const getOverlayCSS: (overlay: object,selector:string) => string;
declare const getBorderCSS: (border: any) => string;
declare const getSingleShadowCSS: (shadow: any) => string;
declare const getMultiShadowCSS: (value: any, type: string) => string;


export {
  getBoxCSS,
  getGradientCSS,
  getBackgroundCSS,
  getOverlayCSS,
  getBorderCSS,
  getSingleShadowCSS,
  getMultiShadowCSS
};
