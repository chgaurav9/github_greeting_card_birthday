import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import gsap from 'gsap'; 
import './App.css';

const confettiColors = ['#ffcc00', '#ff6699', '#99ff99', '#3399ff', '#ff9966'];

function App() {
  const [isBirthday, setIsBirthday] = useState(true);

  const cardAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0%)',
    from: { opacity: 0, transform: 'translateY(-50%)' },
    config: config.wobbly,
  });

  const confettiAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(0px)' },
    to: { opacity: 1, transform: 'translateY(300px)' },
    config: config.stiff,
    reset: isBirthday,
  });

  useEffect(() => {
    if (isBirthday) {
      animateBalloons();
    }
  }, [isBirthday]);

  const animateBalloons = () => {
    const balloons = document.querySelectorAll('.balloon');

    gsap.to(balloons, {
      y: -50, // Adjust this value for the height of the balloon animation
      duration: 2,
      stagger: 0.2, // Time delay between each balloon animation
      ease: 'elastic.out(1, 0.3)', // Use your preferred easing function
    });
  };

  return (
    <div className="App">
      <animated.div style={cardAnimation} className={`card ${isBirthday ? 'birthday' : 'apology'}`}>
        <h1 className={isBirthday ? 'birthday-title' : 'apology-title'}>
          {isBirthday ? 'Happy Birthday Umu!' : 'I\'m Sorry'}
        </h1>
        <p className={isBirthday ? 'birthday-message' : 'apology-message'}>
          {isBirthday ? 'Wishing you a fantastic day!' : 'I apologize, let me make it up to you.'}
        </p>
        {isBirthday && (
          <>
            <animated.div style={confettiAnimation} className="confetti-container">
              {confettiColors.map((color, index) => (
                <div key={index} className="confetti" style={{ backgroundColor: color }} />
              ))}
            </animated.div>
            <div className="cake-container">
              <img src={process.env.PUBLIC_URL + '/IMG_9253.jpg'} alt="Birthday Cake" className="cake-image" />
            </div>
          </>
        )}
        <button onClick={() => setIsBirthday(!isBirthday)}>
          {isBirthday ? 'Switch to Apology' : 'Switch to Birthday'}
        </button>
      </animated.div>
    </div>
  );
}

export default App;
