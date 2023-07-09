import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, Embla, useAnimationOffsetEffect } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Image } from '@mantine/core';
import { StepItem } from '@src/pages/instructions/ui/HostingInstructions/ui/SingleHostingInstruction/SingleHostingInstruction';
import { useCallback, useEffect, useState } from 'react';
import styles from './HostingSlider.module.scss';

interface HostingSliderProps {
  steps: StepItem[];
}

const HostingSlider = ({ steps }: HostingSliderProps) => {
  const [embla, setEmbla] = useState<Embla | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  // useAnimationOffsetEffect(embla, 0);
  const isMobileQuery = useMediaQuery('(max-width: 767.98px)');

  const handleScroll = useCallback(() => {
    if (!embla) return;
    setCurrentSlideIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (embla) {
      embla.on('select', handleScroll);
      setCurrentSlideIndex(embla.selectedScrollSnap());
    }
  }, [embla]);

  const slides = steps.map((step) => (
    <Carousel.Slide key={step.image}>
      {/* <HostingSlide imageUrl={step.image} text={step.text} /> */}
      <Image radius="16px" src={step.image} />
    </Carousel.Slide>
  ));

  return (
    <div className={styles.root}>
      <Carousel
        mt={30}
        withControls={!isMobileQuery}
        controlsOffset={34}
        controlSize={50}
        slideSize="90%"
        breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
        slideGap={20}
        withIndicators
        nextControlIcon={<ChevronRight size={36} />}
        previousControlIcon={<ChevronLeft size={36} />}
        getEmblaApi={setEmbla}
        styles={{
          control: {
            borderRadius: '16px',
            '&[data-inactive]': {
              opacity: 0,
              cursor: 'default',
            },
          },
          indicators: {
            bottom: -26,
          },
          indicator: {
            height: '10px',
            width: '10px',
            opacity: 1,
            backgroundColor: '#2C2D30',
            '&[data-active]': {
              backgroundColor: '#FBB26A',
            },
          },
        }}
      >
        {slides}
      </Carousel>
      <div className={styles.imageCaption}>{steps[currentSlideIndex].text}</div>
    </div>
  );
};

export default HostingSlider;
