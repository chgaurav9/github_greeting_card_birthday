import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import ReactPlayer from 'react-player';
import './App.css';

const confettiColors = ['#ffcc00', '#ff6699', '#99ff99', '#3399ff', '#ff9966'];

const images = [
  '/IMG_2673.jpg',
  '/IMG_2681.jpg',
  '/IMG_7144.jpg',
  '/IMG_7180.jpg',
  '/IMG_7181.jpg',
  '/IMG_7234.jpg',
  '/IMG_7235.jpg',
  '/IMG_7236.jpg',
  '/IMG_7375.jpg',
  '/IMG_7376.jpg',
  '/IMG_7380.jpg',
  '/IMG_7388.jpg',
  '/IMG_7471.jpg',
  '/IMG_7512.jpg',
  '/IMG_7603.jpg',
  '/IMG_7609.jpg',
  '/IMG_7614.jpg',
  '/IMG_7624.jpg',
  '/IMG_7858.jpg',
  '/IMG_7860.jpg',
  '/IMG_7873.jpg',
  '/IMG_7912.jpg',
  '/IMG_7913.jpg',
  '/IMG_8104.jpg',
  '/IMG_8197.jpg',
  '/IMG_8199.jpg',
  '/IMG_8201.jpg',
  '/IMG_8216.jpg',
  '/IMG_8308.jpg',
  '/IMG_8319.jpg',
  '/IMG_8399.jpg',
  '/IMG_8404.jpg',
  '/IMG_8438.jpg',
  '/IMG_8494.jpg',
  '/IMG_8496.jpg',
  '/IMG_8584.jpg',
  '/IMG_8680.jpg',
  '/IMG_8687.jpg',
  '/IMG_8841.jpg',
  '/IMG_8921.jpg',
  '/IMG_8947.jpg',
  '/IMG_8982.jpg',
  '/IMG_9029.jpg',
  '/IMG_9038.jpg',
  '/IMG_9114.jpg',
  '/IMG_9155.jpg',
  '/IMG_9167.jpg',
  '/IMG_9232.jpg',
  '/IMG_9238.jpg',
  '/IMG_9253.jpg',
  '/logo192.png',
  // Additional images
  '/PHOTO-2023-07-16-21-56-52.jpg',
  '/PHOTO-2023-07-16-21-58-42.jpg',
  '/PHOTO-2023-07-16-22-01-42.jpg',
  '/PHOTO-2023-07-23-19-33-26.jpg',
  '/PHOTO-2023-08-14-21-59-48.jpg',
  '/PHOTO-2023-08-15-16-11-21.jpg',
  '/PHOTO-2023-08-16-16-00-23.jpg',
  '/PHOTO-2023-08-23-00-57-02.jpg',
  '/PHOTO-2023-08-23-00-57-27.jpg',
  '/PHOTO-2023-08-23-22-39-57.jpg',
  '/PHOTO-2023-08-29-00-15-13.jpg',
  '/PHOTO-2023-08-29-00-15-21.jpg',
  '/PHOTO-2023-08-29-00-15-29.jpg',
  '/PHOTO-2023-08-29-21-28-23.jpg',
  '/PHOTO-2023-09-07-22-21-37.jpg',
  '/PHOTO-2023-09-07-22-21-38 2.jpg',
  '/PHOTO-2023-09-07-22-21-38.jpg',
  '/PHOTO-2023-09-07-22-26-07.jpg',
  '/PHOTO-2023-09-12-13-42-03.jpg',
  '/PHOTO-2023-09-12-13-44-01.jpg',
  '/PHOTO-2023-09-12-13-59-14.jpg',
  '/PHOTO-2023-09-12-14-00-26.jpg',
  '/PHOTO-2023-09-12-14-06-24.jpg',
  '/PHOTO-2023-09-12-14-09-44.jpg',
  '/PHOTO-2023-09-12-14-10-31.jpg',
  '/PHOTO-2023-09-12-14-15-41.jpg',
  '/PHOTO-2023-09-12-14-17-25.jpg',
  '/PHOTO-2023-09-16-21-35-57.jpg',
];

// Shuffle function for arrays
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

