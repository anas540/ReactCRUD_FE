
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import  { useState } from 'react';
import { useLocation } from "react-router-dom";
import {useEffect} from 'react';
import { useHistory } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  
}));


const UpdateUser=() =>
{
    const history = useHistory();
    const [username ,setUsername] = useState([])
    const [password,setPassword]=useState([])
    const [results,setResults]=useState([])
    const classes = useStyles();
    const location = useLocation();
    console.log(location.customNameData)

    useEffect(() => {
        fetch(`http://localhost:3000/user/${location.customNameData}`)
         .then(data=>data.json())
         .then(data=>
            {
                setUsername(data.username)
                setPassword(data.password)
            })
      },[]);


    const handleUsername=(e)=>
    {
        setUsername(e.target.value);
    }
    const handlePassword=(e)=>
    {
        setPassword(e.target.value);
    }

    const updateUser=()=>
    {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({'username':username,'password':password})
          };
        fetch(`http://localhost:3000/user/update/${location.customNameData}`,requestOptions)
        .then(data=>data.json())
        .then(data =>console.log(data));
        history.push("/display");
         
    }

    return(<Card className={classes.root} variant="outlined">
     <CardContent>
    <form className={classes.root} noValidate autoComplete="off">
         
         <TextField
          id="outlined-password-input"
          label="Username"
          type="text"
          variant="outlined"
          value={username}
          onChange={handleUsername}
        
        />
        <br></br>
   <TextField
          id="outlined-password-input"
          label="Password"
          type="text"
          variant="outlined"
          value={password}
          onChange={handlePassword} 
        />
        <br></br>
       <Button variant="contained" color="primary" onClick={updateUser}>
 Update User
  
</Button>
</form>
</CardContent>
</Card>);
}
export default UpdateUser;