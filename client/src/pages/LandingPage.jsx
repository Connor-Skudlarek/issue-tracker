import "../styles/LandingPage.css";
import React from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

function LandingPage() {
  const [showLoginForm, setShowLoginForm] = React.useState(true)
  
  return (
    <div className="LandingPage">
      <div className="LandingPage-content-container">
        <div className="LandingPage-app-title">
          <h1>Issue Tracker</h1>
        </div>
        <div className="LandingPage-call-to-action">
          <p className="LandingPage-statement">Start tracking your project issues today!</p>
          <p className="LandingPage-try-catch-cleverness">
            try {"{"} <br></br>
            &nbsp;&nbsp;troublesomeCode()<br></br>
            {"}"} catch (error) {"{"}
            <br></br>
            &nbsp;&nbsp;trackIssue(error)<br></br>
            {"}"}
          </p>
        </div>
        <div className="LandingPage-form-container">
          {showLoginForm ? <LoginForm /> : <SignUpForm />}
        </div>
        <button onClick={() => setShowLoginForm(!showLoginForm)}>
          {showLoginForm ? 'Click here to change to Sign Up' : 'Click here to change to Log In'}
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
