import React from "react";
import { Grid, GridDirection, GridItemsAlignment, Theme, Typography, TypographyVariant, withStyles, WithStyles } from "@material-ui/core";

const styles = (theme: Theme) => ({
  root: {
  },
  icon: {
  },
  text: {
  }
});

/**
 * Props passed to the @see IconAndText.
 */
interface IIconAndTextProps extends WithStyles<typeof styles> {
  /**
   * Icon to be displayed.
   */
  icon: React.ReactNode;

  /**
   * Text to be displayed.
   */
  text: string;

  /**
   * Direction in which the items should flex.
   */
  flexDirection?: GridDirection;

  /**
   * Variant for the text.
   */
  textVariant?: TypographyVariant;

  /**
   * Alignment of the items.
   */
  itemsAlignment?: GridItemsAlignment;
}

/**
 * Displays an icon along with text.
 */
const IconAndTextImpl: React.FunctionComponent<IIconAndTextProps> = (props: IIconAndTextProps) => {
  const { classes, icon, text, flexDirection, textVariant, itemsAlignment } = props;

  return <Grid
    className={classes.root}
    container
    spacing={2}
    wrap="nowrap"
    direction={flexDirection ? flexDirection : "row"}
    alignItems={itemsAlignment ? itemsAlignment : undefined}>
    <Grid
      className={classes.icon}
      item>
      {icon}
    </Grid>
    <Grid
      className={classes.text}
      item>
      <Typography variant={textVariant ? textVariant : "overline"}>
        {text}
      </Typography>
    </Grid>
  </Grid>
}

export default withStyles(styles)(IconAndTextImpl);