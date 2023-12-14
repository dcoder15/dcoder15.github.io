import React from "react";
import { Box, Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import { ContainerFactory } from "../logic/ContainerFactory";
import { AppStore } from "../stores/AppStore";
import { useStoreState } from "rfluxx-react";
import MilestonesContainer from "../components/MilestonesContainer";
import Milestone from "../components/Milestone";
import IconAndText from "../components/IconAndText";
import { ReactComponent as Fundamentals } from "../static/fundamentals.svg";
import { ReactComponent as Associate } from "../static/associate.svg";
import SvgIcon from "@material-ui/core/SvgIcon";
import {
	Bootstrap,
	Cplusplus,
	Csharp,
	CssThree,
	DotNet,
	Gnubash,
	Html5,
	Java,
	Javascript,
	Jquery,
	Linux,
	Macos,
	MaterialUi,
	Microsoftsqlserver,
	Mysql,
	Oracle,
	Powershell,
	ReactJs,
	Spring,
	Typescript,
	Windows,
} from "@icons-pack/react-simple-icons";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiGrid-spacing-xs-3 > .MuiGrid-item": {
			padding: "11px",
		},
	},
	divider: {
		margin: "20px 0",
		width: "100%",
	},
	icon: {
		paddingBottom: "0 !important",
	},
	text: {
		padding: "0px 5px !important",
	},
	customIcon: {
		height: 50,
		width: 50,
	},
}));

/**
 * Props passed to the @see Competences.
 */
interface ICompetencesProps {}

/**
 * Competences.
 */
