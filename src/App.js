import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Edinburgh" />
        <footer>
          This project was coded by Dayana Daviott{" "}
          <a
            href="https://github.com/dagifer/my-app"
            target="_blank"
            rel="noreferrer"
          >
            {""}
            open source at github and deploy on Netlify{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
