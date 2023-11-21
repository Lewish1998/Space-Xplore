import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}






// @TODO create & populate table, create links from items, change a tag to Link, sort by(change table to MUI X)

// import { SpaceXData } from "../assets/Interfaces"

// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import { useState } from "react";

// interface LaunchTableProps {
//     historicalLaunches: SpaceXData[];
//   }

// const LaunchTable = ({ historicalLaunches }: LaunchTableProps) => {

//     const [open, setOpen] = useState(false)

//     const handleClickOpen = () => {
//       setOpen(true);
//     }

//     const handleClose = () => {
//       setOpen(false)
//     }

//   return (
//     <>
//     <div id="scrollable-container">
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650}} size="small">
//         <TableHead>
//           <TableRow>
//             <TableCell>Name</TableCell>
//             <TableCell align="left">Launch Date</TableCell>
//             <TableCell align="left">Rocket ID</TableCell>
//             <TableCell align="left">Details</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//                     {historicalLaunches.map((launch, index) => (
//                             <Button onClick={handleClickOpen}>
//                         <TableRow key={index}>
//                             <TableCell component="th" scope="row">
//                                 {launch.title}
//                             </TableCell>
//                             <TableCell align="right">input date{/*{launch.event_date_utc}*/}</TableCell>
//                             <TableCell align="right">{launch.flight_number}</TableCell>
//                             <TableCell align="right">{launch.details}</TableCell>
//                         </TableRow>
//                         </Button>
//                     ))}
//                 </TableBody>
//       </Table>
//     </TableContainer>
//     </div>
//     </>  
//     )
// }

// export default LaunchTable