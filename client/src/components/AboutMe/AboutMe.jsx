import { Container, Box, Typography, Grid, Avatar } from "@mui/material";
import profilePicture from "./assets/prof_pic_2.jpg";

const traits = [
  { label: "Honesty", color: "#70c1b3", top: "30%", left: "15%", size: 145 },
  { label: "Accuracy", color: "#ee9a8bff", top: "30%", left: "45%", size: 145 },
  {
    label: "Growth Mindset",
    color: "#72e7f6ff",
    top: "55%",
    left: "30%",
    size: 160,
  },
  {
    label: "Self-awareness",
    color: "#38818bff",
    top: "40%",
    left: "65%",
    size: 150,
  },
  {
    label: "Environmental awareness",
    color: "#4aef70ff",
    top: "70%",
    left: "50%",
    size: 147,
  },
  {
    label: "Progression",
    color: "#738df9ff",
    top: "20%",
    left: "80%",
    size: 145,
  },
  {
    label: "Perseverance",
    color: "#3498db",
    top: "75%",
    left: "10%",
    size: 140,
  },
  {
    label: "Ownership",
    color: "#f9ce73ff",
    top: "75%",
    left: "75%",
    size: 145,
  },
];

function AboutMe() {
  return (
    <Container maxWidth='md' sx={{ mt: 6 }}>
      <Grid container spacing={4} alignItems='center'>
        <Grid size={{ xs: 12, md: 4 }}>
          <Avatar
            src={profilePicture}
            alt='Profile'
            sx={{ width: 180, height: 180, margin: "0 auto" }}
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
            I believe in a growth mindset, that skills can be developed through
            continuous learning and effort. I try to live my life by looking at
            challenges as opportunities and mistakes as valuable learning
            experiences. This is what I teach my students, and it provides a
            safe environment in which we can grow and work with ease.
          </Typography>
        </Grid>
      </Grid>

          <Typography
            variant='h5'
            gutterBottom
            align='center'
            sx={{ mt:8, color: "secondary.main", fontWeight: "bold" }}>
            My core values:
          </Typography>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 350, // adjust as needed
        }}>
          
        {traits.map((trait, index) => (
          <Box
            key={index}
            sx={{
              position: "absolute",
              top: trait.top,
              left: trait.left,
              width: trait.size,
              height: trait.size,
              borderRadius: "50%",
              backgroundColor: trait.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.1) rotate(3deg)",
                boxShadow: 6,
              },
              animation: "grow 4s ease-in-out infinite",
              zIndex: 1,
              padding: 1,
              textOverflow: "ellipsis",
              overflow: "hidden",
              fontSize: "0.8rem",
              lineHeight: 1.1,
            }}>
            {trait.label}
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default AboutMe;
