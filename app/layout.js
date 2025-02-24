import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";

const jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={jakarta_sans.className}>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
