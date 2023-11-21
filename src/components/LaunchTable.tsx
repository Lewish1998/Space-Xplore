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
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { useState } from "react";

interface LaunchTableProps {
    historicalLaunches: SpaceXData[];
  }

  const style = {
    position: 'absolute' as 'absolute',
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
    {/* Idea for modal */}
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">Name: {selectedLaunch && selectedLaunch.title}</Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>Launch Date: {selectedLaunch && selectedLaunch.event_date_utc.toLocaleString()}</Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>Rocket ID: {selectedLaunch && selectedLaunch.flight_number}</Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>Launchpad Id: {selectedLaunch && selectedLaunch.flight_number}</Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>Success: {selectedLaunch && selectedLaunch.flight_number}</Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>Details: {selectedLaunch && selectedLaunch.flight_number}</Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}><a href={selectedLaunch && selectedLaunch.links.article} target="blank">Read more...</a></Typography>
        </Box>
      </Modal>
    </div>


    <div id="scrollable-container">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650}} size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Launch Date</TableCell>
            <TableCell align="right">Rocket ID</TableCell>
            <TableCell align="right">Details</TableCell>
            <TableCell align="right">Info</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
                    {historicalLaunches.map((launch, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row" onClick={() => {console.log('test')}}>
                                {launch.title}
                            </TableCell>
                            <TableCell align="right">{launch.event_date_utc.toLocaleString()}</TableCell>
                            <TableCell align="right">{launch.flight_number || "No Rocket"}</TableCell>
                            <TableCell align="right">{launch.details}</TableCell>
                            <TableCell 
                                align="right"
                                sx={{cursor: 'pointer'}}
                                onClick={() => {
                                  setSelectedLaunch(launch)
                                  handleOpen()
                                  console.log(launch)
                                }}
                                >🛈</TableCell> {/*Placeholder image */}
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