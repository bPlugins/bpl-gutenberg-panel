//getBoxCss
export const getBoxCSS = (value, property) => {
  if (value) {
    const result = Object.keys(value).map(
      (key) => `${property}-${key}:${value[key]};`
    );
    return result.join(" ");
  }
  return "";
};

//gradient
export const getGradientCSS = (gradient) => {
  const { type, radialType, colors, centerPositions, angel } = gradient;
  if (gradient) {
    const gradientColors = colors?.map(
      ({ color, position }) => `${color} ${position}%`
    );
    const liner = `linear-gradient(${angel}deg, ${gradientColors})`;
    const radial = `radial-gradient(${radialType} at ${centerPositions?.x}% ${centerPositions?.y}%,${gradientColors})`;

    return type === "linear" ? `background:${liner};` : `background:${radial};`;
  }
  return "";
};

//get image position
const getImagePosition = (img) => {
  return `${img?.position && img?.position !== "default"
    ? `background-position: ${img.position !== "custom"
      ? `${img.position};`
      : `${img.xPosition} ${img.yPosition};`
    }`
    : ""
    }
  ${img?.attachment && img?.attachment !== "default"
      ? `background-attachment: ${img.attachment};`
      : ""
    }
    ${img?.repeat && img?.repeat !== "default" ? `background-repeat: ${img.repeat};` : ""}
    ${img?.size && img?.size !== "default"
      ? `background-size:${img.size !== "custom"
        ? img.size
        : `${img.customSize} auto`
      };`
      : ""
    }`;
};

//background image
const getImageCSS = (img) => {
  let desktop, tablet, mobile;
  if (Object.keys(img).length > 1) {
    if (img?.desktop) {
      desktop = getImagePosition(img?.desktop, "desktop");
    }
    if (img?.tablet) {
      tablet = getImagePosition(img?.tablet, "tablet");
    }
    if (img?.mobile) {
      mobile = getImagePosition(img?.mobile, "mobile");
    }
  }
  if (img) {
    return {
      global: `background-image: url(${img.url});`,
      desktop: img.url ? desktop : "",
      tablet: img.url ? tablet : "",
      mobile: img.url ? mobile : "",
    };
  }
  return "";
};

//background color
const getColor = (color) => {
  return ` ${color ? `background: ${color};` : ""}`;
};

//getBorderCss
export const getBorderCSS = (border) => {
  const {
    width = "0px",
    style = "solid",
    color = "#0000",
    side = "all",
    radius = "0px",
  } = border || {};

  const borderSideCheck = (s) => {
    const bSide = side?.toLowerCase();
    return bSide?.includes("all") || bSide?.includes(s);
  };
  const borderCSS = `${width} ${style} ${color}`;

  const styles = `
		${["top", "right", "bottom", "left"]
      .map((side) =>
        borderSideCheck(side) ? `border-${side}: ${borderCSS};` : ""
      )
      .join("")}
		${!radius ? "" : `border-radius: ${radius};`}
	`;

  return styles;
};

//getSingleShadowCSS
export const getSingleShadowCSS = (shadow) => {
  const {
    type = "box",
    hOffset = "0px",
    vOffset = "0px",
    blur = "0px",
    spreed = "0px",
    color = "#7090b0",
    isInset = false,
  } = shadow || {};

  const inset = isInset ? "inset" : "";
  const offsetBlur = `${hOffset} ${vOffset} ${blur}`;

  const styles =
    "text" === type
      ? `${offsetBlur} ${color}`
      : `${offsetBlur} ${spreed} ${color} ${inset}`;

  return styles || "none";
};

// getMultiShadowCSS
export const getMultiShadowCSS = (value, type = 'box') => {
  let styles = '';

  value?.map((item, index) => {
    const { hOffset = '0px', vOffset = '0px', blur = '0px', spreed = '0px', color = '#7090b0', isInset = false } = item || {};

    const inset = isInset ? 'inset' : '';
    const offsetBlur = `${hOffset} ${vOffset} ${blur}`;
    const isComa = index + 1 >= value.length ? '' : ', ';

    styles += 'text' === type ? `${offsetBlur} ${color}${isComa}` : `${offsetBlur} ${spreed} ${color} ${inset}${isComa}`;
  });

  return styles || 'none';
}

