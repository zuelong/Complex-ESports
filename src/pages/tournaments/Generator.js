import React, { Component } from 'react'

const styles = {
    sidebar: {
        gridColumn: '1',
        backgroundColor: 'red',
    },
    generator: {

    }
};

class Generator extends Component {

    render() {

        return (
                <div style={styles.sidebar}>
                    <h1>Tournament Generator Form Will Go Here</h1>
                </div>
        )
    }
}

export default Generator

