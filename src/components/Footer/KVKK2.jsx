import React from "react";
import { Link } from "react-router-dom";
import globalStyles from "../../global.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImageSources from "../About/AboutImage.js";

const KVKK2 = () => {
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

          <div className={globalStyles["first-line"]}>
            Kişisel Verilerin İşlenmesine İlişkin Aydınlatma Metni
          </div>

          <section className={globalStyles["third-line"]}>
            <p>
              1. Veri Sorumlusunun Kimliği
              <br />
              One Rx Proje Yönetim Tasarım ve Üretim Ltd. Şti. (“One RX” veya
              “Şirket”) olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu
              (“Kanun”) nezdinde veri sorumlusu sıfatıyla, elde ettiğimiz
              kişisel verilere ilişkin Kanun’a uygun hareket edebilmemizi
              teminen aydınlatma yükümlülüğü kapsamında aşağıdaki hususları
              bilgilerinize sunuyoruz:
            </p>
            <p>
              2. Kişisel Verilerin İşlenmesi ve İşleme Amaçları
              <br />
              One RX tarafından sunulan hizmet ya da ticari faaliyete ilişkin
              olarak değişkenlik gösterebilmekle beraber Şirketimiz tarafından
              hizmetlerin en iyi şekilde sunulabilmesini sağlamak maksadıyla
              aşağıda belirtilen veri sahiplerine ait kişisel veriler
              işlenebilmektedir. Bu kapsamda;
            </p>
            <p>
              Şirketimizin mevcut ve potansiyel gerçek kişi tacir veya tüzel
              kişi müşterilerinin veya bayilerinin çalışanı/irtibat
              kişisi/ortağı/yetkilisi olmanız halinde kimlik, iletişim, finans
              (IBAN/banka hesap bilgisi) müşteri işlem verileriniz ile ayrıca
              kimlik belgelerinde yer alan din ve kan grubu bilgileriniz
              (dolaylı olarak kimlik/ehliyet belgelerinde yer alması sebebiyle)
              Şirketimizin iş faaliyetlerinin yürütülmesi/denetimi, hizmet
              satış, satış sonrası hizmetleri, operasyon süreçlerinin
              yürütülmesi, sözleşme süreçlerinin, finans ve muhasebe işlerinin
              yürütülmesi, müşterilerimizin ürün ve hizmetleri ile ilgili
              çalışmaların gerçekleştirilmesi kapsamında
              reklam/kampanya/promosyon süreçlerinin yürütülmesi, müşteri
              memnuniyetine yönelik aktivitelerin yürütülmesi, sponsorluk
              faaliyetlerinin yürütülmesi, iletişim faaliyetlerinin yürütülmesi,
              firma / hizmetlere bağlılık süreçlerinin yürütülmesi, iş
              sürekliliğinin sağlanması faaliyetlerinin yürütülmesi, taşınır mal
              ve kaynakların güvenliğinin temini, konaklama ve seyahat dahil
              organizasyon ve etkinlik süreçlerinin yürütülmesi, stratejik
              planlama faaliyetlerinin yürütülmesi, denetim/etik faaliyetlerinin
              yürütülmesi, talep edilmesi halinde yetkili kişi, kurum ve
              kuruluşlara bilgi verilmesi, bilgi güvenliği süreçlerinin
              yürütülmesi,
            </p>
            <p>
              Şirketimizin gerçek kişi tacir veya tüzel kişi
              tedarikçilerinin/alt işverenlerinin/iş ortaklarının/hizmetlerinden
              yararlandığı üçüncü kişilerin çalışanı/irtibat
              kişisi/ortağı/yetkilisi olmanız halinde kimlik, iletişim, özlük
              (işe giriş bildirgesi), hukuki işlem bilgileri, finans (IBAN/banka
              hesap bilgileri), mesleki deneyim ile kimlik belgelerinde yer alan
              din ve kan grubu bilgileriniz (dolaylı olarak kimlik/ehliyet
              belgelerinde yer alması sebebiyle) Şirketimiz faaliyetleri
              kapsamında mal ve hizmet satın alım, operasyon süreçlerinin
              yürütülmesi, iş faaliyetlerinin yürütülmesi ve denetimi, iş
              sürekliliğinin sağlanması faaliyetlerinin yürütülmesi, yönetim
              faaliyetlerinin yürütülmesi, sözleşme süreçleri, hukuk işlerinin
              takibi, finans ve muhasebe işlerinin yürütülmesi, görevlendirme
              süreçlerinin yürütülmesi, konaklama ve seyahat dahil
              organizasyonlarının planlanması, lojistik faaliyetlerinin
              yürütülmesi, denetim/etik faaliyetlerin yürütülmesi, iş sağlığı ve
              güvenliği faaliyetlerinin yürütülmesi, iletişim faaliyetlerinin
              yürütülmesi, taşınır mal ve kaynakların güvenliğinin temini,
              tedarik zinciri, risk yönetimi süreçlerinin yürütülmesi, veri
              sorumlusu operasyonlarının güvenliğinin sağlanması, talep halinde
              yetkili kişi, kurum ve kuruluşlara bilgi verilmesi, bilgi
              güvenliği süreçlerinin yürütülmesi,
            </p>
            <p>
              İşyerimizi ziyaret etmeniz halinde, kimlik ve fiziksel mekan
              güvenliği verileriniz ziyaretçi kayıtlarının oluşturulması ve
              takibi, fiziksel mekân güvenliğinin temini, talep halinde yetkili
              kişi, kurum ve kuruluşlara bilgi,
            </p>
            <p>
              İnternet sitemizi ziyaret etmeniz halinde, işlem güvenliği
              verileriniz ile Şirketimizin kablosuz ağ bağlantısını kullanmanız
              halinde kimlik, iletişim, işlem güvenliği verileriniz 5651 sayılı
              kanun gereğince mevzuattan kaynaklanan yükümlülüklerin yerine
              getirilmesi, elektronik ortamda oluşan log kayıtlarının tutulması,
              bilgi güvenliği süreçlerinin yürütülmesi,
            </p>
            <p>
              faaliyetlerin mevzuata ve Şirket politika ve prosedürlerine uygun
              yürütülmesi amaçlarıyla sınırlı olarak işlenebilecektir. Kişisel
              verileriniz ayrıca fiziki arşivler ve bilişim sistemlerine
              nakledilerek hem dijital hem fiziki ortamlarda muhafaza
              edilebilecektir.
            </p>
            <p>
              3. İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçlar ile
              Aktarılabileceği
              <br />
              Toplanan kişisel verileriniz, işbu Aydınlatma Metni’nin 2.
              maddesinde açıklanan amaçlarla ve Kanun ile ilgili mevzuat
              kapsamında ve aktarılmasını gerektiren sebeplere bağlı ve bu
              sebeplerle sınırlı olarak; talep halinde resmi kurum ve
              kuruluşlara, denetim firmalarına, avukatlara, müşterilerimize, iş
              ortaklarımıza ve tedarikçilerimiz dâhil olmak üzere hizmetlerinden
              faydalandığımız ve işbirliği içerisinde olduğumuz firmalara,
              operasyonel süreçlerin yürütülmesi ve destek alınması, Şirket’in
              bağlı bulunduğu One Rx şirketler topluluğu politika ve
              prosedürlerine uyum sağlanması amaçlarıyla Şirketimizin yurt
              içinde ve yurt dışında bulunan grup şirketlerine ve onlarla ortak
              kullanılan veri tabanlarına aktarılabilecektir.
            </p>
            <p>
              4. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi
              <br />
              Kişisel verileriniz, işbu Aydınlatma Metni’nin 2. maddesinde
              açıklanan amaçlar ile Kanun’da öngörülen temel ilkelere uygun
              olarak Kanun’un 5. maddesinde belirtilen; sözleşmenin kurulması
              veya ifası, veri sorumlusunun hukuki yükümlülüğü, hakkın tesisi,
              kullanılması veya korunması, veri sorumlusunun meşru menfaati
              hukuki sebeplerine dayalı ve bunlarla sınırlı olarak; otomatik
              veya otomatik olmayan yöntemlerle, tarafınızca veya Şirketiniz
              vasıtasıyla doğrudan veya elektronik posta adresimiz vasıtasıyla
              iletilen sözlü veya yazılı bilgiler, Şirket faaliyetleri
              kapsamında kullanılan uygulama ve yazılımlar ve kamera kayıtları
              aracılığıyla toplanabilmektedir.
            </p>
            <p>
              5. Kişisel Verilerin Korunmasına Yönelik Haklarınız
              <br />
              Kanunun ilgili kişinin haklarını düzenleyen 11. maddesi
              kapsamındaki taleplerinizi,
              <a href="http://www.one-rx.com/wp-content/uploads/2021/09/OneRX_Basvuru-Formu.pdf">
                Veri Sorumlusu Başvuru Formu
              </a>
              &nbsp;ile “Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında
              Tebliğ” uyarınca
              <a href="mailto:infoturkeyone-rx.com">Infoturkey@one-rx.com</a>
              &nbsp;&nbsp;<u></u>yazılı olarak ve kimlik teyidinizin yapılması
              sağlanarak bizzat veya Tebliğ’de belirtilen diğer yöntemlere uygun
              olarak iletebilirsiniz.
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

export default KVKK2;
