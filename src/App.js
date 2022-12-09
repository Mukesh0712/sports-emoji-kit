import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [emoji, setEmoji] = useState('🏇');
  const [emojiColor, setEmojiColor] = useState("white");
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

            <div className='main-emoji-container'>
              <div className='main-emoji'>
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
              <div className='color bg-white' onClick={() => { setEmojiColor("white") }}></div>
              <div className='color bg-navy' onClick={() => { setEmojiColor("navy") }}></div>
              <div className='color bg-greenyellow' onClick={() => { setEmojiColor("greenyellow") }}></div>
              <div className='color bg-cyan' onClick={() => { setEmojiColor("cyan") }}></div>
              <div className='color bg-red' onClick={() => { setEmojiColor("red") }}></div>
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
    </>
  )
}

export default App
