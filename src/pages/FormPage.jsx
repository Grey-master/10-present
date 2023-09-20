import React, { useState } from "react";
import './FormPage.css';
import { useDispatch, useSelector} from "react-redux";
import Container from '@mui/material/Container';
import Input from "../components/Input";
import Form from "../components/Form";
import PrimeButton from "../components/PrimeButton";
import { useForm } from "react-hook-form";
import { thunkCheckoutUserName } from "../redux/formPage-reducer";
import { ThreeCirclesSpinner } from "../components/spinners/threeCirclesSpinner";
import { Navigate } from "react-router-dom";
import { thunkCheckoutUserA } from "../redux/reduxA/homeA-reducer";





		


const FormPage = (props) => {

	const { register, handleSubmit, formState:{errors, isValid} , reset } = useForm({ mode: "onBlur" });
	
	const dispatch = useDispatch();

	const onSubmit = (data) => {
		const login = data.login 	
		dispatch(thunkCheckoutUserName(login))
		dispatch(thunkCheckoutUserA(login))
		reset();
	  };
	const isAuth = useSelector(state => state.FormPageReducer.isAuth)
	const users = useSelector(state => state.FormPageReducer.users)
	const messageIsAuth = "Такого пользователя не существует!";

	
	
	return(
		
		<Container maxWidth="xs" align="center" sx={{mt:2, mb:2}} {...props}>
				{isAuth == true && <div className="error-message">{messageIsAuth}</div>}
				<ThreeCirclesSpinner/>
				
				<Form onSubmit={handleSubmit(onSubmit)}>
					<Input  name="login"
							label="Login"
							variant="outlined"
							placeholder="Input for digit you Phone"
							{...register(
								"login",
								{ // прописываем ошибки
								required: "Поле обязательное к заполнению",
								pattern:{ 
									value: /^[0-9]{4}$/,
									message: "Login должен содержать 4 цифры"
									}
								}
							)}
							error={!!errors.login}helperText={errors?.login?.message}
							// булево значение: если есть данные в поле login, тогда true
							// если нет объекта errors, если в "login" есть прописанные ошибки, тогда пишем message 
					/>
					
					<PrimeButton>Submit</PrimeButton>
				</Form>
					

				{users.map((u)=>{
					if(u.id_user !== "1"){return <Navigate key={u.id_user} to={'/home'} home={u}/>}
					if(u.id_user === "1"){return <Navigate key={u.id_user} to={'/home_a'}/>}
				})}
			
		</Container>
	)
};
export default FormPage;