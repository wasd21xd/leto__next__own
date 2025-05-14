
import Header from "@/components/HomeDesktop/header/Header";
import Place from "@/components/HomeDesktop/place/Place";
import Shedule from "@/components/HomeDesktop/shedule/Shedule";
import Food from "@/components/HomeDesktop/food/Food";
import Walks from "@/components/HomeDesktop/walks/Walks";
import Trips from "@/components/HomeDesktop/trips/Trips";
import Master from "@/components/HomeDesktop/master/Master";
import Art from "@/components/HomeDesktop/art/Art";
import Tg from "@/components/HomeDesktop/tg/Tg";
import Weeks from "@/components/HomeDesktop/weeks/Weeks";
import Tarif from "@/components/HomeDesktop/tarif/Tarif";
import Final from "@/components/HomeDesktop/final/Final";

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
