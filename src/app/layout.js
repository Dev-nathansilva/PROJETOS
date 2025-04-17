import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[linear-gradient(to_bottom,_#03001B,_#060416)]">
        {children}
      </body>
    </html>
  );
}
