"use client";

import { createContext, PropsWithChildren, useContext, useInsertionEffect, useMemo, useState } from "react";
import { DEFAULT_EDKUI_CONTEXT_VALUES, DEFAULT_LOCALE, EDK_UI_ICONS_DEFAULT_CLASS } from "../../constants";
import { ComponentDefaults, EDKUIContextProps, EDKUIProviderProps, Locale } from "../types/contextProps";
import { convertThemeToCSSVariables } from "../helper";

const EDKUIContext = createContext<EDKUIContextProps>(DEFAULT_EDKUI_CONTEXT_VALUES);
export const useEDKUIContext = () => useContext(EDKUIContext);

const EDKUIProvider = (props: PropsWithChildren<EDKUIProviderProps>) => {
  const [componentDefaults, setComponentDefaults] = useState<ComponentDefaults>(props.componentDefaults || {});
  const [baseIconClass, setBaseIconClass] = useState(props.baseIconClass || EDK_UI_ICONS_DEFAULT_CLASS);
  const [locale, setLocale] = useState<Locale>(props.locale || DEFAULT_LOCALE);
  const [font, setFont] = useState(props.font);
  const [theme, setTheme] = useState(props.theme);

  const themeCssVariables = useMemo(() => (theme ? convertThemeToCSSVariables(theme) : {}), [theme]);

  useInsertionEffect(() => {
    const root = document.documentElement;

    // Set theme CSS variables
    Object.entries(themeCssVariables).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    // Set font family
    font && root.style.setProperty("--theme-typography-font-family", font);

    // Cleanup function to remove theme variables when component unmounts
    return () => {
      Object.keys(themeCssVariables).forEach(key => {
        root.style.removeProperty(key);
      });
      root.style.removeProperty("--theme-typography-font-family");
    };
  }, [font, themeCssVariables]);

  const value: EDKUIContextProps = useMemo(
    () => ({
      componentDefaults,
      locale,
      baseIconClass,
      theme,
      setBaseIconClass,
      setComponentDefaults,
      setLocale,
      setFont,
      setTheme,
    }),
    [baseIconClass, componentDefaults, locale, theme],
  );

  return <EDKUIContext value={value}>{props.children}</EDKUIContext>;
};
export default EDKUIProvider;
