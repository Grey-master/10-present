import React from "react";
import { Button, Container, Typography } from "@mui/material";
import Form from "../../components/Form";
import FileInput from "../../components/middleWare/FileInput";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useData } from "../../components/DataContext";
import { ThreeCirclesSpinner } from "../../components/spinners/threeCirclesSpinner";




export const AddObjectImageA = (props) => {


	const {data, setValues} = useData();
	const {control, handleSubmit, errors} = useForm({
		defaultValues:{name: data.name}
	
	})


	const history = useNavigate();
	const onSubmit=(data)=>{ console.log('Step3A  >>>', data)
		history("new_object");
		setValues(data);
	}
	let navigate = useNavigate();
	const Preload = () =>{
		navigate(-1);
	}

	return(
		<Container maxWidth="xs" align="center" sx={{mt:2, mb:2}} {...props}>
			<ThreeCirclesSpinner/>
			
			<Form onSubmit={handleSubmit(onSubmit)}>
				
				<FileInput name="name"
							control={control}
				/>
				<Button variant="outlined" type="Submit">Next</Button>
			</Form>
			<Link onClick={Preload}>Назад</Link>

		</Container>
			
		
	)
};