import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [emoji, setEmoji] = useState('🏇');
  const [emojiColor, setEmojiColor] = useState("transparent");
  const [emojiSize, setEmojiSize] = useState(100);
  const [emojiDeg, setEmojiDeg] = useState(0);

  return (
    <>
      <div className='container'>

        <div className='heading-container'>
          <div className='heading'>Sports Emoji Kit</div>
        </div>

        <div className='sub-container' >

          <div className='sub-container-1'>
            <div>
              <div className='main-emoji-container' style={{ backgroundColor: emojiColor, transform: `rotate(${emojiDeg * 3.6}deg)` }}>
                <div className='main-emoji' style={{fontSize: `${emojiSize * 2}px`}}>
                  {emoji}
                </div>
              </div>


              <div className='emoji-container'>
                <div className='emoji' onClick={() => { setEmoji('🏇') }}>🏇</div>
                <div className='emoji' onClick={() => { setEmoji('🏌️‍♂️') }}>🏌️‍♂️</div>
                <div className='emoji' onClick={() => { setEmoji('🚴‍♂️') }}>🚴‍♂️</div>
                <div className='emoji' onClick={() => { setEmoji('🤾‍♂️') }}>🤾‍♂️</div>
                <div className='emoji' onClick={() => { setEmoji('🏊‍♂️') }}>🏊‍♂️</div>
              </div>

            </div>

            <div className='sub-container-2'>

              <div className='color-container'>
                <div>
                  <div className='color bg-black' onClick={() => { setEmojiColor("transparent") }}></div>
                  <div className='color bg-navy' onClick={() => { setEmojiColor("navy") }}></div>
                  <div className='color bg-greenyellow' onClick={() => { setEmojiColor("greenyellow") }}></div>
                  <div className='color bg-cyan' onClick={() => { setEmojiColor("cyan") }}></div>
                  <div className='color bg-red' onClick={() => { setEmojiColor("red") }}></div>
                </div>
                <div>
                  <div className='color bg-black' onClick={() => { setEmojiColor("orange") }}></div>
                  <div className='color bg-navy' onClick={() => { setEmojiColor("yellow") }}></div>
                  <div className='color bg-greenyellow' onClick={() => { setEmojiColor("green") }}></div>
                  <div className='color bg-cyan' onClick={() => { setEmojiColor("blue") }}></div>
                  <div className='color bg-red' onClick={() => { setEmojiColor("indigo") }}></div>
                </div>
                <div>
                  <div className='color bg-black' onClick={() => { setEmojiColor("violet") }}></div>
                  <div className='color bg-navy' onClick={() => { setEmojiColor("purple") }}></div>
                  <div className='color bg-greenyellow' onClick={() => { setEmojiColor("greenyellow") }}></div>
                  <div className='color bg-cyan' onClick={() => { setEmojiColor("cyan") }}></div>
                  <div className='color bg-red' onClick={() => { setEmojiColor("red") }}></div>
                </div>
              </div>

              <div className='size-container'>

                <input type="range" className='size-slider' onChange={(e) => { setEmojiSize(e.target.value) }} />

              </div>

              <div className='size-container'>

                <input type="range" className='size-slider' onChange={(e) => { setEmojiDeg(e.target.value) }} />

              </div>

          </div>
          </div>

        </div>
      </div>
      </>
      )
}

      export default App
