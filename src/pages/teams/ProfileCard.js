import React, { Component } from 'react'
import logo from '../../logo.svg'

const styles = {
    card: {
        display: 'flex',
        margin: '0 auto',
        minWidth: '400px',
        width: '100%',
        color: 'white',
        backgroundColor: '#5dbcd2',
        textAlign: 'center',
        gridColumnStart: '5',
        gridColumnEnd: '9',
        boxSizing: 'border-box'
    },
    photo: {
        flex: 'initial',
        width: '150px',
        color: 'white',
        backgroundColor: 'black',
    },
    p: {
        flex: 2,
        alignSelf: 'center'
    }

};



class ProfileCard extends Component {
    render() {
        return (
            <div style={styles.card}>
                <ProfilePhoto/>
                <h1 style={styles.p}>{this.props.text}</h1>
            </div>
        )
    }
}

class ProfilePhoto extends Component {
    render() {
        return (
            <img src={logo} alt={'not found'} style={styles.photo} />
        )
    }
}

export default ProfileCard