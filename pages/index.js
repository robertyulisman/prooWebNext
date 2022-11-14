import Head from "next/head";
import Navbar from "../components/Navbar";
import Tentang from "../components/Section/Tentang";
import SearchTeacher from "../components/Section/SearchTeacher";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Head>
        <title>Proo | Private Ngaji</title>
        <meta
          name="description"
          content="Aplikasi Private Ngaji | Aplikasi Private Offline, Guru Datang kerumah, Jaminan Keamanan dan Guru Tersertifikasi"
        />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600&family=Montserrat:wght@200;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Navbar home />
        <SearchTeacher />
        <Tentang />
      </main>
    </div>
  );
}
