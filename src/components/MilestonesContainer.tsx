import React from "react";
import { Card, CardContent, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
    },
    milestoneGridItem: {
        width: "33%"
    },
    milestoneCard: {
        height: "100%"
    }
}));

/**
 * Props passed to the @see MilestonesContainer.
 */
interface IMilestonesContainerProps {
    /**
     * Items to be displayed in the container.
     */
    children: React.ReactElement[];
}

/**
 * Grid container for milestones.
 */
const MilestonesContainer: React.FunctionComponent<IMilestonesContainerProps> = (props: IMilestonesContainerProps) => {
    const classes = useStyles();
    const { children } = props;

    return <Grid
        className={classes.root}
        container
        spacing={2}>
        {children &&
            children.map(child => {
                return <Grid
                    className={classes.milestoneGridItem}
                    key={Math.random()}
                    item
                    xs={12}
                    sm={6}
                    md={4}>
                    <Card className={classes.milestoneCard}>
                        <CardContent>
                            {child}
                        </CardContent>
                    </Card>
                </Grid>
            })
        }
    </Grid>;
}

export default MilestonesContainer;