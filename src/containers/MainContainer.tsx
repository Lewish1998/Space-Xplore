import { SpaceXData } from "../assets/Interfaces";
import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "../pages/Landing"
import Navbar from "../components/Navbar";
import About from "../pages/About";
import LatestLaunch from "../pages/LatestLaunch";

const MainContainer = () => {

  interface LatestLaunchProps {
    latestLaunch: SpaceXData;

  }

    // const baseUrl : string = "https://api.spacexdata.com";
    const latestLaunchUrl : string = "https://api.spacexdata.com/v5/launches/latest?pretty=true";
    // const historicalDataUrl: string = "https://api.spacexdata.com/v3/history";
    const historicalDataUrl : string = "https://api.spacexdata.com/v4/launches";

    const [latestLaunch, setLatestLaunch] = useState<SpaceXData | null>(null)
    const [historicalLaunches, setHistoricalLaunches] = useState<SpaceXData[]>([])

    useEffect(() => {
        fetch(latestLaunchUrl)
        .then(res => res.json())
        .then((data: SpaceXData) => setLatestLaunch(data))
        .catch(error => console.error("Failed to fetch data.", error));
    }, []);

    useEffect(() => {
      fetch(historicalDataUrl)
      .then(res => res.json())
      .then((data: SpaceXData[]) => setHistoricalLaunches(data))
      .catch(error => console.error("Failed to fetch data.", error));
  }, []);


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={latestLaunch && <Landing launchData={latestLaunch} historicalLaunches={historicalLaunches}/>} />
        <Route path='/about' element={<About />} />
        <Route path='/latest-launch' element={latestLaunch && <LatestLaunch latestLaunch={latestLaunch} />} />
      </Routes>
    </Router>
  )
}

export default MainContainer

// {latestLaunch && <Landing launchData={latestLaunch} historicalLaunches={historicalLaunches}/>}
