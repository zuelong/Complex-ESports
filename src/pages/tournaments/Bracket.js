import React, { Component } from 'react'

const styles = {
    bracket: {
        gridColumn: '2',
        backgroundColor: 'blue'
    }
};

class Bracket extends Component {

    render() {

        return (
            <div style={styles.bracket}>
                <h1>Generated Tournament Bracket Will Go Here</h1>
            </div>
        )
    }
}

export default Bracket

