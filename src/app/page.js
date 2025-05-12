import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header/Header";
import Place from "@/components/place/Place";
import Shedule from "@/components/shedule/Shedule";
import Food from "@/components/food/Food";
import Walks from "@/components/walks/Walks";
import Trips from "@/components/trips/Trips";
import Master from "@/components/master/Master";
import Art from "@/components/art/Art";
import Tg from "@/components/tg/Tg";
import Weeks from "@/components/weeks/Weeks";
import Tarif from "@/components/tarif/Tarif";
import Final from "@/components/final/Final";

export default function Home() {
  return (
   <div className='App'>
        <Header />
       <Place />
         <Shedule />
         <Food />
            <Walks />
            <Trips />
            <Master />
            <Art />
            <Tg />
            <Weeks />
            <Tarif />
            <Final />
   </div>
  );
}
