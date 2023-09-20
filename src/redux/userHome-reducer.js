import {userPresent} from '../components/api/api';

const SET_CHANGE_OBJECT = "SET-CHANGE-OBJECT";
const IS_AUTH_ON = "IS_AUTH_ON";
const IS_AUTH_OFF = "IS_AUTH_OFF";
const SPINNER_ON = 'SPINNER-ON';
const SPINNER_OFF = 'SPINNER-OFF';

const InitialState = {
	objects:[],
	isSpinner: false,
	isAuth: false
}

export const UserHomeReducer = (state = InitialState, action) => {
	switch(action.type){
		case SET_CHANGE_OBJECT:{
			let UserObject = action.data.map((u)=>{  //console.log('UserObject  >>>', action)
				return({
					id_object: u.id_object,
					id_object_users: u.id_object_users,
					title: u.title,
					street: u.street,
					house: u.house,
					url: u.url,
					miniatureUrl: u.miniatureUrl,
					price: u.price,
					date_collection: u.date_collection
				})
			})
			return{       
				...state,
				objects: UserObject,
				isAuth: false
			}
		}
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

export const setChangeObject = (obj) => ({type: SET_CHANGE_OBJECT, data: obj});
export const isAuthOn = (isAuth) => ({type:IS_AUTH_ON, isAuth})
export const isAuthOff = () => ({type: IS_AUTH_OFF});
export const spinnerOn = () => ({type: SPINNER_ON});
export const spinnerOff = () => ({type: SPINNER_OFF});

export const changeObject = (id_user) => { 
	return (dispatch) => {
		dispatch(spinnerOn())
		userPresent.objects(id_user).then(response =>{  
			//console.log('response  >>>', response.data)
			if(response.data.length !== 0){
				dispatch(setChangeObject(response.data))
				dispatch(spinnerOff())
			}else{
				dispatch(isAuthOn(true))
				setTimeout(()=>{dispatch(isAuthOff())},3000);
				dispatch(spinnerOff())
			}
		})
	}
}