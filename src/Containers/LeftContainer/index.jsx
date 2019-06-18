import React, { Component } from 'react'
import MenuCard from '../../Components/MenuCard';
import { Menu } from '../../constants';
import DarkBackground from '../../assets/Group 562.svg';
import LightPlus from '../../assets/light_plus.svg';

export default class LeftContainer extends Component {
    render() {
        return (
            <div className='left_container'>
                <div>
                    {Menu.map((value, index) => {
                        return <MenuCard menu={value} key={index} isSelected={index === 0 && true} />
                    })}
                </div>
                <div style={{ marginLeft: 15, position: 'relative', bottom: 0, marginTop: 40}}>
					<p style={{ fontSize: 10, opacity: 0.5 }}>CHANGE BACKGROUND</p>
					<div style={{ display: 'flex', marginTop: 10 }}>
						<div><img src={DarkBackground} /></div>
						<div>
							<div><img style={{ width: 28, marginLeft: 10 }} src={LightPlus} /></div>
						</div>
					</div>
				</div>
            </div>
        )
    }
}
