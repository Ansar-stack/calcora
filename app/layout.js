import Header from "@/app/components/Header";
import "./globals.css";
import Footer from "@/app/components/Footer";

export const metadata = {
  icons: {
    icon: "/ficon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Q0L7JJGN6L"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          window.dataLayer.push(arguments)
          gtag('js', new Date()); gtag('config', 'G-Q0L7JJGN6L');
        </script>
      </head>
      <body className="overflow-x-hidden bg-[#f5f9ff] scroll-smooth">
        <header
          className="w-full header min-h-[60px] sticky top-0 left-0 z-50 bg-[#f5f9ff] shadow-sm flex justify-between items-center px-[5vw]"
          role="banner"
        >
          <Header />
        </header>
        <main role="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
