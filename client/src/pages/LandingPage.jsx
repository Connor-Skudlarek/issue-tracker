import "../styles/LandingPage.css";
import LoginForm from "../components/LoginForm";

function LandingPage() {
  return (
    <div className="LandingPage">
      <div className="form-container">
        <LoginForm />
      </div>
    </div>
  );
}

export default LandingPage;
