import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const Home = (props) => {
    const classes = useStyles();
    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" autoComplete label="King" variant="outlined" onChange={props.kingHandler} />
                <TextField id="outlined-basic" autoComplete label="Location" variant="outlined" onChange={props.locationHandler} />
                <TextField id="outlined-basic" autoComplete label="Type" variant="outlined" onChange={props.typeHandler} />
            </form>
            <input type="submit" value="Search" style={{ height: '50px'}} style={{marginRight:'20px'}} onClick={() => props.onRequestHandler()} />
            <input type="submit" value="Count" style={{ height: '50px' }} style={{marginRight:'20px'}} onClick={() => props.onRequestCountHandler()} />
        </div>
    )
}

export default Home;