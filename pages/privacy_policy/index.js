import Head from "next/head";
import React from "react";
import Navbar from "../../components/Navbar";
import Router, { useRouter } from "next/router";

const PrivacyPolicy = () => {
  const { locale } = useRouter();
  const translate = (id, en) => {
    if (locale === "id-ID") return id;
    else return en;
  };
  return (
    <section>
      <Head>
        <title>Privacy Policy Proo</title>
        <meta
          name="description"
          content="Proo | Platform Penyedia Private Ngaji, dapat diakses dari https://proo.co.id/, salah satu prioritas utama kami adalah privasi pengunjung kami. Dokumen Kebijakan Privasi ini berisi jenis informasi yang dikumpulkan dan dicatat oleh Proo dan bagaimana kami menggunakannya."
        />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600&family=Montserrat:wght@200;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <div className="w-full lg:w-[1000px] m-auto px-5 py-[80px] lg:p-20 ">
        <h1 className="text-[28px] font-bold text-center mb-4">
          {translate("Kebijakan Privacy Proo", "Privacy Policy for Proo")}
        </h1>

        <p className="pb-4 text-slate-600">
          {translate(
            `Di Proo, dapat diakses dari `,
            `At Proo, accessible from `
          )}{" "}
          <span className="font-bold hover:text-primary hover:cursor-pointer">
            https://proo.co.id
          </span>
          {translate(
            ` ,salah satu situs utama kami
           prioritas adalah privasi pengunjung kami. Kebijakan Privasi ini
           dokumen berisi jenis informasi yang dikumpulkan dan dicatat
           oleh Proo dan bagaimana kami menggunakannya.`,
            ` ,one of our main
          priorities is the privacy of our visitors. This Privacy Policy
          document contains types of information that is collected and recorded
          by Proo and how we use it.`
          )}{" "}
        </p>

        <p className="pb-4 text-slate-600">
          {translate(
            `Jika Anda memiliki pertanyaan tambahan atau memerlukan informasi lebih lanjut tentang kami
            Kebijakan Privasi, jangan ragu untuk menghubungi kami.`,
            `If you have additional questions or require more information about our
            Privacy Policy, do not hesitate to contact us.`
          )}
        </p>

        <h2 className="text-[20px] mb-2 font-bold text-slate-700">
          {" "}
          {translate(`File Log`, `Log Files`)}
        </h2>

        <p className="pb-4 text-slate-600">
          {translate(
            `Proo mengikuti prosedur standar menggunakan file log. File-file ini masuk
            pengunjung ketika mereka mengunjungi situs web. Semua perusahaan hosting melakukan ini dan a
            bagian dari analitik layanan hosting. Informasi yang dikumpulkan oleh log
            file termasuk alamat protokol internet (IP), jenis browser, Internet
            Penyedia Layanan (ISP), stempel tanggal dan waktu, halaman rujukan/keluar, dan
            mungkin jumlah klik. Ini tidak terkait dengan informasi apa pun
            yang dapat diidentifikasi secara pribadi. Tujuan dari informasi tersebut adalah untuk
            menganalisis tren, mengelola situs, melacak pergerakan pengguna
            situs web, dan mengumpulkan informasi demografis. Kebijakan Privasi kami
            diciptakan dengan bantuan dari`,
            `Proo follows a standard procedure of using log files. These files log
            visitors when they visit websites. All hosting companies do this and a
            part of hosting services' analytics. The information collected by log
            files include internet protocol (IP) addresses, browser type, Internet
            Service Provider (ISP), date and time stamp, referring/exit pages, and
            possibly the number of clicks. These are not linked to any information
            that is personally identifiable. The purpose of the information is for
            analyzing trends, administering the site, tracking users' movement on
            the website, and gathering demographic information. Our Privacy Policy
            was created with the help of the`
          )}{" "}
          <a href="https://www.privacypolicyonline.com/privacy-policy-generator/">
            {translate(`Pembuat Kebijakan Privasi`, `Privacy Policy Generator`)}
          </a>
          .
        </p>

        <h2 className="text-[20px] mb-2 font-bold text-slate-700">
          {translate(`Kebijakan Privasi`, `Privacy Policies`)}
        </h2>

        <p className="pb-4 text-slate-600">
          {translate(
            `Anda dapat berkonsultasi dengan daftar ini untuk menemukan Kebijakan Privasi untuk masing-masing
            mitra periklanan Proo.`,
            `You may consult this list to find the Privacy Policy for each of the
            advertising partners of Proo.`
          )}
        </p>

        <p className="pb-4 text-slate-600">
          {translate(
            `Server iklan pihak ketiga atau jaringan iklan menggunakan teknologi seperti cookie,
            JavaScript, atau Web Beacon yang digunakan masing-masing
            iklan dan tautan yang muncul di Proo, yang dikirim langsung
            ke browser pengguna. Mereka secara otomatis menerima alamat IP Anda ketika
            ini terjadi. Teknologi ini digunakan untuk mengukur efektivitas
            kampanye iklan mereka dan/atau untuk mempersonalisasi iklan
            konten yang Anda lihat di situs web yang Anda kunjungi.`,
            `Third-party ad servers or ad networks uses technologies like cookies,
            JavaScript, or Web Beacons that are used in their respective
            advertisements and links that appear on Proo, which are sent directly
            to users' browser. They automatically receive your IP address when
            this occurs. These technologies are used to measure the effectiveness
            of their advertising campaigns and/or to personalize the advertising
            content that you see on websites that you visit.`
          )}
        </p>

        <p className="pb-4 text-slate-600">
          {translate(
            `Perhatikan bahwa Proo tidak memiliki akses atau kontrol atas cookie ini
            digunakan oleh pengiklan pihak ketiga.`,
            ` Note that Proo has no access to or control over these cookies that are
            used by third-party advertisers.`
          )}
        </p>

        <h2 className="text-[20px] mb-2 font-bold text-slate-700">
          {translate(
            `Kebijakan Privasi Pihak Ketiga`,
            `Third Party Privacy Policies`
          )}
        </h2>

        <p className="pb-4 text-slate-600">
          {translate(
            `Kebijakan Privasi Proo tidak berlaku untuk pengiklan atau situs web lain.
            Karenanya, kami menyarankan Anda untuk berkonsultasi dengan Kebijakan Privasi masing-masing
            dari server iklan pihak ketiga ini untuk informasi lebih rinci. Mungkin
            sertakan praktik dan instruksi mereka tentang cara menyisih
            opsi tertentu.{" "}`,
            `Proo's Privacy Policy does not apply to other advertisers or websites.
            Thus, we are advising you to consult the respective Privacy Policies
            of these third-party ad servers for more detailed information. It may
            include their practices and instructions about how to opt-out of
            certain options.{" "}`
          )}
        </p>

        <p className="pb-4 text-slate-600">
          {translate(
            `Anda dapat memilih untuk menonaktifkan cookie melalui browser individual Anda
            pilihan. Untuk mengetahui informasi lebih detail tentang manajemen cookie
            dengan browser web tertentu, dapat ditemukan di browser '
            situs web masing-masing. Apa Itu Cookie?`,
            `You can choose to disable cookies through your individual browser
            options. To know more detailed information about cookie management
            with specific web browsers, it can be found at the browsers'
            respective websites. What Are Cookies?`
          )}
        </p>

        <h2 className="text-[20px] mb-2 font-bold text-slate-700">
          {translate(`Informasi Anak`, `Children's Information`)}
        </h2>

        <p className="pb-4 text-slate-600">
          {translate(
            `Bagian lain dari prioritas kami adalah menambahkan perlindungan untuk anak-anak saat
            menggunakan internet. Kami mendorong orang tua dan wali untuk mengamati,
            berpartisipasi dalam, dan/atau memantau dan memandu aktivitas online mereka.`,
            `Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.`
          )}
        </p>

        <p className="pb-4 text-slate-600">
          {translate(
            `Proo tidak secara sadar mengumpulkan Informasi Identifikasi Pribadi apa pun
            dari anak-anak di bawah usia 13 tahun. Jika Anda berpikir bahwa anak Anda
            memberikan informasi semacam ini di situs web kami, kami sangat
            mendorong Anda untuk menghubungi kami segera dan kami akan melakukan yang terbaik
            upaya untuk segera menghapus informasi tersebut dari catatan kami.`,
            `Proo does not knowingly collect any Personal Identifiable Information
            from children under the age of 13. If you think that your child
            provided this kind of information on our website, we strongly
            encourage you to contact us immediately and we will do our best
            efforts to promptly remove such information from our records.`
          )}
        </p>

        <h2 className="text-[20px] mb-2 font-bold text-slate-700">
          {translate(
            `Hanya Kebijakan Privasi Daring`,
            ` Online Privacy Policy Only`
          )}
        </h2>

        <p className="pb-4 text-slate-600">
          {translate(
            `Kebijakan Privasi ini hanya berlaku untuk aktivitas online kami dan berlaku
            bagi pengunjung situs web kami sehubungan dengan informasi yang mereka
            dibagikan dan/atau dikumpulkan di Proo. Kebijakan ini tidak berlaku untuk semua
            informasi yang dikumpulkan secara offline atau melalui saluran selain situs web ini.`,
            ` This Privacy Policy applies only to our online activities and is valid
            for visitors to our website with regards to the information that they
            shared and/or collect in Proo. This policy is not applicable to any
            information collected offline or via channels other than this website.`
          )}
        </p>

        <h2 className="text-[20px] mb-2 font-bold text-slate-700">
          {translate(`Izin`, `Consent`)}
        </h2>

        <p className="pb-4 text-slate-600">
          {translate(
            `Dengan menggunakan situs web kami, Anda dengan ini menyetujui Kebijakan Privasi kami dan
            menyetujui Syarat dan Ketentuannya.`,
            `By using our website, you hereby consent to our Privacy Policy and
            agree to its Terms and Conditions.`
          )}
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