function App() {
  const [isBirthday, setIsBirthday] = useState(true);
  const [compliments, setCompliments] = useState([]);
  const [compliment, setCompliment] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showApologyButton, setShowApologyButton] = useState(false);

  useEffect(() => {
    const initialCompliments = [
      `You are amazing!`,
      `I appreciate you so much!`,
      `You make every day special.`,
      `You have a heart of gold.`,
      `Your kindness knows no bounds.`,
      `You always bring a smile to my face.`,
      `Your positive energy is contagious.`,
      `You're a true gem.`,
      `Your presence makes a difference.`,
      `You radiate beauty, inside and out.`,
      `You're a beacon of light.`,
      `You have a wonderful sense of humor.`,
      `Your strength is admirable.`,
      `You're a fantastic friend.`,
      `You're so thoughtful and considerate.`,
      `You're a joy to be around.`,
      `Your resilience is inspiring.`,
      `You're a true blessing in my life.`,
      `Your generosity knows no limits.`,
      `You're a ray of sunshine.`,
      `Your positive attitude is uplifting.`,
      `You're incredibly talented.`,
      'You have a heart as big as the ocean.',
      'Your smile lights up the room.',
      'You make the world a better place.',
      `You're a true friend in every sense.`,
      `Your passion is contagious.`,
      `You're a remarkable person.`,
      `You make a significant impact.`,
      `Your dedication is commendable.`,
      `You're a beautiful soul.`,
      `Your presence brings joy to others.`,
      `You're one in a million.`,
      `You're a beacon of positivity.`,
      `You have an incredible work ethic.`,
      `You're a true example of kindness.`,
      `Your perseverance is admirable.`,
      `You're a genuine and authentic person.`,
      `You have a heart full of love.`,
      `Your friendship means the world to me.`,
      `You're an absolute delight.`,
      `You handle challenges with grace.`,
      `You're a source of inspiration for many.`,
      `Your generosity knows no bounds.`,
      `You're a beautiful person, inside and out.`,
      `You have a heart of gold.`,
      `You're a fantastic listener.`,
      `Your compassion knows no limits.`,
      `You're a true gift to those around you.`,
      `You have an incredible spirit.`,
      `You're a source of strength for others.`,
      `Your positive outlook is contagious.`,
      `You're an absolute treasure.`,
      `You have an unwavering resolve.`,
      `You're a beacon of hope for others.`,
      `Your sincerity is refreshing.`,
      `You're a true original.`,
      `You make a difference in the world.`,
      `Your creativity knows no bounds.`,
      `You're a pillar of strength.`,
      `You're a true team player.`,
      `Your generosity is inspiring.`,
      `You're a constant source of positivity.`,
      `You're an extraordinary person.`,
      `Your humility is truly admirable.`,
      `You're a shining example of kindness.`,
      `You have a magnetic personality.`,
      `You're a source of inspiration for many.`,
      `Your dedication is truly commendable.`,
      `You're a true role model.`,
      `Your selflessness is truly remarkable.`,
      `You're a source of joy and happiness.`,
      `Your kindness leaves a lasting impact.`,
      `You're an absolute joy to be around.`,
      `You're a true force for good in the world.`,
      `Your optimism is contagious.`,
      `You're a ray of sunshine on cloudy days.`,
      `You have a heart that's as big as the sky.`,
      `You're a beacon of positivity in the world.`

    ];
    setCompliments(shuffleArray([...initialCompliments]));
    shuffleArray(images);
  }, []);

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []); // Run this effect only once on component mount

  const animateBalloons = () => {
    const balloons = document.querySelectorAll('.balloon');
    // Add animation logic for balloons
  };

  const handleCompliment = () => {
    // Check if compliments array is empty, then reshuffle
    if (compliments.length === 0) {
      const initialCompliments = [
        // ... (all your compliments)
      ];
      setCompliments(shuffleArray([...initialCompliments]));
    }
    const randomCompliment = compliments.pop();
    setCompliment(randomCompliment);
  };

  return (
    <div className="App">
      <ReactPlayer
        url={process.env.PUBLIC_URL + '/Sam Smith - Fire On Fire (From _Watership Down_).mp3'}
        playing
        loop
        volume={0.5}
        muted={!isBirthday}
        height="0"
        width="0"
      />
      <animated.div style={cardAnimation} className={`card ${isBirthday ? 'birthday' : 'apology'}`}>
        <h1 className={isBirthday ? 'birthday-title' : 'apology-title'}>
          {isBirthday ? 'Happy Birthday Umu!' : 'I\'m Sorry'}
        </h1>
        <p className={isBirthday ? 'birthday-message' : 'apology-message'}>
          {isBirthday ? 'Wishing you a fantastic day!' : 'I apologize, let me make it up to you.'}
        </p>
        {isBirthday && (
          <>
            {compliment && (
              <p className="compliment" style={{ marginBottom: '5px' }}>
                <strong>{compliment}</strong>
              </p>
            )}
            <div style={{ marginTop: '10px', marginBottom: '10px' }}>
              <button onClick={handleCompliment}>Give a Compliment</button>
            </div>
            <div className="cake-container">
              <img src={process.env.PUBLIC_URL + images[currentImageIndex]} alt="Uma" className="cake-image" />
            </div>
          </>
        )}
        {showApologyButton && (
          <button onClick={() => setIsBirthday(!isBirthday)}>
            {isBirthday ? 'Switch to Apology' : 'Switch to Birthday'}
          </button>
        )}
        <label>
          <input type="checkbox" checked={showApologyButton} onChange={() => setShowApologyButton(!showApologyButton)} />
        </label>
      </animated.div>
    </div>
  );
}

export default App;
