import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, Embla, useAnimationOffsetEffect } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Image } from '@mantine/core';
import { StepItem } from '@src/pages/instructions/ui/HostingInstructions/ui/SingleHostingInstruction/SingleHostingInstruction';
import { useCallback, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import styles from './HostingSlider.module.scss';

interface HostingSliderProps {
  steps: StepItem[];
}

const HostingSlider = ({ steps }: HostingSliderProps) => {
  const [embla, setEmbla] = useState<Embla | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  // const [tweenValues, setTweenValues] = useState<number[]>([]);

  // const TWEEN_FACTOR = 1;

  // const numberWithinRange = (number: number, min: number, max: number): number =>
  //   Math.min(Math.max(number, min), max);

  // useAnimationOffsetEffect(embla, 0);

  const isMobileQuery = useMediaQuery('(max-width: 1023.98px)');

  const handleScroll = useCallback(() => {
    if (!embla) return;
    setCurrentSlideIndex(embla.selectedScrollSnap());
  }, [embla]);

  // const onScroll = useCallback(() => {
  //   if (!embla) return;
  //
  //   const engine = embla.internalEngine();
  //   const scrollProgress = embla.scrollProgress();
  //
  //   const tweenStyles = embla.scrollSnapList().map((scrollSnap, index) => {
  //     let diffToTarget = scrollSnap - scrollProgress;
  //
  //     if (engine.options.loop) {
  //       engine.slideLooper.loopPoints.forEach((loopItem) => {
  //         const target = loopItem.target();
  //         if (index === loopItem.index && target !== 0) {
  //           const sign = Math.sign(target);
  //           if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
  //           if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
  //         }
  //       });
  //     }
  //     const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
  //     return numberWithinRange(tweenValue, 0, 1);
  //   });
  //   setTweenValues(tweenStyles);
  // }, [embla, setTweenValues]);

  // useEffect(() => {
  //   if (!embla) return;
  //
  //   onScroll();
  //   embla.on('scroll', () => {
  //     flushSync(() => onScroll());
  //   });
  //   embla.on('reInit', onScroll);
  // }, [embla, onScroll]);

  useEffect(() => {
    if (embla) {
      embla.on('select', handleScroll);
      setCurrentSlideIndex(embla.selectedScrollSnap());
    }
  }, [embla]);

  return (
    <>
      <div className={styles.carouselWrapper}>
        <Carousel
          mt={30}
          withControls={!isMobileQuery}
          controlsOffset={0}
          controlSize={50}
          slideSize="90%"
          breakpoints={[{ maxWidth: 'sm', slideSize: '90%', slideGap: 6 }]}
          slideGap={16}
          withIndicators
          nextControlIcon={<ChevronRight size={36} />}
          previousControlIcon={<ChevronLeft size={36} />}
          getEmblaApi={setEmbla}
          classNames={{
            controls: styles.crslControls,
            control: styles.crslControl,
            indicators: styles.crslIndicators,
            indicator: styles.crslIndicator,
          }}
        >
          {/* {slides} */}
          {steps.map((step, stepIndex) => (
            <Carousel.Slide
              key={stepIndex}
              // style={{
              //   ...(tweenValues.length && { opacity: tweenValues[stepIndex] }),
              // }}
            >
              <Image radius="16px" src={step.image} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
      <div className={styles.imageCaption}>{steps[currentSlideIndex].text}</div>
    </>
  );
};

export default HostingSlider;
