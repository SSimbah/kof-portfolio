import {
  Box,
  VStack,
  Heading,
  Text,
  HStack,
  Image,
  useColorModeValue,
  Card,
  Badge
} from "@chakra-ui/react";

const ProjectsSection = () => {
  const headingColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.600", "white");
  const sectionBg1 = useColorModeValue("white", "#121212");
  const sectionBg2 = useColorModeValue("gray.50", "#3d3d3d");

  const projects = [
    {
      title: "Student Attendance System",
      description:
        "The Student Attendance System is a digital solution designed to streamline and automate the process of tracking class attendance. Traditionally, recording attendance at the start of every session can be time-consuming and prone to errors, taking away valuable instructional time. This system allows teachers to efficiently monitor student presence and punctuality, ensuring accurate and timely records.",
      image: "/assets/Project1.png",
      tech: ["Ionic", "ASP.NET", "SQL Server"]
    },
    {
      title: "Amigo Vibes",
      description:
        "Amigo Vibes is a blog site dedicated to showcasing the band’s latest music releases, song covers, and exciting activities. It serves as a creative hub where fans can stay updated on new tracks, behind-the-scenes moments, and upcoming events, offering a closer connection to the band’s journey and artistic expression.",
      image: "/assets/Project2.png",
      tech: ["Wordpress", "Divi", "Figma"]
    },
    {
      title: "MAKALAP",
      description:
        "MAKALAP is a Resume Screening System, implemented as a mobile-responsive website, aimed at enhancing the efficiency, fairness, and objectivity of the applicant evaluation process. The system leverages parsing algorithms to extract structured data from PDF resumes and employs Latent Semantic Analysis (LSA)—a Natural Language Processing (NLP) technique—to assess the semantic relevance between applicant qualifications and job requirements.",
      image: "/assets/Project3.png",
      tech: ["ASP.NET", "Python", "NLP", "SQL Server"]
    }
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

              {/* Tech Stack */}
              <HStack spacing={2} flexWrap="wrap">
                {project.tech.map((t, i) => (
                  <Badge
                    key={i}
                    colorScheme="teal"
                    px={2}
                    py={1}
                    borderRadius="md"
                  >
                    {t}
                  </Badge>
                ))}
              </HStack>
            </VStack>
          </Card>
        ))}
      </VStack>
    </Box>
  );
};

export default ProjectsSection;
