
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="error-page">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, this page does not exist.</p>

      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default ErrorPage;
