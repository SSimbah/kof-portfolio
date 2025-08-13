// components/ContactSection.jsx
import { useState } from "react";
import {
  Box,
  Flex,
  VStack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  HStack,
  Icon,
  Link
} from "@chakra-ui/react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactSection({ sectionBg1, headingColor, textColor, buttonColor, buttonHoverBg }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (res.ok) {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast({
        title: "Error",
        description: "Message could not be sent.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box id="contact" minH="60vh" py={20}>
      <Flex
        maxW="6xl"
        mx="auto"
        px={6}
        direction={{ base: "column", md: "row" }}
        gap={12}
      >
        {/* Left Column - Info */}
        <VStack align="flex-start" spacing={4} flex="1">
          <Heading color={headingColor}>Get in Touch</Heading>
          <Text color={textColor}>
            I’d love to hear from you! Whether you have a question about my work, want to
            collaborate, or just say hello — feel free to reach out.
          </Text>

          <HStack>
            <Icon as={MdEmail} boxSize={5} color={headingColor} />
            <Text color={textColor}>fkyleowie@gmail.com</Text>
          </HStack>

          <HStack>
            <Icon as={MdPhone} boxSize={5} color={headingColor} />
            <Text color={textColor}>+63 921 732 0303</Text>
          </HStack>

          <HStack>
            <Icon as={MdLocationOn} boxSize={5} color={headingColor} />
            <Text color={textColor}>Iloilo, Philippines</Text>
          </HStack>
            <HStack spacing={4}>
                  <Button
                    as={Link}
                    href="https://github.com/SSimbah" // replace with your GitHub URL
                    target="_blank"
                    size="md"
                    variant="ghost"
                    leftIcon={<FaGithub size="20px" />}
                    // bgColor={buttonColor}
                    _hover={{ bg: buttonHoverBg }}
                    px={4}
                  >
                    SSimbah
                  </Button>

                  {/* LinkedIn */}
                  <Button
                    as={Link}
                    href="https://linkedin.com/in/fernandez-kyle-owie-693802248/" // replace with your LinkedIn URL
                    target="_blank"
                    size="md"
                    variant="ghost"
                    leftIcon={<FaLinkedin size="20px" />}
                    // bgColor={buttonColor}
                    _hover={{ bg: buttonHoverBg }}
                    px={4}
                  >
                    Kyle Fernandez
                  </Button>
            </HStack>

        </VStack>

        {/* Right Column - Contact Form */}
        <Box as="form" flex="1" onSubmit={handleSubmit} bg={"blackAlpha.400"} p={8} borderRadius="md" boxShadow="lg" zIndex={3}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel color={textColor}>Name</FormLabel>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel color={textColor}>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel color={textColor}>Message</FormLabel>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows={5}
              />
            </FormControl>

            <Button
              type="submit"
              colorScheme="teal"
              width="full"
              isLoading={loading}
              loadingText="Sending"
            >
              Send Message
            </Button>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}
