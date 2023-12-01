import React, { useState } from "react";
import {
	Button,
	Card,
	CardContent,
	Grid,
	makeStyles,
	TextField,
	Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {},
}));

/**
 * Props passed to the @see ContactForm.
 */
interface IContactFormProps {
	/**
	 * Heading for the contact form.
	 */
	contactHeading: string;

	/**
	 * Direction to initiate contact.
	 */
	contactDirection: string;

	/**
	 * Label for the subject field.
	 */
	subjectLabel: string;

	/**
	 * Label for the send button.
	 */
	sendButtonLabel: string;
}

/**
 * Contact form.
 */
const ContactForm: React.FunctionComponent<IContactFormProps> = (
	props: IContactFormProps
) => {
	const classes = useStyles();

	const { contactHeading, contactDirection, subjectLabel, sendButtonLabel } =
		props;

	const to = "david.tomic11@gmail.com";
	const [subject, setSubject] = useState("");
	const [body, setBody] = useState("");

	const onSend = () => {
		window.open(
			`mailto:${to}?subject=${subject}&body=${body.replace(
				/(?:\r\n|\r|\n)/g,
				"%0D%0A"
			)}`
		);
		setSubject("");
		setBody("");
	};

	return (
		<Grid className={classes.root} container direction="column">
			<Grid item>
				<Typography variant="h6" gutterBottom>
					{contactHeading}
				</Typography>
			</Grid>
			<Grid item>
				<Card>
					<CardContent>
						<Grid container direction={"column"} spacing={3}>
							<Grid item>
								<Typography variant="body1" gutterBottom>
									{contactDirection}
								</Typography>
							</Grid>
							<Grid item>
								<TextField
									label={subjectLabel}
									variant={"outlined"}
									fullWidth
									value={subject}
									onChange={(e) => setSubject(e.target.value)}
								/>
							</Grid>
							<Grid item>
								<TextField
									variant={"outlined"}
									fullWidth
									multiline
									rows={10}
									value={body}
									onChange={(e) => setBody(e.target.value)}
								/>
							</Grid>
							<Grid item>
								<Button
									variant={"contained"}
									color={"secondary"}
									onClick={(e) => {
										e.preventDefault();
										onSend();
									}}
								>
									{sendButtonLabel}
								</Button>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};

export default ContactForm;
