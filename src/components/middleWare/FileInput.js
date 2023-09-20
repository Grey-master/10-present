import { CloudUpload, InsertDriveFile } from "@mui/icons-material";
import { List, ListItem, ListItemIcon, ListItemText, Paper, outlinedInputClasses } from "@mui/material";
import React from "react";
import {styled} from '@mui/material';
import Dropzone from "react-dropzone";
import { Controller } from "react-hook-form";

const useStyles = styled((theme)=>({
	root: {
		background: "#eee ",
		textAlign: 'center',
		cursor: 'pointer',
		color: "#333",
		padding: "10px",
		marginTop: "20px"
	},
	icon:{
		marginTop: "16px",
		color: "#888",
		fontSize: "42px"
	}
}))


const FileInput = ({control,name}) => {

	const styles = useStyles()

	return( 
		<Controller
			control={control}
			name="name"
			defaultValue={[]}
			render={({ field: { onChange, onBlur, value }}) => (
			<>
				<Dropzone onDrop={onChange}>
					{
						({ getRootProps, getInputProps})=>(
							<Paper className={styles.root} 	variant="outlined"
									{...getRootProps()}
							>
								<CloudUpload/>
								<input name={name}
										onBlur={onBlur}
										{...getInputProps()}
								/>
								<p>Drag `n` drop files here, on click to select files</p> 
							</Paper>
						)	
					}
				</Dropzone>
				<List>
					{
						value.map((f, index)=>(
							<ListItem key={index} >
								<ListItemIcon className={styles.icon}>
									<InsertDriveFile/>
								</ListItemIcon>
								<ListItemText primary={f.name} secondary={f.size}></ListItemText>
							</ListItem>
						))
					}
				</List>
			</>
        )}
      />
	)
};
export default FileInput;