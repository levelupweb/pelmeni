import React from "react";
import AuthForm from "@components/AuthForm";
import Page from "@components/Page";

class AuthPage extends React.Component {
	render() {
		return (
			<Page>
				<AuthForm />
			</Page>
		);
	}
}

export default AuthPage;
