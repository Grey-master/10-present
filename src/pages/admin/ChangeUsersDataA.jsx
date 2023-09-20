import React from "react";
import '../FormPage.css';
import { useForm} from "react-hook-form";
import Input from "../../components/Input";
import Form from "../../components/Form";
import Container from '@mui/material/Container';
import { ThreeCirclesSpinner } from "../../components/spinners/threeCirclesSpinner";
import { Button, Typography } from "@mui/material";
import { useParams } from 'react-router-dom';



const ChangeUsersDataA = (props) => {
	
	const user = useParams();
	const Id_user = user.id_user;
	   console.log('Id_user  >>>', Id_user)
			
	
	const { register, handleSubmit, formState:{errors, isValid} , reset } = useForm({ mode: "onBlur" });
	
	
	return(
		<>
			
		
		<Container  maxWidth="xs" align="center" sx={{mt:2, mb:2}} {...props}>
			<ThreeCirclesSpinner/>
			<Typography variant="h5">Редактируем данные пользователя {Id_user}</Typography>
			<Form >
				
					
					<Input 	label="name_user"
							name="name_user"
							variant="outlined"
							{...register("name_user",{
								required: "обязательно к заполнению"	
							})}
							error={!!errors.name_user}
							helperText={errors?.name_user?.message}
					/>
					
					
				
				
					<Input 	
							label="avatar"
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
		</>
	)
};
export default ChangeUsersDataA;