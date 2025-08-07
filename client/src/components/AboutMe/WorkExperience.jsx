import { Box, Typography, Divider } from "@mui/material";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Codecool",
    location: "Budapest, Hungary",
    dates: "Jan 2023 – Present",
    roles: [
      {
        title: "Mentor (Associate level)",
        description: [
          "Mentor students in full-stack development using the MERN stack.",
          "Lead workshops on React, Express, MongoDB.",
          "Facilitate soft skill workshops: Feedback, Growth Mindset.",
        ],
      },
      {
        title: "Mentor (Junior level)",
        description: [
          'Supported students through a "learning by teaching" approach.',
          "Facilitated workshops on JavaScript, HTML, CSS, DOM, Web API.",
        ],
      },
    ],
  },
  {
    company: "Netrisk Group",
    location: "Budapest, Hungary",
    dates: "Feb 2017 – Aug 2021",
    roles: [
      {
        title: "Team Leader, Telecommunications Department",
        description: [
          "Oversaw daily operations and coordinated team activities.",
          "Improved processes, monitored performance, supported staff.",
          "Worked with management to meet targets and maintain quality.",
        ],
      },
    ],
  },
];

function WorkExperience() {

  return (
    <Box sx={{ mt: 16 }}>
      <Typography
        variant='h4'
        gutterBottom
        sx={{
          color: "secondary.main",
          fontWeight: "bold",
          textAlign: "center",
        }}>
        Work Experiences
      </Typography>

      {experiences.map((exp, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <Box sx={{ mt: 8, mb: 5 }}>
            <Typography variant='h6' sx={{ fontWeight: "bold" }}>
              {exp.company} • {exp.location}
            </Typography>
            <Typography variant='subtitle2' color='primary.main' gutterBottom>
              {exp.dates}
            </Typography>

            {exp.roles.map((role, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
                  {role.title}
                </Typography>
                <ul
                  style={{
                    marginTop: 4,
                    marginBottom: 8,
                    paddingLeft: "1.2em",
                  }}>
                  {role.description.map((line, i) => (
                    <li key={i}>
                      <Typography variant='body2'>{line}</Typography>
                    </li>
                  ))}
                </ul>
              </Box>
            ))}

            {idx !== experiences.length - 1 && <Divider sx={{ my: 4 }} />}
          </Box>
        </motion.div>
      ))}
    </Box>
  );
}

export default WorkExperience;
