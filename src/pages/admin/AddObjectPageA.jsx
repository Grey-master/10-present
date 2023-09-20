import React from "react";
import '../FormPage.css';
import { useForm} from "react-hook-form";
import Input from "../../components/Input";
import Form from "../../components/Form";
import { useDispatch, useSelector } from "react-redux";
import Container from '@mui/material/Container';
import { ThreeCirclesSpinner } from "../../components/spinners/threeCirclesSpinner";
import { Button } from "@mui/material";
import { thunkAddObject } from "../../redux/reduxA/AddObjectA-reducer";
import uniqid from 'uniqid';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useData } from "../../components/DataContext";




export const AddObjectPageA = (props) => {
	
	
		const location = useLocation()
		const { user } = location.state
		const Id_user = user
		//console.log("ID_USER >>>", user);

	const history = useNavigate();
	const {data, setValues} = useData();

	const { register, handleSubmit, formState:{errors, isValid} , reset } = useForm({ 
		mode: "onBlur",
		defaultValues:{
			id_object_users : data.id_object_users,
			title : data.title,
			street : data.street,
			house : data.house,
			url : data.url,
			miniatureUrl : data.miniatureUrl,
			price : data.price,
			date_collection : data.date_collection,
		}, 
	});
	 
	const dispatch = useDispatch()

	const onSubmit=(data)=>{
			console.log('Step1A  >>>',data)
		const id_object_users = data.id_object_users
		const title = data.title
		const street = data.street
		const house = data.house
		const url = data.url
		const miniatureUrl = data.miniatureUrl
		const price = data.price
		const date_collection = data.date_collection 
		const id_object = uniqid();
			//console.log('brand,year  >>>',id_object, id_object_users, title,street,house,url,miniatureUrl,price,date_collection)
		dispatch(thunkAddObject(id_object, id_object_users, title,street,house,url,miniatureUrl,price,date_collection))
		reset()
		history("add_images");
		setValues(data);
	}

	

	return(
		<>
			<Container maxWidth="xs" align="center" sx={{mt:2, mb:2}} {...props}>
				<ThreeCirclesSpinner/>
				<Form onSubmit={handleSubmit(onSubmit)}>
					
						
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
						
						
					
					
						<Input 	label="title"
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
						
						<Input 	
								name="date_collection"
								type="date"
								variant="outlined"
								required pattern="\d{2}-\d{2}-\d{4}"
								{...register("date_collection",{
									required: "обязательно к заполнению",

								})}
								error={!!errors.date_collection}
								helperText={errors?.date_collection?.message}
						/>						
						
					

					<Button variant="outlined" type="Submit">Push</Button>	
				</Form> 
				
			</Container>
			
		</>
)
};