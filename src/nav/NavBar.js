import React, { Component } from 'react'
import Toolbar from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactDOM from 'react-dom';
import Teams from '../pages/teams/Teams'
import About from '../pages/about/About'
import Home from '../pages/home/Home'
import Tournament from '../pages/tournaments/Tournament'

class NavItem extends Component {

    state = {hover: false, color: '#E8E8E8'};

    loadContent = () => {
      ReactDOM.render(this.props.load, document.getElementById('content'));
    };

    toggleHover = () => {
        this.setState({hover: !this.state.hover});
        this.state.hover ? this.setState({color: '#E8E8E8'}) : this.setState({color: '#D8D8D8'});
    };

    render() {
        console.log(this.state);

        const styles = {
            navItem: {
                display: 'flex',
                flex: 1,
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: this.state.color,
            },
            a: {
                cursor: 'default'
            }
        };

        return (
            <div onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.loadContent} style={styles.navItem}>
                <a style={styles.a}>{this.props.name}</a>
            </div>
        )
    }
}



class NavBar extends Component {

    render() {

        const styles = {
            nav: {
                display: 'flex',
                alignItems: 'center',
                position: 'fixed',
                width: '100%',
                gridRow: '1',
            },
            whitespace: {
                flex: '4'
            }


        };

        return (
            <MuiThemeProvider>
                <Toolbar style={styles.nav}>
                    <NavItem load={<Home />} name={'Home'} />
                    <NavItem load={<About />} name={'About'} />
                    <NavItem load={<Teams />} name={'Teams'} />
                    <NavItem load={<Tournament />} name={'Tournaments'} />
                    <div style={styles.whitespace} />
                    <NavItem name={'Login'} />
                </Toolbar>
            </MuiThemeProvider>
        )
    }
}

export default NavBar