// @TODO create & populate table, create links from items, change a tag to Link, sort by(change table to MUI X)

import { SpaceXData } from "../assets/Interfaces"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { useState } from "react";

interface LaunchTableProps {
    historicalLaunches: SpaceXData[];
  }

  const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const LaunchTable = ({ historicalLaunches }: LaunchTableProps) => {

    const [open, setOpen] = useState(false)
    const [selectedLaunch, setSelectedLaunch] = useState<SpaceXData>()

    const handleOpen = () => {
      setOpen(true);
    }

    const handleClose = () => {
      setOpen(false)
    }

  return (
    <>
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">Name: {selectedLaunch && selectedLaunch.name}</Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>Launch Date: {selectedLaunch && selectedLaunch.date_utc.toLocaleString()}</Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>Rocket ID: {selectedLaunch && selectedLaunch.rocket}</Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>Launchpad Id: {selectedLaunch && selectedLaunch.launchpad}</Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>Success: {selectedLaunch && selectedLaunch.success.toLocaleString()}</Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>Details: {selectedLaunch && selectedLaunch.details}</Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}><a href={selectedLaunch && selectedLaunch.links.article} target="blank">Read more...</a></Typography>
        </Box>
      </Modal>
    </div>


    <div id="scrollable-container">
    <TableContainer sx={{opacity: 0.94}} component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Launch Date</TableCell>
            <TableCell align="center">Rocket ID</TableCell>
            <TableCell align="center">Details</TableCell>
            <TableCell align="center">Info</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
                    {historicalLaunches.map((launch, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row" onClick={() => {console.log('test')}}>
                                {launch.name}
                            </TableCell>
                            <TableCell align="left">{launch.date_utc.toLocaleString()}</TableCell>
                            <TableCell align="left">{launch.flight_number || "N/A"}</TableCell>
                            <TableCell align="left">{launch.details || "No details available."}</TableCell>
                            <TableCell 
                                align="left"
                                sx={{cursor: 'pointer'}}
                                onClick={() => {
                                  setSelectedLaunch(launch)
                                  handleOpen()
                                  console.log(launch)
                                }}
                                >🛈</TableCell>
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