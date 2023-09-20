import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Container, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ImageListItem from '@mui/material/ImageListItem';
import { useData } from "../../components/DataContext";
import { ThreeCirclesSpinner } from "../../components/spinners/threeCirclesSpinner";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { changeObjectOff, thunkCheckoutUsObjectA } from "../../redux/reduxA/userObjectA-reducer";






const ItemA = styled(Paper)(({ theme }) => ({
	backgroundColor: '#fff',
	...theme.typography.h6,
	padding: theme.spacing(1),
	margin: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
	
  }));

const NewObjectA = (props) => {

	const [success, setSuccess] = useState(false);
	

	const {data} = useData();  //Получили сохраненные данные
	console.log('result  >>>', data)
			// храним значения обычных полей формы, если они не являются файлами
	const entries = Object.entries(data).filter((entry)=>entry[0] !== "name") 
	// храним значения файлов
	const {name} = data; //console.log('file_data  >>>', data)

	const formData = new FormData();
	// Отследим имя и размер файлов
	// if(data.name){
	// 	data.name.forEach((file)=>{
	// 		formData.append("name", file, file.name);
	// 	});
	// }

	// Так же отследим обычные данные
    entries.forEach((entry) => {    
		formData.append(entry[0], entry[1]);
	  });

	// Переберем все данные и выведем результаты в консоль
	const parameters = entries.map((entry)=> entry[1])
	console.log('parameters  >>>', parameters)

	// const file = data.name.map((f)=> f.size)
	//console.log('file  >>>', file) 
  




const dispatch = useDispatch();
const object = useSelector(state => state.UserObjectReducer.objects)
const image = useSelector(state => state.UserObjectReducer.image)
//console.log('Image  >>>', image)


	const Preload = () =>{
		dispatch( changeObjectOff())
		dispatch(thunkCheckoutUsObjectA(parameters[0]))	
	}


	return(
		<>
		<ThreeCirclesSpinner/>
		
			<Container maxWidth="lg" align="center" key="{o.id_object}"
						sx={{mt: 2,mb: 2, backgroundColor: '#DCDCDC', p:1 }} {...props}>
				{entries.map((p, index) =>
					<div key={index}>
						<Grid item xs={12} >
							<ItemA elevation={4}>{p[1]}</ItemA>
						</Grid>
					</div>
				)}
						
						<Box spacing={2} sx={{backgroundColor: '#FFFACD',p:1,width: 600,height: 'auto'}}>
						
							<Grid item xs={12} key="index" >
								<ImageListItem sx={{ width: '300px', m:2 }}>
									<img
										src="{im.url}"
										title="{im.name_of_img}"
										/>
								</ImageListItem>
							</Grid>
						
						</Box>
						
							
								<Link to={`/home_a`}>
									<Button variant="outlined" type="Submit" onClick={Preload}>
										Next
									</Button>
								</Link>
							
						
						
			</Container>
			
		</>
	)
};
export default NewObjectA;