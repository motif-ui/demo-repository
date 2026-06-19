<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/motif-ui/assets/images/motifui-logo.svg" alt="Motif UI Logo" width="120" />
</p>

<h1 align="center">Motif UI — Demo Repository</h1>

<p align="center">
  React tabanlı, tema destekli, açık kaynaklı bir UI bileşen kütüphanesi.<br/>
  <strong>npm paketi:</strong> <code>@ab-demo-ui/demo-react</code>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@ab-demo-ui/demo-react">
    <img src="https://img.shields.io/npm/v/@ab-demo-ui/demo-react?color=blue&label=npm" alt="npm versiyonu" />
  </a>
  <a href="LICENSE.md">
    <img src="https://img.shields.io/badge/lisans-MIT-green" alt="Lisans" />
  </a>
</p>

---

## İçindekiler

- [Hakkında](#hakkında)
- [Kurulum](#kurulum)
- [Kullanım](#kullanım)
- [Bileşenler](#bileşenler)
- [Tema Özelleştirme](#tema-özelleştirme)
- [Geliştirme](#geliştirme)
- [Katkı Sağlama](#katkı-sağlama)
- [Lisans](#lisans)

---

## Hakkında

**Motif UI**, React 19 ile uyumlu, CSS değişkenleri ile tam olarak özelleştirilebilir bir bileşen kütüphanesidir. `EDKUIProvider` aracılığıyla uygulama genelinde tema, dil (locale) ve bileşen varsayılanları yönetilebilir.

---

## Kurulum

```bash
npm install @ab-demo-ui/demo-react
```

> **Not:** Peer dependency olarak `react@19` ve `react-dom@19` gereklidir.

---

## Kullanım

Uygulamanızın kök bileşenini `EDKUIProvider` ile sarın:

```tsx
import { EDKUIProvider } from "@ab-demo-ui/demo-react";

export default function App({ children }) {
  return (
    <EDKUIProvider locale="tr">
      {children}
    </EDKUIProvider>
  );
}
```

Ardından bileşenleri içe aktararak kullanabilirsiniz:

```tsx
import { Divider } from "@ab-demo-ui/demo-react";

export default function Page() {
  return (
    <div>
      <p>Yukarısı</p>
      <Divider size="md" orientation="horizontal" shape="solid" />
      <p>Aşağısı</p>
    </div>
  );
}
```

---

## Bileşenler

### `Divider`

İki içerik alanı arasına görsel ayraç ekler.

| Prop          | Tip                               | Varsayılan     | Açıklama                        |
| ------------- | --------------------------------- | -------------- | ------------------------------- |
| `orientation` | `"horizontal"` \| `"vertical"`   | `"horizontal"` | Ayracın yönü                   |
| `size`        | `"sm"` \| `"md"` \| `"lg"`       | `"md"`         | Ayracın kalınlığı              |
| `gap`         | `"sm"` \| `"md"` \| `"lg"`       | `"md"`         | Çevre boşluğu (margin)         |
| `shape`       | `"solid"` \| `"dashed"` \| `"dotted"` | `"solid"` | Çizgi stili                    |
| `className`   | `string`                          | —              | Ek CSS sınıfı                  |
| `style`       | `CSSProperties`                   | —              | Satır içi stil                 |

> **Dikey kullanımda** üst elementin `height` değeri ya da `display: flex` özelliği tanımlanmalıdır.

---

## Tema Özelleştirme

`EDKUIProvider`, `theme` prop'u aracılığıyla CSS değişkenlerini çalışma zamanında değiştirmenize olanak tanır:

```tsx
import { EDKUIProvider } from "@ab-demo-ui/demo-react";
import type { Theme } from "@ab-demo-ui/demo-react/types";

const myTheme: Theme = {
  color: {
    surface: {
      primary: {
        default: "#6200EE",
        hover: "#7722FF",
      },
    },
  },
};

export default function App({ children }) {
  return (
    <EDKUIProvider theme={myTheme} font="Inter, sans-serif" locale="tr">
      {children}
    </EDKUIProvider>
  );
}
```

Hazır tema dosyalarını aşağıdaki şekilde içe aktarabilirsiniz:

```tsx
// Next.js veya herhangi bir React uygulamasında (örn. layout.tsx veya _app.tsx)
import "@ab-demo-ui/demo-react/themes/default-theme.css";
```

---

## Geliştirme

### Gereksinimler

- Node.js ≥ 18
- npm ≥ 9

### Kurulum

```bash
npm install
```

### Komutlar

| Komut                        | Açıklama                                     |
| ---------------------------- | -------------------------------------------- |
| `npm run dev`                | Next.js demo uygulamasını başlatır           |
| `npm run storybook`          | Storybook'u `localhost:6006`'da başlatır     |
| `npm run build:lib`          | Kütüphaneyi `dist/` klasörüne derler         |
| `npm run test:ci`            | Tüm testleri çalıştırır                      |
| `npm run lint`               | ESLint ile kod kontrolü yapar                |
| `npm run type-check`         | TypeScript tip kontrolü yapar                |
| `npm run build:theme-default`| Varsayılan tema CSS dosyasını oluşturur      |

### Proje Yapısı

```
src/
├── app/          # Next.js demo uygulaması
├── lib/
│   ├── components/   # UI bileşenleri
│   ├── hooks/        # Yardımcı React hook'ları
│   ├── motif/        # Tema ve context altyapısı
│   ├── styles/       # SCSS stilleri ve tema dosyaları
│   └── types/        # Ortak TypeScript tipleri
└── utils/            # Genel yardımcı fonksiyonlar
```

---

## Katkı Sağlama

Katkılarınızı bekliyoruz! Katkıda bulunmak için:

1. Bu repoyu fork'layın
2. Özellik dalı oluşturun: `git checkout -b feature/yeni-ozellik`
3. Değişikliklerinizi commit'leyin: `git commit -m 'feat: yeni özellik eklendi'`
4. Dalınıza push'layın: `git push origin feature/yeni-ozellik`
5. Pull Request açın

Lütfen mevcut testlerin geçtiğinden (`npm run test:ci`) ve lint kontrollerinin başarılı olduğundan (`npm run lint`) emin olun.

---

## Lisans

MIT © [MotifUI](https://github.com/motif-ui) — Detaylar için [LICENSE.md](LICENSE.md) dosyasına bakın.
