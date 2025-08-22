import { Box, Typography, Divider } from "@mui/material";
import { motion } from "framer-motion";
import styles from "./Resume.module.css";
import ResumeItem from "./ResumeItem";

function ResumeDetail({ work, experiences }) {
  return (
    <Box className={styles.wrapper}>
      <Typography variant='h4' className={styles.title}>
        {work ? "Work Experiences" : "Education"}
      </Typography>

      {experiences.map((exp, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <Box className={styles.item}>
            <Typography variant='h6' className={styles.company}>
              {work ? exp.company : exp.institution} • {exp.location}
            </Typography>

            <Typography
              variant='subtitle2'
              className={styles.dates}
              gutterBottom>
              {exp.dates}
            </Typography>

            <ResumeItem details={work ? exp.roles : exp.degrees} />

            {idx !== experiences.length - 1 && (
              <Divider className={styles.divider} />
            )}
          </Box>
        </motion.div>
      ))}
    </Box>
  );
}

export default ResumeDetail;
