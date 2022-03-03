import { Fab, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';

const FormArea = ({ addItem }) => {
    const [item, setItem] = useState({
        activity: '', 
        date: '', 
        time: ''
    });

    const clickHandler = () => {
        addItem(item);
        setItem({
            activity: '', 
            date: '', 
            time: ''
        })
    }

    function changeHandler(e) {
        const {name, value} = e.target
        setItem(preValues => {
            return {
                ...preValues, 
                [name]: value,
            }
        })
    }
    

    return  (
        <Paper className="formArea">
            <form>
                <TextField 
                    style={{ marginTop: '10px' }}
                    onChange={changeHandler}
                    name='activity'
                    value={item.activity}
                    label='Activity'
                    fullWidth
                    autoComplete="off"
                    
                />
                <TextField 
                    style={{ marginTop: '20px' }}
                    onChange={changeHandler}
                    name='date'
                    type='date'
                    value={item.date}
                    fullWidth
                    autoComplete="off"
                />
                <TextField 
                    style={{ marginTop: '20px' }}
                    onChange={changeHandler}
                    name='time'
                    type='time'
                    value={item.time}
                    fullWidth
                    autoComplete="off"
                />
                <Fab
                    style={{ marginTop: '20px' }}
                    onClick={clickHandler}
                >
                    <AddIcon />
                </Fab>
            </form>
        </Paper>
    );
};

export default FormArea;


