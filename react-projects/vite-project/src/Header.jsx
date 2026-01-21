import reactLogo from "./assets/react-logo.png";

export default function Header() {
  return (
    <header>
      <div className="nav-left">
        <img src={reactLogo} width="40px" alt="React logo" />
        <h2>ReactFacts</h2>
      </div>
    </header>
  );
}
