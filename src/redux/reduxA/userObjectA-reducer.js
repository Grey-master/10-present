import {adminPresent} from '../../components/api/api';

const SET_USERS_OBJECT_A = "SET-USERS-OBJECT-A";
const IS_AUTH_ON = "IS_AUTH_ON";
const IS_AUTH_OFF = "IS_AUTH_OFF";
const SPINNER_ON = 'SPINNER-ON';
const SPINNER_OFF = 'SPINNER-OFF';
const SET_IMAGE_OF_OBJECT_A = 'SET-IMAGE-OF-OBJECT-A';
const SET_OBJECT_OFF_A = 'SET-OBJECT-OFF-A';
const OBJECT_DELETE = 'OBJECT-DELETE';

const InitialState = {
	objectsA:[],
	imageA:[],
	isSpinner: false,
	isAuth: false
}

export const UserObjectAReducer = (state = InitialState, action) => {
	switch(action.type){
		case SET_USERS_OBJECT_A:{
			let UserObjectA = action.data.map((u)=>{  //console.log('UserObjectA  >>>', action)
				return({
					id_object: u.id_object,
					id_object_users: u.id_object_users,
					title: u.title,
					street: u.street,
					house: u.house,
					url: u.url,
					miniatureUrl: u.miniatureUrl,
					price: u.price,
					date_collection: u.date_collection,
					id: u.id
				})
			})
			return{       
				...state,
				objectsA: UserObjectA,
				isAuth: false
			}
		}
		case SET_IMAGE_OF_OBJECT_A:{
			let ImageObjectA = action.data.map((im)=>{  //console.log('ImageObjectA  >>>', action)
				return({
					id_img: im.id_img,
					img_of_object: im.img_of_object,
					url: im.url,
					name_of_img: im.name_of_img
				})
			})
			return{       
				...state,
				imageA: ImageObjectA,
				isAuth: false
			}
		}
		case SET_OBJECT_OFF_A:{
			return{       
				...state,
				objectsA: [],
				isAuth: false
			}
		}
		case OBJECT_DELETE:{  //console.log('id  >>>', action.id)
			const {id} = action;
			const {objectsA} = state;
			const itemIndex = objectsA.findIndex(res => res.id === id);  //ищем индекс изменяемого элемента
				console.log('itemIndexOBJ  >>>', itemIndex)
			const  nextObjectsA = [
				...objectsA.slice(0, itemIndex),  // копируем массив от 0-го элемента до комментария (не включая его)
				...objectsA.slice(itemIndex +1)   // копируем массив от комментария (не включая его) до конца
			];
			return{
				...state,
				objectsA: nextObjectsA,
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

export const setUsersObjectA = (object) => ({type: SET_USERS_OBJECT_A, data: object});
export const isAuthOn = (isAuth) => ({type:IS_AUTH_ON, isAuth})
export const isAuthOff = () => ({type: IS_AUTH_OFF});
export const spinnerOn = () => ({type: SPINNER_ON});
export const spinnerOff = () => ({type: SPINNER_OFF});
export const set_image_of_object_A = (image) => ({type:SET_IMAGE_OF_OBJECT_A, data: image})
export const set_Object_off_A = () => ({type:SET_OBJECT_OFF_A})
export const objectDelete = (id) => ({type: OBJECT_DELETE, id})

export const thunkCheckoutUsObjectA = (id_user) => { 
	return (dispatch) => {
		dispatch(spinnerOn())
		adminPresent.objectsA(id_user).then(response =>{  
			//console.log('responseOBJ_A  >>>', response.data)
			if(response.data.length !== 0){
				dispatch(setUsersObjectA(response.data))
				dispatch(spinnerOff())
			}else{
				dispatch(isAuthOn(true))
				setTimeout(()=>{dispatch(isAuthOff())},3000);
				dispatch(spinnerOff())
			}
		})
	}
}

export const changeObjectOff = () => { 
	return (dispatch) => {
		dispatch(spinnerOn())
		adminPresent.idObjectOff().then(response =>{  
			//console.log('responseIMGOff_A  >>>', response.data)
				dispatch(set_Object_off_A(response.data))
				dispatch(spinnerOff())
			
		})
	}
}

export const changeImage = (img_of_object) => { 
	return (dispatch) => {
		dispatch(spinnerOn())
		adminPresent.idImage(img_of_object).then(response =>{  
			//console.log('responseIMG_A  >>>', response.data)
			if(response.data.length !== 0){
				dispatch(set_image_of_object_A(response.data))
				dispatch(spinnerOff())
			}else{
				dispatch(isAuthOn(true))
				setTimeout(()=>{dispatch(isAuthOff())},3000);
				dispatch(spinnerOff())
			}
		})
	}
}

export const thunkDeleteObject = (id) => {
	console.log('deleteReducerObject  >>>', id) 
	return (dispatch) => { 
			try{adminPresent.deleteObjectA(id)
			.then(response =>{
				console.log('Object delete  >>>', response.data)
			})}
			catch(err){
				console.log('error  >>>', err)
			}	
		
	}
}