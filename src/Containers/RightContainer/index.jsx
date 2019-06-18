import React, { Component } from 'react';
import BigPlus from '../../assets/button_shorten.svg';
import PinkArrow from '../../assets/launch_arrow.svg';
import BlackPlus from '../../assets/Group 563.svg';
import CyanPlus from '../../assets/cyan-plus.svg';
import BluePlus from '../../assets/blue-plus.svg';
import PurplePlus from '../../assets/purple-plus.svg';
import GreenArrow from '../../assets/green_arrow.svg';
import Graph from '../../assets/graph.png';
import { Tooltip } from 'reactstrap';

export default class RightContainer extends Component {

	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			tooltipOpen: false
		};
	}

	toggle() {
		this.setState({
			tooltipOpen: !this.state.tooltipOpen
		});
	}
	render() {
		return (
			<div className='right_container'>
				<div className='dashboard_right_container'>
					<h1 className='heading'>DASHBOARD</h1>
					<div className='shortening_wrapper'>
						<div className='input_container_wrapper dest_url_wrapper'>
							<div className='input_title'>DESTINATION URL</div>
							<div className='input_wrapper url_input_wrapper'>
								<input className='dashboard_right_input url_input' placeholder='ENTER YOUR LONG URL HERE' />
							</div>
						</div>
						<div className='domain_wrapper_container' style={{ position: 'relative' }}>
							<div className=' input_container_wrapper domain_wrapper'>
								<div className='input_title'>DOMAINS</div>
								<div className='input_wrapper shorten_input_wrapper'>
									<input className='dashboard_right_input shorten_input' placeholder='found.ee' />
								</div>
							</div>
							<img src={BigPlus} style={{ position: 'absolute', right: -15, top: 10, width: 39 }} />
							<span style={{ position: 'absolute', right: 31, top: 24, fontSize: 10, fontWeight: 900 }}>A</span>
						</div>
					</div>
					<div className='tags_wrapper'>
						<div className='link_tags'>
							{'SHORT LINKS'}
							<span style={{ position: 'relative' }}>
								<img src={BlackPlus} style={{ width: 12, position: 'absolute', top: 10 }} />
							</span>
						</div>
						<div className='link_tags'>
							{'GEO LINKS'}
							<span style={{ position: 'relative' }}>
								<img src={BlackPlus} style={{ width: 12, position: 'absolute', top: 10 }} />
							</span></div>
					</div>
					<div style={{ display: 'flex', flexWrap: 'wrap' }}>
						<div>
							<h1 className='heading' style={{ width: 140, marginTop: 50, marginBottom: 35 }}>Audience Growth</h1>
							<p style={{ fontWeight: 900, fontSize: 15 }}>Double your audience</p>
							<p style={{ opacity: 0.5, margin: '10px 0', fontSize: 14 }}>for as little as $25.</p>
							<p><span style={{ opacity: 0.5, fontSize: 14 }}>Launch ads now.</span><img style={{ opacity: 1 }} src={PinkArrow} /></p>
						</div>
						<div className='stats_percentage_container'>
							<div className='stats_percentage'>
								<img id="TooltipExample" src={CyanPlus} alt='cyan plus sign' />
								<p style={{ width: 40, fontSize: 12, opacity: 0.5, marginLeft: 5 }}>Music Buyers</p>
								<p style={{ marginTop: 8, marginLeft: 5 }}>217% <img src={GreenArrow} /></p>
							</div>
							<Tooltip className='custom_popup_container' placement="bottom-end" hideArrow={true} autohide={false} isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggle}>
								<div className='popup_item'>Launch</div>
								<div className='popup_item'>Edit</div>
								<div className='popup_item'>Share</div>
							</Tooltip>
							<div className='stats_percentage'>
								<img src={BluePlus} alt='blue plus sign' />
								<p style={{ width: 40, fontSize: 12, opacity: 0.5, marginLeft: 5 }}>Ticket Buyers</p>
								<p style={{ marginTop: 8, marginLeft: 5 }}>315% <img src={GreenArrow} /></p>
							</div>
							<div className='stats_percentage'>
								<img src={PurplePlus} alt='purple plus sign' />
								<p style={{ width: 40, fontSize: 12, opacity: 0.5, marginLeft: 5 }}>Music Purchasers</p>
								<p style={{ marginTop: 8, marginLeft: 5 }}>432% <img src={GreenArrow} /></p>
							</div>
						</div>
					</div>
				</div>
				<img className='graph_image' src={Graph} alt='graph' />
			</div>
		)
	}
}
