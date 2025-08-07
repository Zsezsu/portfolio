import { Container, Typography, Grid, Avatar, Box } from "@mui/material";
import profilePicture from "./assets/prof_pic_2.jpg";
import styles from "./AboutMe.module.css";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import { profileData } from "./utils/profileData";

const TRAITS = profileData.traits;

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
          <Typography
            variant='h4'
            gutterBottom
            sx={{ color: "secondary.main", fontWeight: "bold" }}>
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

      <Typography
        variant='h4'
        gutterBottom
        align='center'
        sx={{ mt: 8, color: "secondary.main", fontWeight: "bold" }}>
        My core values
      </Typography>

      <Box className={styles.bubblesContainer}>
        {TRAITS.map((trait, index) => (
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

      <WorkExperience />
      <Education />
    </Container>
  );
}

export default AboutMe;
