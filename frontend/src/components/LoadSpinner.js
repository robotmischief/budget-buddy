import "./LoadSpinner.css";

export default function LoadSpinner() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
      <div className="text-container">
        <h3>Connecting to database</h3>
        <h1>🐱‍🐉💤</h1>
        <p>
          Since this API is hosted for free on shared servers it may be put to
          sleep if not active for a while.
        </p>
        <p>
          When it receives web traffic again, it will become active again, but
          there will be a short delay as the application needs to be reloaded.
        </p>
      </div>
    </div>
  );
}
