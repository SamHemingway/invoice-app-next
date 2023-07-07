import Header from "@/components/Header/Header";
import SectionOverview from "@/components/SectionOverview/SectionOverview";
import InvoiceList from "@/components/InvoiceList/InvoiceList";
import { mainWrapper, layout } from "./page.css";

export default function Home() {
  return (
    <div className={layout}>
      <Header />
      <main className={mainWrapper}>
        <SectionOverview />
        <InvoiceList />
      </main>
    </div>
  );
}
