import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Button,
  Link,
  Divider,
} from "@mui/material";
import { gameDetails } from "../data/gameData.js";
import styles from "./GameInfo.module.css";
import CustomButton from "./PlayButton.jsx";

function GameInfo() {
  const { gameName } = useParams();
  const navigate = useNavigate();
  const game = gameDetails[gameName];
  const underDevelopment = gameName === "chess";

  if (!game) {
    return (
      <Container>
        <Typography variant='h4' color='error' align='center'>
          Game not found.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth='md' className={styles.container}>
      <CustomButton
        variant='text'
        color='inherit'
        link='/games'
        title='← Back to Games'
        className={styles.backButton}
      />

      <Typography variant='h3' gutterBottom className={styles.title}>
        {game.title}
      </Typography>

      <Divider className={styles.divider} />

      <Box className={styles.section}>
        <Typography variant='h5' gutterBottom className={styles.sectionTitle}>
          Why I Built This Game
        </Typography>
        <Typography variant='body1'>{game.why}</Typography>
      </Box>

      <Box className={styles.section}>
        <Typography variant='h5' gutterBottom className={styles.sectionTitle}>
          Game Description
        </Typography>
        <Typography variant='body1'>{game.description}</Typography>
      </Box>

      <Box className={styles.section}>
        <Typography variant='h5' gutterBottom className={styles.sectionTitle}>
          Game Tactics & Resources
        </Typography>

        <div className={styles.resources}>
          {game.resources.map((res, index) => (
            <Link
              key={index}
              href={res.url}
              target='_blank'
              rel='noopener noreferrer'
              underline='hover'
              className={styles.resourceLink}>
              • {res.label}
            </Link>
          ))}
        </div>
      </Box>

      <CustomButton
        title={
          underDevelopment ? "Check my projects repo" : `Play ${game.title}`
        }
        variant='contained'
        color='primary'
        className={styles.cta}
        link={game.playLink}
      />
    </Container>
  );
}

export default GameInfo;
