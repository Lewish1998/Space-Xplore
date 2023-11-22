import { SpaceXData } from "../assets/Interfaces"
import LatestLaunch from "./LatestLaunch";
import LaunchTable from "../components/LaunchTable";
import Title from "../components/Title";


interface LandingProps {
    launchData: SpaceXData;
    historicalLaunches: SpaceXData[]
}

const Landing = ({historicalLaunches}: LandingProps) => {
    
    return (
        <>
            <div className="landing-heading">
                <Title />
                <LaunchTable historicalLaunches={historicalLaunches}/>
            </div>
        </>
    );
};

export default Landing;
