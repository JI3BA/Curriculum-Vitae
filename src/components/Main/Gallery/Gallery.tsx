import { useState } from "react";
import './Gallery.scss'
import memes from "../../../data/meme";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../Button/Button";

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

export const Gallery = () => {
    const [index, setIndex] = useState<number>(0)
    const [direction, setDirection] = useState<number>(0)

    function nextStep() {
        setDirection(1)
        if (index === memes.length - 1) {
        setIndex(0)
        return
        }
        setIndex(index + 1)
    }

    function prevStep() {
        setDirection(-1)
        if (index === 0) {
        setIndex(memes.length - 1)
        return
        }
        setIndex(index - 1)
    }

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
                            src={memes[index]}
                            alt='slides'
                            className='gallery__image'
                            key={memes[index]}
                            custom={direction}
                        />
                    </AnimatePresence>

                    <Button className="button button__next" onClick={nextStep}>➜</Button>
                    <Button className="button button__prev" onClick={prevStep}>➜</Button>
                </div>
            </div>
        </div>
    )
}