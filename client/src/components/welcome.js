import { useEffect, useState } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WelcomeSection = () => {
  const [index, setIndex] = useState(2); 
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  const cards = [
    {
      title: '155 Glorious Years',
      image: 'path/to/image1.jpg',
    },
    {
      title: 'Brilliant Faculty',
      image: 'path/to/image2.jpg',
    },
    {
      title: 'Excellent Infrastructure and Facilities',
      image: 'path/to/image3.jpg',
    },
    {
      title: 'Innovative Learning Methods',
      image: 'path/to/image4.jpg',
    },
    {
      title: 'Diverse Extracurricular Activities',
      image: 'path/to/image5.jpg',
    },
    {
      title: 'Strong Community and Values',
      image: 'path/to/image6.jpg',
    },
  ];

  const handleArrowClick = (direction) => {
    setIndex((prev) =>
      direction === 'left'
        ? (prev - 1 + cards.length) % cards.length
        : (prev + 1) % cards.length
    );
  };

  return (
    <div className="min-h-screen bg-green-700 flex flex-col items-center justify-center py-10 px-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-white text-4xl font-bold">
          Welcome to Bishop Cotton Boys School
        </h1>
        <p className="text-white mt-4 max-w-2xl mx-auto">
          After standing tall for 155 glorious years, Bishop Cotton Boys' School
          has won the accolades of the "Eton of the East" and stands out as
          Bangalore's leading school, one of India's top-ranked schools.
        </p>
      </div>

      {/* Cards Section */}
      <div className="relative carousel-wrapper flex items-center justify-center max-w-6xl mx-auto perspective">
        <button
          className="absolute left-0 z-10 text-white text-2xl focus:outline-none hover:opacity-75"
          onClick={() => handleArrowClick('left')}
        >
          &#10094; {/* Left Arrow */}
        </button>

        <div className="carousel-container flex items-center justify-center space-x-6">
          {cards.map((card, i) => {
            const isActive = i === index;
            const isNext = (i - index + cards.length) % cards.length === 1;
            const isPrev = (i - index + cards.length) % cards.length === cards.length - 1;

            return (
              <motion.div
                key={i}
                ref={ref}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: isActive ? 1 : 0.5, 
                  scale: isActive ? 1.1 : isNext || isPrev ? 0.9 : 0.8,
                  rotateY: isActive ? 0 : isNext ? -10 : 10,
                }}
                transition={{ duration: 0.5 }}
                className={`carousel-card bg-white rounded-lg p-6 shadow-lg transform transition-transform duration-700 ease-in-out ${isActive ? 'z-10' : 'z-0'}`}
                style={{
                  perspective: 1000,
                }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="rounded-lg mb-4"
                />
                <h2 className="text-green-800 text-center text-2xl font-bold">
                  {card.title}
                </h2>
              </motion.div>
            );
          })}
        </div>

        <button
          className="absolute right-0 z-10 text-white text-2xl focus:outline-none hover:opacity-75"
          onClick={() => handleArrowClick('right')}
        >
          &#10095; 
        </button>
      </div>
    </div>
  );
};

export default WelcomeSection;
