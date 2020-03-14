import React from 'react';
import { Paper, Chip, makeStyles, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
  },
  chip: {
    marginRight: theme.spacing(0.5),
    marginTop: theme.spacing(0.5),
  },
  subTags: {
    marginRight: theme.spacing(0.5),
    marginTop: theme.spacing(3),
  },
}));

export default function Event({ event }) {
  const classes = useStyles();

  const renderTags = () => {
    return event.tags.map((t, i) => (
      <Chip
        key={i.toString()}
        label={t.name}
        className={classes.chip}
        color="primary"
        component={React.forwardRef((props, ref) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Link ref={ref} {...props} to={`/explore/tags/${t.name}`} />
        ))}
        clickable
      />
    ));
  };

  const renderLocationTags = () => {
    return event.locationTags.map((t, i) => (
      <Chip
        key={i.toString()}
        label={t.name}
        className={classes.subTags}
        size="small"
        component={React.forwardRef((props, ref) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Link ref={ref} {...props} to={`/explore?location=${t.name}`} />
        ))}
        clickable
      />
    ));
  };

  return (
    <Paper className={classes.paper}>
      <div>{renderTags()}</div>
      <Box display="flex" justifyContent="space-between">
        <Chip
          label={event.startDate}
          className={classes.subTags}
          size="small"
          component={React.forwardRef((props, ref) => (
            <Link
              ref={ref}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...props}
              to={`/explore?startDate=${event.startDate}`}
            />
          ))}
          clickable
        />
        <Box>{renderLocationTags()}</Box>
      </Box>
    </Paper>
  );
}
