import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import banana from "../assets/bananaIcon.svg";
import drink from "../assets/drinkIcon.svg";
import candy from "../assets/candyIcon.svg";
import { Product } from '../model/Product';
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
        <Box sx={{p:15}}>
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
      sx={{ flexGrow: 1,bgcolor: "rgb(255, 255, 255)", display: 'flex',paddingBottom:"100px"}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs - Category"
        sx={{backgroundColor:"white",minWidth:"15%",alignItems:"flex-end",borderRight: 1, borderColor: 'divider',borderRadius:"inherit"}}
      >
        <Tab sx={{fontSize:"18px",height:"80px"}} 
            label="ALL"  
            {...a11yProps(0)}
        />

        <Tab sx={{fontSize:"18px",height:"120px"}}
            icon={<img src={banana}></img>}
            label="Fruit" {...a11yProps(1)}
        />
        
        <Tab sx={{fontSize:"18px",height:"120px"}} icon={<img src={drink}></img>} label="Dessert" {...a11yProps(2)}/>
        <Tab sx={{fontSize:"18px",height:"120px"}} icon={<img src={candy}></img>} label="Candy" {...a11yProps(2)}/>

      </Tabs>

      <TabPanel  value={value} index={0}>

        
          {Product.map((p) => {

            if (p.type !== "") {
              return (
                <Link className="product-link" to={`catalogue/${p.id}`} key={p.id}>
                  <ProductCard type={p.type} imgUrl={p.imgUrl} name={p.name} price={p.price}/>
                </Link>
              );
            }
            return null; 
          })}
      
      </TabPanel>

      <TabPanel  value={value} index={1}>

      {Product.map((p) => {

        if (p.type == "Fruit") {
          return (
            <Link className="product-link" to={`catalogue/${p.id}`} key={p.id}>
              <ProductCard type={p.type} imgUrl={p.imgUrl} name={p.name} price={p.price}/>
            </Link>
          );
        }
        return null; 
        })}
           
      </TabPanel>

      <TabPanel value={value} index={2}>

        {Product.map((p) => {

          if (p.type == "Dessert") {
            return (
              <Link className="product-link" to={`catalogue/${p.id}`} key={p.id}>
                <ProductCard type={p.type} imgUrl={p.imgUrl} name={p.name} price={p.price}/>
              </Link>
            );
          }
          return null; 
          })}
        
      </TabPanel>

      <TabPanel value={value} index={3}>

        {Product.map((p) => {

          if (p.type == "Candy") {
            return (
              <Link className="product-link" to={`catalogue/${p.id}`} key={p.id}>
                <ProductCard type={p.type} imgUrl={p.imgUrl} name={p.name} price={p.price}/>
              </Link>
            );
          }
          return null; 
          })}
        
      </TabPanel>
      
    </Box>
  );
}