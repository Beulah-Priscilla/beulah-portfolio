import { Box, Button, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Skills from "./components/Skills";

// import  GitHub  from "./assets/github.jpg"

function App() {
  return (
    <Box>
      <Typography
        component={motion.h1}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        sx={{
          fontSize: { xs: "2rem", md: "4rem" },
          fontWeight: 800,
          color: "#ffffff", // Changed to white for better contrast
          textShadow: "0 0 20px rgba(255, 255, 255, 0.8)", // Softer white shadow
        }}
      >
        Beulah Priscilla Soundar
      </Typography>
      <Typography
        component={motion.h2}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        sx={{
          fontSize: { xs: "1.2rem", md: "2rem" },
          fontWeight: 600,
          color: "#e0e0e0", // Light gray for better readability
          textShadow: "0 0 15px rgba(255, 255, 255, 0.6)", // Softer shadow
          mt: 2,
        }}
      >
        Software Developer
      </Typography>
      <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#333333", // Darker button background
            color: "#ffffff", // White text for contrast
            textTransform: "none",
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "#555555", // Slightly lighter on hover
            },
          }}
          startIcon={<GitHubIcon />}
          href="https://github.com/Beulah-Priscilla"
          target="_blank"
        >
          GitHub
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#444444", // Darker button background
            color: "#ffffff", // White text for contrast
            textTransform: "none",
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "#666666", // Slightly lighter on hover
            },
          }}
          startIcon={<LinkedInIcon />}
          href="https://www.linkedin.com/in/beulah-priscilla/"
          target="_blank"
        >
          LinkedIn
        </Button>
      </Stack>
      <Skills />
    </Box>
  );
}

export default App;