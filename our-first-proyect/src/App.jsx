import './App.css';
import discordLogo from './assets/logo.png';
import burguerMenu from './assets/burguer.png';
import peopleImg from './assets/peopleImg.png';

function App() {
  return (
    <>
      <nav>
        <img src={discordLogo} alt="logo"/>
        <img src={burguerMenu} alt="burguer"/>
      </nav>
      <h1>IMAGE A 
        <br />
        <br />
        PLACE...</h1>
      <p>
        ...where you can belong to a school club, a gaming group,or a
        worldwide art community. Where just you and a handful of
        friends can spend time together. A place that makes it easy to 
        talk every day and hang out more often.
      </p>
      <section id="btn-container">
        <button>Download for Mac</button>
        <button id="discord-btn">Open Discord in your Browser</button>
      </section>
      <section>
        <img src={peopleImg} alt="people image" className='people-img'/>
      </section>
    </>
  );
}

export default App;
