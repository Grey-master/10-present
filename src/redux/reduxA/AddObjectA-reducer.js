import { adminPresent } from "../../components/api/api";
import {car} from "../../components/api/api";


const IS_AUTH_ON = "IS-AUTH-ON";
const IS_AUTH_OFF = "IS-AUTH-OFF";
const SPINNER_ON = 'SPINNER-ON';
const SPINNER_OFF = 'SPINNER-OFF';

const InitialState = {
	objectA:[],
	isSpinner: false,
	isAuth:false
}

export const AddObjectAReducer = (state = InitialState, action) => {
	switch(action.type){
		
		case IS_AUTH_ON:{     //console.log('isAuth  >>>', action)
			return{
				...state,
				isAuth: action.isAuth
			}
		}
		case IS_AUTH_OFF:{
			return{
				...state, isAuth: false
			}
		}
		case SPINNER_ON:{
			return{
				...state,
				isSpinner: true
			}
		}
		case SPINNER_OFF:{
			return{
				...state,
				isSpinner: false
			}
		}


		default: return state;
	}
}


export const isAuthOn = (isAuth) => ({type:IS_AUTH_ON, isAuth})
export const isAuthOff = () => ({type: IS_AUTH_OFF});
export const spinnerOn = () => ({type: SPINNER_ON});
export const spinnerOff = () => ({type: SPINNER_OFF});



export const thunkAddObject = (id_object, id_object_users, title,street,house,url,miniatureUrl,price,date_collection) => {
		console.log('inputReducer  >>>', id_object, id_object_users, title,street,house,url,miniatureUrl,price,date_collection) 
	return (dispatch) => { 
		car.addDataCar(id_object, id_object_users, title,street,house,url,miniatureUrl,price,date_collection)	
	}
}
export const thunkAddUser = (id_user, name_user, avatar, login) => {
	console.log('inputReducerUser  >>>', id_user, name_user, avatar, login) 
	return (dispatch) => { 
		adminPresent.addUserA(id_user, name_user, avatar, login)	
	}
}
