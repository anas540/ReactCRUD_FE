
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import  { useState } from 'react';






const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  
}));


const CreateUser=() =>
{
    const [username ,setUsername] = useState([])
    const [password,setPassword]=useState([])
    const classes = useStyles();

    const handleUsername=(e)=>
    {
        setUsername(e.target.value);
    }
    const handlePassword=(e)=>
    {
        setPassword(e.target.value);
    }
    const createUser=()=>
    {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({'username':username,'password':password})
        };
        fetch('http://localhost:3000/user/register',requestOptions)
        .then(data => console.log(data));
         alert("User Created")
        setUsername('')
        setPassword('')
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
          type="password"
          variant="outlined"
          value={password}
          onChange={handlePassword} 
        />
        <br></br>
       <Button variant="contained" color="primary" onClick={createUser}>
  Create User
  
</Button>
</form>
</CardContent>
</Card>);
}
export default CreateUser;