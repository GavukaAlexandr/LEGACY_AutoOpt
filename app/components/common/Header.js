import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import autoBind from "../../lib/autoBind";


import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Switch from 'material-ui/Switch';
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import Menu, { MenuItem } from 'material-ui/Menu';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MenuAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: true,
      anchorEl: null,
    };
    autoBind(this, {
      bindOnly: ['handleChange', 'handleMenu', 'handleClose',]
      });
  }

  handleChange(event, checked) {
    this.setState({ auth: checked });
  }

  handleMenu(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose () {
    this.setState({ anchorEl: null });
  }

  render() {
    const { user, authenticated } = this.props;
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    
      console.log(user);
      console.log(authenticated);

    return (      
      <div className={classes.root}>
        {/* <FormGroup>
          <FormControlLabel
            control={
              <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
            }
            label={auth ? 'Logout' : 'Login'}
          />
        </FormGroup> */}
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              Title
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="contrast"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  // const { authenticated } = state;
  return {
    state
  };
}

export default connect(mapStateToProps)(withStyles(styles)(MenuAppBar));





// import React from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "material-ui/styles";
// import AppBar from "material-ui/AppBar";
// import Toolbar from "material-ui/Toolbar";
// import Typography from "material-ui/Typography";
// import Button from "material-ui/Button";
// import IconButton from "material-ui/IconButton";
// import MenuIcon from "material-ui-icons/Menu";
// import { connect } from "react-redux";

// const styles = {
//   root: {
//     width: "100%",
//     heigth: "30px"
//   },
//   flex: {
//     flex: 1
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20
//   }
// };

// function ButtonAppBar(props) {
//   const { classes } = props;
//   const { authenticated } = props;
//   console.log(authenticated);
//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             className={classes.menuButton}
//             color="contrast"
//             aria-label="Menu"
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography type="title" color="inherit" className={classes.flex}>
//             Auto Opt
//           </Typography>
//           <Button color="contrast">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

// ButtonAppBar.propTypes = {
//   // classes: PropTypes.object.isRequired
// };

// function mapStateToProps(state) {
//   const { authenticated } = state;

//   return {
//     authenticated
//   };
// }

// export default connect(mapStateToProps)(withStyles(styles)(ButtonAppBar));

// // import React from 'react';
// // import PropTypes from 'prop-types';
// // import { Link, IndexLink } from 'react-router';

// // const Header = () => {
// //   return (
// //     <nav className="navbar navbar-default">
// //       <div className="container">
// //         <div className="navbar-header">
// //           <IndexLink to="/" activeClassName="navbar-brand" className="navbar-brand"><i className="glyphicon glyphicon-check" /> MERN seed</IndexLink>
// //         </div>
// //         <ul className="nav navbar-nav">
// //           <li>
// //             <IndexLink to="/" activeClassName="active"><i className="glyphicon glyphicon-home"/> Home</IndexLink>
// //           </li>
// //           <li>
// //             <Link to="/app/users" activeClassName="active"><i className="glyphicon glyphicon-user"/> Users</Link>
// //           </li>
// //           <li>
// //             <Link to="/app/about" activeClassName="active"><i className="glyphicon glyphicon-exclamation-sign"/> About</Link>
// //           </li>
// //         </ul>
// //       </div>
// //     </nav>
// //   );
// // };

// // Header.propTypes = {
// //   //
// // };

// // export default Header;
