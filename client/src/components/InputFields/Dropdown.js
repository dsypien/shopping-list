import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormHelperText } from '@mui/material';

export default function Dropdown(props) {
  const { name, label, value, options, helperText, handleChange } = props;

  const MenuProps = {
    PaperProps: {
      style: {
        width: "100%",
        maxWidth: "500px",
        margin: "0px -5px"
      },
    },
  };

  return (
    <div>
      <FormControl sx={{m: 0, width:"100%", minWidth: "500px", margin:"10px"}}>
        <InputLabel 
          id="demo-simple-select-autowidth-label">{label}</InputLabel>
        <Select
          id="demo-simple-select-helper-label"
          defaultValue=""
          style={{width:"100%"}}
          value={value}
          name={name}
          onChange={handleChange}
          autoWidth
          label={label}
          MenuProps={MenuProps}
        >
          {options.map( option => (
               <MenuItem 
                  key={option.value}
                  value={option.value}>
                  {option.text}      
               </MenuItem>
          ))} 
        </Select>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </div>
  );
}