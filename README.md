# EDK-UI-REACT

Bu proje, EDK-UI'a ait tasarımlarla oluşturulmuş React Component'ları içermektedir. Projenin çıktısı olan kütüphane,
Nexus'daki npm artifactory kullanılarak `npm install @edk/ui-react` şeklinde yüklenip kullanılmaktadır.

## Projenin Çalıştırılması

Öncelikle `npm install` komutu çalıştılarak dependency'ler yüklenmelidir.

`edk-ui-react`, **Nextjs** kullanılarak oluşturulmuş bir kütüphanedir. NextJS, çalıştırma özellikleri kullanılmadan,
boilerplate kodu azaltması sebebiyle tercih edilmiştir. Bu nedenle `npm run dev` komutu genel olarak işlevsizdir ve
sadece aluşturulan component'ın hızlıca testi için kullanılabilir.

Bitmiş componentlar proje içinde **Storybook**'dan sunulduğu için componentları görüntülemek için `npm run storybook`
komutu kullanılmaldır. Sonrasında `http://localhost:6006` adresinde component'lara erişilebilir.

## Projenin Build Edilmesi

Build işlemi otomatize bir şekilde çalışmaktadır. Eklenen ya da değişikliği yapılan component'ın kütüphaneye eklenmesi
için, branch ve commit kurallarına uyarak kodu push etmek ve **Gitlab**'da bir **PR** oluşurmak gereklidir. PR'ın
onaylanıp **master**'a merge edilmesi sonrasında proje otomatik build olup, versiyon artırıp **Nexus**'a eklenecek ve
kullanılabilir duruma gelecektir.

#### Local'de Build İşlemi

Projeyi local'de build etmek için `npm run build:lib` komutu çalıştırılabilir. İşlem sonrasında `/dist` klasörüne **esm**
ve **cjs** formatında derlenmiş çıktılar gelecektir. (Bu işlem öncesinde _/dist_ klasörünün silinmesi gerekmektedir)

#### EDK-UI Font Icon Güncellemesi

Proje içinde default olarak kullanılan iconset, kolaylık olması açısından proje içine gömülmüştür. Bu nedenle yeni bir
ikon eklendiği zaman, yüklenen ikonu projede kullanabilmek için aşağıdaki adreste bulunan fontları `/src/lib/styles`
altına kopyalamak gerekmektedir:

https://static.build.turkiye.gov.tr/themes/izmir/fonts/edkui/edkui.woff
https://static.build.turkiye.gov.tr/themes/izmir/fonts/edkui/edkui.ttf

## Branch Kuralları

1. Yeni bir iş ya da işler bütünü için **master**'den yeni bir branch oluşturulmalıdır.
2. Branch ismi, aşağıdaki kurallara uymalıdır:
   1. `bugfix/`, `feature/`, `hotfix/`, `test/` ile başlamalıdır. Branch gruplama bu şekilde yapılmaktadır.
   2. Jira task id'si ile devam etmelidir. Örnek: `EDKUI-9/` gibi
   3. Branch ya da task'e ait kısa açıklama, `alt tire ( _ )` ile ayrılarak yazılmalıdır.

#### Örnek

    feature/EDKUI-18/button_componentinin_eklenmesi

## Semantic Versiyonlama ve Commit Kuralları

Bu projede, **semantic-release** kütüphanesi kullanılmaktadır. Commitler ve branchler'ler birleşip, **master**'a merge
sonrası otomatik versiyonlama yapmaktadır. Başarılı bir PR, master'a merge edildiğinde projenin versiyonu, commit mesajlarına
göre otomatik olarak artırılmaktadır.

Her bir commit mesajı, aşağıdakine uygun formatta olmalıdır:

    commit_türü(varsa_component_sayfa_bilgisi): detay

#### Kurallar

- Versiyonlar `MAJOR.MINOR.PATCH` formatında çıkmaktadır.
- Commit türlerine göre versiyonlama değişmektedir. `perf: Major`, `feat: Minor`, `fix: Patch` değişiklik yapacaktır
- Opsiyonel olarak, commit'in etki ettiği yer de parantez içinde eklenebilir

#### Commit Türleri

| Commit Türü | Açıklama                                                                                        | Versiyon Etkisi |
| ----------- | ----------------------------------------------------------------------------------------------- | --------------- |
| `perf`      | Performans artırıcı ve en büyük versiyon değişikliğine sebep olan tür                           | X . _ . _       |
| `feat`      | Yeni bir özelliği ifade eder. Major versiyon değişikliği yapar                                  | _ . X . _       |
| `fix`       | Bug fix anlamına gelir ve Minor versiyon değişikliği yapar                                      | _ . _ . X       |
| docs        | Dokümantasyon değişiklikleri                                                                    | Yok             |
| style       | Kodun genelini etkilemeyen tasarım ve css değişiklikleri                                        | Yok             |
| refactor    | Yeni bir özellik eklemeyen ya da hata düzeltmeyen her türlü kod değişikliği                     | Yok             |
| test        | Yeni bir test ekleme ya da mevcut olan testin düzeltilmesi                                      | Yok             |
| chore       | Build sürecine ya da dokümantason üretimi gibi diğer operasyonel işlere etki eden değişiklikler | Yok             |
| build       | chore türünün yeni hali denilebilir. Build süreçleri ile ilgili değişiklikler                   | Yok             |
| ci          | Continuous integration ile ilgili, pipeline'ı etkileyen değişiklikler                           | Yok             |
| revert      | Yapılan bir değişikliği, fix harici bir durum için geri almak için yapılan işler                | Yok             |

#### Örnekler

    feat(alertbutton): border radius özelliği eklenmesi
    fix: chipde bulunan kırmızı renk sorunu
    perf(homepage): chromeda sayfanın yavaş açılması sorunu

## Diğer Dokümanlar

- Gitlab Süreçleri: https://confluence.turksat.com.tr/pages/viewpage.action?pageId=292273822
- Development Süreçleri: https://confluence.turksat.com.tr/pages/viewpage.action?pageId=292273959
