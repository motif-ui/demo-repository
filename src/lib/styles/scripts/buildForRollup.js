// This file is used to build the styles for rollup because of the typescript issue

/*
 * TODO: İleride bakılacak. Normalde constants.ts'den import edilmesi gerekiyor fakat rollup run edildiğinde uzantı
 * kaynaklı module bulunamadı hatası alınıyor. Yarım günümü ayırdım fakat sorunu çözemedim. Şimdilik bu şekilde devam
 * edebiliriz.
 * */
const DEFAULT_CLASSNAME_PREFIX = "edk-";

/**
 * TODO - bu metodun orijinali build.ts içerisinde fakat rollup ile ts uzantılı dosyalar arasında bir dert olduğu için bunu buraya kopyaladım
 * Bu sorunun çözülmesi ve bu dosyanın kaldırılması gerekiyor.
 */

//
export const generateScopedCssClassName = (localClassName, moduleFilePath) => {
  const moduleName = moduleFilePath.match(/\/([^/]+)\.module\.scss$/)?.[1];

  return localClassName === "Root"
    ? `${DEFAULT_CLASSNAME_PREFIX}${moduleName}`
    : `${DEFAULT_CLASSNAME_PREFIX}${moduleName}--${localClassName}`;
};
