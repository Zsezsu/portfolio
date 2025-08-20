import { Box, Typography, Divider } from "@mui/material";
import { motion } from "framer-motion";


function Education({ schools }) {
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
        Education
      </Typography>

      {schools.map((edu, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <Box sx={{ mt: 8, mb: 5 }}>
            <Typography variant='h6' sx={{ fontWeight: "bold" }}>
              {edu.institution}
              {edu.location && ` • ${edu.location}`}
            </Typography>
            <Typography variant='subtitle2' color='primary.main' gutterBottom>
              {edu.dates}
            </Typography>

            {edu.degrees.map((degree, i) => (
              <Box key={i} sx={{ mb: 2 }}>
                <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
                  {degree.title}
                </Typography>
                {degree.description.length > 0 && (
                  <ul
                    style={{
                      marginTop: 4,
                      marginBottom: 8,
                      paddingLeft: "1.2em",
                    }}>
                    {degree.description.map((line, j) => (
                      <li key={j}>
                        <Typography variant='body2'>{line}</Typography>
                      </li>
                    ))}
                  </ul>
                )}
              </Box>
            ))}

            {idx !== schools.length - 1 && <Divider sx={{ my: 4 }} />}
          </Box>
        </motion.div>
      ))}
    </Box>
  );
}

export default Education;
