import { SpaceXData } from "../assets/Interfaces"

interface LatestLaunchProps {
  latestLaunch: SpaceXData
}

const LatestLaunch = ({ latestLaunch }: LatestLaunchProps) => {

  function formatDate(date_utc: Date): { date: string; time: string } {
    const date = date_utc.toISOString().split('T')[0];
    const time = date_utc.toISOString().split('T')[1];
    
    return { date, time };
}

const formattedDate = formatDate(new Date(latestLaunch.date_utc));

  return (
    <div className="landing-launch">
        <h3>Latest Launch:</h3>
        <p>Launch Date: {formattedDate.date}</p> 
        <p>Launch Time: {formattedDate.time}</p>
        <p>Flight Number: {latestLaunch.flight_number}</p>
        <p>Rocket: {latestLaunch.rocket}</p>
    </div>
  )
}

export default LatestLaunch