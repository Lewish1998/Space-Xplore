import { SpaceXData } from "../assets/Interfaces"
import LatestLaunch from "../components/LatestLaunch";
import LaunchTable from "../components/LaunchTable";

interface LandingProps {
    launchData: SpaceXData;
    historicalLaunches: SpaceXData[]
}

const Landing = ({launchData, historicalLaunches}: LandingProps) => {
    
    return (
        <>
            <div className="landing-heading">
                <h1>Space-Xplore</h1>
                {/* <LatestLaunch launchData={launchData} /> */}
                <LaunchTable historicalLaunches={historicalLaunches}/>
            </div>
        </>
    );
};

export default Landing;
