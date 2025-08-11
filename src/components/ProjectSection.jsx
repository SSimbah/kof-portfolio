import { Box, VStack, Heading, Text, HStack, Link, Button, Image, useColorModeValue, Card } from "@chakra-ui/react";

const ProjectsSection = () => {
  const buttonColor = useColorModeValue("gray.800", "white");
  const buttonHoverBg = useColorModeValue("gray.100", "#3d3d3d");
  const homeBg = useColorModeValue("gray.50", "#121212");
  const headingColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.600", "white");
  const sectionBg1 = useColorModeValue("white", "#121212");
  const sectionBg2 = useColorModeValue("gray.50", "#3d3d3d");
  const projects = [
    {
      title: "Project 1 Title",
      description:
        "A short description of the project goes here. It explains what the project is about, the technologies used, and its purpose.",
      image: "/assets/avatar.jpg",
      codeLink: "https://github.com/yourprojectlink",
      demoLink: "https://yourprojectdemo.com",
    },
    {
      title: "Project 2 Title",
      description:
        "Another project description goes here, highlighting key features and functionality.",
      image: "/assets/avatar.jpg",
      codeLink: "#",
      demoLink: "#",
    },
    // Add more projects here...
  ];

  return (
    <Box id="projects" minH="60vh" bg={sectionBg1}>
      <VStack spacing={10} px={{ base: 4, md: 8 }}>

        {projects.map((project, index) => (
          <Card
            key={index}
            direction={{ base: "column", md: "row" }}
            overflow="hidden"
            variant="outline"
            w="100%"
            maxW="900px"
            bg={sectionBg2}
            boxShadow="md"
            borderRadius="xl"
            transition="all 0.3s"
            _hover={{ boxShadow: "xl", transform: "translateY(-4px)" }}
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", md: "300px" }}
              src={project.image}
              alt={project.title}
              transition="transform 0.3s"
              _hover={{ transform: "scale(1.05)" }}
            />

            <VStack align="start" p={6} spacing={3}>
              <Heading size="md" color={headingColor}>
                {project.title}
              </Heading>
              <Text color={textColor}>{project.description}</Text>

              <HStack>
                {project.codeLink && (
                  <Button
                    as={Link}
                    href={project.codeLink}
                    target="_blank"
                    size="sm"
                    colorScheme="blue"
                  >
                    View Code
                  </Button>
                )}
                {project.demoLink && (
                  <Button
                    as={Link}
                    href={project.demoLink}
                    target="_blank"
                    size="sm"
                    colorScheme="teal"
                  >
                    Live Demo
                  </Button>
                )}
              </HStack>
            </VStack>
          </Card>
        ))}
      </VStack>
    </Box>
  );
};

export default ProjectsSection;
