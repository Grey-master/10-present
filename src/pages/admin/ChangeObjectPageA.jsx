import React from "react";
import '../FormPage.css';
import { useForm} from "react-hook-form";
import Input from "../../components/Input";
import Form from "../../components/Form";
import { useDispatch, useSelector } from "react-redux";
import Container from '@mui/material/Container';
import { ThreeCirclesSpinner } from "../../components/spinners/threeCirclesSpinner";
import { Button, Typography } from "@mui/material";
import uniqid from 'uniqid';
import { useLocation } from 'react-router-dom';



	 



const ChangeObjectPageA = (props) => {
	
	const [state, setState] = React.useState();

	const location = useLocation()
			const { user } = location.state
			const { object } = location.state
			const Id_user = user
			const Id_object = object

			console.log("ID_USER >>>", Id_user, Id_object);
	
	const { register, handleSubmit, formState:{errors, isValid} , reset } = useForm({ mode: "onBlur" });
	
	
	return(
		<>
			
		
		<Container  maxWidth="xs" align="center" sx={{mt:2, mb:2}} {...props}>
			<ThreeCirclesSpinner/>
			<Typography variant="h5">Редактируем объект {Id_object} пользователя {Id_user}</Typography>
			<Form >
				
					
					<Input 	label="id_object_users"
							name="id_object_users"
							variant="outlined"
							
							value={Id_user}
							
							{...register("id_object_users",{
								required: "обязательно к заполнению"	
							})}
							error={!!errors.id_object_users}
							helperText={errors?.id_object_users?.message}
					/>
					
					
				
				
					<Input 	
							label="title"
							name="title"
							variant="outlined"
							placeholder="Input title"
							{...register("title",{
								required: "обязательно к заполнению"	
							})}
							error={!!errors.title}
							helperText={errors?.title?.message}
					/>
					
					
				
					<Input 	label="street"
							name="street"
							variant="outlined"
							placeholder="Input street"
							{...register("street",{
								required: "обязательно к заполнению"	
							})}
							error={!!errors.street}
							helperText={errors?.street?.message}
					/>
					
					
				
					<Input 	label="house"
							name="house"
							variant="outlined"
							placeholder="Input house"
							{...register("house",{
								required: "обязательно к заполнению"	
							})}
							error={!!errors.house}
							helperText={errors?.house?.message}
					/>
					
					
				
					<Input 	label="url"
							name="url"
							variant="outlined"
							placeholder="Input url"
							{...register("url",{
								required: "обязательно к заполнению"	
							})}
							error={!!errors.url}
							helperText={errors?.url?.message}
					/>
					
					
				
					<Input 	label="miniatureUrl"
							name="miniatureUrl"
							variant="outlined"
							placeholder="Input miniatureUrl"
							{...register("miniatureUrl",{
								required: "обязательно к заполнению"	
							})}
							error={!!errors.miniatureUrl}
							helperText={errors?.miniatureUrl?.message}
					/>
					
					
				
					<Input 	label="price"
							name="price"
							variant="outlined"
							placeholder="Input name price"
							{...register("price",{
								required: "обязательно к заполнению"	
							})}
							error={!!errors.price}
							helperText={errors?.price?.message}
					/>
					
					
				
					<Input 	label="date_collection"
							name="date_collection"
							variant="outlined"
							placeholder="Input date_collection"
							{...register("date_collection",{
								required: "обязательно к заполнению"	
							})}
							error={!!errors.date_collection}
							helperText={errors?.date_collection?.message}
					/>
					
				<Button variant="outlined" type="Submit">Push</Button>	
			</Form> 
		</Container>
)
		</>
	)
};
export default ChangeObjectPageA;