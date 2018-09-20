import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import './Configurations.css';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
});

class Configurations extends React.Component {
  render() {
    const config = {
      className: 'ui-configurations',
      name: 'Configuración',
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

export default withStyles(styles)(Configurations);
