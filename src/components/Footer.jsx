import { AppBar, Box, Container, Typography } from "@mui/material";


export const Footer = (props) => {
	return(
		<AppBar position="static">
			<Container maxWidth="xl">
				<Box mt={2} mb={2} justifyContent="center">
					<Typography align="center"
						variant="body1"
						color="inherit"
					>© Codivyright by CIA-design 2010
					</Typography>
				</Box>
			</Container>
		</AppBar>
	)
};
export default Footer;