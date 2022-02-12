import * as React from "react";
import { Link, useHistory } from "react-router-dom";
import * as ReactDOM from "react-dom";
import {
  Avatar,
  AppBar,
  AppBarSection,
  AppBarSpacer,
} from "@progress/kendo-react-layout";
import Cookies from "universal-cookie";
import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";
import { Popup } from "@progress/kendo-react-popup";
import "./Navbar.css";
import { apiCallGetToken } from "../ApiCall/ApiCall";
let kendokaAvatar =
  "https://www.telerik.com/kendo-react-ui-develop/images/kendoka-react.png";

const Navbar = () => {
  const [show, setShow] = React.useState(false);
  const anchor = React.useRef(null);

  const handleClick = () => {
    setShow(!show);
  };

  const [name, setName] = React.useState("");
  const [username, setUserame] = React.useState("");
  const [isExpired, setIsExpired] = React.useState(false);
  const history = useHistory();

  React.useEffect(async () => {
    const cookies = new Cookies();
    const accessToken = cookies.get("accessToken");
    console.log(accessToken);

    const url = "http://localhost:5000/api/getName";
    const usernameUrl = "http://localhost:5000/api/getUsername";
    const res = await apiCallGetToken(url, accessToken);
    const usernameRes = await apiCallGetToken(usernameUrl, accessToken);
    // console.log(usernameRes);
    if (usernameRes.success === true) {
      setUserame(usernameRes.username);
    }
    if (res.success === true) {
      // const result = res.msg;
      setName(res.msg);
    }
    // const initialState = result.map((e) => e);
    // setCourses(initialState);
  }, []);

  const onLogout = () => {
    const cookies = new Cookies();
    cookies.remove("accessToken");
    history.replace("/login");
    window.location.reload(true);
  };

  // console.log(`username = ${username}, name = ${name}`);
  return (
    <React.Fragment>
      <AppBar>
        <AppBarSection className="title">
          <Link to="/">
            <h1 className="title">IIIT N</h1>
          </Link>
        </AppBarSection>

        <AppBarSpacer
          style={{
            width: 32,
          }}
        />

        <AppBarSection className="appbar-items">
          {username === "" ? (
            <ul className="appbar">
              <Link to="/registration">
                <li>
                  <span>REGISTRATION</span>
                </li>
              </Link>
            </ul>
          ) : username === "admin" ? (
            <ul className="appbar">
              <Link to="/approve">
                <li>
                  <span>APPROVE REGISTRATIONS</span>
                </li>
              </Link>
              <Link to="/showFeedback">
                <li>
                  <span>SHOW FEEDBACK</span>
                </li>
              </Link>
              <Link to="/addCourses">
                <li>
                  <span>ADD COURSE</span>
                </li>
              </Link>
              <Link to="/addFaculty">
                <li>
                  <span>ADD FACULTY</span>
                </li>
              </Link>
            </ul>
          ) : (
            <ul className="appbar">
              <Link to="/feedback">
                <li>
                  <span>FEEDBACK</span>
                </li>
              </Link>
            </ul>
          )}
        </AppBarSection>

        <AppBarSpacer />

        <AppBarSection className="appbar-items">
          {name === "" ? (
            <ul className="appbar">
              <Link to="/login">
                <li>
                  <span>LOGIN / SIGN UP</span>
                </li>
              </Link>
            </ul>
          ) : (
            <ul className="appbar">
              <Link to="/">
                <li>
                  Hi, <span>{name}</span>
                </li>
              </Link>
              <Link to="/login">
                <li onClick={onLogout}>
                  <span>LOGOUT</span>
                </li>
              </Link>
            </ul>
          )}
        </AppBarSection>

        {/* <AppBarSection className="user-actions">
            <button className="k-button k-button-clear">
              <BadgeContainer>
                <span className="k-icon k-i-bell" />
                <Badge shape="dot" themeColor="info" size="small" position="inside" />
              </BadgeContainer>
            </button>
            <span className="k-appbar-separator" />
          </AppBarSection> */}
        {/* <AppBarSection>
          <button
            className="k-button k-button-clear overflow-button"
            ref={anchor}
            onClick={handleClick}
          >
            <span className="k-icon k-i-menu" />
          </button>
          <Popup
            anchor={anchor.current}
            show={show}
            style={{
              marginLeft: -10,
            }}
          >
            <div className="content">
              <ul>
                <li>
                  <span>What's New</span>
                </li>
                <li>
                  <span>About</span>
                </li>
                <li>
                  <span>Contacts</span>
                </li>
                <li>
                  <span>My Profile</span>
                </li>
                <li>
                  <span>Notifications</span>
                </li>
              </ul>
            </div>
          </Popup>
          <Avatar shape="circle" type="image">
            <img src={kendokaAvatar} />
          </Avatar>
        </AppBarSection> */}
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
