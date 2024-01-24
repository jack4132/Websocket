import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import CustomTable from './Table';
import CustomSlider from './Slider';
import { IData } from '../Model/model';


type TabPanelProps= {
  children?: React.ReactNode;
  index: string;
  value: string;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: string) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Layout:React.FC<{}> = () => {
    const [value, setValue] = React.useState('LEADERBOARD');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        // console.log(newValue)
        setValue(newValue);
    };
    return (
        <Box sx={{ width: '80%',margin:'auto' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab value={"LEADERBOARD"} label="LEADERBOARD" key={"LEADERBOARD"} {...a11yProps('Leaderboard')}/>
                    <Tab value={"SETTINGS"} label="SETTINGS"  key={"SETTINGS"} {...a11yProps('settings')}/>
                </Tabs>
            </Box>
                <CustomTabPanel value={value} index={"LEADERBOARD"} key={"LEADERBOARD"}>
                  <CustomTable />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={"SETTINGS"} key={"SETTINGS"}>
                  <CustomSlider/>
                </CustomTabPanel>
        </Box>
    );
};

export default Layout;