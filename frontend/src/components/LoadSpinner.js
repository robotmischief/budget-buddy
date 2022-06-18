import "./LoadSpinner.css";

export default function LoadSpinner() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
      <div className="text-container">
          <h3>Connecting to database</h3>
          <h1>🐱‍🐉💤</h1>
          <p>This API is being hosted at Heroku so all dynos could be asleep.</p>
          <p>When a sleeping dyno receives web traffic it will become active again, but there is a short delay as the application needs to be reloaded.</p>
      </div>
    </div>
  );
}