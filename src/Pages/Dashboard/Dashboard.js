import React, {Component} from 'react';
import history from "../../history"
import Navigation from '../../Components/Navigation/Navigation';
import {getBlogPosts} from '../../Api';
import BlogCard from '../../Components/Blog Card/BlogCard';


class Dashboard extends Component{
	constructor(props) {
		super(props);
		this.state={
			blogPosts:[]
		}
	}

	async componentDidMount(){
		this.setState({blogPosts: getBlogPosts()});
	}
	render(){
		// console.log(getBlogPosts());
		// const {blogPosts}=this.state;
		// console.log(blogPosts);
		return(
			<div>
				<Navigation/>
				<div className="BodyElement">
					<div>No Posts to Display</div>
				</div>
			</div>
		)
	}
}

export default Dashboard
