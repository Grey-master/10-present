import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ImageListItem from '@mui/material/ImageListItem';
import { ThreeCirclesSpinner } from "../components/spinners/threeCirclesSpinner";






const ItemA = styled(Paper)(({ theme }) => ({
	backgroundColor: '#fff',
	...theme.typography.h6,
	padding: theme.spacing(1),
	margin: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
	
  }));

const UsersObject = (props) => {
const dispatch = useDispatch();
const object = useSelector(state => state.UserObjectReducer.objects)
const image = useSelector(state => state.UserObjectReducer.image)
console.log('Image  >>>', image)


	return(
		<>
		<ThreeCirclesSpinner/>
		{object.map((o)=>
			<Container maxWidth="lg" align="center" key={o.id_object}
						sx={{ 	mt: 2, 
								mb: 2, 
								backgroundColor: '#DCDCDC', 
								p:1 
							}} {...props}
			>
					<Grid item xs={12} >
						<ItemA elevation={4}>{o.street} {o.house}</ItemA>
					</Grid>
					<Grid item xs={12}>
						<ItemA elevation={2}>{o.title}</ItemA>
					</Grid>
					<Grid item xs={12}>
						<ItemA elevation={2}>{o.price}</ItemA>
					</Grid>
				<Box spacing={2} 
						sx={{	backgroundColor: '#FFFACD', 
								p:1,
								width: 600, 
								height: 'auto'
							}}
				>
					{image.map(im=>
					<Grid item xs={12} key={im.id_img} >
						<ImageListItem sx={{ width: 'auto', m:2 }}>
							<img
								src={im.url}
								title={im.name_of_img}
							/>
						</ImageListItem>
					</Grid>
					)}
				</Box>
			</Container>
		)}
		</>
	)
};
export default UsersObject;