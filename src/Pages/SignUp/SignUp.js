import React, {Component} from 'react';
import {Card,CardHeader,CardTitle,CardBody,Form,FormGroup,Label,Input} from 'reactstrap'
import history from "../../history"
import {saveUserDetails} from '../../Api';
import {toast} from 'react-toastify'
import {ArrowLeftCircle} from 'react-feather';



class SignUp extends Component{
	constructor(props) {
		super(props);
		this.state={
			firstName:"",
			lastName:"",
			email:"",
			password:"",
		}
	}


	/*Method that handles the signup, by calling the "API" file which has all the functions that run any saving of data
		or manipulation of data.
	 */

	handleSignUp= async (e)=>{
		e.preventDefault();
		const {firstName,lastName,email,password} = this.state;
		const userDetails = {
			firstName,
			lastName,
			email,
			password,
		};

		console.log(userDetails);
		const status = await saveUserDetails(userDetails);
		if(status){
			history.push("/");
		} else {
			toast.error(status);
		}

	}

	render() {
		return (

			<div className={"BodyElement"}>
				<Card className="d-flex flex-column justify-content-center align-items-center">
					<CardHeader className="d-flex flex-row justify-content-center align-items-center" style={{width: '100%'}} >
						<ArrowLeftCircle className="" cursor="pointer" style={{marginRight:"auto"}} onClick={()=>history.push("/")}/>
						<CardTitle className="p-1">
							Sign Up Page
						</CardTitle>

					</CardHeader>
					<CardBody>
						<Form onSubmit={(e)=>this.handleSignUp(e)}>
							<FormGroup>
								<Label for={"etext"}>
									First Name
								</Label>
								<Input onChange={(e)=>this.setState({firstName:e.target.value})} name="firstName" id="firstName" type={"text"} required/>
							</FormGroup>
							<FormGroup>
								<Label for={"etext"}>
									Last Name
								</Label>
								<Input onChange={(e)=>this.setState({lastName:e.target.value})} name="lastName" id="lastName" type={"text"} required/>
							</FormGroup>
							<FormGroup>
								<Label for={"etext"}>
									Email
								</Label>
								<Input onChange={(e)=>this.setState({email:e.target.value})} name="email" id="email" type={"email"} required/>
							</FormGroup>
							<FormGroup>
								<Label for="ePassword">Password</Label>
								<Input onChange={(e)=>this.setState({password:e.target.value})} type="password" name="password" id="ePassword" required/>
							</FormGroup>
							<Input type="submit" className={"submit"} id={"submit"} value={"Sign Up"}/>
						</Form>
					</CardBody>
				</Card>
			</div>


		)
	}
}

export default SignUp
