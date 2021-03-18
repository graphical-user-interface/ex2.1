import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
	Grid,
	Container,
	Paper,
	RadioGroup,
	FormControl,
	FormControlLabel,
	Radio,
	Typography
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		margin: theme.spacing(2),
		padding: theme.spacing(2, 1),
		textAlign: "center",
		color: theme.palette.text.secondary
	}
}))
export default function App() {
	const classes = useStyles()
	const [color, setColor] = useState("primary")
	const handleColor = (e) => {
		setColor(e.target.value)
	}
	return (
		<div className={classes.root}>
			<Container maxWidth='sm'>
				<Grid container>
					<Grid item xs={3}></Grid>
					<Grid item xs={6}>
						<Paper elevation={2} className={classes.paper}>
							<Typography
								variant='h2'
								component='h2'
								color={color}
								gutterBottom>
								Colors
							</Typography>
							<FormControl component='fieldset'>
								<RadioGroup
									aria-label='gender'
									name='Color'
									value={color}
									onChange={handleColor}>
									<FormControlLabel
										value='primary'
										control={<Radio />}
										label='First color'
									/>
									<FormControlLabel
										value='secondary'
										control={<Radio />}
										label='Second color'
									/>
								</RadioGroup>
							</FormControl>
						</Paper>
					</Grid>
					<Grid item xs={3}></Grid>
				</Grid>
			</Container>
		</div>
	)
}
