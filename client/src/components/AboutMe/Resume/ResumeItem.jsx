import { Box, Typography } from "@mui/material";
import styles from "./Resume.module.css";

function ResumeItem({ details }) {
  return (
    <>
      {details.map((detail, index) => (
        <Box key={index} className={styles.role}>
          <Typography variant='subtitle1' className={styles.roleTitle}>
            {detail.title}
          </Typography>

          <ul className={styles.roleList}>
            {detail.description.map((line, i) => (
              <li key={i}>
                <Typography variant='body2'>{line}</Typography>
              </li>
            ))}
          </ul>
        </Box>
      ))}
    </>
  );
}

export default ResumeItem;
