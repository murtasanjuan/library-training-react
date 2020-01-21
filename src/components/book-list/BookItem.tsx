
import React from "react";
import { makeStyles, Theme, createStyles, Card, CardActionArea, CardMedia, CardContent, Typography, Button, CardActions } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
        width: 345,
        margin: 'auto',
        height: 500,
      },
      media: {
        height: 190,
      },
      content: {
          height: 200,
          overflow: 'hidden',
      }
  }),
);

interface Props {
    book: any;
  }

export function BookItem(props: Props): JSX.Element {
    const classes = useStyles();
  return (
    <Card className={classes.card}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={props.book.image}
        title="book image"
      />
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="h2">
          {props.book.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.book.description}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        View
      </Button>
    </CardActions>
  </Card>
  );
}

