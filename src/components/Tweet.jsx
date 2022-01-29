import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({ user, timestamp, message }) {
  return (
    <div className="tweet">
      {/* <img src={user.image} className="profile" alt="profile" /> */}
      <ProfileImage image={user.image} />
      <div className="body">
        <div className="top">
          {/* <span className="user">
            <span className="name">{user.name}</span>
            <span className="handle">{user.handle}</span>
          </span> */}
          <User userData={user}/>

          {/* <span className="timestamp">{timestamp}</span> */}
          <Timestamp time={timestamp}/>
        </div>

        {/* <p className="message">{message}</p> */}
          <Message message={message}/>
        {/*<div className="actions">
          // Font Awesome icons
          <i class="far fa-comment"></i>
          <i class="fas fa-retweet"></i>
          <i class="far fa-heart"></i>
          <i class="fas fa-share"></i>
        </div>*/}
        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
