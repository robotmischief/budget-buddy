import "./LoadSpinner.css";

export default function LoadSpinner() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
      <div className="text-container">
          <h3>Connecting to database</h3>
          <h1>🐱‍🐉💤</h1>
          <p>Since this API is hosted at Heroku, all dynos could be sleeping.</p>
          <p>
          When a sleeping dyno receives web traffic, it will become active again, but there will be a short delay as the application needs to be reloaded.</p>
      </div>
    </div>
  );
}