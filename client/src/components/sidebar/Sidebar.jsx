import { Alert, Form, Button, Card } from 'react-bootstrap'
import AvatarImage from '../../assets/avatarImage.jpeg'
import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Sidebar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
   
    <div className="sidebar">
      <div className='profile'>
      <Link to={`/profile/${user.username}`}  >
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg"
          />
        </Link>
      </div>
      <div className='grid'>

      </div>
    </div>
  );
}
