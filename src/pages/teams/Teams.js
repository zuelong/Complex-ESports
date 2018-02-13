import React, { Component } from 'react'
import ProfileCard from "./ProfileCard";

const styles = {
    content: {
        display: 'grid',
        gridGap: '10px',
        gridTemplate: 'repeat(20, 1fr) / repeat(12, 1fr)',
        paddingTop: '10px'
    }
};

class Teams extends Component {

    render() {

        let li = [];

        for(let i = 0; i < 20; i++){
            li.push(<ProfileCard text={i} />);
            console.log(this.li);
        }

        return (
                <div style={styles.content}>
                    <ProfileCard text={'Complex ESports'} />
                    <ProfileCard text={'AfterImage'} />
                    <ProfileCard text={'EasyDuo'} />
                    <ProfileCard text={'RushENT'} />
                    {li}
                </div>
        )
    }
}

export default Teams

