import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import './Entries.css';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
});

class Entries extends React.Component {
  render() {
    const config = {
      className: 'ui-entries',
      name: 'Ingresos',
    };
    return (
      <div className={config.className}>
        <Paper className={this.props.classes.root}>
          <h2>{config.name}</h2>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Entries);
