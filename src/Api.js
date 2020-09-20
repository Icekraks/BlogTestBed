import {toast} from 'react-toastify';
/*
	Getter Function that gets the list of registered users.
 */

export function getUserDetails(){
	return JSON.parse(localStorage.getItem('blogPost:userList')) || [];
}

/*
	Method to save the user detail to the list of user details when sign up occurs
 */
export function saveUserDetails(details){
	try {
		let oldItems = JSON.parse(localStorage.getItem('blogPost:userList')) || [];
		let duplicate = oldItems.find((e)=>e.email===details.email);
		if(duplicate!=null){
			toast.error("Email Already Exists");
			return false;
		}
		oldItems.push(details);
		localStorage.setItem('blogPost:userList', JSON.stringify(oldItems));
		return true;
	} catch(e) {
		return false;
	}

}
/*
	Method to save the sign in details so it can re sign the user in the next time they visit.
 */
export function saveSignIn(details){
	localStorage.setItem('blogPost:signedInUser', JSON.stringify(details));
}
/*
	Method to clear the signed in details so the account is signed out and autosign in doesn't apply
 */
export function removeSignInDetails(){
	localStorage.removeItem('blogPost:signedInUser');
}

export function getSignInDetails(){
	return localStorage.getItem('blogPost:signedInUser')
}

export function getBlogPosts(){
	return JSON.parse(localStorage.getItem('blogPost:blogPosts')) || [];
}
