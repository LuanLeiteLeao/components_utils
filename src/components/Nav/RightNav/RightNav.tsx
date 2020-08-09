import React from "react";
import "./style.css";

interface RightNavProps {
  isOpen: boolean;
}

class RightNav extends React.Component<RightNavProps, {}> {
  private moveBar(isOpen: boolean): string {
    return isOpen
      ? "ul-right-nav ul-right-nav-closed"
      : "ul-right-nav ul-right-nav-open";
  }

  public render(): JSX.Element {
    const coiche = this.moveBar(this.props.isOpen);
    return (
      <ul id="ul-right-nav" className={coiche}>
        <li>Home</li>
        <li>About US</li>
        <li>Contact Us</li>
        <li>Sing In</li>
        <li>Sing Up</li>
      </ul>
    );
  }
}

export default RightNav;
