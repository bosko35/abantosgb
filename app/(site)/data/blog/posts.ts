export type ContentBlock =
  | { type: "lead"; html: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; style: "ul" | "ol"; items: string[] }
  | { type: "checklist"; items: string[] }
  | { type: "paragraph"; html: string }
  | { type: "faq"; items: { q: string; a: string }[] }
  | { type: "callout"; variant: "info" | "warning" | "success" | "neutral"; title?: string; text: string }
  | { type: "cta-inline"; text: string; button: { label: string; href: string } };

export type BlogPost = {
  slug: string;
  locale: string;
  title: string;
  subtitle?: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  excerpt: string;
  keywords: string[];
  sections: { h2: string; bullets?: string[]; h3?: string }[];
  internalLinks?: { label: string; href: string }[];
  faq?: { q: string; a: string }[];
  structuredData?: Record<string, any>;
  updatedAt?: string; // optional override
  category?: string; // rozet metni (varsayılan: Sektörel İSG)
  author?: { name: string; title?: string }; // yazar (varsayılan: Abant OSGB)
  readTime?: string; // optional override
  blocks?: ContentBlock[]; // optional rich blocks
};

const raw = {
  posts: [
    {
      slug: "yeni-isg-egitim-yonetmeligi-2026",
      locale: "tr",
      category: "Mevzuat",
      author: { name: "Ayhan Milli", title: "İş güvenliği uzmanı · Öğretim görevlisi · Abant OSGB" },
      title: "Yeni İSG Eğitim Yönetmeliği 2026: İşverenler İçin Ne Değişti?",
      subtitle: "2 Nisan 2026'da yürürlüğe giren yönetmelik eğitim sürelerini, tekrar sıklığını ve uzaktan eğitim kurallarını baştan yazdı. Bolu'daki işletmeler için sade bir özet.",
      metaTitle: "Yeni İSG Eğitim Yönetmeliği 2026: Süreler, Tekrar, Uzaktan Eğitim",
      metaDescription:
        "2 Nisan 2026 tarihli Çalışanların İSG Eğitimleri Yönetmeliği: işe başlama eğitimi, temel eğitim süreleri (8/12/16 saat), tekrar eğitimi (en az 8 saat), uzaktan eğitim kuralları ve geçiş hükümleri. İşveren için kontrol listesi.",
      heroImage: "/images/blog/isg-egitim-yonetmeligi-2026.jpg",
      readTime: "6 dk",
      updatedAt: "2026-11-08",
      excerpt:
        "2013 yönetmeliği yürürlükten kalktı. İşe başlama eğitimi zorunlu ve yüz yüze; tekrar eğitimi her sınıfta en az 8 saat; uzaktan eğitimde konu ve tehlike sınıfına göre sınırlar var.",
      keywords: ["isg eğitim yönetmeliği 2026", "çalışanların isg eğitimleri", "uzaktan isg eğitimi", "işe başlama eğitimi", "temel isg eğitimi süresi", "Bolu isg eğitimi"],
      sections: [
        { h2: "Ne değişti?", bullets: ["İşe başlama eğitimi ayrı ve yüz yüze", "Tekrar eğitimi en az 8 saat", "Uzaktan eğitim konu bazlı sınırlandı"] },
        { h2: "Süreler ve sıklık", bullets: ["Temel eğitim 8 / 12 / 16 saat", "Tekrar: 3 / 2 / 1 yılda bir"] },
        { h2: "İşveren için kontrol listesi" },
      ],
      blocks: [
        { type: "lead", html: "<p>Çalışanların İş Sağlığı ve Güvenliği Eğitimlerinin Usul ve Esasları Hakkında Yönetmelik, 2 Nisan 2026 tarihli ve 33212 sayılı Resmî Gazete'de yayımlanarak aynı gün yürürlüğe girdi. 2013'ten beri uyguladığımız eski yönetmelik tamamen kaldırıldı. Bu yazıda, sahada işverenlerden en çok duyduğum soruları esas alarak değişiklikleri özetliyorum.</p>" },
        { type: "callout", variant: "info", title: "Kısa özet", text: "İşe başlama eğitimi artık ayrı bir zorunluluk ve yüz yüze yapılır. Temel eğitim süreleri 8 / 12 / 16 saat olarak korundu, ama tekrar eğitimi tüm tehlike sınıflarında en az 8 saat oldu. Uzaktan eğitim serbest, fakat işyerine özgü riskler konusu tehlikeli ve çok tehlikeli sınıfta yüz yüze verilmek zorunda." },
        { type: "h2", text: "1. İşe başlama eğitimi: işe başlamadan önce, yüz yüze, en az 2 saat" },
        { type: "paragraph", html: "<p>Eski uygulamada çoğu işyeri yeni çalışanı doğrudan temel eğitime alıyordu. Yeni yönetmelik (md. 7) <strong>işe başlama eğitimini</strong> ayrı bir basamak olarak tanımlıyor: çalışan, çırak ve stajyerler dahil herkes işe başlamadan önce bu eğitimi alır. Eğitim <strong>uygulamalı ve yüz yüze</strong> yapılır, <strong>en az 2 saat</strong> sürer, belgelenir ve özlük dosyasında saklanır.</p><p>Pratikte bu, işe alım günü yapılan kısa bir saha turunun yeterli olmadığı anlamına geliyor: makine, kimyasal, acil çıkış ve KKD konuları işyerinde gösterilerek anlatılmalı ve tutanağa bağlanmalı.</p>" },
        { type: "h2", text: "2. Temel eğitim: süreler aynı, takvim netleşti" },
        { type: "paragraph", html: "<p>Temel eğitim süreleri (md. 13) tehlike sınıfına göre korundu:</p>" },
        { type: "list", style: "ul", items: [
          "Az tehlikeli sınıf: en az 8 saat",
          "Tehlikeli sınıf: en az 12 saat",
          "Çok tehlikeli sınıf: en az 16 saat",
        ] },
        { type: "paragraph", html: "<p>Yeni olan iki şey var. Birincisi, temel eğitimin <strong>işe girişten sonra en geç 3 ay içinde</strong> tamamlanması gerekiyor (md. 8). İkincisi, dördüncü konu başlığı olan <strong>\"işe ve işyerine özgü riskler\"</strong> için ayrı asgari süre tanımlandı: az tehlikelide 2, tehlikelide 3, çok tehlikelide 4 saat. Yani genel İSG anlatımıyla süreyi doldurup işyerine özgü kısmı geçiştirmek artık mümkün değil.</p>" },
        { type: "h2", text: "3. Tekrar eğitimi: sıklık aynı, süre tek tip 8 saat" },
        { type: "paragraph", html: "<p>Tekrar sıklığı (md. 14) değişmedi: çok tehlikeli sınıfta <strong>yılda bir</strong>, tehlikeli sınıfta <strong>iki yılda bir</strong>, az tehlikeli sınıfta <strong>üç yılda bir</strong>. Değişen, tekrar eğitiminin süresi: eskiden temel eğitimle aynı saat kadar tekrarlanıyordu; şimdi <strong>tüm sınıflarda en az 8 saat</strong>. Çok tehlikeli sınıf için bu, yıllık yük açısından bir rahatlama; az tehlikeli sınıf için süre aynı kaldı.</p><p>Ayrıca işyeri, iş, ekipman veya teknoloji değiştiğinde ek eğitim; <strong>altı aydan uzun</strong> işten uzak kalma sonrasında (md. 18) ve <strong>iş kazası veya meslek hastalığı</strong> sonrasında işe dönmeden önce (md. 19) ayrıca eğitim gerekiyor.</p>" },
        { type: "h2", text: "4. Uzaktan eğitim: serbest ama konu ve sınıfa göre sınırlı" },
        { type: "paragraph", html: "<p>En çok soru alan başlık bu. Yönetmelik (md. 12) eğitimleri <strong>uzaktan, yüz yüze veya karma</strong> yöntemle vermeye izin veriyor. Sınır şu şekilde çiziliyor:</p>" },
        { type: "list", style: "ul", items: [
          "Genel konular, sağlık konuları ve teknik konular (1-3. başlıklar): her tehlike sınıfında uzaktan verilebilir.",
          "İşe ve işyerine özgü riskler (4. başlık): az tehlikeli sınıfta uzaktan veya karma olabilir; tehlikeli ve çok tehlikeli sınıfta yüz yüze zorunlu.",
          "İşe başlama eğitimi: her zaman yüz yüze ve uygulamalı.",
        ] },
        { type: "paragraph", html: "<p>Uzaktan eğitim sistemi için de şartlar var: giriş-çıkış kayıtları, tamamlama oranı ve sınav sonuçları raporlanabilmeli; videoyu ileri sarma gibi eğitimi verimsizleştiren uygulamalar engellenmeli. \"Linki gönderdik, çalışan izledi\" kayıt olarak yeterli değil.</p>" },
        { type: "h2", text: "5. Ölçme-değerlendirme ve belgeler" },
        { type: "paragraph", html: "<p>Temel eğitim sonunda sınav yapılır; <strong>100 üzerinden 60</strong> geçer not (md. 16). Başarısız çalışana iki ek hak tanınır, yine başarısız olursa temel eğitim tekrarlanır. Eğitim belgeleri <strong>e-imza ile imzalanıp dijital arşivlenebilir</strong>; ıslak imza zorunluluğu kalktı.</p>" },
        { type: "h2", text: "6. Geçiş hükümleri: eski eğitimler geçerli mi?" },
        { type: "paragraph", html: "<p>Evet. Geçici 1. maddeye göre 2013 yönetmeliğine göre verilmiş eğitimler geçerliliğini koruyor; belgeler md. 14'teki tekrar sürelerinin sonuna kadar kullanılıyor. Daha önce verilmiş ama belgelenmemiş eğitimlerin ise yayım tarihinden itibaren <strong>bir ay içinde</strong> belgelenmesi gerekiyordu; bu süre geçti, eksik belge varsa denetimde eğitim verilmemiş sayılır.</p>" },
        { type: "h2", text: "İşveren için kontrol listesi" },
        { type: "checklist", items: [
          "Yeni işe alınan herkes için işe başlama eğitimi tutanağı var mı (en az 2 saat, yüz yüze, özlük dosyasında)?",
          "Temel eğitim işe girişten sonraki 3 ay içinde tamamlandı mı?",
          "Temel eğitimde işyerine özgü riskler başlığına yeterli süre ayrıldı mı (2 / 3 / 4 saat)?",
          "Tekrar eğitimi takvimi tehlike sınıfına göre güncellendi mi, süre en az 8 saat mi?",
          "Uzaktan verilen eğitimler yalnız izin verilen konularda mı; sistem giriş-çıkış ve sınav kaydı tutuyor mu?",
          "Sınav sonuçları (60 ve üzeri) ve ek hak kayıtları dosyada mı?",
          "Altı aydan uzun süre ayrılan veya iş kazası geçiren çalışanlar için ek eğitim planlandı mı?",
        ] },
        { type: "callout", variant: "warning", title: "Bolu'daki işletmeler için not", text: "Gerede deri ve kimya tesisleri, metal imalat ve inşaat gibi tehlikeli/çok tehlikeli sınıf işyerlerinde işyerine özgü risk eğitimi artık uzaktan verilemiyor. Bu eğitimi saha ziyaretiyle birleştirmek hem mevzuata uygun hem de en ekonomik yol." },
        { type: "faq", items: [
          { q: "Eski yönetmeliğe göre aldığımız eğitim belgeleri geçersiz mi oldu?", a: "Hayır. Geçici madde 1 uyarınca geçerliliğini koruyor; tekrar süresi dolduğunda yeni yönetmeliğe göre yenilenir." },
          { q: "Çok tehlikeli sınıfta temel eğitimi tamamen uzaktan verebilir miyiz?", a: "Hayır. Genel, sağlık ve teknik konular uzaktan olabilir; işe ve işyerine özgü riskler başlığı (en az 4 saat) yüz yüze verilmek zorunda. İşe başlama eğitimi de yüz yüze." },
          { q: "Tekrar eğitimi için artık 16 saat ayırmamız gerekmiyor mu?", a: "Gerekmiyor. Tekrar eğitimi tüm sınıflarda en az 8 saat; temel eğitim süreleri (8/12/16) ise yalnız ilk eğitim için geçerli." },
          { q: "Belgeleri e-imzayla imzalayabilir miyiz?", a: "Evet, yeni yönetmelik e-imza ve dijital arşivlemeye açıkça izin veriyor." },
        ] },
        { type: "paragraph", html: "<p><em>Kaynak: Çalışanların İş Sağlığı ve Güvenliği Eğitimlerinin Usul ve Esasları Hakkında Yönetmelik, Resmî Gazete 02.04.2026, Sayı 33212. Bu yazı bilgilendirme amaçlıdır; işyerinize özel uygulama için yönetmelik metni ve İSG profesyonelinizin görüşü esas alınmalıdır.</em></p>" },
        { type: "cta-inline", text: "Eğitim takviminizi yeni yönetmeliğe göre birlikte güncelleyelim.", button: { label: "İletişime Geç", href: "/iletisim" } },
      ],
      internalLinks: [
        { label: "İSG Eğitimleri", href: "/hizmetler/isg-egitimleri-bolu" },
        { label: "Süre Hesaplama", href: "/hesaplama" },
      ],
      structuredData: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: "Yeni İSG Eğitim Yönetmeliği 2026: İşverenler İçin Ne Değişti?",
        mainEntityOfPage: "/blog/yeni-isg-egitim-yonetmeligi-2026",
        about: ["İSG eğitimi", "Mevzuat", "Uzaktan eğitim"],
        datePublished: "2026-11-08",
      },
    },
    {
      "slug": "isgde-yazilim-excelden-dijital-takibe",
      "locale": "tr",
      "category": "Dijital İSG",
      "author": {
        "name": "Ayhan Milli",
        "title": "İş güvenliği uzmanı · Öğretim görevlisi · Abant OSGB"
      },
      "title": "Excel'den Dijital Takibe: Küçük Bir OSGB İSG Süreçlerini Yazılımla Nasıl Yönetir?",
      "subtitle": "İSG'nin yarısı sahadır, diğer yarısı kayıttır. Kaydı Excel'de tutan bir OSGB bir noktada tıkanır. Bir yılda neyi yazılıma taşıdık, neyi bilerek taşımadık, 2026 mevzuatı yazılımdan ne bekliyor?",
      "metaTitle": "İSG'de Yazılım: Excel'den Dijital Takibe — Küçük OSGB Deneyimi",
      "metaDescription": "Küçük bir OSGB İSG süreçlerini yazılımla nasıl yönetir? Saha takibi, İSG-KATİP ön kontrolü, belge şablonu, OCR arşiv, SDS eşleştirme; bilerek dijitalleştirilmeyenler ve 2026 eğitim yönetmeliğinin yazılım şartları.",
      "heroImage": "/images/blog/isgde-yazilim.jpg",
      "readTime": "7 dk",
      "updatedAt": "2026-11-08",
      "excerpt": "Excel hatırlatmaz, tek doğruyu tutmaz, kanıt üretmez. Bir yılda neyi yazılıma taşıdık, neyi bilerek taşımadık ve 2026 mevzuatı dijital kayıttan ne bekliyor?",
      "keywords": [
        "isg yazılımı",
        "osgb yazılım",
        "isg dijitalleşme",
        "isg-katip takip",
        "isg arşiv ocr",
        "e-imza eğitim belgesi",
        "Bolu OSGB"
      ],
      "sections": [
        {
          "h2": "Neden Excel bir noktada yetmez?"
        },
        {
          "h2": "Bir yılda neyi yazılıma taşıdık?"
        },
        {
          "h2": "Neyi bilerek yazılıma taşımadık?"
        },
        {
          "h2": "2026 mevzuatı yazılımdan ne bekliyor?"
        },
        {
          "h2": "Küçük OSGB'ler için yol haritası"
        }
      ],
      "blocks": [
        {
          "type": "lead",
          "html": "<p>İki şapkam var: iş güvenliği uzmanıyım ve yıllardır yazılım ekipleri yönetiyorum. Bu ikisi uzun süre birbirine değmedi; İSG dosyaları klasörlerde, yazılım işleri başka bir dünyada durdu. Abant OSGB'yi kurduğumuzda ilk aylarda her şeyi Excel'de tuttuk ve kısa sürede şunu gördük: <strong>sorun Excel değil, Excel'in hatırlamamasıdır.</strong> Hangi firmanın periyodik muayenesi geldi, hangi uzmanın aylık süresi doldu, hangi eğitim belgesi eksik — bunları tablo size söylemez, siz tabloya sormanız gerekir. Bu yazı, küçük bir OSGB'nin bir yılda dijitalleşme adına yaptıklarını ve yapmadıklarını anlatıyor. Reklam değil, saha notu.</p>"
        },
        {
          "type": "h2",
          "text": "Neden Excel bir noktada yetmez?"
        },
        {
          "type": "paragraph",
          "html": "<p>Excel üç şeyi iyi yapar: listeler, hesaplar, filtreler. Üç şeyi yapamaz:</p>"
        },
        {
          "type": "list",
          "style": "ol",
          "items": [
            "Hatırlatmaz. Yenileme tarihi geçen risk değerlendirmesi, Excel'de kırmızıya dönse bile dosyayı açan olmazsa kimse görmez.",
            "Tek doğruyu tutmaz. \"FIRMALAR GUNCEL v3 SON\" dosyasını bilen bilir. İki kişi aynı anda çalıştığında hangisi doğru?",
            "Kanıt üretmez. Denetçi \"bu eğitim ne zaman, kime, kaç saat verildi, kim imzaladı\" diye sorduğunda cevap Excel satırı değil, imzalı tutanak ve kayıt zinciridir."
          ]
        },
        {
          "type": "paragraph",
          "html": "<p>Küçük bir OSGB için kritik eşik yaklaşık 30–40 müşteri ve 3–4 saha personelidir. Bu noktadan sonra Excel, bilgi kaybetmeye başlar.</p>"
        },
        {
          "type": "h2",
          "text": "Bir yılda neyi yazılıma taşıdık?"
        },
        {
          "type": "h3",
          "text": "1. Saha ziyaret ve personel takibi"
        },
        {
          "type": "paragraph",
          "html": "<p>İlk yazdığımız şey basit bir web uygulamasıydı: hangi uzman veya hekim, hangi firmaya, hangi gün gitti; ziyarette ne yapıldı; bir sonraki ziyaret ne zaman. Uygulamanın en değerli özelliği gösterişli bir ekran değil, <strong>sabahları uzmanın telefonuna gelen \"bugün şu üç firma\"</strong> listesidir. İSG-KATİP'teki sözleşme sürelerini aylık yasal süreyle karşılaştırıyor; süre dolmadan uyarıyor.</p>"
        },
        {
          "type": "h3",
          "text": "2. İSG-KATİP ön kontrolü"
        },
        {
          "type": "paragraph",
          "html": "<p>Bakanlık sistemi doğru veriyi tutar ama raporlamaz. KATİP'ten alınan dökümü okuyup \"sözleşmesi biten, atama eksik olan, kapasitesi dolan\" firmaları listeleyen küçük bir kontrol betiği yazdık. Haftada bir çalışır; eskiden yarım gün süren kontrol beş dakika sürüyor. Buradaki ders: <strong>mevcut sistemin yerine yenisini yazmaya çalışmayın; mevcut sistemin çıktısını okuyan küçük araçlar yazın.</strong></p>"
        },
        {
          "type": "h3",
          "text": "3. Belge üretimi: şablon disiplini"
        },
        {
          "type": "paragraph",
          "html": "<p>Risk değerlendirmesi, acil durum planı, eğitim tutanağı gibi belgeleri her seferinde sıfırdan yazmak hem zaman kaybı hem hata kaynağıdır. Tek bir standart şablon (bizde 5×5 matris formatı) ve firma bilgilerini otomatik dolduran bir akış kurduk. Belge kalitesi arttı, çünkü uzman vaktini biçimle değil içerikle geçiriyor.</p>"
        },
        {
          "type": "h3",
          "text": "4. Evrak ve fiş arşivi: OCR"
        },
        {
          "type": "paragraph",
          "html": "<p>Saha fotoğrafları, taranmış tutanaklar, fişler. Bunları klasöre atmak arşivlemek değildir; aranabilir olmalı. Taranmış PDF'leri ve görselleri metne çeviren (OCR) bir araçla arşivi aranabilir hâle getirdik. \"Şu firmanın 2025 Eylül eğitim tutanağı\" sorusunun cevabı artık dosya adını hatırlamaya bağlı değil.</p>"
        },
        {
          "type": "h3",
          "text": "5. Kimyasal ve SDS takibi"
        },
        {
          "type": "paragraph",
          "html": "<p>Deri ve kimya tesislerinde yüzlerce kimyasal var; her birinin güvenlik bilgi formu olmalı ve güncel kalmalı. Ürün listesi ile SDS arşivini eşleştiren basit bir tablo-otomasyonu, \"137 var, 98 eksik\" gibi net bir sayı verdi. Sayı olmadan tedarikçiyle konuşamazsınız.</p>"
        },
        {
          "type": "h2",
          "text": "Neyi bilerek yazılıma taşımadık?"
        },
        {
          "type": "list",
          "style": "ul",
          "items": [
            "Risk puanlamasını. Olasılık ve şiddet değerini bir algoritmaya bırakmadık. Puanı veren, sahayı gören uzmandır; yazılım yalnızca formu ve matrisi tutar.",
            "Eğitimin kendisini. Uzaktan eğitim altyapısı kurmak kolay; ama 2026 yönetmeliği işe başlama eğitimini ve tehlikeli/çok tehlikeli sınıfta işyerine özgü risk eğitimini yüz yüze istiyor. Yazılım kaydı tutar, eğitimi vermez.",
            "Müşteriyle iletişimi. Otomatik mesaj sistemleri cazip görünüyor; biz hatırlatmaları yazılımdan alıp telefonu elimize alıyoruz. İSG bir güven ilişkisidir."
          ]
        },
        {
          "type": "h2",
          "text": "2026 mevzuatı yazılımdan ne bekliyor?"
        },
        {
          "type": "paragraph",
          "html": "<p>Nisan 2026'da yürürlüğe giren eğitim yönetmeliği, yazılım tarafını ilk kez bu kadar açık tarif etti:</p>"
        },
        {
          "type": "list",
          "style": "ul",
          "items": [
            "Eğitim belgeleri e-imza ile imzalanıp dijital arşivlenebilir. Islak imza ve klasör zorunluluğu kalktı; ama dijital arşivin erişilebilir ve bütünlüğü korunmuş olması gerekiyor.",
            "Uzaktan eğitim sistemi giriş-çıkış kayıtlarını, tamamlama oranını ve sınav sonuçlarını raporlayabilmeli; ileri sarmayı engellemeli. \"Video linki gönderdik\" kayıt sayılmıyor.",
            "Sınav notu, ek haklar ve tekrar eğitimi takvimi izlenebilir olmalı."
          ]
        },
        {
          "type": "paragraph",
          "html": "<p>Bunların hiçbiri büyük bir yazılım gerektirmiyor; ama hiçbiri de Excel'le güvenilir biçimde yapılamıyor.</p>"
        },
        {
          "type": "h2",
          "text": "Küçük OSGB'ler için yol haritası"
        },
        {
          "type": "list",
          "style": "ol",
          "items": [
            "Önce tek doğru kaynak: firma listesi, sözleşme süreleri ve kişi atamaları tek yerde, tek sürüm.",
            "Sonra hatırlatma: yenileme tarihleri (RD, ADEP, eğitim, periyodik muayene) kendiliğinden uyarsın.",
            "Sonra belge şablonu: her uzman aynı formatı kullansın, firma bilgisi otomatik gelsin.",
            "Sonra arşiv: taranan her belge aranabilir olsun.",
            "En son otomasyon: KATİP kontrolü, SDS eşleştirme gibi tekrarlayan işler."
          ]
        },
        {
          "type": "callout",
          "variant": "info",
          "title": "Sıra önemli",
          "text": "Arşivi düzenlemeden otomasyon yazan, karışıklığı hızlandırmış olur."
        },
        {
          "type": "faq",
          "items": [
            {
              "q": "Hazır İSG yazılımı mı almalı, kendimiz mi yazmalıyız?",
              "a": "Beş uzmanın altındaysanız hazır bir takip yazılımı çoğu ihtiyacı karşılar. Kendi yazdığımız araçlar, hazır yazılımların kapsamadığı dar işler için: KATİP dökümü okuma, SDS eşleştirme, OCR arşiv. İkisi birbirinin alternatifi değil."
            },
            {
              "q": "Kişisel sağlık verileri bu sistemlerde tutulabilir mi?",
              "a": "Sağlık gözetimi verisi özel nitelikli kişisel veridir; erişim yalnızca işyeri hekimi ve yetkili sağlık personelinde olmalı, şifreli saklanmalı, işveren göremez. Yazılım seçerken ilk soru bu olmalı."
            },
            {
              "q": "Yapay zekâ İSG'de ne işe yarar?",
              "a": "Bugün için en işe yarar yer belge okuma (OCR, fiş ve tutanak sınıflandırma) ve mevzuat metinlerinde arama. Risk puanlaması ve saha kararı için değil. Bu görüşümüz sahada değişirse yazarız."
            }
          ]
        },
        {
          "type": "paragraph",
          "html": "<p><em>Bu yazı Abant OSGB'nin kendi deneyimini anlatır; yazılım ürünü tavsiyesi içermez.</em></p>"
        },
        {
          "type": "cta-inline",
          "text": "Takip süreçlerinizi birlikte gözden geçirelim.",
          "button": {
            "label": "Teklif Al",
            "href": "/iletisim"
          }
        }
      ],
      "structuredData": {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Excel'den Dijital Takibe: Küçük Bir OSGB İSG Süreçlerini Yazılımla Nasıl Yönetir?",
        "mainEntityOfPage": "/blog/isgde-yazilim-excelden-dijital-takibe",
        "about": [
          "Dijital İSG",
          "OSGB yazılımı",
          "İSG-KATİP"
        ],
        "datePublished": "2026-11-08"
      }
    },
    {
      "slug": "kimyasal-depolarda-is-guvenligi",
      "locale": "tr",
      "category": "Kimyasal Güvenlik",
      "author": {
        "name": "Ali Ayyarkın",
        "title": "A sınıfı İş Güvenliği Uzmanı · Abant OSGB"
      },
      "title": "Kimyasal Depolarda İş Güvenliği: SDS'den Dökülme Planına 8 Adım",
      "subtitle": "Deri, tekstil, boya ve temizlik kimyasalı depolarında en büyük risk \"bilinmeyen varil\"dir. Güvenlik bilgi formundan acil durum ekibine, sahada işe yarayan sekiz adım.",
      "metaTitle": "Kimyasal Depolarda İş Güvenliği: SDS, Ayrıştırma, Dökülme Planı",
      "metaDescription": "Kimyasal depo güvenliği 8 adımda: envanter, Türkçe SDS, uyumsuz kimyasal ayrıştırma, etiketleme, havalandırma, KKD, dökülme kiti ve eğitim. 10 maddelik depo kontrol listesi.",
      "heroImage": "/images/blog/kimyasal-depo-is-guvenligi.jpg",
      "readTime": "6 dk",
      "updatedAt": "2026-11-08",
      "excerpt": "Envanter, Türkçe SDS, ayrıştırma, etiket, havalandırma, KKD, dökülme kiti ve eğitim: çok tehlikeli sınıf kimyasal depolarında saha deneyimine dayanan 8 adım ve 10 maddelik kontrol listesi.",
      "keywords": [
        "kimyasal depo iş güvenliği",
        "güvenlik bilgi formu SDS",
        "kimyasal ayrıştırma",
        "dökülme kiti",
        "deri kimyasalları depo",
        "Bolu iş güvenliği"
      ],
      "sections": [
        {
          "h2": "Kimyasal envanteri"
        },
        {
          "h2": "Güvenlik bilgi formu (SDS)"
        },
        {
          "h2": "Depo için 10 maddelik hızlı kontrol"
        }
      ],
      "blocks": [
        {
          "type": "lead",
          "html": "<p>Kimyasal deposuna ilk girdiğimde üç şeye bakarım: etiketler okunuyor mu, asitlerle bazlar yan yana mı, dökülme olursa ne yapılacağını depocu biliyor mu? Bu üç sorunun cevabı deponun gerçek durumunu, dosyadaki risk raporundan daha iyi anlatır. Bu yazıda, çok tehlikeli sınıftaki kimyasal depolarında edindiğimiz saha deneyimini sekiz uygulanabilir adımda topluyorum.</p>"
        },
        {
          "type": "h2",
          "text": "1. Kimyasal envanteri: ne var, ne kadar var, nerede?"
        },
        {
          "type": "paragraph",
          "html": "<p>Her şey listeyle başlar. Ürün adı, tedarikçi, miktar, ambalaj türü, depo konumu ve tehlike sınıfı (GHS piktogramı) tek tabloda olmalı. Envanteri olmayan depoda ne SDS takibi yapılabilir ne de dökülme planı. Pratik kural: depoya giren her yeni ürün, raf yerine konmadan önce listeye girer.</p>"
        },
        {
          "type": "h2",
          "text": "2. Güvenlik bilgi formu (SDS): Türkçe, güncel, ulaşılabilir"
        },
        {
          "type": "paragraph",
          "html": "<p>Her kimyasal için Türkçe SDS zorunludur; tedarikçi vermekle yükümlüdür. Üç kontrol:</p>"
        },
        {
          "type": "list",
          "style": "ul",
          "items": [
            "Güncel mi? Formül veya mevzuat değiştikçe SDS yenilenir; 5 yaşından eski formlar tedarikçiden tekrar istenmelidir.",
            "Ulaşılabilir mi? Klasör ofiste kilitli dolaptaysa işe yaramaz. Depoda ve ilk yardım noktasında basılı veya karekodla erişilen bir kopya bulunmalıdır.",
            "Okunmuş mu? SDS'nin 2. (tehlike), 4. (ilk yardım), 6. (kazara yayılma) ve 8. (maruziyet / KKD) bölümleri depocuya ayrıca anlatılmalıdır."
          ]
        },
        {
          "type": "h2",
          "text": "3. Ayrıştırma: uyumsuz kimyasallar aynı rafta duramaz"
        },
        {
          "type": "paragraph",
          "html": "<p>En sık gördüğümüz hata asit ile bazın, oksitleyici ile yanıcının yan yana istiflenmesi. Basit bir uyumluluk tablosu depo duvarına asılmalı, raflar renk veya bölge koduyla ayrılmalıdır. Taşma havuzu (ikincil kap) her sıvı kimyasal için zorunlu sayılmalıdır: bir varil delinirse içerik zemine değil havuza gider.</p>"
        },
        {
          "type": "h2",
          "text": "4. Etiketleme: küçük kaba aktarılan kimyasal da etiketlenir"
        },
        {
          "type": "paragraph",
          "html": "<p>Orijinal ambalajdaki etiket genelde tamamdır; sorun aktarma kaplarında başlar. Adı olmayan bir bidon, deponun en tehlikeli nesnesidir. Kural: aktarılan her kaba ürün adı ve tehlike piktogramı yazılır; gıda kabı (su şişesi, kavanoz) asla kullanılmaz.</p>"
        },
        {
          "type": "h2",
          "text": "5. Havalandırma, zemin ve elektrik"
        },
        {
          "type": "paragraph",
          "html": "<p>Çözücü buharları ağırdır, zeminde birikir. Alt seviyeden havalandırma, kimyasala dayanıklı ve eğimli zemin, toplama kanalı ve yanıcı buhar olan bölümlerde uygun elektrik ekipmanı gerekir. Yanıcı toz veya gaz oluşabilen depolar için <strong>Patlamadan Korunma Dokümanı</strong> ayrıca hazırlanmalıdır; bu çalışma akredite çözüm ortağıyla yapılır.</p>"
        },
        {
          "type": "h2",
          "text": "6. Kişisel koruyucu donanım: SDS ne diyorsa o"
        },
        {
          "type": "paragraph",
          "html": "<p>\"Eldiven var\" yeterli değil; hangi eldiven? Nitril mi, bütil mi, neopren mi? SDS 8. bölüm bunu söyler. Göz duşu ve acil vücut duşu, kimyasalla temas noktasına en fazla 10 saniyelik yürüme mesafesinde, önü açık ve çalışır durumda olmalıdır. Haftada bir çalıştırılıp kaydedilmesini öneriyoruz.</p>"
        },
        {
          "type": "h2",
          "text": "7. Dökülme planı ve dökülme kiti"
        },
        {
          "type": "paragraph",
          "html": "<p>Dökülme planı tek sayfa olmalı ve depocu bunu ezbere bilmeli: kimi arar, hangi emiciyi kullanır, atığı nereye koyar, ne zaman tahliye eder. Dökülme kiti (emici, nötralizan, uygun eldiven, atık torbası) depoda görünür yerde, içeriği aylık kontrol edilir. Yılda en az bir kez dökülme tatbikatı yapılmalıdır.</p>"
        },
        {
          "type": "h2",
          "text": "8. Eğitim ve acil durum ekibi"
        },
        {
          "type": "paragraph",
          "html": "<p>Kimyasal depoda çalışan herkes işe başlama eğitiminde deponun kurallarını uygulamalı olarak öğrenmelidir; 2026 yönetmeliğiyle bu eğitim yüz yüze zorunlu hale geldi. Acil durum ekiplerinde (söndürme, kurtarma, koruma, ilk yardım) depoyu bilen en az bir kişi bulunmalı; vardiyalı çalışmada her vardiya için ayrı planlanmalıdır.</p>"
        },
        {
          "type": "h2",
          "text": "Depo için 10 maddelik hızlı kontrol"
        },
        {
          "type": "checklist",
          "items": [
            "Güncel kimyasal envanteri var ve depodaki ürünlerle eşleşiyor",
            "Her kimyasalın Türkçe SDS'si depoda ulaşılabilir",
            "Uyumsuz kimyasallar ayrı rafta / bölgede",
            "Tüm sıvılar taşma havuzunda",
            "Aktarma kapları etiketli, gıda kabı yok",
            "Havalandırma çalışıyor, zemin kimyasala dayanıklı",
            "Göz ve vücut duşu 10 saniye mesafede, haftalık kontrol kaydı var",
            "KKD SDS'ye uygun ve zimmetli",
            "Dökülme kiti tam, planı duvarda, yılda bir tatbikat",
            "Depocu işe başlama eğitimini depoda uygulamalı aldı"
          ]
        },
        {
          "type": "faq",
          "items": [
            {
              "q": "Tedarikçi SDS göndermiyor, ne yapmalıyım?",
              "a": "Yazılı talep edin ve kaydını tutun. Kimyasalın piyasaya arzından sorumlu taraf SDS sağlamakla yükümlüdür; ısrarla vermiyorsa ürünü kullanmamak en güvenli yoldur."
            },
            {
              "q": "Az miktarda kimyasal kullanıyoruz, bu kurallar bize de geçerli mi?",
              "a": "Evet. Miktar riski küçültür ama ortadan kaldırmaz; bir litre asit de göz kaybına yol açabilir. Envanter, SDS, etiket ve KKD her ölçekte geçerlidir."
            },
            {
              "q": "Dökülme kitinde ne olmalı?",
              "a": "Kimyasal türüne uygun emici (üniversal veya asit/baz nötralizan), kimyasala dayanıklı eldiven ve gözlük, atık torbası ve etiketi, uyarı şeridi, küçük kürek. İçerik SDS'lere göre belirlenir."
            }
          ]
        },
        {
          "type": "paragraph",
          "html": "<p><em>Bu yazı bilgilendirme amaçlıdır. İşyerinize özel değerlendirme için iş güvenliği uzmanınızla görüşün.</em></p>"
        },
        {
          "type": "cta-inline",
          "text": "Kimyasal deponuz için envanter ve SDS kontrolünü birlikte yapalım.",
          "button": {
            "label": "Teklif Al",
            "href": "/iletisim"
          }
        }
      ],
      "structuredData": {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Kimyasal Depolarda İş Güvenliği: SDS'den Dökülme Planına 8 Adım",
        "mainEntityOfPage": "/blog/kimyasal-depolarda-is-guvenligi",
        "about": [
          "Kimyasal güvenlik",
          "SDS",
          "Dökülme planı"
        ],
        "datePublished": "2026-11-08"
      }
    },
    {
      slug: "insaatta-isg",
      locale: "tr",
      title: "İnşaatta İş Sağlığı ve Güvenliği: Temel Riskler ve Önlemler",
      subtitle: "Yüksekte çalışma, iskele güvenliği, düşme önleyici sistemler ve şantiye disiplinleri.",
      metaTitle: "İnşaatta İSG: Yüksekte Çalışma, İskele Güvenliği, Düşme Önleme",
      metaDescription:
        "İnşaat sahalarında İSG: yüksekte çalışma, iskele güvenliği, LOTO, KKD disiplini ve acil durum planları. Uygulanabilir kontrol önlemleri ve pratik kontrol listeleri.",
      heroImage: "/images/blog/insaat-isg.jpg",
      readTime: "7 dk",
      updatedAt: "2025-09-15",
      excerpt:
        "Yüksekte çalışma ve iskele güvenliği başta olmak üzere, şantiye sahalarında öne çıkan İSG riskleri ve uygulanabilir önlemler.",
      keywords: ["inşaat isg", "yüksekte çalışma", "iskele kontrolü", "şantiye güvenliği", "kkd"],
      sections: [
        { h2: "Öne Çıkan Riskler", bullets: ["Düşme ve devrilme", "Malzeme düşmesi", "Elektrik ve enerji kaynakları", "Gürültü ve toz maruziyeti"] },
        { h2: "Zorunlu Kontroller", bullets: ["İskele periyodik kontrolü", "Merdiven/Platform uygunluğu", "Enerji kesme/LOTO prosedürleri"] },
        { h2: "Uygulama Önerileri", bullets: ["Kısa toolbox eğitimleri", "KKD disiplin takibi", "Yüksekte çalışma izin sistemi"] },
      ],
      blocks: [
        { type: "lead", html: "<p>İnşaat projelerinde en sık görülen ciddi kazalar düşme kaynaklıdır. Bu yazı, sahada hızlıca uygulanabilir İSG önlemlerini ve kontrol adımlarını özetler.</p>" },
        { type: "image", src: "/images/blog/insaat-isg-hero2.jpg", alt: "İskele ve yüksekte çalışma önlemleri", caption: "Yüksekte çalışmada toplu koruma önlemleri önceliklidir." },
        { type: "h2", text: "Başlıca Riskler" },
        { type: "list", style: "ul", items: [
          "Yüksekte çalışma ve düşme",
          "İskele, platform ve merdiven uygunsuzlukları",
          "Elektrik kaynakları ve enerji izolasyonu (LOTO)",
          "Malzeme düşmesi ve çarpma",
          "Toz, gürültü ve titreşim maruziyeti",
        ] },
        { type: "h2", text: "Kontrol Hiyerarşisi ve Uygulanabilir Önlemler" },
        { type: "list", style: "ol", items: [
          "Mühendislik kontrolleri: Korkuluk, ağ, platform ve güvenli erişim yolları.",
          "İdari kontroller: Çalışma izinleri, görev tanımları, vardiya planı.",
          "LOTO: Elektrik ve enerji kaynaklarının izole edilmesi ve etiketlenmesi.",
          "KKD: Tam vücut kemeri, düşüş durdurucu, baret, eldiven, gözlük.",
          "Periyodik kontroller: İskele, kaldırma ekipmanı ve el aletleri kayıtları.",
        ] },
        { type: "h3", text: "Saha İçin Hızlı Kontrol Listesi" },
        { type: "checklist", items: [
          "İskele sertifikalı mı ve son kontrol tarihi görünür mü?",
          "Yüksekte çalışma izin formu imzalı mı?",
          "LOTO kilit/etiketleri kayıtlı mı?",
          "Düşmeye karşı toplu koruma mevcut mu?",
          "KKD uygunluğu ve kullanım disiplini gözlemlendi mi?",
        ] },
        { type: "h2", text: "Eğitim ve Dokümantasyon" },
        { type: "paragraph", html: "<p>Kısa <strong>toolbox</strong> eğitimleri ve işe özel talimatlar, davranışsal güvenliği güçlendirir. İskele kurulumu, yüksekte çalışma, LOTO ve acil durum konuları yıllık plana dahil edilmelidir.</p>" },
        { type: "faq", items: [
          { q: "İskele kontrol periyodu nedir?", a: "Kurulum/yer değişikliği sonrası ve periyodik olarak yetkili kişilerce yapılmalıdır." },
          { q: "Yüksekte çalışmada minimum koruma nedir?", a: "Öncelik toplu korumadır; mümkün değilse kişisel düşüş durdurma sistemleri kullanılmalıdır." },
        ] },
        { type: "callout", variant: "info", title: "İpucu", text: "Şantiyede ‘son 5 dakika’ kuralı ile işe başlamadan önce hızlı risk gözden geçirmesi yapın." },
        { type: "cta-inline", text: "İnşaat sahası için kapsamlı risk analizi ve eğitim planı çıkarmamızı ister misiniz?", button: { label: "Teklif Al", href: "/teklif" } },
      ],
      internalLinks: [
        { label: "Risk Analizi Hizmeti", href: "/hizmetler/risk-analizi" },
        { label: "Eğitim Programları", href: "/hizmetler/egitimler" },
      ],
      faq: [
        { q: "Kişisel düşüş durdurma ne zaman zorunlu?", a: "Toplu korumanın mümkün olmadığı yüksekte çalışmalarda kullanılmalıdır." },
        { q: "LOTO ne sağlar?", a: "Enerji kaynaklarının izole edilmesini ve yetkisiz yeniden enerjilendirmeyi engeller." },
      ],
      structuredData: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: "İnşaatta İş Sağlığı ve Güvenliği",
        mainEntityOfPage: "/blog/insaatta-isg",
        about: ["İnşaat İSG", "Yüksekte çalışma", "İskele güvenliği"],
      },
    },
    {
      slug: "lojistikte-isg",
      locale: "tr",
      title: "Lojistik ve Depolamada İSG: Forklift, Ergonomi ve Depo Düzeni",
      subtitle: "Araç–yaya trafiği, istif güvenliği, forklift operasyonları ve ergonomi odaklı pratik önlemler.",
      metaTitle: "Lojistikte İSG: Depo Güvenliği, Forklift Operasyonları, Ergonomi",
      metaDescription:
        "Lojistik ve depolamada iş güvenliği: forklift güvenliği, araç–yaya ayrımı, raf/istif güvenliği, elle taşıma ve ergonomi, 5S düzeni ve günlük kontrol listeleri.",
      heroImage: "/images/blog/lojistik-isg.jpg",
      readTime: "7 dk",
      updatedAt: "2025-09-15",
      excerpt: "Forklift operasyonları ve depo trafiğinde çarpışma risklerini azaltacak pratik uygulamalar.",
      keywords: ["lojistik isg", "depo güvenliği", "forklift güvenliği", "ergonomi", "raf sistemleri", "elle taşıma"],
      sections: [
        { h2: "Kritik Riskler", bullets: ["Araç-yaya etkileşimi", "Devrilme ve istif çökmesi", "Elle taşıma ve MSD"] },
        { h2: "Kontrol Önlemleri", bullets: ["Ayrık yaya yolları", "Hız limitleri ve sensörler", "Operatör sertifikasyonu"] },
        { h2: "İyileştirme Adımları", bullets: ["5S ile depo düzeni", "Günlük forklift kontrol listesi", "Ergonomi eğitimi"] },
      ],
      blocks: [
        { type: "lead", html: "<p>Lojistik tesislerinde kazaların büyük kısmı <strong>araç–yaya etkileşimi</strong>, <strong>forklift devrilmeleri</strong> ve <strong>uygunsuz istif</strong> kaynaklıdır. Bu yazı, depo operasyonlarında hemen uygulanabilecek İSG kontrollerini özetler.</p>" },
        { type: "image", src: "/images/blog/lojistik-isg-hero2.jpg", alt: "Depoda forklift ve yaya yollarının ayrıldığı güvenli düzen", caption: "Net işaretlemeler ve ayrılmış yaya yolları, araç–yaya çarpışma riskini azaltır." },
        { type: "h2", text: "Kritik Riskler" },
        { type: "list", style: "ul", items: [
          "Forklift devrilmesi ve çarpışmalar",
          "Araç–yaya temas noktaları",
          "Uygunsuz istif ve raf çökmesi",
          "Elle taşıma ve kas-iskelet sistemi (MSD) riskleri",
          "Dar koridor, görüş kısıtları ve kör noktalar",
        ] },
        { type: "h2", text: "Kontrol Hiyerarşisi ve Temel Önlemler" },
        { type: "list", style: "ol", items: [
          "Mühendislik kontrolleri: Araç ve yaya yollarını fiziksel bariyerle ayırın; kör noktalara ayna ve uyarı lambası ekleyin.",
          "İdari kontroller: Trafik planı, hız limitleri, tek yön akış, şerit ve kavşak kuralları.",
          "Ekipman güvenliği: Forkliftlerde günlük pre-operasyon kontrol listesi; ikaz sistemi ve geri vites alarmı.",
          "İstif güvenliği: Raf kapasite etiketleri, palet bütünlüğü, üst seviye istif kuralları.",
          "Ergonomi: Elle taşıma limitleri, kaldırma–taşıma yardımcıları, rotasyon ve mikro molalar.",
        ] },
        { type: "h3", text: "5S ile Depo Düzeni (Örnek Uygulama Adımları)" },
        { type: "list", style: "ul", items: [
          "Seiri (Ayıklama): Kullanılmayan malzemeleri sahadan kaldırın.",
          "Seiton (Düzen): Raf/zemin etiketleme, renk kodlu şeritler ve ok yönlendirmeleri.",
          "Seiso (Temizlik): Günlük temizlik planı; dökülme-kayma risklerini azaltın.",
          "Seiketsu (Standartlaştırma): Görsel standartlar (shadow board, sınır çizgileri).",
          "Shitsuke (Disiplin): Periyodik iç denetim ve puanlama tabloları.",
        ] },
        { type: "h2", text: "Günlük Kontrol Listesi (Sahaya Asılabilir)" },
        { type: "checklist", items: [
          "Yaya yolları ve bariyerler sağlam ve boş mu?",
          "Uyarı levhaları, hız limitleri ve aynalar görünür mü?",
          "Forklift pre-check (fren, direksiyon, lastik, ikazlar) tamam mı?",
          "Raflarda kapasite etiketleri ve hasar kontrolü yapıldı mı?",
          "Dökülme–kayma alanları temizlendi mi? Acil çıkışlar açık mı?",
        ] },
        { type: "h2", text: "Eğitim, Sertifikasyon ve Dokümantasyon" },
        { type: "paragraph", html: "<p>Forklift operatörleri eğitimli ve belgelendirilmeli, sürüş alanı simülasyonları ve pratik sınavlar dokümante edilmelidir. Tüm kaza/ramak kala kayıtları <strong>trend analizine</strong> girdi sağlayacak şekilde toplanmalıdır.</p>" },
        { type: "faq", items: [
          { q: "Yaya güvenliği nasıl garanti altına alınır?", a: "Ayrılmış yaya yolları, bariyerler, geçiş noktalarında aydınlatma ve görsel–işitsel uyarılarla temas noktaları azaltılmalıdır." },
          { q: "Forklift günlük kontrolleri neleri içerir?", a: "Fren, direksiyon, lastik, çatallar, zincirler, hidrolik, ikaz ve aydınlatma sistemi; sızıntı ve ses kontrolü." },
        ] },
        { type: "callout", variant: "warning", title: "Kör Nokta Uyarısı", text: "Raf başları ve kapı çıkışlarında hız düşürme, korna ve dur–bak–dinle kuralını zorunlu hale getirin." },
        { type: "cta-inline", text: "Depo operasyonlarınız için risk analizi + trafik planı + 5S kurulumunu birlikte yapalım.", button: { label: "Teklif Al", href: "/teklif" } },
      ],
      internalLinks: [
        { label: "Periyodik Kontroller", href: "/hizmetler/periyodik-kontroller" },
        { label: "Ergonomi Eğitimi", href: "/hizmetler/egitimler#ergonomi" },
        { label: "Risk Analizi Hizmeti", href: "/hizmetler/risk-analizi" },
      ],
      faq: [
        { q: "Raf sistemleri için periyodik kontrol şart mı?", a: "Üretici talimatlarına ve kullanım yoğunluğuna göre periyodik kontroller yapılmalı; hasarlı elemanlar derhal servis dışı bırakılmalıdır." },
        { q: "Elle taşıma limitlerini nasıl belirlerim?", a: "Ağırlık, yükün kavranabilirliği, taşıma mesafesi ve çalışma yüksekliği dikkate alınmalı; mümkün olan her yerde mekanik yardımcılar kullanılmalıdır." },
      ],
      structuredData: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: "Lojistik ve Depolamada İSG",
        mainEntityOfPage: "/blog/lojistikte-isg",
        about: ["Lojistik İSG", "Depo güvenliği", "Forklift"],
      },
    },
    {
      slug: "gida-sektorunde-isg",
      locale: "tr",
      title: "Gıda Sektöründe İSG ve Hijyen: Kimyasal Maruziyet ve HACCP",
      subtitle: "Hijyen standartları, temizlik kimyasalları, biyolojik riskler ve çalışan sağlığı.",
      metaTitle: "Gıda Sektöründe İSG: Hijyen, Kimyasal Temizlik, HACCP",
      metaDescription:
        "Gıda üretiminde iş güvenliği: hijyen prosedürleri, temizlik kimyasalları, biyolojik riskler, HACCP ve çalışan sağlığına yönelik pratik önlemler.",
      heroImage: "/images/blog/gida-isg.jpg",
      readTime: "6 dk",
      updatedAt: "2025-09-15",
      excerpt: "HACCP çerçevesinde hijyen, temizlik kimyasalları ve çalışan sağlığına odaklanan İSG pratikleri.",
      keywords: ["gıda isg", "hijyen", "haccp", "kimyasal maruziyet", "biyolojik risk", "gıda güvenliği"],
      sections: [
        { h2: "Önemli Başlıklar", bullets: ["HACCP ve kritik kontrol noktaları", "Temizlik kimyasalları SDS", "Biyolojik riskler ve PPE"] },
        { h2: "Zorunlu Uygulamalar", bullets: ["Hijyen bariyerleri", "El yıkama istasyonları", "Soğuk zincir izlenebilirliği"] },
        { h2: "Eğitim & Denetim", bullets: ["Hijyen eğitimi", "Kimyasal etiketleme", "İç tetkikler"] },
      ],
      blocks: [
        { type: "lead", html: "<p>Gıda sektöründe iş sağlığı ve güvenliği yalnızca çalışanları değil, aynı zamanda tüketicilerin güvenliğini de doğrudan etkiler. <strong>Hijyen, kimyasal temizlik ve HACCP standartları</strong> bu nedenle kritik öneme sahiptir.</p>" },
        { type: "image", src: "/images/blog/gida-isg-hero2.jpg", alt: "Hijyen kuralları ile gıda üretimi yapan çalışan", caption: "Koruyucu ekipman ve hijyen bariyerleri gıda üretiminde temel gerekliliklerdir." },
        { type: "h2", text: "Başlıca Riskler" },
        { type: "list", style: "ul", items: [
          "Biyolojik riskler (bakteri, virüs, küf)",
          "Kimyasal maruziyet (temizlik maddeleri, dezenfektanlar)",
          "Alerjen kontrolü eksiklikleri",
          "Soğuk zincir kırılması ve bozulma riski",
          "Kesici-delici alet kaynaklı yaralanmalar",
        ] },
        { type: "h2", text: "HACCP ve İSG Entegrasyonu" },
        { type: "list", style: "ol", items: [
          "Kritik kontrol noktalarında (CCP) çalışan güvenliği ve hijyen prosedürlerini birleştirin.",
          "Üretim hattında el yıkama istasyonlarını zorunlu hale getirin.",
          "Alerjen ve kimyasal etiketlemeyi standartlaştırın.",
          "Soğuk zincir takibini dijital kayıtlarla yapın.",
          "HACCP planlarına KKD ve eğitim modülleri ekleyin.",
        ] },
        { type: "h2", text: "Hijyen ve KKD Uygulamaları" },
        { type: "checklist", items: [
          "Saç bonesi, maske, eldiven ve önlük kullanılıyor mu?",
          "Çalışma alanına girişte el yıkama/dezenfeksiyon zorunlu mu?",
          "Kimyasal temizlik sırasında gözlük ve eldiven kullanımı var mı?",
          "Üretim alanına sokulmaması gereken kişisel eşyalar kontrol ediliyor mu?",
          "Soğuk odalarda sıcaklık sürekli kayıt altına alınıyor mu?",
        ] },
        { type: "h2", text: "Eğitim ve İç Denetimler" },
        { type: "paragraph", html: "<p>Hijyen, kimyasal güvenlik ve acil durum konuları yıllık eğitim planlarına dahil edilmelidir. Ayrıca <strong>iç tetkikler</strong> ve sürpriz denetimler, uygulamaların sürekliliğini sağlamada etkilidir.</p>" },
        { type: "faq", items: [
          { q: "HACCP İSG ile nasıl entegre edilir?", a: "Çalışan sağlığı prosedürleri HACCP kritik kontrol noktalarıyla birleştirilmeli ve eğitimlerle pekiştirilmelidir." },
          { q: "Kimyasal temizlikte en temel gereklilik nedir?", a: "SDS dokümanlarının erişilebilir olması, uygun depolama ve kişisel koruyucu donanım kullanımı." },
        ] },
        { type: "callout", variant: "info", title: "İpucu", text: "Gıda üretim alanına girerken ‘temiz alan protokolü’ uygulayın: bone + maske + eldiven + el yıkama." },
        { type: "cta-inline", text: "Gıda tesisiniz için hijyen ve İSG odaklı kapsamlı risk analizi ve eğitim planı çıkarmamızı ister misiniz?", button: { label: "Teklif Al", href: "/teklif" } },
      ],
      internalLinks: [
        { label: "Kimyasal Risk Değerlendirmesi", href: "/hizmetler/kimyasal-risk" },
        { label: "Eğitim Planı", href: "/hizmetler/egitimler" },
        { label: "Risk Analizi Hizmeti", href: "/hizmetler/risk-analizi" },
      ],
      faq: [
        { q: "Temizlik kimyasallarının depolanmasında en önemli kural nedir?", a: "Gıda ürünlerinden ayrı, etiketli ve havalandırmalı bir alanda saklanmalıdır." },
        { q: "Soğuk zincir kırılırsa ne yapılmalı?", a: "Kayıt altına alınmalı, ürün izolasyona alınmalı ve kalite güvence ekibi değerlendirmelidir." },
      ],
      structuredData: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: "Gıda Sektöründe İSG ve Hijyen",
        mainEntityOfPage: "/blog/gida-sektorunde-isg",
        about: ["Gıda İSG", "HACCP", "Hijyen"],
      },
    },
  ],
} as const;

export const blogPosts = raw.posts as unknown as BlogPost[];
export const blogPostsBySlug: Record<string, BlogPost> = Object.fromEntries(
  blogPosts.map((p) => [p.slug, p])
);