const Competences: React.FunctionComponent<ICompetencesProps> = (
	props: ICompetencesProps
) => {
	const classes = useStyles();

	const appStore =
		ContainerFactory.getContainer().resolve<AppStore>("AppStore");
	const storeState = useStoreState(appStore);

	if (!storeState) {
		return null;
	}

	const { localized_text_content } = storeState;

	return (
		<React.Fragment>
			<Box className={classes.root} id={"competences"}>
				<Grid container direction={"column"}>
					<Grid item>
						<Typography variant={"h6"} gutterBottom>
							{
								localized_text_content.competencesHeading as string
							}
						</Typography>
					</Grid>
					<Grid item>
						<MilestonesContainer>
							<Milestone
								heading={
									localized_text_content.certificationsHeading as string
								}
								childrenFlexDirection={"row"}
							>
								<IconAndText
									classes={{
										icon: classes.icon,
										text: classes.text,
									}}
									icon={
										<SvgIcon className={classes.customIcon}>
											<Fundamentals />
										</SvgIcon>
									}
									text={"az-900"}
									flexDirection={"column"}
									itemsAlignment={"center"}
								/>
								<IconAndText
									classes={{
										icon: classes.icon,
										text: classes.text,
									}}
									icon={
										<SvgIcon className={classes.customIcon}>
											<Associate />
										</SvgIcon>
									}
									text={"az-204"}
									flexDirection={"column"}
									itemsAlignment={"center"}
								/>
							</Milestone>
							<Milestone
								heading={
									localized_text_content.programmingLanguagesHeading as string
								}
								childrenFlexDirection={"row"}
							>
								<IconAndText
									classes={{
										icon: classes.icon,
										text: classes.text,
									}}
									icon={<Cplusplus size={50} />}
									text={"C++"}
									flexDirection={"column"}
									itemsAlignment={"center"}
								/>
								<IconAndText
									classes={{
										icon: classes.icon,
										text: classes.text,
									}}
									icon={<Java size={50} />}
									text={"Java"}
									flexDirection={"column"}
									itemsAlignment={"center"}
								/>
								<IconAndText
									classes={{
										icon: classes.icon,
										text: classes.text,
									}}
									icon={<Csharp size={50} />}
									text={"C#"}
									flexDirection={"column"}
									itemsAlignment={"center"}
								/>
								<IconAndText
									classes={{
										icon: classes.icon,
										text: classes.text,
									}}
									icon={<Javascript size={50} />}
									text={"JavaScript"}
									flexDirection={"column"}
									itemsAlignment={"center"}
								/>
								<IconAndText
									classes={{
										icon: classes.icon,
										text: classes.text,
									}}
									icon={<Typescript size={50} />}
									text={"TypeScript"}
									flexDirection={"column"}
									itemsAlignment={"center"}
								/>
								<IconAndText
									classes={{
										icon: classes.icon,
										text: classes.text,
									}}
									icon={<CssThree size={50} />}
									text={"CSS"}
									flexDirection={"column"}
									itemsAlignment={"center"}
								/>
								<IconAndText
									classes={{
										icon: classes.icon,
										text: classes.text,
									}}
									icon={<Html5 size={50} />}
									text={"HTML"}
									flexDirection={"column"}
									itemsAlignment={"center"}
								/>
							</Milestone>
							<Milestone
								heading={
									localized_text_content.frameworksAndLibrariesHeading as string
								}
								childrenFlexDirection={"row"}
							>
								<IconAndText
									classes={{
										icon: classes.icon,
										text: classes.text,
									}}
									icon={<DotNet size={50} />}
									text={".NET"}
									flexDirection={"column"}
									itemsAlignment={"center"}
								/>
								<IconAndText
									classes={{
										icon: classes.icon,
										text: classes.text,
									}}
									icon={<Spring size={50} />}
									text={"Spring"}
									flexDirection={"column"}
									itemsAlignment={"center"}
								/>
								<IconAndText
									classes={{
										icon: classes.icon,
										text: classes.text,
									}}
									icon={<ReactJs size={50} />}
									text={"React"}
									flexDirection={"column"}
									itemsAlignment={"center"}
								/>
								<IconAndText
									classes={{
										icon: classes.icon,
										text: classes.text,
									}}
									icon={<Jquery size={50} />}
									text={"jQuery"}
									flexDirection={"column"}
									itemsAlignment={"center"}
								/>
								<IconAndText
									classes={{
										icon: classes.icon,
										text: classes.text,
									}}
									icon={<MaterialUi size={50} />}
									text={"Material-UI"}
									flexDirection={"column"}
									itemsAlignment={"center"}
								/>
								<IconAndText
									classes={{
										icon: classes.icon,
										text: classes.text,
									}}
									icon={<Bootstrap size={50} />}
									text={"Bootstrap"}
									flexDirection={"column"}
									itemsAlignment={"center"}
								/>
							</Milestone>
							<Milestone
								heading={
									localized_text_content.databasesHeading as string
								}
								childrenFlexDirection={"row"}
							>
								<IconAndText
									classes={{
										icon: classes.icon,
										text: classes.text,
									}}
									icon={<Mysql size={50} />}
									text={"MySQL"}
									flexDirection={"column"}
									itemsAlignment={"center"}
								/>
								<IconAndText
									classes={{
										icon: classes.icon,
										text: classes.text,
									}}
									icon={<Microsoftsqlserver size={50} />}
									text={"MS SQL Server"}
									flexDirection={"column"}
									itemsAlignment={"center"}
								/>
								<IconAndText
									classes={{
										icon: classes.icon,
										text: classes.text,
									}}
									icon={<Oracle size={50} />}
									text={"Oracle Database"}
									flexDirection={"column"}
									itemsAlignment={"center"}
								/>
							</Milestone>
							<Milestone
								heading={
									localized_text_content.operatingSystemsHeading as string
								}
								childrenFlexDirection={"row"}
							>
								<IconAndText
									classes={{
										icon: classes.icon,
										text: classes.text,
									}}
									icon={<Linux size={50} />}
									text={"Linux"}
									flexDirection={"column"}
									itemsAlignment={"center"}
								/>
								<IconAndText
									classes={{
										icon: classes.icon,
										text: classes.text,
									}}
									icon={<Macos size={50} />}
									text={"macOS"}
									flexDirection={"column"}
									itemsAlignment={"center"}
								/>
								<IconAndText
									classes={{
										icon: classes.icon,
										text: classes.text,
									}}
									icon={<Windows size={50} />}
									text={"MS Windows"}
									flexDirection={"column"}
									itemsAlignment={"center"}
								/>
							</Milestone>
							<Milestone
								heading={
									localized_text_content.shellsHeading as string
								}
								childrenFlexDirection={"row"}
							>
								<IconAndText
									classes={{
										icon: classes.icon,
										text: classes.text,
									}}
									icon={<Gnubash size={50} />}
									text={"Bash"}
									flexDirection={"column"}
									itemsAlignment={"center"}
								/>
								<IconAndText
									classes={{
										icon: classes.icon,
										text: classes.text,
									}}
									icon={<Powershell size={50} />}
									text={"PowerShell"}
									flexDirection={"column"}
									itemsAlignment={"center"}
								/>
							</Milestone>
						</MilestonesContainer>
					</Grid>
				</Grid>
			</Box>
			<Divider className={classes.divider} />
		</React.Fragment>
	);
};

export default Competences;
