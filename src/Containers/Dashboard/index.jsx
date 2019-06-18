import React from 'react'
import LeftContainer from '../LeftContainer';
import RightContainer from '../RightContainer';
import './styles.scss';

const Dashboard = () => {
        return (
            <div className='dashboard_container'>
                <LeftContainer/>
                <RightContainer/>
            </div>
        )
}

export default Dashboard