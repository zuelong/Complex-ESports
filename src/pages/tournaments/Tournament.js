import React, { Component } from 'react'
import Generator from './Generator'
import Bracket from "./Bracket";

const styles = {
    content: {
        display: 'grid',
        height: '100%',
        gridTemplateColumns: '20% 80%',
        gridTemplateRows: '100%'
    },
    tournament: {
    }
};

class Tournament extends Component {

    render() {

        return (
            <div style={styles.content}>
                <Generator/>
                <Bracket/>
            </div>
        )
    }
}

export default Tournament

