import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { SpaceXData } from "../../assets/Interfaces";
import LatestLaunch from "../../pages/LatestLaunch";

const testLatestLaunchData: SpaceXData = {
        rocket: 'Rocket',
        flight_number: 1,
        date_utc: new Date(),
        id: 'string',
        title: 'title string',
        event_date_utc: new Date(),
        details: 'details',
        article: 'article',
        links: {article: 'article2', reddit: 'reddit', wikipedia: 'wikipedia'},
        success: true,
        crew: [],
        ships: [],
        capsules: [],
        launchpad: 'launchpad',
        name: 'name'
    }

    describe('Latest Launch component', () => {
        it('Renders Latest Launch component with test data', () => {
          render(<LatestLaunch launchData={testLatestLaunchData} />);

          const title = screen.getByRole('heading');
          const titleText = 'Latest Launch'

          expect(title).toHaveTextContent(titleText)
        });
      });