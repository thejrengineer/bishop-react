import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger animation when 20% of the section is in view
    triggerOnce: false, // Ensures it re-triggers each time it scrolls into view
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 px-4">
      <div className="max-w-3xl space-y-10">
        {/* About the Institution */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg p-6 border-4 neon-border"
        >
          <h2 className="text-green-800 text-2xl font-bold mb-4 text-center">About the Institution</h2>
          <p className="font-bold text-center">NEC DEXTRORSUM, NEC SINISTRORSUM.</p>
          <p className="text-gray-700 mt-4 text-center">
            This is the school motto which means "Neither to the right, nor to the left". This signifies that a student
            must always keep going "On Straight On" with focus and determination to achieve what he must. Any obstacle
            that comes in the path should be overcome with perseverance and one should not deviate from his ultimate aim
            in life.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg p-6 border-4 neon-border"
        >
          <h2 className="text-green-800 text-2xl font-bold mb-4 text-center">Vision</h2>
          <p className="text-gray-700 text-center">
            Cottons has always stood for discipline and the moulding of character of its students to ensure that it will
            not crumble when tested in the crucible of adulthood. This institution prides itself in imparting quality
            education while preparing the students for the competitive world outside the classroom through its
            meticulously envisioned House system.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-lg p-6 border-4 neon-border"
        >
          <h2 className="text-green-800 text-2xl font-bold mb-4 text-center">Mission</h2>
          <p className="font-bold text-center">"ON STRAIGHT ON! ON COTTONIANS ON!"</p>
          <p className="text-gray-700 mt-4 text-center">
            The School focuses on developing leadership qualities, preparing students to lead with responsibility and
            integrity. Its goal is to shape future leaders who will contribute to a better India, capable of standing
            proud on the global stage.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
