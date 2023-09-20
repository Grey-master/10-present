import React from "react";
import { Routes , Route } from "react-router-dom";
import Layout  from "./Layout";
import FormPage from "./FormPage";
import UsersHome  from "./UsersHome";
import TableUsersObject from "./TableUsersObject";
import UsersObject from "./UsersObject";
import HomeA from "./admin/HomeA";
import TableUsersObjectA from "./admin/TableUsersObjectA";
import { AddObjectPageA } from "./admin/AddObjectPageA";
import ChangeObjectPageA from "./admin/ChangeObjectPageA";
import { AddUserPageA } from "./admin/AddUserPageA";
import { InputPhone } from "../components/middleWare/InputPhone";
import InputDate from "../components/middleWare/InputDate";
import ChangeUsersDataA from "./admin/ChangeUsersDataA";
import { AddObjectImageA } from "./admin/AddObjectImageA";
import NewObjectA from "./admin/NewObjectA";





function App() {
	return (
		<>
			<Routes>
				<Route path="/" element ={<Layout/>}>
					<Route index element={<FormPage />}/>
					<Route path="/home" element = {<UsersHome/>}/>
					<Route path="/:date_collection" element = {<TableUsersObject/>}/>
					<Route path="/:date_collection/:id_object" element = {<UsersObject/>}/>	
					<Route path="/home_a" element = {<HomeA/>}/>
					<Route path="/home_a/:id_user" element = {<TableUsersObjectA/>}/>
					<Route path="/home_a/:id_user/add_object" element = {<AddObjectPageA/>}/>
					<Route path="/home_a/:id_user/add_object/add_images" element = {<AddObjectImageA/>}/>
					<Route path="/home_a/:id_user/add_object/add_images/new_object" element = {<NewObjectA/>}/>
					<Route path="/home_a/:id_user/change_object/:id_object" element = {<ChangeObjectPageA/>}/>
					<Route path="/home_a/add_user" element = {<AddUserPageA/>}/>
					<Route path="/home_a/change_user/:id_user" element = {<ChangeUsersDataA/>}/>
					<Route path="/phone" element = {<InputPhone/>}/>
					<Route path="/date" element = {<InputDate/>}/>			
				</Route>
			</Routes>
		</>
	);
}

export default App;
