import chefLogo from "/src/assets/chef-claude-icon.png";

export default function Header() {
  return (
    <header>
      <nav>
        <img src={chefLogo} alt="chef claude logo" className="header-logo" />
        <h1 className="header-title">Chef Claude</h1>
      </nav>
    </header>
  );
}
