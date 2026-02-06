import { ComponentDefaults } from "../types/contextProps";
import { useEDKUIContext } from "../context/EDKUIProvider";

const usePropsWithThemeDefaults = <K extends keyof ComponentDefaults, U extends ComponentDefaults[K], T extends Record<string, unknown>>(
  componentName: K,
  props: T,
): T => {
  const defaultablePropsOfComponent = useEDKUIContext().componentDefaults[componentName] as U;
  return { ...defaultablePropsOfComponent, ...props } as T;
  //TODO - Burada theme defaults'dan gelen className, component'a className verilirse eziliyor.
  // Diğer prop'lar için bu OK fakat className'de component tarafından verilen className'in default olana append edilmesi gerekiyor.
  // Burada hem defaultable taraftaki undefined kontrolü hem de type kısmının ciddi elden geçmesi gerekiyor.
};

export default usePropsWithThemeDefaults;