//background
export const getBackgroundCSS = (background, selector) => {
  const { normal, hover } = background;
  const { type, color, gradient, img } = normal;
  const {
    type: hoverType,
    color: hoverColor,
    gradient: hoverGradient,
    img: hoverImg,
    transition,
  } = hover;
  const bg =
    type === "color"
      ? getColor(color)
      : type === "gradient"
        ? getGradientCSS(gradient)
        : type === "image"
          ? getImageCSS(img).global
          : "";
  const hoverBg =
    hoverType === "color"
      ? getColor(hoverColor)
      : hover.type === "gradient"
        ? getGradientCSS(hoverGradient)
        : hover.type === "image"
          ? getImageCSS(hoverImg).global
          : "";
  const desktop = type === "image" ? getImageCSS(img).desktop : "";
  const tablet = type === "image" ? getImageCSS(img).tablet : "";
  const mobile = type === "image" ? getImageCSS(img).mobile : "";
  const hoverDesktop = hoverType === "image" ? getImageCSS(hover.img).desktop : "";
  const hoverTablet = hoverType === "image" ? getImageCSS(hover.img).tablet : "";
  const hoverMobile = hoverType === "image" ? getImageCSS(hover.img).mobile : "";

  return `${selector}{
    ${bg}
    ${desktop}
    ${transition ? `transition:all ${transition}s;` : ""}
  }

  ${selector}:hover{
    ${hoverBg}
    ${hoverDesktop}
  }

  @media only screen and (min-width:641px) and (max-width: 1024px) {
      ${selector}{
    ${tablet}
  }
  ${selector}:hover{
    ${hoverTablet}
  }
  }
  @media only screen and (max-width: 640px) {
  ${selector}{
    ${mobile}
  }
  ${selector}:hover{
    ${hoverMobile}
  }
  }`.replace(/\s+/g, " ").trim()
};


const getOverlayBGCSS = (background) => {
  const { normal, hover } = background;
  const { type, color, gradient, img } = normal;
  const {
    type: hoverType,
    color: hoverColor,
    gradient: hoverGradient,
    img: hoverImg,
    transition,
  } = hover;
  const bg =
    type === "color"
      ? getColor(color)
      : type === "gradient"
        ? getGradientCSS(gradient)
        : type === "image"
          ? getImageCSS(img).global
          : "";
  const hoverBg =
    hoverType === "color"
      ? getColor(hoverColor)
      : hover.type === "gradient"
        ? getGradientCSS(hoverGradient)
        : hover.type === "image"
          ? getImageCSS(hoverImg).global
          : "";
  const desktop = type === "image" ? getImageCSS(img).desktop : "";
  const tablet = type === "image" ? getImageCSS(img).tablet : "";
  const mobile = type === "image" ? getImageCSS(img).mobile : "";
  return {
    normal: {
      background: bg,
      desktop,
      tablet,
      mobile,
    },
    hover: {
      background: hoverBg,
      desktop: hoverType === "image" ? getImageCSS(hover.img).desktop : "",
      tablet: hoverType === "image" ? getImageCSS(hover.img).tablet : "",
      mobile: hoverType === "image" ? getImageCSS(hover.img).mobile : "",
    },
    transition,
  };
};


//overlay
export const getOverlayCSS = (overlay, selector) => {
  const {
    colors,
    opacity,
    blend,
    isCssFilter,
    blur,
    brightness,
    contrast,
    saturation,
    hue,
    isEnabled
  } = overlay;
  const filter = isCssFilter
    ? `filter:brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%) blur(${blur}px) hue-rotate(${hue}deg);
    -webkit-filter:brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%) blur(${blur}px) hue-rotate(${hue}deg);` : "";
  // brightness(100 % ) contrast(100 % ) saturate(100 % ) blur(0.9px) hue - rotate(0deg)
  // -webkit - filter: brightness(${ brightness } %) contrast(${ contrast } %) saturate(${ saturation } %) blur(${ blur }px) hue - rotate(${ hue }deg);
  const blendCss = blend ? `mix-blend-mode: ${blend};` : ""
  const transition = transition ? `transition:all ${transition}s;` : ""


  return isEnabled ? `${selector}::after{
    content:"";
    position:absolute;
    inset:0;
    ${getOverlayBGCSS(colors).normal.background}
    ${getOverlayBGCSS(colors).normal.desktop}
    opacity:${opacity};
    ${blendCss}
    ${filter}
    ${transition}
  }

  ${selector}:hover::after{
    content:"";
    position:absolute;
    inset:0;
    ${getOverlayBGCSS(colors).hover.background}
    ${getOverlayBGCSS(colors).hover.desktop}
  }

  @media only screen and (min-width:641px) and (max-width: 1024px) {
      ${selector}::after{
    ${getOverlayBGCSS(colors).normal.tablet}
  }
  ${selector}:hover::after{
    ${getOverlayBGCSS(colors).hover.tablet}
  }
  }

  @media only screen and (max-width: 640px) {
  ${selector}::after{
    ${getOverlayBGCSS(colors).normal.mobile}
  }
  ${selector}:hover::after{
    ${getOverlayBGCSS(colors).hover.mobile}
  }
  }`.replace(/\s+/g, " ").trim() : ""


  // return {
  //   normal: {
  //     background: getBackgroundCSS(colors).normal.background,
  //     desktop: getBackgroundCSS(colors).normal.desktop,
  //     tablet: getBackgroundCSS(colors).normal.tablet,
  //     mobile: getBackgroundCSS(colors).normal.mobile,
  //   },
  //   hover: {
  //     background: getBackgroundCSS(colors).hover.background,
  //     desktop: getBackgroundCSS(colors).hover.desktop,
  //     tablet: getBackgroundCSS(colors).hover.tablet,
  //     mobile: getBackgroundCSS(colors).hover.mobile,
  //   },
  //   transition: getBackgroundCSS(colors).transition,
  //   opacity: opacity ? `opacity: ${opacity};` : "",
  //   blend: blend ? `mix-blend-mode: ${blend};` : "",
  //   filter,
  // };
};