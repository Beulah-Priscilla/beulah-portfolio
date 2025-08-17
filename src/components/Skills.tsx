// src/components/Skills.tsx
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

// import your icons into /src/assets
import ReactIcon from "../assets/react.svg";
import TypeScriptIcon from "../assets/ts.png";
import PythonIcon from "../assets/Python.png";
import JSIcon from "../assets/js.png";
import FastAPIIcon from "../assets/fastapi.png";
import MUIIcon from "../assets/mui.png";
import HTMLIcon from "../assets/html.png";
import CSSIcon from "../assets/css.png";
import PostgreSQLIcon from "../assets/Postgresql.png";
import RedisIcon from "../assets/redis.png";
import AWSIcon from "../assets/aws.jpg";
import PytestIcon from "../assets/pytest.svg";
import JestIcon from "../assets/jest.svg";
import PlaywrightIcon from "../assets/playwright.jpg";
import GitIcon from "../assets/git.png";
import GitHubIcon from "../assets/github.jpg";
import PostmanIcon from "../assets/postman.svg";
import TrelloIcon from "../assets/trello.svg";

const skills = [
  { name: "React", icon: ReactIcon },
  { name: "TypeScript", icon: TypeScriptIcon },
  { name: "Python", icon: PythonIcon },
  { name: "JavaScript", icon: JSIcon },
  { name: "FastAPI", icon: FastAPIIcon },
  { name: "Material UI", icon: MUIIcon },
  { name: "HTML", icon: HTMLIcon },
  { name: "CSS", icon: CSSIcon },
  { name: "PostgreSQL", icon: PostgreSQLIcon },
  { name: "Redis", icon: RedisIcon },
  { name: "AWS CloudFormation", icon: AWSIcon },
  { name: "Pytest", icon: PytestIcon },
  { name: "Jest", icon: JestIcon },
  { name: "Playwright", icon: PlaywrightIcon },
  { name: "Git", icon: GitIcon },
  { name: "GitHub", icon: GitHubIcon },
  { name: "Postman", icon: PostmanIcon },
  { name: "Trello", icon: TrelloIcon },
];

export default function  Skills() {
  return (
    <Box
      sx={{
        mt: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
      }}
    >
      <Typography
        component={motion.h2}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        sx={{
          fontSize: { xs: "1.8rem", md: "3rem" },
          fontWeight: 700,
          color: "#ffffff",
          textShadow: "0 0 15px rgba(255, 255, 255, 0.8)",
          mb: 4,
        }}
      >
        Skills
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 6,
          flexWrap: "wrap"
        }}>
          {skills.map((skill, i) => (
            <Box
              key={skill.name}
              component={motion.div}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity:1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              sx={{ textAlign: "center" }}
            >
              <Box
                component="img"
                src={skill.icon}
                alt={skill.name}
                sx={{
                  width: 64,
                  height: 64,
                  mb: 1,
                  filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))",
                }}
              />
              <Typography sx={{ color: "#e0e0e0", fontWeight: 600 }}>
                {skill.name}
              </Typography>
            </Box>
          ))} 
      </Box>
    </Box>
  )
}
