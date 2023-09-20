import React from 'react';
import { Box, Container } from "@mui/material";
import Input from "../../components/Input";
import "./mWStyle.css";

const InputDate = (props) => {
	
 
    return (
		<Container maxWidth="xs" align="center" sx={{ mt: 2, mb: 2 }} {...props}>
			<Input 	class="date_style"
				name="date_collection"
				type="date"
				variant="outlined"
			/>
		</Container>
    );
};

export default InputDate;