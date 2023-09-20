import React, { useEffect }  from 'react';
import '../index.css';
import './FormPage.css';
import { Container,Typography} from '@mui/material';
import { useDispatch, useSelector} from "react-redux";
import { NavLink, useParams } from 'react-router-dom';
import {changeObject} from '../redux/userHome-reducer';
import PrimeButton from '../components/PrimeButton';
import { ThreeCirclesSpinner } from '../components/spinners/threeCirclesSpinner';


const UsersHome = (props) => {
const users = useSelector(state => state.FormPageReducer.users)
const user = users.map(u => u.id_user)
const object = useSelector(state => state.UserHomeReducer.objects)
//console.log('object  >>>', object)
const isAuth = useSelector(state => state.UserHomeReducer.isAuth)

// Выделяем уникальные элементы date_collection из массива
let result = object.reduce((accumulator, currentValue) => {  //собиратель элементов, текущий элемент массива
	if (accumulator.every(item => // если в массиве нет элементов похожих на текущий элемент...
		!(item.date_collection === currentValue.date_collection )
		))accumulator.push(currentValue); // то добавляем его в собиратель элементов
	return accumulator;  // и возвращаем уникальный элемент
  }, []);
  
  //console.log('result  >>>', result);

const dispatch = useDispatch();

useEffect (()=>{
	dispatch(changeObject(user));
}, []);

const messageIsAuth = "У вас нет предложенных объектов!";


	return(
		<>
			<Container maxWidth="xs" align="center" sx={{mt:2, mb:2}} {...props}>
			{isAuth == true && <div className="error-message">{messageIsAuth}</div>}
			<ThreeCirclesSpinner/>
				{result.map((o) =>
					<div key={o.id_object}>
						<NavLink to={"/"+o.date_collection} style={{ textDecoration: "none"}} >
							<PrimeButton><Typography variant="h6">{o.date_collection}</Typography></PrimeButton>
						</NavLink>
					</div>
				)}	
			</Container>	
		</>
	)
};
export default UsersHome;