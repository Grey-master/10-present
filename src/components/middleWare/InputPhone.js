import { Box, Container } from "@mui/material";
import React from "react";
import "./mWStyle.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";




export const InputPhone = (props) => {
  
	const [state, setState] = React.useState();

  return (
	<Container maxWidth="xs" align="center" sx={{mt:2, mb:2}} {...props}>
		<PhoneInput
			country={"ua"}
			value={state}
			onChange={setState}
		/>
	</Container>		
		
  );
};

