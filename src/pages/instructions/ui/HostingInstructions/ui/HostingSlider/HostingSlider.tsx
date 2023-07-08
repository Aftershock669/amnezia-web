import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, Embla } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Image } from '@mantine/core';
import { StepItem } from '@src/pages/instructions/ui/HostingInstructions/ui/SingleHostingInstruction/SingleHostingInstruction';
import { useState } from 'react';
import styles from './HostingSlider.module.scss';

interface HostingSliderProps {
  steps: StepItem[];
}

const HostingSlider = ({ steps }: HostingSliderProps) => {
  const isMobile = useMediaQuery('(max-width: 767.98px)');

  // const [embla, setEmbla] = useState<Embla | null>(null);

  const slides = steps.map((step) => (
    <Carousel.Slide key={step.image}>
      <Image radius="16px" src={step.image} />
    </Carousel.Slide>
  ));

  return (
    <div className={styles.root}>
      <Carousel
        mt={30}
        withControls={!isMobile}
        controlsOffset={34}
        controlSize={50}
        slideSize={isMobile ? '100%' : '90%'}
        slideGap={20}
        withIndicators
        nextControlIcon={<ChevronRight size={36} />}
        previousControlIcon={<ChevronLeft size={36} />}
        // getEmblaApi={setEmbla}
        styles={{
          // container: {
          //   '& > :first-child, & > :last-child': {
          //     opacity: 0.3,
          //   },
          // },
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
    </div>
  );
};

export default HostingSlider;
