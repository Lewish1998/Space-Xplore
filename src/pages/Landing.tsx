import { SpaceXData } from "../assets/Interfaces"
import LatestLaunch from "../components/LatestLaunch";
import LaunchTable from "../components/LaunchTable";
import AlertDialog from "../components/Test";

interface LandingProps {
    launchData: SpaceXData;
    historicalLaunches: SpaceXData[]
}

const Landing = ({launchData, historicalLaunches}: LandingProps) => {
    
    return (
        <>
            <div className="landing-heading">
                <h3>Welcome to</h3>
                <a href="/"><h1>Space-Xplore</h1></a>
                {/* <LatestLaunch launchData={launchData} /> */}
                <LaunchTable historicalLaunches={historicalLaunches}/>
                {/* <AlertDialog /> */}
            </div>
        </>
    );
};

export default Landing;
