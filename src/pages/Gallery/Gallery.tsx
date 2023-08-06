import {useState} from "react";
import './Gallery.scss'
import memes from "../../data/meme";
import {motion, AnimatePresence, wrap} from "framer-motion";
import { Button } from "../../components/Button/Button";

const variants = {
    initial: (direction: number) => {
      return {
        x: direction > 0 ? 800 : -800,
        opacity: 0,
      }
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction: number) => {
      return {
        x: direction > 0 ? -800 : 800,
        opacity: 0,
        transition: {
          x: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: .2 },
        },
      }
    },
  }

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

export const Gallery = () => {
    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, memes.length, page);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <div className="gallery" id='gallery'>
            <div className="gallery__container wrapper">
                <h2 className="component__title gallery__title">Meme</h2>

                <div className="gallery__item">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.img
                            variants={variants}
                            animate='animate'
                            initial='initial'
                            exit='exit'
                            src={memes[imageIndex]}
                            alt='slides'
                            className='gallery__image'
                            key={memes[imageIndex]}
                            custom={direction}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);

                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                        />
                    </AnimatePresence>

                    <Button className="button button__next" onClick={() => paginate(1)}>➜</Button>
                    <Button className="button button__prev" onClick={() => paginate(-1)}>➜</Button>
                </div>
            </div>
        </div>
    )
}