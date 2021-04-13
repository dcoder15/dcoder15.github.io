import React from "react";
import { Avatar, Box, Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import { ContainerFactory } from "../logic/ContainerFactory";
import { AppStore } from "../stores/AppStore";
import { useStoreState } from "rfluxx-react";
import profile_picture from "../static/profile_picture.png";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "106px"
    },
    avatar: {
        height: theme.spacing(35),
        width: theme.spacing(35)
    },
    divider: {
        margin: "20px 0",
        width: "100%"
    }
}));

/**
 * Props passed to the @see Intro.
 */
interface IIntroProps {
}

/**
 * Introduction.
 */
const Intro: React.FunctionComponent<IIntroProps> = (props: IIntroProps) => {
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
            id={"intro"}>
            <Grid
                container
                direction={"column"}
                alignItems={"center"}
                spacing={10} >
                <Grid item>
                    <Grid
                        container
                        direction={"column"}
                        spacing={2} >
                        <Grid item>
                            <Typography
                                variant={"h2"}
                                align={"center"} >
                                {localized_text_content.name}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant={"h5"}
                                align={"center"} >
                                {localized_text_content.business}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Avatar
                        className={classes.avatar}
                        alt={localized_text_content.name as string}
                        src={profile_picture} />
                </Grid>
                <Grid item>
                    <Typography
                        variant={"h6"}
                        align={"center"}>
                        {localized_text_content.introduction}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
        <Divider className={classes.divider} />
    </React.Fragment>;
}

export default Intro;