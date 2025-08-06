import { useState, useEffect } from 'react';
import { Box, Image } from '@chakra-ui/react';

function getThreeUniqueIndices(length) {
  const indices = [];
  while (indices.length < 3 && indices.length < length) {
    const idx = Math.floor(Math.random() * length);
    if (!indices.includes(idx)) indices.push(idx);
  }
  return indices;
}

const ThreeRowCarousel = ({ images, autoPlay = true, interval = 3000 }) => {
  const [rowIndices, setRowIndices] = useState(() => getThreeUniqueIndices(images.length));
  const [currentIndex, setCurrentIndex] = useState(0);

  // Desktop: Change all three images to unique ones on each transition
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setRowIndices(getThreeUniqueIndices(images.length));
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  // Mobile: Single timer for single image
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  return (
    <Box position="relative" w="100%" maxW="800px" mx="auto">
      {/* Desktop: Three Row, One Column Layout */}
      <Box display={{ base: "none", lg: "block" }}>
        {[0, 1, 2].map((row) => (
          <Box mb={row < 2 ? 6 : 0} key={row}>
            <Box
              w="100%"
              h="280px"
              borderRadius="xl"
              overflow="hidden"
              boxShadow="lg"
              transition="all 0.3s ease"
              _hover={{
                transform: "scale(1.02)",
                boxShadow: "2xl",
              }}
            >
              <Image
                src={images[rowIndices[row]]}
                alt={`Carousel Image ${row + 1}`}
                w="100%"
                h="100%"
                objectFit="cover"
                transition="transform 0.3s ease"
              />
            </Box>
          </Box>
        ))}
      </Box>

      {/* Mobile: Single Row Layout */}
      <Box display={{ base: "block", lg: "none" }}>
        <Box
          w="100%"
          h="350px"
          borderRadius="xl"
          overflow="hidden"
          boxShadow="lg"
          transition="all 0.3s ease"
          _hover={{
            transform: "scale(1.02)",
            boxShadow: "2xl",
          }}
        >
          <Image
            src={images[currentIndex]}
            alt={`Mobile Carousel Image`}
            w="100%"
            h="100%"
            objectFit="cover"
            transition="transform 1s ease"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ThreeRowCarousel;
