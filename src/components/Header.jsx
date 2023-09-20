import React from 'react';
import { AppBar, Toolbar, Container, Typography, Box, Tooltip, Avatar, IconButton, Menu, MenuItem} from "@mui/material";
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import { useDispatch, useSelector} from "react-redux";
import { FormPageReducer } from '../redux/formPage-reducer';
import Title from './Title';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


export const Header = (props) => {


const [anchorElUser, setAnchorElUser] = React.useState(null);

const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
};

const handleCloseUserMenu = () => {
    setAnchorElUser(null);
};

const users = useSelector(state => state.FormPageReducer.users) 
  
	return(
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					{/*Лого */}
					 <Box >
						<IconButton color="inherit" href="/">
							<OtherHousesIcon sx={{display: { xs: 'none', sm: 'flex' }}}/>
						</IconButton>
					 </Box>   
					{/* развернутое меню */} 
					<Container>
						<Title users={users}/>	
					</Container>     
 					{/* аватар */}
					<Box sx={{ flexGrow: 0 }}>         
						<Tooltip title="Open settings" >
						<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
							<Avatar  src="https://mui.com/static/images/avatar/2.jpg" />
						</IconButton>
						</Tooltip>
						<Menu
						sx={{ mt: '45px' }}
						id="menu-appbar"
						anchorEl={anchorElUser}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						open={Boolean(anchorElUser)}
						onClose={handleCloseUserMenu}
						>
						{settings.map((setting) => (
							<MenuItem key={setting} onClick={handleCloseUserMenu}>
							<Typography textAlign="center">{setting}</Typography>
							</MenuItem>
						))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>	
		</AppBar>
	)
};
export default Header;