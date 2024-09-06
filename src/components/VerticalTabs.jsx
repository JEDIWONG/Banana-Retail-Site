import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import banana from "../assets/bananaIcon.svg";
import drink from "../assets/drinkIcon.svg";
import { Product } from './Product';
import ProductCard from './productCard';
import { Link } from 'react-router-dom';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
    
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      
    >
      {value === index && (
        <Box sx={{p:10}}>
          <Typography className="shop-product-container">{children}</Typography>
        </Box>
      )}

    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1,bgcolor: "rgb(255, 239, 239,1);", display: 'flex',width:"100%",minHeight:"1000px"}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs - Category"
        sx={{backgroundColor:"white",width:"20%",alignItems:"flex-end",borderRight: 1, borderColor: 'divider',borderRadius:"inherit"}}
      >
        <Tab sx={{fontSize:"18px",height:"80px"}} 
            label="ALL"  
            {...a11yProps(0)}/>

        <Tab sx={{fontSize:"18px",height:"120px"}}
            icon={<img src={banana}></img>}
            label="Banana" {...a11yProps(1)}/>
        <Tab sx={{fontSize:"18px",height:"120px"}} icon={<img src={drink}></img>} label="Beverage" {...a11yProps(2)}/>
      </Tabs>

      <TabPanel  value={value} index={0}>

        
          {Product.map((p) => {

            if (p.type !== "") {
              return (
                <Link className="product-link" to={`catalogue/${p.id}`} key={p.id}>
                  <ProductCard type={p.type} imgUrl={p.imgUrl} name={p.name} price={p.price} />
                </Link>
              );
            }
            return null; 
            })}
        
        
            
      </TabPanel>

      <TabPanel  value={value} index={1}>
           
      </TabPanel>

      <TabPanel value={value} index={2}>
        
      </TabPanel>
      
    </Box>
  );
}