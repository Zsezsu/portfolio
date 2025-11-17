import { Container, Typography, Grid, Avatar, Box } from "@mui/material";
import profilePicture from "./assets/prof_pic_2.jpg";
import styles from "./AboutMe.module.css";
import ResumeDetail from "./Resume/ResumeDetail";
import { profileData } from "./data/profileData";

const coreValues = profileData.coreValues;
const experiences = profileData.experiences;
const schools = profileData.educations;

function AboutMe() {
  return (
    <Container maxWidth='md' sx={{ mt: 6 }}>
      <Grid container spacing={4} alignItems='center'>
        <Grid size={{ xs: 12, md: 4 }}>
          <Avatar
            src={profilePicture}
            alt='Profile'
            sx={{ width: 245, height: 245, margin: "0 auto" }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Typography variant='h4' gutterBottom className={styles.header}>
            Software Developer
          </Typography>
          <Typography variant='body1'>
            Full-stack developer skilled in{" "}
            <strong>
              {" "}
              JavaScript, TypeScript, React, Node.js, Java, and Python, with
              practical use of LLM-assisted workflows in daily development.
            </strong>{" "}
            I thrive in collaborative engineering environments and focus on
            clean code, maintainability, and continuous improvement. I believe
            in growth mindset, which means skills can be developed through
            continuous learning and effort. I try to live my life by looking at
            challenges as opportunities and mistakes as valuable learning
            experiences.
          </Typography>
        </Grid>
      </Grid>

      <ResumeDetail work={true} experiences={experiences} />
      <ResumeDetail work={false} experiences={schools} />

      <Typography variant='h4' gutterBottom align='center'>
        My core values
      </Typography>

      <Box className={styles.bubblesContainer}>
        {coreValues.map((trait, index) => (
          <Box
            key={index}
            className={styles.bubble}
            style={{
              top: trait.top,
              left: trait.left,
              width: trait.size,
              height: trait.size,
            }}>
            <Box className={styles.bubbleInner}>
              <Box
                className={styles.bubbleFront}
                style={{ backgroundColor: trait.color }}>
                {trait.label}
              </Box>
              <Box
                className={styles.bubbleBack}
                style={{ backgroundColor: trait.color }}>
                {trait.description}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default AboutMe;
