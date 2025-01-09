
import type { Metadata } from "next";
import "./globals.css";
import {ThemeProvider} from "next-themes";
import Header from "@/components/main/header";
import Footer from "@/components/main/footer";

export const metadata: Metadata = {
  title: "포트폴리오",
  description: "Generated by create next app",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="kr">
        <head>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
                integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer" />
        </head>
        <body className="bg-primary">
            <ThemeProvider attribute="class" defaultTheme="system">
                <Header/>
                {children}
                <Footer /> 
            </ThemeProvider>
        </body>
    </html>
  );
};