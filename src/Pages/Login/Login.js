import React, {Component} from 'react';
import {Card,CardHeader,CardTitle,CardBody,Form,FormGroup,Label,Input} from 'reactstrap'
import history from '../../history'
import {toast} from 'react-toastify'
import {getSignInDetails, getUserDetails, saveSignIn} from '../../Api';


export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state={
			email:"",
			password:"",
		}
	}

	//Handles Login validation, uses mobx to store a validation check for if your signed in or not.
	handleLogin= async (e)=>{
		e.preventDefault();
		const {email,password} = this.state;
		let userList = await getUserDetails();
		console.log(userList);
		userList.map((e)=>console.log(e.email));
		const found = userList.find((e)=>(e.email===email && e.password===password));
		if(found!=null) {
			saveSignIn({email,password});
			history.push("/Dashboard");
		} else {
			toast.error("Wrong Email or Password");
		}

	};

	handleSignUp=(e)=>{
		e.preventDefault();
		history.push("/Signup")
	};

	async componentDidMount() {
		if(getSignInDetails()!=null){
			history.push("/Dashboard");
		}
	}


	//yes the form is required so no signing in without a password *duhhh dummy maybe you should have done that previously fw*
	render() {

		return (

			<div className={"BodyElement"}>
				<Card className="d-flex flex-column justify-content-center align-items-center" >
					<CardHeader className="d-flex flex-row justify-content-end align-items-center" style={{width: '100%'}}>
						<CardTitle>
							Login Page
						</CardTitle>
					</CardHeader>
					<CardBody>
						<Form onSubmit={(e)=>this.handleLogin(e)}>
							<FormGroup>
								<Label for={"etext"}>
									Email
								</Label>
								<Input onChange={(e)=>this.setState({email:e.target.value})} name="text" id="etext" type={"text"} required/>
							</FormGroup>
							<FormGroup>
								<Label for="ePassword">Password</Label>
								<Input onChange={(e)=>this.setState({password:e.target.value})} type="password" name="password" id="ePassword" required/>
							</FormGroup>
							<FormGroup className="d-flex flex-row justify-content-between align-items-baseline">
								<Input type="button" className="submit p-1" id={"Cancel"} value={"Sign Up"} onClick={(e)=>this.handleSignUp(e)}/>
								<Input type="submit" className="submit p-1" id={"submit"} value={"Submit"}/>
							</FormGroup>

						</Form>
					</CardBody>
				</Card>
			</div>


		)
	}
}
