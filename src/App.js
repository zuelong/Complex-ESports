import React, { Component } from 'react'
import ProfileCard from "./pages/teams/ProfileCard";
import NavBar from "./nav/NavBar"

const styles = {
    app: {
        textAlign: 'center'
    },
    content: {
        paddingTop: '56px'
    }
};

class App extends Component {

    render() {

        let li = [];

        for(let i = 0; i < 20; i++){
            li.push(<ProfileCard text={i} />);
            console.log(this.li);
        }

        return (
            <div style={styles.app}>
                <NavBar />
                <div id='content' style={styles.content} />
            </div>
        )
    }
}

export default App

