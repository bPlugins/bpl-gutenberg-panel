declare const getBoxCSS: (value: object, property: string) => string;
declare const getGradientCSS: (gradient: any) => string;
declare const getBackgroundCSS: (background: any) => string;
declare const getOverlayCSS: (overlay: any) => string;
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
