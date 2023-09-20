import  React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImageListItem from '@mui/material/ImageListItem';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { changeLink } from '../redux/tableUsersObject-reducer';
import { ThreeCirclesSpinner } from '../components/spinners/threeCirclesSpinner';
import { changeImage, changeObject,changeImageOff } from '../redux/userObject-reducer';


const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body1,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
  }));

  const ItemA = styled(Paper)(({ theme }) => ({
	backgroundColor: '#fff',
	...theme.typography.body1,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
  }));

export default function TableUsersObject(props) {
	const dispatch = useDispatch()
	const object = useSelector(state => state.TableUsersObjectReducer.objects)
	//console.log('objectOut  >>>', object)

	const users = useSelector(state => state.FormPageReducer.users)
	const idObjUs = users.map(u => u.id_user)
	//console.log('idObjUs  >>>', idObjUs)

	const {date_collection} = useParams();
	//console.log('dateLink  >>>', date_collection)

	useEffect (()=>{
		dispatch(changeLink(idObjUs, date_collection));
	}, []);

	
	const chooseObject = (any)=>{
		dispatch(changeObject(any))
		dispatch(changeImageOff("false"))
		dispatch(changeImage(any))
		
	}
	

	
	


  return (
    <Container maxWidth="lg" align="center" sx={{mt:2, mb:2}} {...props}>
		<ThreeCirclesSpinner/>
		{object.map((o)=>
			<Grid container spacing={2} sx={{mt:2}} key={o.id_object} alignItems="center">
				<Grid item xs={2}  >
				
					<ImageListItem sx={{ width: 100, height: 100 }}>
						<img 
							src={o.miniatureUrl}
							alt={o.title}
							loading="lazy"
						/>
					</ImageListItem>
    			
				</Grid>
				<Grid item xs={3} >
					<Item elevation={0}>
						<Link to={"/"+o.date_collection+"/"+o.id_object}> 
							<Button onClick={()=>{chooseObject(o.id_object)}}>
								{o.street} {o.house}
							</Button>
						</Link>
					</Item>
				</Grid>
				<Grid item xs={5}>
					<Item >{o.title}</Item>
				</Grid>
				<Grid item xs={2}>
					<Item>{o.price}</Item>
				</Grid>
			</Grid>
		)}
	</Container>
  );
}