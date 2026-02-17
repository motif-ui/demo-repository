import { MotifContextProps } from "./motif/types/contextProps";

export const MOTIF_ICONS_DEFAULT_CLASS = "mtf-ui-icons";

export const SCREEN_SIZES = {
  XL: 1200,
  LG: 992,
  MD: 768,
  SM: 576,
};

export const DEFAULT_LOCALE = "tr";
export const DEFAULT_CLASSNAME_PREFIX = "mtf-";
export const DEFAULT_COLOR_MODE = "light";
export const LOGO_URL = "https://cdn.jsdelivr.net/gh/motif-ui/assets/images/motifui-logo.svg";
export const NPM_LOGO_URL = "https://raw.githubusercontent.com/npm/logos/refs/heads/master/npm%20square/npm-16.png";

export const DEFAULT_MOTIF_CONTEXT_VALUES: MotifContextProps = {
  locale: DEFAULT_LOCALE,
  baseIconClass: MOTIF_ICONS_DEFAULT_CLASS,
  componentDefaults: {},
  setBaseIconClass: () => {},
  setLocale: () => {},
  setFont: () => {},
  setComponentDefaults: () => {},
  setTheme: () => {},
};
