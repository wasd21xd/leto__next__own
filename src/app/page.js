"use client";

import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";

const HomeDesktop = dynamic(() => import("@/components/HomeDesktop/HomeDesktop"), {
    ssr: false,
});
const HomeMobile = dynamic(() => import("@/components/HomeMobile/HomeMobile"), {
    ssr: false,
});

export default function Home() {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    return isMobile ? <HomeMobile /> : <HomeDesktop />;
}
