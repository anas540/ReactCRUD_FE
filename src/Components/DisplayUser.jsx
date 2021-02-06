import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import {useState,useEffect} from 'react';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



export default function DisplayUser() {
  const classes = useStyles();
  const [results,setResults]=useState([]);
  const history = useHistory();

  const displayUser=()=>
  {
    fetch('http://localhost:3000/user/')
        .then(data=>data.json())
        .then(data =>setResults(data));
       
  }
    useEffect(() => {
        
        displayUser();
      },[setResults]);

  const UpdateUser=(id)=>
  {
    history.push({
      pathname: '/update/:id',
      customNameData: id,
    });
    // history.push("/update/:id");
  }

  const deleteUser=(id)=>
  {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(`http://localhost:3000/user/delete/${id}`,requestOptions)
    .then((data)=>
      {
        console.log(data.json())
        displayUser();
    });
    
  }

  
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Password</TableCell>
            <TableCell align="right">Actions</TableCell>
            {/* <TableCell align="right">Update</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row._id}
              </TableCell>
              <TableCell align="right">{row.username}</TableCell>
              <TableCell align="right">{row.password}</TableCell>
              <TableCell align="right"> <Button variant="contained" color="secondary" onClick = {() => { deleteUser(row._id);} }>
  Delete
  
</Button><Button style={{marginLeft: "5px"}} variant="contained" color="primary" onClick = {() => { UpdateUser(row._id);} }>
  Update
  
</Button></TableCell>
{/* <TableCell align="right"> <Button variant="contained" color="primary" onClick = {() => { UpdateUser(row._id);} }>
  Update
  
</Button></TableCell> */}

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
