import { League_Spartan } from "next/font/google";
import "@/styles/reset.css.ts";
import "@/styles/global.css.ts";
import ThemeProvider from "@/contexts/ThemeProvider";
import Header from "@/app/components/Header/Header";
import { mainWrapper, layout } from "./page.css";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export const metadata = {
  title: "Invoices",
  description: "Invoices app created by Sam Hemingway",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={leagueSpartan.className}>
        <ThemeProvider>
          <div className={layout}>
            <Header />
            <main className={mainWrapper}>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
