import  React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImageListItem from '@mui/material/ImageListItem';
import { Link, useParams } from 'react-router-dom';
import { ThreeCirclesSpinner } from '../../components/spinners/threeCirclesSpinner';
import { changeImage, changeImageOff, changeObject } from '../../redux/userObject-reducer';
import Typography from '@mui/material/Typography';
import { objectDelete, thunkCheckoutUsObjectA, thunkDeleteObject } from '../../redux/reduxA/userObjectA-reducer';



const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === '#fff',
	...theme.typography.body1,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
  }));


export default function TableUsersObjectA(props) {
	
	const dispatch = useDispatch()

	const user = useParams();
	const current = user.id_user;
	   //console.log('User  >>>', current)

	const objectA = useSelector(state => state.UserObjectAReducer.objectsA)
	//const object = useSelector(state => state.TableUsersObjectReducer.objects)
	
	const chooseObject = (any)=>{
		dispatch(changeObject(any))
		dispatch(changeImageOff("false"))
		dispatch(changeImage(any))	
	}

	const handelDelete = (delIdObject) => {
					//console.log('delIdObject.id  >>>', delIdObject)
		const Del = window.confirm(`Вы действительно хотите удалить объект ${delIdObject} ?`)
		if(Del){
			dispatch(objectDelete(delIdObject))
			dispatch(thunkDeleteObject(delIdObject))
		}
		
	}

  return (

    <Container maxWidth="lg" align="center" sx={{mt:2, mb:2}} {...props}>
		<ThreeCirclesSpinner/>
		<Typography variant="h5">Объекты пользователя {current}</Typography>
		{objectA.map((obj,index) =>
				<div key={index}>
				
				<Grid container spacing={2} sx={{mt:2}}  alignItems="center">
					<Grid item xs={2}  >
						<ImageListItem sx={{ width: 100, height: 100 }} >
							<img
								src={obj.miniatureUrl}
								alt={obj.title}
							/>
						</ImageListItem>
					</Grid>
					<Grid item xs={1}>
						<Item>{obj.id}</Item>
					</Grid>
					<Grid item xs={3}>
						<Item >{obj.street} {obj.house}</Item>
					</Grid>
					<Grid item xs={2}>
						<Item>{obj.date_collection}</Item>
					</Grid>
					<Grid item xs={4}>
						<Stack spacing={2} direction="row"sx={{justifyContent: "center"}}>
							<Grid item xs={4}>
								<Link to={"/"+obj.date_collection+"/"+obj.id_object}>
									<Button variant="contained"
											onClick={()=>{chooseObject(obj.id_object)}}>
										Смотреть
									</Button>
								</Link>
							</Grid>
							<Grid item xs={8}>
								<Link to={"change_object/"+ obj.id_object} state={{ user: current, object: obj.id_object }}>
									<Button variant="outlined">Изменить</Button>
								</Link>
								<Button variant="outlined" onClick={()=>{handelDelete(obj.id)}}>Удалить</Button>
							</Grid>
						</Stack>
					</Grid>
				</Grid>
				</div>
		)}
		<Link to="add_object" state={{ user: current }}>
			<Button variant="contained">Добавить объект</Button>
		</Link>
	</Container>
  );
}