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
            Software Developer Mentor
          </Typography>
          <Typography variant='body1'>
            I believe in growth mindset, which means skills can be developed
            through continuous learning and effort. I try to live my life by
            looking at challenges as opportunities and mistakes as valuable
            learning experiences. This is what I teach my students and it
            provides a safe environment in which we can grow and work with ease.
          </Typography>
        </Grid>
      </Grid>

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

      <ResumeDetail work={true} experiences={experiences} />
      <ResumeDetail work={false} experiences={schools} />
    </Container>
  );
}

export default AboutMe;
