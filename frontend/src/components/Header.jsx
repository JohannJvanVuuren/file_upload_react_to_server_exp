import {Link} from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">File Upload Experiment</h1>
      <nav className="header__nav">
        <Link className="header__link" to="/">Home</Link>
        <Link className="header__link" to="/upload-file">Upload</Link>
      </nav>
    </header>
  )
}