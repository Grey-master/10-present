import { Box, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';



const Title = (props) => {
	const {date_collection} = useParams();
	//console.log('dateLink1  >>>', date_collection)

const TitleHeader = () =>{ 
	if(props.users.length == 0){
		return ("Welcome!")
	}
	if(!date_collection){
		return(
			props.users.map((u)=><div key={u.id_user}>{u.name_user}, ваші пропозиції станом на:</div>)
		)
	}	
	if(date_collection.length === 10){
		return(
			props.users.map((u)=><div key={u.id_user}>{u.name_user}, ваші пропозиції станом на {date_collection}</div>)
			
		)
	}

}


	return(
		<Box sx={{ flexGrow: 5, display: 'flex' }} justifyContent="center">
			<Typography variant="h6">
				<div><TitleHeader/></div>
			</Typography>
		</Box>
	)
};
export default Title;