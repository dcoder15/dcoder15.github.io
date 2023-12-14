import React from "react";
import {
	Avatar,
	Box,
	Divider,
	Grid,
	makeStyles,
	Typography,
	useTheme,
} from "@material-ui/core";
import { ContainerFactory } from "../logic/ContainerFactory";
import { AppStore } from "../stores/AppStore";
import { useStoreState } from "rfluxx-react";
import profile_picture from "../static/profile_picture.png";
import Particles from "react-tsparticles";

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: "106px",
	},
	avatar: {
		height: theme.spacing(35),
		width: theme.spacing(35),
	},
	divider: {
		margin: "20px 0",
		width: "100%",
	},
}));

/**
 * Props passed to the @see Intro.
 */
interface IIntroProps {}

/**
 * Introduction.
 */
const Intro: React.FunctionComponent<IIntroProps> = (props: IIntroProps) => {
	const classes = useStyles();
	const theme = useTheme();

	const appStore =
		ContainerFactory.getContainer().resolve<AppStore>("AppStore");
	const storeState = useStoreState(appStore);

	if (!storeState) {
		return null;
	}

	const { localized_text_content, darkMode } = storeState;

	return (
		<React.Fragment>
			<Particles
				options={{
					fpsLimit: 60,
					interactivity: {
						detectsOn: "window",
						events: {
							onHover: {
								enable: true,
								parallax: {
									enable: true,
									force: 50,
									smooth: 10,
								},
							},
						},
					},
					particles: {
						color: {
							value: darkMode
								? theme.palette.text.primary
								: theme.palette.text.secondary,
						},
						links: {
							color: {
								value: darkMode
									? theme.palette.text.primary
									: theme.palette.text.secondary,
							},
							distance: 200,
							enable: true,
							opacity: 0.1,
							width: 1.5,
						},
						move: {
							enable: true,
							outMode: "bounce",
							speed: 1,
						},
						number: {
							density: {
								enable: true,
								area: 4000,
								factor: 300,
							},
							value: 80,
						},
						opacity: {
							value: 0.3,
						},
						size: {
							random: true,
							value: 5,
						},
						twinkle: {
							lines: {
								enable: true,
								opacity: 0.6,
								frequency: 1,
							},
							particles: {
								enable: true,
								opacity: 0.6,
								frequency: 1,
							},
						},
					},
				}}
			/>
			<Box className={classes.root} id={"intro"}>
				<Grid
					container
					direction={"column"}
					alignItems={"center"}
					spacing={10}
				>
					<Grid item>
						<Grid container direction={"column"} spacing={2}>
							<Grid item>
								<Typography variant={"h2"} align={"center"}>
									{localized_text_content.name as string}
								</Typography>
							</Grid>
							<Grid item>
								<Typography variant={"h5"} align={"center"}>
									{localized_text_content.business as string}
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					<Grid item>
						<Avatar
							className={classes.avatar}
							alt={localized_text_content.name as string}
							src={profile_picture}
						/>
					</Grid>
					<Grid item>
						<Typography variant={"h6"} align={"center"}>
							{localized_text_content.introduction as string}
						</Typography>
					</Grid>
				</Grid>
			</Box>
			<Divider className={classes.divider} />
		</React.Fragment>
	);
};

export default Intro;
