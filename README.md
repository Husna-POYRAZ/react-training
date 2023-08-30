# React & Bootstrap Mini Eğitim Projesi

React & Bootstrap mini eğitim projesi, temel e-ticaret işlevlerini simüle eden bir React uygulamasıdır. Ürünleri kategorilere göre listeleme, sepete ürün ekleme ve çıkarma, kullanıcı kaydı gibi özellikler içerir.

## Başlangıç

Bu talimatlar, projeyi yerel makinenizde geliştirmek ve test etmek için adım adım rehberlik edecektir.

### Gereksinimler

Projeyi çalıştırmak için aşağıdaki yazılımların makinenizde yüklü olması gerekmektedir:

- [Node.js](https://nodejs.org/) (npm paket yöneticisi ile birlikte gelir)

## Kurulum

1. Projeyi bilgisayarınıza klonlayın:

   ```bash
   git clone https://github.com/sizin-kullanici-adi/proje-adi.git

   ```

2. Projeyi dizine gidin:

```bash
cd proje-adi
```

3. Gerekli bağımlılıkları yükleyin:

```bash
npm install
```

4. Projenin kök dizininde bulunan asset klasörüne gidin:

```bash
cd asset
```

5. JSON Server'ı başlatın:

```bash
json-server --watch db.json
```

6. Projeyi başka bir terminal penceresinde başlatın:

```bash
npm start
```

Proje tarayıcınızda http://localhost:3000 adresinde başlayacaktır.

## Kullanım

Proje, ürünleri kategorilere göre listeleme, ürünleri sepete ekleme/çıkarma ve kullanıcı kaydı gibi temel e-ticaret işlevlerini simüle eder.

## Kullanılan Teknolojiler ve Yapılar

React: Kullanıcı arayüzü oluşturmak için kullanılmıştır.
React Router: Sayfa yönlendirmelerini yönetmek için kullanılmıştır.
Bootstrap: Görsel tasarım ve düzenleme için kullanılmıştır.
alertifyjs: Bildirimler ve uyarılar için kullanılmıştır.
Reactstrap: Bootstrap bileşenlerini React uygulamasında kullanmak için kullanılmıştır.
