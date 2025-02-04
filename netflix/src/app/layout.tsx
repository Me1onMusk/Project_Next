
import { Inter } from "next/font/google"; 
import { ThemeProvider } from "../config/material-tailwind-theme-provider"; 
import "./globals.css"; 
import ReactQueryClientProvider from "../config/ReactQueryClientProvider"; 
import Footer from "@/components/footer";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
        <head>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
                integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer" />
        </head>
        <body className={inter.className}>
        <ReactQueryClientProvider>
            <ThemeProvider>
                <Header />
                {children}
                <Footer />
            </ThemeProvider>
        </ReactQueryClientProvider>
        </body>
    </html>
  );
};