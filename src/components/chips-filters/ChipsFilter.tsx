
import React from "react";
import { Chip, Theme, createStyles, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(2),
      },
    },
  }),
);

export function ChipsFilter() {
    const classes = useStyles();
    return (
            <div className={classes.root}>
                <Chip label="Science" />
                <Chip label="Astronomy" />
                <Chip label="Botanic" />
            </div>

    );
}
            