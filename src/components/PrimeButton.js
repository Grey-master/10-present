import React from 'react';
import { Button } from '@mui/material';

const PrimeButton = ({children, props}) => {
	return(
		<Button type="submit"  fullWidth variant="contained" color="primary" sx={{mt:1.5}} {...props}>
			{children}	
		</Button>
	)
};
export default PrimeButton;