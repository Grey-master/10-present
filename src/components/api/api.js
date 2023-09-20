import axios from "axios";


const instance = axios.create({
	baseURL:`http://localhost:3010/`
})


export const userPresent = {
	users(xxx){
		return(
			instance.get(`users?login=${xxx}`)
		)
	},
	objects(yyy){
		return(
			instance.get(`objects?id_object_users=${yyy}`)
		)
	},
	dateCollection(aaa,bbb){
		return(
			instance.get(`objects?id_object_users=${aaa}&date_collection=${bbb}`)
		)
	},
	idObject(ccc){
		return(
			instance.get(`objects?id_object=${ccc}`)
		)  
	},
	idImage(ooo){
		return(
			instance.get(`image?img_of_object=${ooo}`)
		)  
	},
	idImageOff(){
		return(
			instance.get(`image?img_of_object=0`)
		)  
	}
}
export const adminPresent = {
	usersA(){
		return(
			instance.get(`users`)
		)
	},
	objectsA(yyy){
		return(
			instance.get(`objects?id_object_users=${yyy}`)
		)
	},
	idObjectOff(){
		return(
			instance.get(`objects?id_object=0`)
		)  
	},
	addUserA(id_user, name_user, avatar, login){
		return(
			instance.post(`users`,{id_user, name_user, avatar, login})	
		)  
	},
	deleteUserA(id){
		return(
			instance.delete(`users/${id}`)
		)
	},
	deleteObjectA(id){
		return(
			instance.delete(`objects/${id}`)
		)
	}
}
export const car = {
	addDataCar(id_object, id_object_users, title,street,house,url,miniatureUrl,price,date_collection){
		return(
			instance.post(`objects`,{id_object, id_object_users, title,street,house,url,miniatureUrl,price,date_collection })	
		)  
	}	
}

