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
        it('Renders Latest Launch component with test data and checks title', () => {
          // Ideally change render to a render before all (?)
          render(<LatestLaunch latestLaunch={testLatestLaunchData} />);

          const title = screen.getByRole('heading');
          const titleText = 'Latest Launch'

          expect(title).toHaveTextContent(titleText)
        });

        // TBC
        // it('Correctly formats and displays the date', () => {
        //   render(<LatestLaunch latestLaunch={testLatestLaunchData} />);
          
        //   const launchDate = screen.getByText("Launch Date:/")
        //   const date = launchDate.textContent;
        //   const expectedDate = new Date("2006-03-24T22:30:00.000Z")

        //   expect(date).toContain(expectedDate)
        // })
      });