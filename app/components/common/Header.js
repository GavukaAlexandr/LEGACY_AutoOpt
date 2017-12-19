import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = {
  root: {
    width: '100%',
    heigth: '30px',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            Auto Opt
          </Typography>
          <Button color="contrast">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);




// import React from 'react';
// import PropTypes from 'prop-types';
// import { Link, IndexLink } from 'react-router';

// const Header = () => {
//   return (
//     <nav className="navbar navbar-default">
//       <div className="container">
//         <div className="navbar-header">
//           <IndexLink to="/" activeClassName="navbar-brand" className="navbar-brand"><i className="glyphicon glyphicon-check" /> MERN seed</IndexLink>
//         </div>
//         <ul className="nav navbar-nav">
//           <li>
//             <IndexLink to="/" activeClassName="active"><i className="glyphicon glyphicon-home"/> Home</IndexLink>
//           </li>
//           <li>
//             <Link to="/app/users" activeClassName="active"><i className="glyphicon glyphicon-user"/> Users</Link>
//           </li>
//           <li>
//             <Link to="/app/about" activeClassName="active"><i className="glyphicon glyphicon-exclamation-sign"/> About</Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// Header.propTypes = {
//   //
// };

// export default Header;
