<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/motif-ui/assets/images/motifui-logo.svg" alt="Motif UI Logo" height="80" />
  <h1>Motif UI</h1>
  <p>TypeScript ve CSS Modülleri ile geliştirilmiş, hafif ve tema desteğine sahip bir React bileşen kütüphanesi.</p>

  [![npm version](https://img.shields.io/npm/v/@ab-demo-ui/demo-react.svg)](https://www.npmjs.com/package/@ab-demo-ui/demo-react)
  [![Lisans: MIT](https://img.shields.io/badge/Lisans-MIT-yellow.svg)](./LICENSE.md)
  [![PR'lar Hoş Geldiniz](https://img.shields.io/badge/PR'lar-bekleniyor-brightgreen.svg)](./.github/CONTRIBUTING.md)
</div>

---

## ✨ Özellikler

- 🧩 **Kullanıma hazır bileşenler** — hazır UI yapı taşları
- 🎨 **Tam tema desteği** — renkler, tipografi, boyutlandırma ve daha fazlasını CSS değişkenleriyle özelleştirin
- 🌍 **Çoklu dil desteği** — yerleşik yerelleştirme (`tr` / `en`)
- 🪝 **Yardımcı hook'lar** — yaygın React kalıpları yeniden kullanılabilir hook'lara dönüştürüldü
- 🔒 **TypeScript öncelikli** — her prop ve tip tamamen tanımlı
- 📖 **Storybook dokümantasyonu** — her bileşen için etkileşimli belgeler
- ♿ **Erişilebilir** — bileşenler erişilebilirlik standartlarına uygun geliştirildi

---

## 📦 Kurulum

```bash
npm install @ab-demo-ui/demo-react
```

> **Zorunlu bağımlılıklar**: React 19 ve ReactDOM 19 gereklidir.

```bash
npm install react@19 react-dom@19
```

---

## 🚀 Hızlı Başlangıç

Tema ve bağlam özelliklerini etkinleştirmek için uygulamanızı `EDKUIProvider` ile sarmalayın:

```tsx
import { EDKUIProvider } from "@ab-demo-ui/demo-react";

export default function App({ children }) {
  return <EDKUIProvider>{children}</EDKUIProvider>;
}
```

Ardından bileşenleri istediğiniz yerde kullanın:

```tsx
import { Divider } from "@ab-demo-ui/demo-react";

export default function Sayfa() {
  return (
    <div>
      <p>Bölüm A</p>
      <Divider />
      <p>Bölüm B</p>
    </div>
  );
}
```

---

## 🧩 Bileşenler

### `Divider` (Ayırıcı)

Boyut, boşluk ve şekil ayarlarına sahip yatay ya da dikey bir çizgi bileşeni.

```tsx
import { Divider } from "@ab-demo-ui/demo-react";

// Yatay (varsayılan)
<Divider />

// Dikey — üst elementin height veya display:flex özelliğine ihtiyaç duyar
<div style={{ display: "flex", height: 100 }}>
  <Divider orientation="vertical" />
</div>
```

| Prop          | Tip                             | Varsayılan     | Açıklama                              |
|---------------|---------------------------------|----------------|---------------------------------------|
| `orientation` | `"horizontal"` \| `"vertical"` | `"horizontal"` | Ayırıcının yönü                       |
| `size`        | `"sm"` \| `"md"` \| `"lg"`     | `"md"`         | Çizginin kalınlığı                    |
| `gap`         | `"sm"` \| `"md"` \| `"lg"`     | `"md"`         | Ayırıcının etrafındaki boşluk         |
| `shape`       | `"solid"` \| `"dashed"` \| `"dotted"` | `"solid"` | Çizginin görsel stili            |
| `className`   | `string`                        | —              | Ek CSS sınıf adı                      |
| `style`       | `CSSProperties`                 | —              | Satır içi stiller                     |
| `ref`         | `Ref<HTMLDivElement>`           | —              | Kök elemana ref iletimi               |

---

## 🪝 Hook'lar

Hook'lar `@ab-demo-ui/demo-react/hooks` alt yolundan içe aktarılır:

```ts
import { useToggle, useOutsideClick, useTimeout, useScreenSize, useDomReady } from "@ab-demo-ui/demo-react/hooks";
```

### `useToggle(baslangicGorunurluk?, gecisZamani?)`

İsteğe bağlı animasyon zamanlama desteğiyle boolean görünür/gizli durumunu yönetir.

```ts
const { visible, show, hide, toggle, toggleState } = useToggle(false, 300);
```

### `useOutsideClick(gericagri, disariKalinanRefler?)`

Referans verilen elementin dışında bir tıklama gerçekleştiğinde `gericagri` fonksiyonunu çağıran bir ref döndürür.

```tsx
const ref = useOutsideClick(() => setAcik(false));
return <div ref={ref}>...</div>;
```

### `useTimeout(gericagri, gecikme)`

Belirtilen gecikme süresinin ardından bir callback çalıştırır; duraklatma ve devam ettirme desteği mevcuttur.

```ts
const { start, pause } = useTimeout(() => console.log("tamamlandı!"), 2000);
```

### `useScreenSize()`

Yeniden boyutlandırma olaylarında güncellenen pencere boyutunu `{ width, height }` olarak döndürür.

```ts
const { width, height } = useScreenSize();
```

### `useDomReady()`

DOM hazır olduğunda (ilk render'dan sonra) `true` döndürür. SSR uyumlu kontroller için kullanışlıdır.

```ts
const domHazir = useDomReady();
```

---

## 🎨 Tema Kullanımı

CSS değişkenleri aracılığıyla tasarım tokenlarını çalışma zamanında geçersiz kılmak için `EDKUIProvider`'a bir `theme` nesnesi aktarın.
İsteğe bağlı olarak özel bir `font` ailesi ve `locale` (`"tr"` | `"en"`) belirleyebilirsiniz.

```tsx
import { EDKUIProvider } from "@ab-demo-ui/demo-react";

const temam = {
  color: {
    surface: { primary: "#ffffff" },
    text: { primary: "#111111" },
  },
  typography: {
    fontSize: { base: "16px" },
  },
};

<EDKUIProvider theme={temam} font="Inter, sans-serif" locale="tr">
  {children}
</EDKUIProvider>
```

Hazır temalar CSS dosyası olarak da doğrudan içe aktarılabilir:

```ts
import "@ab-demo-ui/demo-react/themes/default-theme.css";
// ya da
import "@ab-demo-ui/demo-react/themes/papyrus.css";
```

---

## 🛠 Geliştirme

```bash
# Bağımlılıkları kur
npm install

# Next.js geliştirme ortamını başlat
npm run dev

# Storybook'u başlat
npm run storybook

# Testleri çalıştır
npm run test:ci

# Kütüphaneyi derle
npm run build:lib
```

Katkı süreci hakkında ayrıntılı bilgi için [CONTRIBUTING.md](./.github/CONTRIBUTING.md) dosyasına göz atın.

---

## 📄 Lisans

[MIT](./LICENSE.md) © Atakan Bayrak
