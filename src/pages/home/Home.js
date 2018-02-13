import React, { Component } from 'react'

const styles = {
    content: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    home: {
    }
};

class Home extends Component {

    render() {

        return (
            <div style={styles.content}>
                <div style={styles.home}>
                    <img src={'http://static1.squarespace.com/static/57bfa9e8e3df2854ac64e8b0/t/59eebca3be42d6f681f4d80d/1508818087370/FacebookCover.png'} alt={'Not Found'} />
                </div>
            </div>
        )
    }
}

export default Home

