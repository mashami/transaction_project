import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import Balance from "@/components/Balance/Balance";
import IncomeExpences from "@/components/IncomeExpences/IncomeExpences";
import TransactionList from "@/components/TransactionList/TransactionList";
import AddTransaction from "@/components/AddTransaction/AddTransaction";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpences />
        <TransactionList />
        <AddTransaction />
      </div>
    </main>
  );
}
