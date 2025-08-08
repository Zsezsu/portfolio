// MyProjects.jsx
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import styles from "./MyProjects.module.css";

const projects = [
  {
    title: "Chess Game",
    description: "I started this to practice game logic and Python OOP, combined with a FastAPI backend and React frontend.",
    techStack: ["Python", "FastAPI", "Docker", "React"],
    repo: "https://github.com/Zsezsu/chess-fs-app",
  },
  {
    title: "Score Tracker Website",
    description: "I wanted a tool to track scores easily during board game sessions with friends.",
    techStack: ["TypeScript", "React", "MongoDB", "Express"],
    repo: "https://github.com/Zsezsu/score-tracker-website",
  },
  {
    title: "Weather App",
    description: "This app helps me understand working with external APIs and improve UI/UX skills.",
    techStack: ["Java", "Spring Boot", "PostgreSQL", "OpenWeatherAPI"],
    repo: "https://github.com/Zsezsu/weather-app",
  },
];

function MyProjects() {
  return (
    <Container maxWidth='md' className={styles.wrapper}>
      <Typography variant='h4' className={styles.title}>
        My Projects
      </Typography>

      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid size={{xs:12, sm:6}} key={index}>
            <Card className={styles.card}>
              <CardContent>
                <Typography variant='h6' className={styles.cardTitle} sx={{mb:2}}>
                  {project.title}
                </Typography>
                <Typography variant='body2' className={styles.cardText} sx={{mb:2}}>
                  {project.description}
                </Typography>

                <Typography variant='subtitle2' className={styles.techTitle} sx={{mb:2}}>
                  Tech Stack
                </Typography>
                <Stack direction='row' spacing={1} flexWrap="wrap">
                  {project.techStack.map((tech, i) => (
                    <Chip
                      key={i}
                      label={tech}
                      color='primary'
                      variant='outlined'
                      size='small'
                      className={styles.chip}
                    />
                  ))}
                </Stack>
              </CardContent>
              <CardActions>
                <Button
                  href={project.repo}
                  target='_blank'
                  rel='noopener noreferrer'
                  variant='outlined'
                  className={styles.button}>
                  GitHub repo link
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default MyProjects;
