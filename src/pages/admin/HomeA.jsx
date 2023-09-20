import React from "react";
import { styled } from '@mui/material/styles';
import { Box, Container, Grid} from "@mui/material";
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { changeObjectOff, thunkCheckoutUsObjectA } from "../../redux/reduxA/userObjectA-reducer";
import { thunkDeleteUser, userDelete } from "../../redux/reduxA/homeA-reducer";
import { ThreeCirclesSpinner } from "../../components/spinners/threeCirclesSpinner";



const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
  }));

const HomeA = (props) => {

	const dispatch = useDispatch();

	const user = useParams();
	const current = user.id_user;
	   //console.log('User  >>>', current)

	const userA = useSelector(state => state.HomeAReducer.usersA)
	//console.log('userA  >>>', userA)
	//const isAuth = useSelector(state => state.HomeAReducer.isAuth)

	const setUsersObjects = (idUser) => {
		dispatch( changeObjectOff())
		dispatch(thunkCheckoutUsObjectA(idUser))
	}

	const handelDelete = (delIDUser) => {
				//console.log('delIDUser.id  >>>', delIDUser)
		const Us = window.confirm(`Удалить ${delIDUser} ?`)
		if(Us){
			dispatch(userDelete(delIDUser))
			dispatch(thunkDeleteUser(delIDUser))
		}
	}

	return(
		
			<Container  maxWidth="lg" align="center"  sx={{mt: 2, mb: 2, pt: 1, pb: 1, border: '1px solid grey', borderRadius: "5px"}} {...props}>
				<ThreeCirclesSpinner/>
				{userA.map((us,index)=>
				<div key={index}>
					<Box   sx={{ border: '1px dashed grey',borderRadius: "5px",  flexGrow: 1, justifyContent: "center", p:2, m: 2}}>
						<Grid container spacing={2} >
							<Grid item xs={1} >
								<Stack direction="row" spacing={2} sx={{justifyContent: "center"}}>
									<Avatar>{us.avatar}</Avatar>
								</Stack>
							</Grid>
							<Grid item xs={1}>
								<Item>{us.id_user}</Item>
							</Grid>
							<Grid item xs={2}>
								<Item>{us.login}</Item>
							</Grid>
							<Grid item xs={3}>
								<Item>{us.name_user}</Item>
							</Grid>
							<Grid item xs={5}>
								<Stack spacing={2} direction="row"sx={{justifyContent: "center"}}>
									<Grid item xs={4}>
										<Link to={us.id_user}>
											<Button variant="contained" onClick={()=>{setUsersObjects(us.id_user)}}>
												Objects
											</Button>
										</Link>
									</Grid>
									<Grid item xs={8}>
										<Link to={"change_user/"+us.id_user} state={{ user: current}}>
											<Button variant="outlined" onClick={()=>{}}>Изменить</Button>
										</Link>
										<Button variant="outlined" onClick={()=>{handelDelete(us.id)}}>Удалить</Button>
									</Grid>
								</Stack>
							</Grid>
						</Grid>
					</Box>
				</div>
				)}
				<Link to="add_user">
					<Button variant="contained">Добавить пользователя</Button>
				</Link>
			</Container>
			
		
	)
};
export default HomeA;