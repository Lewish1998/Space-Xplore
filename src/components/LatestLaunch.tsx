import { SpaceXData } from "../assets/Interfaces"

interface TestProps {
  launchData: SpaceXData
}

const LatestLaunch = ({ launchData }: TestProps) => {

  function formatDate(date_utc: Date): { date: string; time: string } {
    const date = date_utc.toISOString().split('T')[0];
    const time = date_utc.toISOString().split('T')[1];
    
    return { date, time };
}

const formattedDate = formatDate(new Date(launchData.date_utc));

  return (
    <div className="landing-launch">
        <h3>Latest Launch:</h3>
        <p>Launch Date: {formattedDate.date}</p> 
        <p>Launch Time: {formattedDate.time}</p>
        <p>Flight Number: {launchData.flight_number}</p>
        <p>Rocket: {launchData.rocket}</p>
    </div>
  )
}

export default LatestLaunch