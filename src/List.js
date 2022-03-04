import { Button, Paper } from '@material-ui/core';
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';


const List = ({ activity, date, time, id, delItem, handleCheck }) => {

  const clickHandler = () => {
    delItem(id)
  };

  
  return (
    <Paper className='list' elevation={10}>
        <div>
            <input
              type='checkbox'
              onChange={() => handleCheck(id)}

            />
            <label>
              <h3>{activity}</h3>
              <p>{date}</p>
              <p>{time}</p>
            </label>
        </div>
        <Button 
          style={{ marginLeft: "120px" }}
          onClick={clickHandler}
        >
          <DeleteIcon/>
        </Button>
        
    </Paper>
  );
};

export default List



