import { SpaceXData } from "../assets/Interfaces";
import { useEffect, useState } from "react"
import Landing from "../pages/Landing"

const MainContainer = () => {

    const baseUrl : string = "https://api.spacexdata.com"
    const latestLaunchUrl : string = "https://api.spacexdata.com/v5/launches/latest?pretty=true"

    const [latestLaunch, setLatestLaunch] = useState<SpaceXData | null>(null)

    useEffect(() => {
        fetch(latestLaunchUrl)
        .then(res => res.json())
        .then((data: SpaceXData) => setLatestLaunch(data))
        .catch(error => console.error("Failed to fetch data.", error));
    }, []);

  return (
    <>
        <p>Welcome to</p>
        {latestLaunch && <Landing launchData={latestLaunch}/>}
    </>
  )
}

export default MainContainer