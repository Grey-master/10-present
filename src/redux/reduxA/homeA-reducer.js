import { adminPresent } from "../../components/api/api";

const CHECKOUT_USER_NAME_A = "CHECKOUT-USER-NAME-A";
const USER_DELETE = 'USER-DELETE';
const IS_AUTH_ON = "IS-AUTH-ON";
const IS_AUTH_OFF = "IS-AUTH-OFF";
const SPINNER_ON = 'SPINNER-ON';
const SPINNER_OFF = 'SPINNER-OFF';


const InitialState = {
	usersA:[],
	isSpinner: false,
	isAuth:false
}

export const HomeAReducer = (state = InitialState, action) => {
	switch(action.type){
		case CHECKOUT_USER_NAME_A:{
			let UserDataA = action.data.map((u)=>{  //console.log('data  >>>', action)
				return({
					id_user: u.id_user,
					name_user: u.name_user,
					avatar: u.avatar,
					login: u.login,
					id: u.id
				})
			})
			return{
				...state,
				usersA: UserDataA,
				isAuth: false
			} 
		}
		case USER_DELETE:{  //console.log('id  >>>', action.id)
			const {id} = action;
			const {usersA} = state;
			const itemIndex = usersA.findIndex(res => res.id === id);  //ищем индекс изменяемого элемента
				console.log('itemIndex  >>>', itemIndex)
			const  nextUsersA = [
				...usersA.slice(0, itemIndex),  // копируем массив от 0-го элемента до комментария (не включая его)
				...usersA.slice(itemIndex +1)   // копируем массив от комментария (не включая его) до конца
			];
			return{
				...state,
				usersA: nextUsersA,
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


export const checkoutUserNameA = (data) => ({type:CHECKOUT_USER_NAME_A,data})
export const userDelete = (id) => ({type: USER_DELETE, id})

export const isAuthOn = (isAuth) => ({type:IS_AUTH_ON, isAuth})
export const isAuthOff = () => ({type: IS_AUTH_OFF});
export const spinnerOn = () => ({type: SPINNER_ON});
export const spinnerOff = () => ({type: SPINNER_OFF});

export const thunkCheckoutUserA = () => {
	return (dispatch) => {
		dispatch(spinnerOn())
		adminPresent.usersA().then(response=>{
			console.log("respUserA >>>", response.data)
			if(response.data.length !== 0){
				setTimeout(()=>{
					dispatch(checkoutUserNameA(response.data))
					dispatch(spinnerOff())
				},1000);
			}else{
				dispatch(isAuthOn(true))
				setTimeout(()=>{dispatch(isAuthOff())}, 3000); // через 3 сек. надпись "Error" пропадает.
				dispatch(spinnerOff())
			}
		})
	}
}


export const thunkDeleteUser = (id) => {
	console.log('deleteReducerUser  >>>', id) 
	return (dispatch) => { 
		try{adminPresent.deleteUserA(id)
			.then(response =>{
				console.log('User delete  >>>', response.data)
			})
		}
		catch(err){
				console.log('error  >>>', err)
		}
			
	}
}