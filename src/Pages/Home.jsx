// import Header from "../Components/Header";

import Hero from "../Components/Home/Hero";
import InstituteStats from "../Components/Home/InsState";
import Inter from "../Components/Home/Inter";
import Links from "../Components/Home/Links";
import News from "../Components/Home/News";
// import { UpcomingEvents } from "../Components/Home/UpEvent";


export default function Home() {





  return (
    <main className="">
      {/* <Header /> */}
     <Hero/>
     <News/>
     {/* <UpcomingEvents/> */}
     <InstituteStats/>
     <Inter/>
     <Links/>
    </main>
  );
}
