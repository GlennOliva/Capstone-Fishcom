import React, { useState } from 'react';
import '../css/style.css'; // Import your CSS for styling
import friends from '../images/friends.png';
import news from '../images/news.png';
import group from '../images/group.png';
import marketplace from '../images/marketplace.png';
import profile_pic from '../images/profile-pic.png';
import photo from '../images/photo.png';
import member_2 from '../images/member-2.png';
import member_1 from '../images/member-1.png';
import member_3 from '../images/member-3.png';
import haha from '../images/haha.png';
import like from '../images/like-blue.png';
import sad from '../images/sad.png';
import wow from '../images/wow.png';
import heart from '../images/heart.png';
import angry from '../images/angry.png';
import care from '../images/care.png';
import comments from '../images/comments.png';
import share from '../images/share.png';
import feeling from '../images/feeling.png';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isTextPostModalOpen, setTextPostModalOpen] = useState(false);
  const [isPhotoVideoModalOpen, setPhotoVideoModalOpen] = useState(false);
  const [isShareModalOpen, setShareModalOpen] = useState(false);
  const [showEmojis, setShowEmojis] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(like);

  const changeEmoji = (emojiSrc: string) => {
    setSelectedEmoji(emojiSrc); // Set the selected emoji
    setShowEmojis(false); // Hide the emoji options
  };

  const showTextPostModal = () => setTextPostModalOpen(true);
  const showPhotoVideoModal = () => setPhotoVideoModalOpen(true);
  const closeModal = (modalSetter: { (value: React.SetStateAction<boolean>): void; (value: React.SetStateAction<boolean>): void; (value: React.SetStateAction<boolean>): void; (value: React.SetStateAction<boolean>): void; (value: React.SetStateAction<boolean>): void; (value: React.SetStateAction<boolean>): void; (arg0: boolean): any; }) => modalSetter(false);

 const submitTextPost = () => {
  const contentElement = document.getElementById('textPostContent') as HTMLTextAreaElement | null;
  if (contentElement) {
    const content = contentElement.value;
    console.log('Text Post Content:', content);
    closeModal(setTextPostModalOpen);
  }
};

const submitPhotoVideoPost = () => {
  const fileInputElement = document.getElementById('photoVideoUpload') as HTMLInputElement | null;
  const contentElement = document.getElementById('photoVideoContent') as HTMLTextAreaElement | null;
  if (fileInputElement && contentElement) {
    const files = fileInputElement.files;
    const content = contentElement.value;

    console.log('Photo/Video Files:', files);
    console.log('Post Content:', content);
    closeModal(setPhotoVideoModalOpen);
  }
};

const toggleDropdown = (dropdownId: string) => {
  const dropdown = document.getElementById(dropdownId);
  if (dropdown) {
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  }
};

const setVisibility = (option: string, dropdownId: string) => {
  const dropdown = document.getElementById(dropdownId);
  if (dropdown) {
    const visibilityText = dropdown.previousElementSibling as HTMLElement;
    if (visibilityText) {
      visibilityText.innerHTML = `${option} <i className="fa fa-caret-down"></i>`;
    }
    toggleDropdown(dropdownId);
  }
};

