// @TODO create & populate table, create links from items, sort by 

import { SpaceXData } from "../assets/Interfaces"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface LaunchTableProps {
    historicalLaunches: SpaceXData[];
  }

const LaunchTable = ({ historicalLaunches }: LaunchTableProps) => {

  return (
    <>
    <div id="scrollable-container">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650}} size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Launch Date</TableCell>
            <TableCell align="left">Rocket ID</TableCell>
            <TableCell align="left">Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
                    {historicalLaunches.map((launch, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {launch.title}
                            </TableCell>
                            <TableCell align="right">input date{/*{launch.event_date_utc}*/}</TableCell>
                            <TableCell align="right">{launch.flight_number}</TableCell>
                            <TableCell align="right">{launch.details}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>  
    )
}

export default LaunchTable