import {userPresent} from '../components/api/api';

const SET_DATE_LINK = "SET-DATE-LINK";
const SPINNER_ON = 'SPINNER-ON';
const SPINNER_OFF = 'SPINNER-OFF';

const InitialState = {
	objects:[],
	isSpinner: false
}


export const TableUsersObjectReducer = (state = InitialState, action) => { //console.log('state2 >>>', state)
	switch(action.type){	
		case SET_DATE_LINK:{		
			let UserObjectA = action.data.map((u)=>{  //console.log('UserObject2  >>>', action)
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
				objects: UserObjectA
				
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


export const setDateLink = (obj2) => ({type:SET_DATE_LINK, data: obj2 });
export const spinnerOn = () => ({type: SPINNER_ON});
export const spinnerOff = () => ({type: SPINNER_OFF});

export const changeLink = (idObjUs,dateLink) => { 
	return (dispatch) => {
		dispatch(spinnerOn())
		userPresent.dateCollection(idObjUs,dateLink).then(response =>{  
			//console.log('resDateLink  >>>', response.data)
			if(response.data.length !== 0){
				dispatch(setDateLink(response.data))
				dispatch(spinnerOff())
			}
		})
	}
}