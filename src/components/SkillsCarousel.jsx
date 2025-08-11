// components/SkillsCarousel.jsx
import React, { useRef, useEffect, useState } from "react";
import { Box, HStack, Text, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import { FaJs, FaReact, FaNodeJs, FaGitAlt, FaWordpress, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiChakraui, SiDotnet, SiIonic, SiExpress, SiMongodb } from "react-icons/si";

export default function SkillsCarousel() {
  const sectionBg2 = useColorModeValue("gray.50", "#3d3d3d");

  const skills = [
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Chakra UI", icon: <SiChakraui /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "WordPress", icon: <FaWordpress /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "ASP.NET", icon: <SiDotnet /> },
    { name: "Ionic", icon: <SiIonic /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
  ];

  const doubled = [...skills, ...skills];
  const iconSize = useBreakpointValue({ base: "30px", md: "40px" });

  const topRowRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (topRowRef.current) {
      setScrollWidth(topRowRef.current.scrollWidth / 2); // width of one set
    }
  }, []);

  const rowStyle = {
    whiteSpace: "nowrap",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
  };

  const innerStyle = (reverse = false) => ({
    display: "inline-flex",
    alignItems: "center",
    width: "max-content",
    animation: `${reverse ? "scrollReverse" : "scroll"} ${scrollWidth / 40}s linear infinite`,
  });

  return (
    <Box mt={8} width={{ base: "100%", md: "60%" }} position="relative">
      {/* Fade mask */}
      <Box
        position="absolute"
        top={0}
        left={0}
        h="100%"
        w="100%"
        pointerEvents="none"
        zIndex={1}
        bgGradient={`linear(to-r, ${sectionBg2} 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%, ${sectionBg2} 100%)`}
      />

      {/* Top row */}
      <Box sx={rowStyle}>
        <Box ref={topRowRef} sx={innerStyle(false)}>
          <HStack spacing={10}>
            {doubled.map((skill, idx) => (
              <Box
                key={`top-${idx}`}
                display="inline-flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                minW="70px"
              >
                <Box fontSize={iconSize} color="white">
                  {skill.icon}
                </Box>
                <Text fontSize="xs" mt={1}>
                  {skill.name}
                </Text>
              </Box>
            ))}
          </HStack>
        </Box>
      </Box>

      {/* Bottom row */}
      <Box mt={8} sx={rowStyle}>
        <Box sx={innerStyle(true)}>
          <HStack spacing={10}>
            {doubled.map((skill, idx) => (
              <Box
                key={`bot-${idx}`}
                display="inline-flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                minW="70px"
              >
                <Box fontSize={iconSize} color="white">
                  {skill.icon}
                </Box>
                <Text fontSize="xs" mt={1}>
                  {skill.name}
                </Text>
              </Box>
            ))}
          </HStack>
        </Box>
      </Box>

      {/* Dynamic keyframes */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${scrollWidth}px);
          }
        }
        @keyframes scrollReverse {
          0% {
            transform: translateX(-${scrollWidth}px);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </Box>
  );
}
