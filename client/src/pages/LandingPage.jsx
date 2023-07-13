import "../styles/LandingPage.css";
import LoginForm from "../components/LoginForm";

function LandingPage() {
  return (
    <div className="LandingPage">
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
        <LoginForm />
      </div>
    </div>
  );
}

export default LandingPage;
