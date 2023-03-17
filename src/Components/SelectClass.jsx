import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React,{useState} from "react";
import Select from "react-select";
import { Link } from 'react-router-dom';

const SelectYear = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' }
  ];
  const SelectSemester = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' }

  ];

  const SelectBranch = [
    { value: 'CIVIL ENGINEERING', label: 'CE' },
    { value: 'CS-A', label: 'CS-A' },
    { value: 'CS-B', label: 'CS-B' },
    { value: 'EI', label: 'EI' },
    { value: 'ETC-A', label: 'ETC-A' },
    { value: 'ETC-B', label: 'ETC-B' },
    { value: 'IT-A', label: 'IT-A' },
    { value: 'IT-B', label: 'IT-A' },
    { value: 'MECHANICAL ENGINEERING', label: 'ME' }
  ];




  const SelectClass = () => { 
    const [year, setYear] = useState(1);
    const [semester,setSemester] = useState(1);
    const [branch,setBranch] = useState('ETC-B');

    const handleYearChange = (selectedOption1) => {
    setYear(selectedOption1);
    console.log(`Option selected:`, selectedOption1);
  };
   const handleSemesterChange = (selectedOption1) => {
    setSemester(selectedOption1);
    console.log(`Option selected:`, selectedOption1);
  };
  const handleBranchChange = (selectedOption1) => {
    setBranch(selectedOption1);
    console.log(`Option selected:`, selectedOption1);
  };
  
    
    return (
      <div className="container" >
       <div>   
        <h2>Select Year</h2>
        <div className="row">
            <Select  
              value={year}
              onChange={handleYearChange}
              options={SelectYear}
              
            />
          </div>

            <h2>Select Semester</h2>
        <div className="row">
            <Select  
              value={semester}
              onChange={handleSemesterChange}
              options={SelectSemester}
              
            />
        </div>

            <h2>Select Branch</h2>
        <div className="row">
            <Select  
              value={branch}
              onChange={handleBranchChange}
              options={SelectBranch}
              
            />
        </div>

        </div>
       <Link className="buttonss" to="/option" > 
       
        <Button variant="success" endIcon={<SendIcon className='arrow' />}>
  <p className="text">Continue</p>
</Button>
        </Link>
        </div>
    );
  }


export default SelectClass;