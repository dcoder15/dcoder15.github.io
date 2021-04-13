import React from "react";
import { Box, Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import { ContainerFactory } from "../logic/ContainerFactory";
import { AppStore } from "../stores/AppStore";
import { useStoreState } from "rfluxx-react";
import MilestonesContainer from "../components/MilestonesContainer";
import Milestone from "../components/Milestone";
import IconAndText from "../components/IconAndText";
import PlaceIcon from "@material-ui/icons/Place";
import ScheduleIcon from "@material-ui/icons/Schedule";
import InfoIcon from "@material-ui/icons/Info";
import { MilestoneDetails } from "../static/text_content";

const useStyles = makeStyles((theme) => ({
    root: {
    },
    divider: {
        margin: "20px 0",
        width: "100%"
    }
}));

/**
 * Props passed to the @see WorkExperience.
 */
interface IWorkExperienceProps {
}

/**
 * WorkExperience.
 */
const WorkExperience: React.FunctionComponent<IWorkExperienceProps> = (props: IWorkExperienceProps) => {
    const classes = useStyles();

    const appStore = ContainerFactory.getContainer().resolve<AppStore>("AppStore");
    const storeState = useStoreState(appStore);

    if (!storeState) {
        return null;
    }

    const { localized_text_content } = storeState;

    return <React.Fragment>
        <Box
            className={classes.root}
            id={"workExperience"}>
            <Grid
                container
                direction={"column"}>
                <Grid item>
                    <Typography
                        variant={"h6"}
                        gutterBottom>
                        {localized_text_content.workExperienceHeading}
                    </Typography>
                </Grid>
                <Grid item>
                    <MilestonesContainer>
                        {(localized_text_content.workExperiences as MilestoneDetails[]).map(workExperience => {
                            return <Milestone
                                key={workExperience.id}
                                heading={workExperience.duration}>
                                <IconAndText
                                    icon={<PlaceIcon />}
                                    text={workExperience.details.companyType}
                                />
                                <IconAndText
                                    icon={<InfoIcon />}
                                    text={workExperience.details.activity}
                                />
                                <IconAndText
                                    icon={<ScheduleIcon />}
                                    text={workExperience.details.type}
                                />
                            </Milestone>
                        })
                        }
                    </MilestonesContainer>
                </Grid>
            </Grid>
        </Box>
        <Divider className={classes.divider} />
    </React.Fragment>;
}

export default WorkExperience;