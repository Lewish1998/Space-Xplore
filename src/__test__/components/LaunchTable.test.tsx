import { render, fireEvent, screen } from '@testing-library/react';
import LaunchTable from '../../components/LaunchTable';
import { SpaceXData } from '../../assets/Interfaces';

describe('LaunchTable', () => {
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
    ]

  it('opens modal on cell click', () => {
    const { getByText, } = render(
      <LaunchTable historicalLaunches={testHistoricalLaunches} />
    );
    // modal true if exists / false if not
    const cell = getByText('i');
    fireEvent.click(cell);

    const modal = screen.getByTestId('modal');

    expect(modal)

  });

  it('Closes modal when close button is clicked', () => {
    const { getByText } = render(
      <LaunchTable historicalLaunches={testHistoricalLaunches} />
    );

    const cell = getByText('i');
    fireEvent.click(cell);

    const modal = screen.getByTestId('modal');
    expect(modal)
    
    const close = screen.getByTestId('close-button');
    fireEvent.click(close);

    expect(!modal);
  })
});
