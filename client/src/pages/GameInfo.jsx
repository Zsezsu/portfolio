import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Button,
  Link,
  Stack,
  Divider,
} from "@mui/material";
import { gameDetails } from "./utils/gameData.js";



function GameInfo() {
  const { gameName } = useParams();
  const navigate = useNavigate();
  const game = gameDetails[gameName];

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
    <Container maxWidth='md' sx={{ mt: 6, mb: 6, textAlign: "center" }}>
      <Typography variant='h3' color='primary' gutterBottom>
        {game.title}
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ mb: 4 }}>
        <Typography variant='h5' color='secondary' gutterBottom>
          Why I Built This Game
        </Typography>
        <Typography variant='body1'>{game.why}</Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant='h5' color='secondary' gutterBottom>
          Game Description
        </Typography>
        <Typography variant='body1'>{game.description}</Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant='h5' color='secondary' gutterBottom>
          Game Tactics & Resources
        </Typography>
        <Stack spacing={1} alignItems='center'>
          {game.resources.map((res, index) => (
            <Link
              key={index}
              href={res.url}
              target='_blank'
              rel='noopener noreferrer'
              underline='hover'
              color='primary'
            >
              • {res.label}
            </Link>
          ))}
        </Stack>
      </Box>

      <Button
        variant='contained'
        color='primary'
        onClick={() => navigate(game.playLink)}
        sx={{ mt: 2 }}
      >
        Play {game.title}
      </Button>
    </Container>
  );
}

export default GameInfo;
