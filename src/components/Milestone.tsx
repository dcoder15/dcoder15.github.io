import React from "react";
import { Grid, GridDirection, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiStepIcon-text": {
            display: "none"
        },
        "& .MuiStepLabel-labelContainer": {
            padding: theme.spacing(2)
        }
    }
}));

/**
 * Props passed to the @see Milestone.
 */
interface IMilestoneProps {
    /**
     * Heading for the milestone.
     */
    heading: string;

    /**
     * Items to be displayed in the milstone.
     */
    children: React.ReactElement[];

    /**
     * Direction in which the children should be flexed.
     */
    childrenFlexDirection?: GridDirection;
}

/**
 * Labeled milestone-like container for contained content.
 */
const Milestone: React.FunctionComponent<IMilestoneProps> = (props: IMilestoneProps) => {
    const classes = useStyles();
    const { heading, children, childrenFlexDirection } = props;

    return <Grid
        className={classes.root}
        container
        direction="column"
        spacing={2}>
        <Grid item>
            <Typography variant="body2">
                {heading}
            </Typography>
        </Grid>
        <Grid item>
            <Grid
                container
                direction={childrenFlexDirection ? childrenFlexDirection : "column"}
                spacing={3}>
                {children &&
                    children.map(mi => {
                        return <Grid
                            key={Math.random()}
                            item>
                            {mi}
                        </Grid>
                    })
                }
            </Grid>
        </Grid>
    </Grid>;
}

export default Milestone;