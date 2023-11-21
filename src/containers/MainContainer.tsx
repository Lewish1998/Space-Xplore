import { SpaceXData } from "../assets/Interfaces";
import { useEffect, useState } from "react"
import Landing from "../pages/Landing"

const MainContainer = () => {

    const baseUrl : string = "https://api.spacexdata.com"
    const latestLaunchUrl : string = "https://api.spacexdata.com/v5/launches/latest?pretty=true"
    const historicalDataUrl: string = "https://api.spacexdata.com/v3/history"

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
    <>
        {latestLaunch && <Landing launchData={latestLaunch} historicalLaunches={historicalLaunches}/>}
    </>
  )
}

export default MainContainer