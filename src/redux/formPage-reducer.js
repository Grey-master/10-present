import { userPresent } from "../components/api/api";

const CHECKOUT_USER_NAME = "CHECKOUT-USER-NAME";
const IS_AUTH_ON = "IS-AUTH-ON";
const IS_AUTH_OFF = "IS-AUTH-OFF";
const SPINNER_ON = 'SPINNER-ON';
const SPINNER_OFF = 'SPINNER-OFF';


const InitialState = {
	users:[],
	isSpinner: false,
	isAuth:false
}

export const FormPageReducer = (state = InitialState, action) => {
	switch(action.type){
		case CHECKOUT_USER_NAME:{
			let UserData = action.data.map((u)=>{  //console.log('data  >>>', action)
				return({
					id_user: u.id_user,
					name_user: u.name_user,
					login: u.login
				})
			})
			return{
				...state,
				users: UserData,
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


export const checkoutUserName = (login) => ({type:CHECKOUT_USER_NAME, data:login})
export const isAuthOn = (isAuth) => ({type:IS_AUTH_ON, isAuth})
export const isAuthOff = () => ({type: IS_AUTH_OFF});
export const spinnerOn = () => ({type: SPINNER_ON});
export const spinnerOff = () => ({type: SPINNER_OFF});

export const thunkCheckoutUserName = (login) => {
	return (dispatch) => {
		dispatch(spinnerOn())
		userPresent.users(login).then(response=>{
			//console.log("resp >>>", response.data)
			if(response.data.length !== 0){
				setTimeout(()=>{
					dispatch(checkoutUserName(response.data))
					dispatch(spinnerOff())
				},10);
			}else{
				dispatch(isAuthOn(true))
				setTimeout(()=>{dispatch(isAuthOff())}, 3000); // через 3 сек. надпись "Error" пропадает.
				dispatch(spinnerOff())
			}
		})
	}
}
