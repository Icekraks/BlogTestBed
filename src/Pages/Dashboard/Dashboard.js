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
		try {
			const blogPosts = await getBlogPosts();
			this.setState({blogPosts});
		} catch(e){
			history.push("/");
			return null;
		}
	}
	render(){
		// console.log(getBlogPosts());
		const {blogPosts}=this.state;
		console.log(blogPosts);
		return(
			<div>
				<Navigation/>
				<div className="BodyElement">
					{blogPosts.length > 0 ? blogPosts.map((e)=>(<BlogCard cardData={e}/>)):(<div>No Posts to Display</div>)}
				</div>
			</div>
		)
	}
}

export default Dashboard
