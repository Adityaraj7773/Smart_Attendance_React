import React from 'react'
import {Button} from '@mui/material';
import { Link } from 'react-router-dom';
function SelectOption() {
    const SelectOption = () => { 
        
      };
  return (
    <div>
    
      <Link to="/upload">
        <Button>Upload Attendance</Button>
      </Link>

      <Link to="/studentDetail">
        <Button>Upload Student Detail</Button>
      </Link>

      <Link to="/studentData">
        <Button>Student Data</Button>
      </Link>
 

    </div>
  )
}

export default SelectOption