const submitSharePost = () => {
  const contentElement = document.getElementById('shareContent') as HTMLTextAreaElement | null;
  if (contentElement) {
    const content = contentElement.value;
    console.log('Share Post Content:', content);
    closeModal(setShareModalOpen);
  }
};




  return (
    <div className="container">
      <div className="sidebar-left">
        <div className="imp-links">
          <a href="#"><img src={news} alt="News" />Latest News</a>
          <a href="#"><img src={friends} alt="Fish find" />Fish find</a>
          <a href="#"><img src={group} alt="Groups" />Groups</a>
          <Link to="/ecommerce" className="link">
      <img src={marketplace} alt="Fish Shopping" />
      Fish Shopping
    </Link>
        </div>
      </div>

      <div className="main-content">
 

        <div className="write-post-container">
          <div className="user-profile">
            <img src={profile_pic} alt="Profile" />
            <div>
              <p>John Nicholson</p>
              <small>Public <i className="fa fa-caret-down"></i></small>
            </div>
          </div>

          <div className="post-input-container">
            <textarea
              id="post-textarea"
              cols={80}
              rows={1}
              placeholder="What's on your mind, John?"
              onClick={showTextPostModal}
            ></textarea>
          </div>
          <div className="add-post-links">
            <a href="#" onClick={showPhotoVideoModal}><img src={photo} alt="Photo/Video" />Photo/Video</a>
            <a href="#"><img src={feeling} alt="Feeling Activity" />Feeling Activity</a>
          </div>
        </div>

        {/* Text Post Modal */}
        {isTextPostModalOpen && (
          <div id="textPostModal" className="modal">
            <div className="modal-content">
              <h1 style={{ textAlign: 'center', fontSize: '16px' }}>Create Post</h1>
              <span className="close" onClick={() => closeModal(setTextPostModalOpen)}>&times;</span>
              <div className="user-profile" style={{ padding: '12px' }}>
                <img src={member_2} alt="Profile" />
                <div>
                  <p>John Nicholson</p>
                  <small onClick={() => toggleDropdown('dropdownText')}>Public <i className="fa fa-caret-down"></i></small>
                  <div id="dropdownText" className="dropdown-content">
                    <a href="#" onClick={() => setVisibility('Public', 'dropdownText')}>Public</a>
                    <a href="#" onClick={() => setVisibility('Friends', 'dropdownText')}>Friends</a>
                    <a href="#" onClick={() => setVisibility('Only Me', 'dropdownText')}>Only Me</a>
                  </div>
                </div>
              </div>
              <textarea id="textPostContent" cols={62} rows={3} placeholder="What's on your mind, John?"></textarea>
              <button onClick={submitTextPost}>Post</button>
            </div>
          </div>
        )}

        {/* Photo/Video Post Modal */}
        {isPhotoVideoModalOpen && (
          <div id="photoVideoModal" className="modal">
            <div className="modal-content">
              <h1 style={{ textAlign: 'center', fontSize: '16px' }}>Create Post</h1>
              <span className="close" onClick={() => closeModal(setPhotoVideoModalOpen)}>&times;</span>
              <div className="user-profile" style={{ padding: '12px' }}>
                <img src={member_2} alt="Profile" />
                <div>
                  <p>John Nicholson</p>
                  <small onClick={() => toggleDropdown('dropdownPhotoVideo')}>Public <i className="fa fa-caret-down"></i></small>
                  <div id="dropdownPhotoVideo" className="dropdown-content">
                    <a href="#" onClick={() => setVisibility('Public', 'dropdownPhotoVideo')}>Public</a>
                    <a href="#" onClick={() => setVisibility('Friends', 'dropdownPhotoVideo')}>Friends</a>
                    <a href="#" onClick={() => setVisibility('Only Me', 'dropdownPhotoVideo')}>Only Me</a>
                  </div>
                </div>
              </div>
              <textarea id="photoVideoContent" cols={60} rows={3} placeholder="Say something about this photo/video..."></textarea>
              <input type="file" id="photoVideoUpload" multiple />
              <button onClick={submitPhotoVideoPost}>Post</button>
            </div>
          </div>
        )}

        <div className="post-container">
          <div className="post-row">
            <div className="user-profile">
              <img src={profile_pic} alt="User" />
              <div>
                <p>John Nicholson</p>
                <small>Public <i className="fa fa-caret-down"></i></small>
              </div>
              <a href="#"><i className="fa fa-ellipsis-vertical"></i></a>
            </div>
          </div>

          <div className="post-text">
            <p>Lorem ipsum dolor, <span>sit amet consectetur</span> adipisicing elit. Aliquid temporibus repudiandae repellendus consectetur
              cupiditate alias expedita debitis, delectus maxime a ea distinctio ipsam iure
              aperiam rerum voluptatum nam nesciunt culpa! <a href="#">#Web Development</a><a href="#">#Youtube Channel</a>
            </p>
            <img src="images/feed-image-1.png" alt="Post" className="post-img" />
          </div>

          <div className="post-row">
            <div className="activity-icons">
              <div 
                className="like-button"
                onMouseEnter={() => setShowEmojis(true)}
                onMouseLeave={() => setShowEmojis(false)}
              >
                <img id="likeButtonImg" src={selectedEmoji} alt="Like" />
                {showEmojis && (
                  <div className="emoji-options">
                    <img src={like} alt="Haha" onClick={() => changeEmoji(like)} />
                    <img src={haha} alt="Haha" onClick={() => changeEmoji(haha)} />
                    <img src={sad} alt="Sad" onClick={() => changeEmoji(sad)} />
                    <img src={wow} alt="Wow" onClick={() => changeEmoji(wow)} />
                    <img src={heart} alt="Heart" onClick={() => changeEmoji(heart)} />
                    <img src={angry} alt="Angry" onClick={() => changeEmoji(angry)} />
                    <img src={care} alt="Care" onClick={() => changeEmoji(care)} />
                  </div>
                )}
                120
              </div>
              <div><img src={comments} alt="Comments" />45</div>
              <div className="share-button">
                <img src={share} alt="Share" onClick={() => setShareModalOpen(true)} />
                20
              </div>
            </div>
          </div>
        </div>

        <div className="post-container">
          <div className="post-row">
            <div className="user-profile">
              <img src={profile_pic} alt="User" />
              <div>
                <p>John Nicholson</p>
                <small>Public <i className="fa fa-caret-down"></i></small>
              </div>
              <a href="#"><i className="fa fa-ellipsis-vertical"></i></a>
            </div>
          </div>

          <div className="post-text">
            <p>Lorem ipsum dolor, <span>sit amet consectetur</span> adipisicing elit. Aliquid temporibus repudiandae repellendus consectetur
              cupiditate alias expedita debitis, delectus maxime a ea distinctio ipsam iure
              aperiam rerum voluptatum nam nesciunt culpa! <a href="#">#Web Development</a><a href="#">#Youtube Channel</a>
            </p>
            <img src="images/feed-image-1.png" alt="Post" className="post-img" />
          </div>

          <div className="post-row">
            <div className="activity-icons">
              <div 
                className="like-button"
                onMouseEnter={() => setShowEmojis(true)}
                onMouseLeave={() => setShowEmojis(false)}
              >
                <img id="likeButtonImg" src={selectedEmoji} alt="Like" />
                {showEmojis && (
                  <div className="emoji-options">
                    <img src={like} alt="Haha" onClick={() => changeEmoji(like)} />
                    <img src={haha} alt="Haha" onClick={() => changeEmoji(haha)} />
                    <img src={sad} alt="Sad" onClick={() => changeEmoji(sad)} />
                    <img src={wow} alt="Wow" onClick={() => changeEmoji(wow)} />
                    <img src={heart} alt="Heart" onClick={() => changeEmoji(heart)} />
                    <img src={angry} alt="Angry" onClick={() => changeEmoji(angry)} />
                    <img src={care} alt="Care" onClick={() => changeEmoji(care)} />
                  </div>
                )}
                120
              </div>
              <div><img src={comments} alt="Comments" />45</div>
              <div className="share-button">
                <img src={share} alt="Share" onClick={() => setShareModalOpen(true)} />
                20
              </div>
            </div>
          </div>
        </div>

        {/* Share Post Modal */}
        {isShareModalOpen && (
          <div id="shareModal" className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => closeModal(setShareModalOpen)}>&times;</span>
              <h1 style={{ textAlign: 'center', fontSize: '16px' }}>Share Post</h1>
              <div className="user-profile" style={{ marginBottom: '2%' }}>
                <img src={profile_pic} alt="User Image" />
                <div>
                  <p>John Nicholson</p>
                  <small onClick={() => toggleDropdown('shareDropdown')}>Public <i className="fa fa-caret-down"></i></small>
                  <div id="shareDropdown" className="dropdown-content">
                    <a href="#" onClick={() => setVisibility('Public', 'shareDropdown')}>Public</a>
                    <a href="#" onClick={() => setVisibility('Friends', 'shareDropdown')}>Friends</a>
                    <a href="#" onClick={() => setVisibility('Only Me', 'shareDropdown')}>Only Me</a>
                  </div>
                </div>
              </div>
              <textarea id="shareContent" placeholder="Say something about this..." cols={62}></textarea>
              <img src="images/feed-image-1.png" alt="Post Image" className="post-img" />
              <button type="button" onClick={submitSharePost}>Share Post</button>
            </div>
          </div>
        )}
      </div>

      <div className="sidebar-right">
        <div className="sidebar-title">
          <h4>Friend Requests</h4>
          <a href="#">See All</a>
        </div>

        <div className="friend-request">
          <div className="left-request">
            <img src={member_2} alt="Profile Image" />
          </div>
          <div className="right-request">
            <h4>John Doe</h4>
            <p><i className="fa fa-user"></i>2 mutual friends</p>
            <button className="confirm-btn">Confirm</button>
            <button className="decline-btn">Decline</button>
          </div>
        </div>

        <div className="friend-request">
          <div className="left-request">
            <img src={member_1} alt="Profile Image" />
          </div>
          <div className="right-request">
            <h4>Jane Smith</h4>
            <p><i className="fa fa-user"></i>5 mutual friends</p>
            <button className="confirm-btn">Confirm</button>
            <button className="decline-btn">Decline</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
