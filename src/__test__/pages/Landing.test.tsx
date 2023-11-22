import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Landing from "../../pages/Landing";
import { SpaceXData } from "../../assets/Interfaces";

const testLaunchData: SpaceXData = {
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

const testHistoricalLaunches: SpaceXData[] = [
    {
        rocket: 'Rocket',
        flight_number: 1,
        date_utc: new Date(),
        id: 'string',
        title: 'title string',
        event_date_utc: new Date(),
        details: 'details',
        article: 'article',
        links: {article: 'article2', reddit: 'reddit', wikipedia: 'wikipedia'},
        success: false,
        crew: [],
        ships: [],
        capsules: [],
        launchpad: 'launchpad',
        name: 'name'
    },
    {
        rocket: 'Rocket',
        flight_number: 1,
        date_utc: new Date(),
        id: 'string',
        title: 'title string',
        event_date_utc: new Date(),
        details: 'details',
        article: 'article',
        links: {article: 'article2', reddit: 'reddit', wikipedia: 'wikipedia'},
        success: false,
        crew: [],
        ships: [],
        capsules: [],
        launchpad: 'launchpad',
        name: 'name'
        },
]

describe('Landing Page', () => {
    it('Has a heading of Space-Xplore', () => {
      render(<Landing launchData={testLaunchData} historicalLaunches={testHistoricalLaunches}/>)

      const title = screen.getByRole('heading', {level: 1});
      const titleText = 'Space-Xplore';

      expect(title).toHaveTextContent(titleText)
    })
})