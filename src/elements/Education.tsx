import React from "react";
import { Box, Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import { ContainerFactory } from "../logic/ContainerFactory";
import { AppStore } from "../stores/AppStore";
import { useStoreState } from "rfluxx-react";
import MilestonesContainer from "../components/MilestonesContainer";
import Milestone from "../components/Milestone";
import IconAndText from "../components/IconAndText";
import PlaceIcon from "@material-ui/icons/Place";
import SchoolIcon from "@material-ui/icons/School";
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
 * Props passed to the @see Education.
 */
interface IEducationProps {
}

/**
 * Education.
 */
const Education: React.FunctionComponent<IEducationProps> = (props: IEducationProps) => {
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
            id={"education"}>
            <Grid
                container
                direction={"column"}>
                <Grid item>
                    <Typography
                        variant={"h6"}
                        gutterBottom>
                        {localized_text_content.educationHeading}
                    </Typography>
                </Grid>
                <Grid item>
                    <MilestonesContainer>
                        {(localized_text_content.educations as MilestoneDetails[]).map(education => {
                            return <Milestone
                                key={education.id}
                                heading={education.duration}>
                                <IconAndText
                                    icon={<PlaceIcon />}
                                    text={education.details.name}
                                />
                                <IconAndText
                                    icon={<InfoIcon />}
                                    text={education.details.program}
                                />
                                <IconAndText
                                    icon={<SchoolIcon />}
                                    text={education.details.degree}
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

export default Education;