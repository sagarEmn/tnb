import React, { useState } from "react";
import { Link } from "react-router-dom";
import globalStyles from "../../global.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImageSources from "../About/AboutImage.js";
import VideoSection from "../VideoSection/VideoSection.jsx";

const KVKK = () => {
  return (
    <>
      <div className={`${globalStyles["outer-container"]}`}>
        <div className={`${globalStyles["padding-container"]}`}>
          <section className="image-container">
            {/* image container */}
            <div
              className={`${globalStyles["padding-group-first"]} ${globalStyles["padding-group-extend"]} `}
            >
              <div className={globalStyles["image-container"]}>
                <img src={aboutImageSources[0].image} alt="" />
              </div>
            </div>
          </section>

          <div className={globalStyles['first-line']}>
          Kişisel Verilerin Korunması Politikası

          </div>
          <section className={globalStyles["third-line"]}>
            <p>
              AMAÇ
              <br />
              Kişisel Verilerin Korunması Politikasının (“Politika”) amacı, One
              RX Proje Yönetim Tasarım ve Üretim Ltd. Şti.’nin (“ONE RX”) mevcut
              ve potansiyel müşterileri, iş ortakları, ziyaretçileri, pay
              sahipleri, şirket yöneticileri, şirket çalışanları, çalışan
              adayları, işbirliği içinde bulunulan kurum çalışanları ve bunlar
              haricindeki diğer üçüncü kişilere ait kişisel verilerin korunması
              hususundaki prensiplerin belirlenmesi, Anayasa’nın 20’nci maddesi
              ve Kanun ve ilgili mevzuatlarına uyum sağlanması ve bu doğrultuda
              gerekli önlemlerin alınmasından ibarettir.
            </p>
            <p>
              1 KAPSAM
              <br />
              Bu Politika, kimliği belirli veya belirlenebilir gerçek kişilerle
              ilgili, fiziksel veya dijital olarak tutulan her türlü kişisel
              veriyi kapsamaktadır.
            </p>
            <p>
              2 KİŞİSEL VERİLERİN KORUNMASI PRENSİPLERİ
              <br />
              ONE RX bünyesinde işlenen kişisel veriler, yasada öngörüldüğü
              şekilde kişisel veri ve özel nitelikli kişisel veri olarak
              sınıflandırılır, aşağıdaki prensiplere göre işlenir, güvenli bir
              şekilde muhafaza edilir ve gerekmesi durumunda üçüncü taraflara
              aktarılır.
            </p>
            <p>
              2.1 GİZLİLİK
              <br />
              ONE RX dâhilindeki kişisel verilerin işlenme süreçlerinin gizlilik
              içerisinde yürütülmesi esastır. Bu kapsamda ONE RX, kişisel
              verilere her türlü yetkisiz erişimi olanaklar elverdiği ölçüde
              engeller, mümkün olan her türlü teknik ve idari tedbiri bünyesinde
              uygular ve buna ilişkin denetimleri periyodik olarak
              gerçekleştirir.
            </p>
            <p>
              2.2 HUKUKA VE DÜRÜSTLÜK KURALLARINA UYGUN OLMA
              <br />
              ONE RX, kişisel verileri kanunlarda öngörülen sınırlar
              çerçevesinde hukuka ve dürüstlük kurallarına uygun olarak elde
              eder ve işler.
            </p>
            <p>
              2.3 DOĞRU VE GEREKTİĞİNDE GÜNCEL OLMA
              <br />
              ONE RX tarafından kişisel veriler, tam ve doğru bir şekilde
              muhafaza edilir ve gerektiğinde güncellenir. ONE RX, kişisel
              verilerin doğru veya güncel olmaması halinde söz konusu verilerin
              düzeltilmesini, güncellenmesini veya silinmesini tespit etmek
              amacıyla gerekli düzenlemeleri yapar.
            </p>
            <p>
              2.4 BELİRLİLİK VE ŞEFFAFLIK
              <br />
              ONE RX, kişisel verileri belirli, açık ve meşru amaçlarla işler.
              İlgili kişiye şeffaf kıldığı veri toplama ve işleme amaçları
              haricinde, başkaca amaçlarla veri işlemez. Amacın meşru olması,
              ONE RX’in işlediği verilerin, yapmış olduğu iş veya sunmuş olduğu
              hizmetle bağlantılı ve bunlar için gerekli olması anlamına gelir.
            </p>
            <p>
              2.5 İŞLENDİKLERİ AMAÇLA BAĞLANTILI, SINIRLI VE ÖLÇÜLÜ OLMA
              <br />
              ONE RX tarafından işlenen kişisel veriler, yalnızca belirtilen
              amaç ile tutarlı olacak şekilde ve bu bağlamda makul bir sınırlama
              yapılarak işlenir. İleride söz konusu olabilecek olası veri işleme
              amaçları için kişisel veri toplanmayacağı gibi, kişisel verilerin
              elde edilme amacına uygun olmayan hiçbir şekilde bu veriler
              işlenmez.
              <br />
              Minimum veri ilkesi uyarınca kişisel veriler, elde edilme amacıyla
              sınırlı ve ölçülü tutulmakta olup, bu amaç kapsamında gereksinimi
              olmayan veriler tutulmaz.
            </p>
            <p>
              2.6 SINIRLI SÜRE
              <br />
              Kişisel Verilerin İşlenmesini gerektiren esas amacın ortadan
              kalkması ve artık bu verilere ihtiyaç duyulmaması hâlinde söz
              konusu kişisel veriler silinir, yok edilir veya anonim hale
              getirilir. Kanunlarda verilerin tutulmasına ilişkin sürelerin
              öngörülmesi hâlinde ise bu veriler, ilgili mevzuatta öngörülen
              sürelere uygun olacak şekilde muhafaza edilir; mevzuatta öngörülen
              sürenin dolmasından sonra ise bu veriler ONE RX tarafından Kişisel
              Veri Saklama ve İmha Politikasında belirtildiği üzere, belirli
              aralıklarla kontrol edilerek, verilerin saklandığı
              sistemlerden/cihazlardan veya fiziksel olarak bulunduğu
              ortamlardan silinir, yok edilir veya anonim hale getirilir.
            </p>
            <p>
              2.7 SEÇİM VE ONAY
              <br />
              ONE RX, Kişisel Verilerin İşlenmesi ile ilgili olarak veri
              sahibini tam ve gereği gibi bilgilendirir. Gereken durumlarda,
              veri sahibinin söz konusu işleme ile ilgili olarak onayını alır,
              vermiş olduğu onayı dilediğinde geri çekme veya verileri ile
              ilgili talepte bulunma seçeneği sunar. ONE RX, ilgili veri sahibi
              kişi onayını geri aldıktan sonra, ilgili kişiye ait kişisel
              verileri işbu Politikada belirtilen diğer prensipler dâhilinde ele
              alır.
            </p>
            <p>
              <br />3 YAPTIRIM
              <br />
              Bu Politikanın ihlali durumunda, ONE RX KVKK Komitesi derhal
              haberdar edilmelidir. ONE RX, kendi takdirine bağlı olarak,
              Politikayı ihlal eden kişiler için disiplin cezası uygulama, iş
              akitlerini feshetme, askıya alma veya yargı yoluna başvurma ve
              Politikayı ihlal eden ve kişisel verilerin korunması ile alakalı
              diğer gereklilikleri yerine getirmeyen kişiler ile alakalı iddiada
              bulunma hakkını saklı tutar.
            </p>
            <p>
              <br />4 GÖZDEN GEÇİRME
              <br />
              Bu Politika yıllık olarak ve gereken durumlarda gözden
              geçirilmelidir.
            </p>
            <p>
              <br />5 POLİTİKANIN DAĞITILMASI
              <br />
              Bu Politika, ONE RX tarafından bütün çalışanların ulaşabileceği
              bir ortamda yayınlanmalı/yayımlanmalı ve tüm çalışanlar
              bilgilendirilmelidir.
            </p>
            <p>
              <br />6 TANIMLAR
              <br />
              Kanun: 6698 sayılı Kişisel Verilerin Korunması Kanunu
              <br />
              Kişisel Verilerin İşlenmesi: Kişisel verilerin tamamen veya kısmen
              otomatik olan ya da herhangi bir veri kayıt sisteminin parçası
              olmak kaydıyla otomatik olmayan yollarla elde edilmesi,
              kaydedilmesi, depolanması, muhafaza edilmesi, değiştirilmesi,
              yeniden düzenlenmesi, açıklanması, aktarılması, devralınması, elde
              edilebilir hâle getirilmesi, sınıflandırılması ya da
              kullanılmasının engellenmesi gibi veriler üzerinde
              gerçekleştirilen her türlü işlem.
            </p>
            <p>
              <br />
              Özel Nitelikli Kişisel Veri: Kişilerin, ırkı, etnik kökeni, siyasi
              düşüncesi, felsefi inancı, dini, mezhebi veya diğer inançları,
              kılık ve kıyafeti, dernek, vakıf ya da sendika üyeliği, sağlığı,
              cinsel hayatı, ceza mahkûmiyeti ve güvenlik tedbirleriyle ilgili
              verileri ile biyometrik ve genetik verileri özel nitelikli kişisel
              veridir.
            </p>
            <p>
              <br />
              ONE RX KVKK Komitesi: ONE RX içerisine daha önceden yapılan ve
              ilerleyen dönemlerde yapılacak olan Kanun kapsamındaki
              çalışmaların tek yerden yönetilmesi, denetlenmesi, üst yönetime
              raporlanması ve gerekli aksiyonların alınması için ilgili
              paydaşların yer aldığı komitedir.
            </p>
          </section>

          <section className={globalStyles["back-to-homepage"]}>
            <Link to="/home">BACK TO HOMEPAGE</Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default KVKK;
