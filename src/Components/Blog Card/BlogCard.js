import React, {Component} from 'react';
import {Card,CardHeader,CardBody} from 'reactstrap';


export default class BlogCard extends Component{

	render(){
		const {cardData} = this.props;
		console.log(cardData);
		return(
			<React.Fragment>
				<Card>
					<CardHeader>
						{cardData.email}
					</CardHeader>
					<CardBody>
						{cardData.password}
					</CardBody>
				</Card>
			</React.Fragment>
		)
	}
}
