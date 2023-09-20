import React from "react";
import '../FormPage.css';
import { useForm} from "react-hook-form";
import Input from "../../components/Input";
import Form from "../../components/Form";
import { useDispatch, useSelector } from "react-redux";
import Container from '@mui/material/Container';
import { ThreeCirclesSpinner } from "../../components/spinners/threeCirclesSpinner";
import { Button } from "@mui/material";
import { thunkAddObject, thunkAddUser } from "../../redux/reduxA/AddObjectA-reducer";
import uniqid from 'uniqid';
import { useLocation } from 'react-router-dom';





export const AddUserPageA = (props) => {


	

	const { register, handleSubmit, formState:{errors, isValid} , reset } = useForm({ mode: "onBlur" });
	 
	const dispatch = useDispatch()

	const onSubmit=(data)=>{
		console.log('onSubmitUser  >>>',data)
		const id_user = uniqid();
		const name_user = data.name_user
		const avatar = data.avatar
		const login = data.login 
		//console.log('dataUsers  >>>', id_user,name_user, avatar, login)
		dispatch(thunkAddUser(id_user, name_user, avatar, login))
		reset()
	}


	return(
		
			<Container maxWidth="xs" align="center" sx={{mt:2, mb:2}} {...props}>
				<ThreeCirclesSpinner/>
				<Form onSubmit={handleSubmit(onSubmit)}>
					
						
						<Input 	label="name_user"
								name="name_user"
								variant="outlined"
								placeholder="Input name_user"
								{...register("name_user",{
									required: "обязательно к заполнению"	
								})}
								error={!!errors.name_user}
								helperText={errors?.name_user?.message}
						/>
						
						
					
					
						<Input 	label="avatar"
								name="avatar"
								variant="outlined"
								placeholder="Input avatar"
								{...register("avatar",{
									required: "обязательно к заполнению"	
								})}
								error={!!errors.avatar}
								helperText={errors?.avatar?.message}
						/>
						
						
					
						<Input 	label="login"
								name="login"
								variant="outlined"
								placeholder="Input login"
								{...register("login",{
									required: "обязательно к заполнению"	
								})}
								error={!!errors.login}
								helperText={errors?.login?.message}
						/>
						
					<Button variant="outlined" type="Submit">Push</Button>	
				</Form> 
			</Container>
)
};