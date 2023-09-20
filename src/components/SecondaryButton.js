import React from 'react';
import { Button } from '@mui/material';

const SecondaryButton = ({children, props}) => {
	return(
		<Button type="submit"  fullWidth variant="contained" color="secondary" sx={{mt:1.5}} {...props}>
			{children}	
		</Button>
	)
};
export default SecondaryButton;