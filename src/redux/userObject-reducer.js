import {userPresent} from '../components/api/api';

const SET_USERS_OBJECT = "SET-USERS-OBJECT";
const IS_AUTH_ON = "IS_AUTH_ON";
const IS_AUTH_OFF = "IS_AUTH_OFF";
const SPINNER_ON = 'SPINNER-ON';
const SPINNER_OFF = 'SPINNER-OFF';
const SET_IMAGE_OF_OBJECT = 'SET-IMAGE-OF-OBJECT';
const SET_IMAGE_OFF = 'SET-IMAGE-OFF';

const InitialState = {
	objects:[],
	image:[],
	isSpinner: false,
	isAuth: false
}

export const UserObjectReducer = (state = InitialState, action) => {
	switch(action.type){
		case SET_USERS_OBJECT:{
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
		case SET_IMAGE_OF_OBJECT:{
			let ImageObject = action.data.map((im)=>{  //console.log('ImageObject  >>>', action)
				return({
					id_img: im.id_img,
					img_of_object: im.img_of_object,
					url: im.url,
					name_of_img: im.name_of_img
				})
			})
			return{       
				...state,
				image: ImageObject,
				isAuth: false
			}
		}
		case SET_IMAGE_OFF:{
			return{       
				...state,
				image: [],
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

export const setChangeObject = (object) => ({type: SET_USERS_OBJECT, data: object});
export const isAuthOn = (isAuth) => ({type:IS_AUTH_ON, isAuth})
export const isAuthOff = () => ({type: IS_AUTH_OFF});
export const spinnerOn = () => ({type: SPINNER_ON});
export const spinnerOff = () => ({type: SPINNER_OFF});
export const set_image_of_object = (image) => ({type:SET_IMAGE_OF_OBJECT, data: image})
export const set_image_off = () => ({type:SET_IMAGE_OFF})

export const changeObject = (id_object) => { 
	return (dispatch) => {
		dispatch(spinnerOn())
		userPresent.idObject(id_object).then(response =>{  
			//console.log('responseOBJ  >>>', response.data)
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

export const changeImageOff = () => { 
	return (dispatch) => {
		dispatch(spinnerOn())
		userPresent.idImageOff().then(response =>{  
			//console.log('responseIMGOff  >>>', response.data)
				dispatch(set_image_off(response.data))
				dispatch(spinnerOff())
			
		})
	}
}

export const changeImage = (img_of_object) => { 
	return (dispatch) => {
		dispatch(spinnerOn())
		userPresent.idImage(img_of_object).then(response =>{  
			//console.log('responseIMG  >>>', response.data)
			if(response.data.length !== 0){
				dispatch(set_image_of_object(response.data))
				dispatch(spinnerOff())
			}else{
				dispatch(isAuthOn(true))
				setTimeout(()=>{dispatch(isAuthOff())},3000);
				dispatch(spinnerOff())
			}
		})
	}
}