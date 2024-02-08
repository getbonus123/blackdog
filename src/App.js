import logo from './assets/logo.png';
import tg from './assets/telegram.svg';
import tw from './assets/twitter.svg';
import inst from './assets/insta.svg';
import mainDog from './assets/main.png';
import img1 from './assets/dog1.png';
import img2 from './assets/dog2.png'
import img3 from './assets/dog3.png'
import img4 from './assets/dog4.png'
import img5 from './assets/dog5.png'
import img6 from './assets/dog6.png'
import img7 from './assets/dog7.png'
import img8 from './assets/dog8.png'
import img9 from './assets/dog9.png'
import img10 from './assets/dog10.png'
import img11 from './assets/dog11.png'
import img12 from './assets/dog12.png'
import img13 from './assets/dog13.png'
import img14 from './assets/dog14.png'
import meme1 from './assets/meme1.png'
import meme2 from './assets/meme2.png'
import meme3 from './assets/meme3.png'
import meme4 from './assets/meme4.png'
import meme5 from './assets/meme5.png'
import desk from './assets/desktopmemes.png'
import './App.css';

function App() {
  const ticker = "GRUMPY"


  return (
    <div className="App">
      <div className="layout">
        <div className="main">
          <div className="logoBlock">
            <img alt="logo" className="logo" src={logo}/>
          </div>
          <div className="dogSocBtn">
            <img alt="dog" className="mainDog" src={mainDog}/>
            <div className="socialBlock">
              <a href="https://t.me/grumpycharlie"><img alt="telegram" className="social" src={tg}/></a>
              <a href="https://twitter.com/grumpycharlie_"><img alt="telegram" className="social" src={tw}/></a>
              <a href="https://www.instagram.com/charlie_the_griffon"><img alt="telegram" className="social" src={inst}/></a>
            </div>
            <div className="buttonBlock">
              <a href="https://raydium.io/"><button className="button">BUY ${ticker}</button></a>
            </div>
          </div>
        </div>
      </div>
      <div className="section2">
        <h2 className="heading">Charlie is always grumpy</h2>
        <div className="runningBlock">
          <div className="runningBlockInside">
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img1} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img2} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img3} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img4} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img5} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img6} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img7} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img1} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img2} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img3} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img4} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img5} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img6} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img7} />
            </div>
          </div>
        </div>
        <div className="runningBlock2">
          <div className="runningBlockInside2">
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img8} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img9} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img10} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img11} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img12} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img13} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img14} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img8} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img9} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img10} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img11} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img12} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img13} />
            </div>
            <div className="runningImgBlock">
              <img alt="dogge" className="runningImg" src={img14} />
            </div>
          </div>
        <div>
      </div>
      </div>
      <div className="section3">
          <h2 className="heading">WHY CHARLIE ALWAYS GRUMPY?</h2>
          <p className="subHeading">BECAUSE YOU ARE SITTING THERE AND JUST SMILING DOING NOTHING<br/>
TO GET YOUR LIFE SUCCESS , FIND GIRLFRIEND , BUILD A FAMILY.. LAME.<br/><br/>HE IS UPSET WITH YOU... DO SOMETHING! JUST DO IT!</p>
      </div>
      <div className="section4">
        <div className="videoHeadingBlock">
          <h2 className="heading">MEMES WITH CHARLIE</h2>
        </div>
        <div className="memeBlock">
          <img src={desk} alt="memes"/>
        </div>
        <div className="memeBlockMob">
          <div className="leftMemeBlock">
            <div className="leftRow1">
              <img src={meme1} alt="meme" className="memeImgRow1 img1"/>
              <img src={meme2} alt="meme" className="memeImgRow1 img2"/>
            </div>
            <div className="leftRow2">
              <img src={meme3} alt="meme" className="memeImgRow2 img3"/>
              <img src={meme4} alt="meme" className="memeImgRow2 img4"/>
            </div>
          </div>
          <div className="rightMemeBlock">
              <img src={meme5} alt="meme" className="memeImgCol img5"/>
          </div>
        </div>
      </div>
      <div className="copy">
      <p className="copyText">All Right Reserved $GRUMPY 2024</p>
    </div>
    </div>
    </div>
  );
}

export default App;
