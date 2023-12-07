
import './App.css';
import gtpLogo from './assets/chatgpt.svg'
import addBtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg'
import sendBtn from './assets/send.svg'
import userIcon from './assets/user-icon.png'
import gptImgLogo from './assets/chatgptLogo.svg'

function App() {
  return (
    <div className="App">

      <div className="sidebar">
        <div className="upparSide">
          <div className="upparSideTop"><img src={gtpLogo} alt="Logo" className="logo" /><span><div className="brand"></div></span>ChatGpt</div>
          <button className="midBtn"><img src={addBtn} alt="New Chat" className="addBtn" />New Chat</button>
          <div className="upperSideBottom">
            <button className="query"><img src={msgIcon} alt="Quit" /> What is Progrming ?</button>
            <button className="query"><img src={msgIcon} alt="Quit" /> What to use an api ?</button>
          </div>

        </div>
        <div className="lowerSide">
          <div className="listItem"><img src={home} alt="" className="listitemImg" />HOME</div>
          <div className="listItem"><img src={saved} alt="" className="listitemImg" />SAVED</div>
          <div className="listItem"><img src={rocket} alt="" className="listitemImg" />Upgrade to Pro</div>

        </div>

      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className='chatimg' src={userIcon} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequatur quod reprehenderit esse! Error, repellat rerum! Quibusdam modi nesciunt expedita.</p>
          </div>
          <div className="chat bot">
            <img className='chatimg' src={gptImgLogo} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ut fugiat id adipisci asperiores delectus accusamus similique blanditiis nulla possimus assumenda necessitatibus, voluptates iusto aut facilis quas cumque dolorum quo ratione quasi corrupti doloremque animi velit? Tempora, velit ex numquam maiores consectetur optio non obcaecati architecto at magni eveniet cum exercitationem asperiores quo provident tempore beatae laborum, dolore libero eos, dolor consequuntur voluptate nihil similique? Perferendis, placeat! Praesentium sequi at sed consequatur ipsum, quia necessitatibus soluta ducimus adipisci maiores commodi rem ab, accusamus modi nihil. Adipisci aspernatur perferendis repudiandae commodi quos eligendi deserunt rem quaerat reprehenderit? Ratione numquam soluta et!</p>
          </div>

        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder='Send a message...' /> <button className="send"><img src={sendBtn} alt="Send" /></button>
          </div>
          <p>ChatGPT can make mistakes. Consider checking important information.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
