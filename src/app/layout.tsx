import "./globals.css";
import { Header } from "@/shared/ui";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div style={{ width: "90%", margin: "auto" }}>{children}</div>
      </body>
    </html>
  );
}
