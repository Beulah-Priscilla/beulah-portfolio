import { Box, Button, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
          color: 'primary.main',
          textShadow: "0 0 20px #ff00ff"
        }}
      >
        Beulah Priscilla Soundar
      </Typography>
      <Typography
        component={motion.h2}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ delay: 0.5, duration: 1}}
        sx={{
          fontSize: { xs: "1.2rem", md: "2rem" },
          fintWeight: 600,
          color: "secondary.main",
          textShadow: "0 0 15px #ff6f00",
          mt: 2,
        }}
      >
        Software Developer
      </Typography>
      <Stack direction="row" spacing={2} sx={{ mt: 4}}>
        <Button 
          variant="contained"
          color="primary"
          startIcon={<GitHubIcon />}
          href="https://github.com/Beulah-Priscilla"
          target="_blank"
          sx={{ textTransform: "none", fontWeight: 600 }}

        >
          GitHub
        </Button>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<LinkedInIcon />}
          href="https://www.linkedin.com/in/beulah-priscilla/"
          target="_blank"
          sx={{ textTransform: "none", fontWeight: 600 }}
        >
          LinkedIn
        </Button>
      </Stack>
    </Box>
  );
}

export default App;