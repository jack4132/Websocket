import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';
import { useGlobalContext } from '../Utilities/context';


const CustomSlider:React.FC<{}> = () => {
    const {limit,setLimit}=useGlobalContext()
    const handleChange = (event: Event, newValue: number | number[]) => {
    setLimit(newValue as number);
  };
    return (
        <Box>
            <Typography sx={{fontSize:20,fontWeight:'bold'}}>Limit</Typography>
            <Slider onChange={handleChange} step={1} min={0} max={10}  defaultValue={limit} aria-label="slider" valueLabelDisplay="auto"/>
        </Box>
    );
};

export default CustomSlider;