import React from 'react';
import './HamsterKombat.css'; 

function App() {
  return (
    <div className="app">
      <div className="header">
        <span className="back-arrow">←</span>
        <h1>Hamster Kombat</h1>
        <span className="menu">⋮</span>
      </div>
      <div className="content">
        <h2>Invite friends!</h2>
        <p>You and your friend will receive bonuses</p>
        <div className="invite-option">
          <div className="invite-icon">🎁</div>
          <div className="invite-details">
            <h3>Invite a friend</h3>
            <p>+5,000 for you and your friend</p>
          </div>
        </div>
        <div className="invite-option">
          <div className="invite-icon">🎁</div>
          <div className="invite-details">
            <h3>Invite a friend with Telegram Premium</h3>
            <p>+25,000 for you and your friend</p>
          </div>
        </div>
        <a href="#" className="more-bonuses">More bonuses</a>
        <h3>List of your friends (5)</h3>
        <div className="friend-list">
          <div className="friend">
            <div className="friend-icon">🐹</div>
            <div className="friend-details">
              <h4>Е'тибор Рахмонова</h4>
              <p>Gold · 170 (37.77K)</p>
              <p>+55K</p>
            </div>
          </div>
        </div>
        <button className="invite-button">Invite a friend</button>
      </div>
      <div className="footer">
        <span>🏦 Exchange</span>
        <span>⛏️ Mine</span>
        <span>👥 Friends</span>
        <span>💰 Earn</span>
        <span>🎁 Airdrop</span>
      </div>
    </div>
  );
}

export default App;
