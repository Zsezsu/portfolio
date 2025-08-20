import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./MyGames.module.css";
import { games } from "../data/gameData.js";

function MyGames() {
  return (
    <Container maxWidth='md' className={styles.wrapper}>
      <Typography variant='h4' className={styles.title}>
        My Games
      </Typography>

      <Grid container spacing={3}>
        {games.map((game, index) => (
          <Grid size={{ xs: 12, sm: 6 }} key={index}>
            <Card className={styles.card}>
              <CardContent>
                <Typography variant='h6' className={styles.cardTitle}>
                  {game.title}
                </Typography>
                <Typography variant='body2' className={styles.cardText}>
                  {game.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  component={Link}
                  to={game.path}
                  variant='outlined'
                  className={styles.button}>
                  Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default MyGames;
