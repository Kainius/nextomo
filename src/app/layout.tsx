import type { Metadata } from "next";
// import localFont from "next/font/local";
import "@/styles/globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

// const Pretendard = localFont({
//   src: "../../public/fonts/PretendardVariable.woff2",
//   display: "swap",
//   weight: "45 920",
//   variable: "--font-pretendard",
// });

export const metadata: Metadata = {
  title: "Nextomo",
  description: "잡식님과 함께하는 행복한 Next.js",
  icons: {
    icon: [
      {
        rel: "icon",
        type: "ico",
        sizes: "256x256",
        url: "/favicon/favicon-256.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      {/* <body className={`${Pretendard.variable}`}> */}
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
