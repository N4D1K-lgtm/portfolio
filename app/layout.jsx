import "./globals.css";

export const metadata = {
  title: "Portfolio - Kidan Nelson",
  description: "An interactive terminal portfolio built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
