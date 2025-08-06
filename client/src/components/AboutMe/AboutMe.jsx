import { Container, Box, Typography, Grid, Avatar } from "@mui/material";
import profilePicture from "./assets/prof_pic_2.jpg";

const traits = [
  {
    label: "Honesty",
    color: "#70c1b3",
    top: "30%",
    left: "15%",
    size: 145,
    description: "Being transparent builds trust.",
  },
  {
    label: "Accuracy",
    color: "#ee9a8bff",
    top: "30%",
    left: "45%",
    size: 145,
    description: "It is important for me to perform my tasks accurately.",
  },
  {
    label: "Growth Mindset",
    color: "#72e7f6ff",
    top: "55%",
    left: "30%",
    size: 160,
    description:
      "Learn from mistakes, set realistic goals, and focus on the process not just on the result.",
  },
  {
    label: "Self-awareness",
    color: "#38818bff",
    top: "40%",
    left: "65%",
    size: 150,
    description: "I can treat others well when I am at peace with myself.",
  },
  {
    label: "Environmental awareness",
    color: "#4aef70ff",
    top: "70%",
    left: "50%",
    size: 147,
    description:
      "I believe it is truly important to live in harmony with our environment and to minimize our impact on nature.",
  },
  {
    label: "Progression",
    color: "#738df9ff",
    top: "20%",
    left: "80%",
    size: 145,
    description:
      "Effort improves, and the work you put in will always pay off.",
  },
  {
    label: "Perseverance",
    color: "#3498db",
    top: "75%",
    left: "10%",
    size: 140,
    description:
      "Everything I have achieved in my life so far, I ascribe to my perseverance.",
  },
  {
    label: "Feedback",
    color: "#f9ce73ff",
    top: "75%",
    left: "75%",
    size: 145,
    description: "Giving and receiving feedback is what helps us improve.",
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
        sx={{ mt: 8, color: "secondary.main", fontWeight: "bold" }}>
        My core values
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
              perspective: 1000, // Needed for 3D effect
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.55)", // ✅ Grow the whole thing
                zIndex: 10, // Optional: lift above others during hover
              },
            }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                transformStyle: "preserve-3d",
                transition: "transform 0.8s ease",
                "&:hover": {
                  transform: "rotateY(180deg) scale(1.1)",
                },
              }}>
              {/* Front */}
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  backgroundColor: trait.color,
                  color: "white",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backfaceVisibility: "hidden",
                  boxShadow: 5,
                  animation: "grow 4s ease-in-out infinite",
                  fontSize: "0.85rem",
                  textAlign: "center",
                  padding: 1,
                }}>
                {trait.label}
              </Box>

              {/* Back */}
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  backgroundColor: trait.color,
                  color: "white",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                  padding: 2,
                  boxShadow: 5,
                }}>
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
