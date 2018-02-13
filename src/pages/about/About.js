import React, { Component } from 'react'

const styles = {
    content: {
        display: 'grid',
        gridGap: '10px',
        gridTemplateColumns: 'repeat(12, 1fr)'
    },
    about: {
        gridColumnStart: '3',
        gridColumnEnd: '10'
    }
};

class About extends Component {

    render() {

        return (
            <div style={styles.content}>
                <div style={styles.about}>
                    <h1>About Us</h1>
                    <p>Some Namby-Pamby story about what exactly we say it is we do here</p>
                </div>
            </div>
        )
    }
}

export default About

