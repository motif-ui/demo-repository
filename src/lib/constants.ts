import { EDKUIContextProps } from "./edk/types/contextProps";

export const EDK_UI_ICONS_DEFAULT_CLASS = "edkui-icons";

export const SCREEN_SIZES = {
  XL: 1200,
  LG: 992,
  MD: 768,
  SM: 576,
};

export const DEFAULT_LOCALE = "tr";
export const DEFAULT_CLASSNAME_PREFIX = "edk-";
export const DEFAULT_COLOR_MODE = "light";

export const DEFAULT_EDKUI_CONTEXT_VALUES: EDKUIContextProps = {
  locale: DEFAULT_LOCALE,
  baseIconClass: EDK_UI_ICONS_DEFAULT_CLASS,
  componentDefaults: {},
  setBaseIconClass: () => {},
  setLocale: () => {},
  setFont: () => {},
  setComponentDefaults: () => {},
  setTheme: () => {},
};
