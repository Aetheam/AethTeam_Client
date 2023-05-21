import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import InputBase from '@mui/material/InputBase';
import AethteamLogo from "../assets/AethTeamLogo.png"
import SearchIcon from '@mui/icons-material/Search';
import { NavBarButtons } from './items/navBarButtons';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 20,
  backgroundColor: alpha("#990909", 1),
  '&:hover': {
    backgroundColor: alpha("#990909", 1),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  height: "50%",
  display: "flex",
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  
  '& .MuiInputBase-input': {
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    
    [theme.breakpoints.up('md')]: {
      width: '30ch',
    },
  },
}));

export default function ButtonAppBar() {
  const [authButton, setAuthButton] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthButton(true);
    }
  }, []);


  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: "#990909"}}>
        <Box  sx={{ marginRight: "10%", marginLeft: "10%",  display: 'flex', marginTop: "auto", marginBottom: "auto"}}>
          <Typography  sx={{ flexGrow: 1, marginTop: "auto", marginBottom: "auto" }}>
            AethTeam Shop
          </Typography>
          
          {authButton ? (
              <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem onClick={handleClose} sx={{padding: "1vh"}}>Profile</MenuItem>
                <MenuItem onClick={handleClose} sx={{padding: "1vh"}} >My account</MenuItem>
              </Menu>
            </div>
            ) : (
              <>
                <Button color="inherit" sx={{padding: "1vh"}}>Login</Button>
                <Button color="inherit" sx={{padding: "1vh"}} >register</Button>
              </>
            )

          }
        </Box>
      </AppBar>
      <AppBar position="static" sx={{backgroundColor: "#312828"}}>
        <Box sx={{ marginRight: "10%", marginLeft: "10%", display: "flex"}}>
          <Typography  sx={{ flexGrow: 1, display: "flex" }}>
          <Box
            component="img"
            sx={{
              height: 50,
              width: 50,
            
            }}
            alt="The house from the offer."
            src={AethteamLogo}
          />
          <Search sx={{marginTop: "auto", marginBottom: "auto"}}>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
            <SearchIconWrapper >
              <SearchIcon />
              </SearchIconWrapper>
             
          </Search>
          </Typography>
          <NavBarButtons> Texture </NavBarButtons>  
          <NavBarButtons> plugins </NavBarButtons>  
          <NavBarButtons> Maps </NavBarButtons>        
        </Box>
      </AppBar>
    </Box>
  );
}
/**
 *  <Button color="inherit" sx={{padding: "1vh"}}>Textures</Button>
          <Button color="inherit" sx={{padding: "1vh"}}>Plugins</Button>
          <Button color="inherit" sx={{padding: "1vh"}} >Maps</Button>
 */