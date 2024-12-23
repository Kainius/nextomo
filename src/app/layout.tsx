import type { Metadata } from "next";
import "@/styles/globals.css";
import Navigation from "../components/navigation";

export const metadata: Metadata = {
  title: "NEXTOMO",
  description: "잡식님과 함께하는 행복한 Next.js",
  icons: {
    icon: [
      {
        rel: "icon",
        type: "ico",
        sizes: "256x256",
        url: "/favicon/favicon-vercel.ico",
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
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
