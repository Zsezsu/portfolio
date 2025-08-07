import { Box, Container, Typography, IconButton, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <Box component='footer' className={styles.footer}>
      <Container className={styles.content}>
        <Box className={styles.left}>
          <Link
            href='mailto:zsuzsanna.ilona.juhasz@gmail.com'
            underline='hover'
            className={styles.emailLink}>
            <EmailIcon className={styles.icon} />
            zsuzsanna.ilona.juhasz@gmail.com
          </Link>
        </Box>

        <Box className={styles.center}>
          <IconButton
            href='https://github.com/Zsezsu'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'>
            <GitHubIcon />
          </IconButton>
          <IconButton
            href='https://www.linkedin.com/in/zs-i-juhasz/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'>
            <LinkedInIcon />
          </IconButton>
        </Box>

        <Box className={styles.right}>
          <Typography variant='body2' className={styles.copyright}>
            © 2025 Zsuzsanna Juhász. All rights reserved.
          </Typography>
        </Box>
      </Container>
      <Box className={styles.backToTopWrapper}>
        <Link
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={styles.backToTop}>
          ⬆ Back to top
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;
