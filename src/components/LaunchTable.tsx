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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>


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