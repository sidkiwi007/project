import React from 'react';
import { useParams } from 'react-router-dom';
import list from '../../public/list.json'; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import '../../src/App.css';

const Eventdetails = () => {
  const { id } = useParams();
  const event = list.find((data) => data.id === id);

  if (!event) {
    return <p>Event not found</p>;
  }

  return (
    <Container style={{ marginTop: '20px' }}>
      <Card>
        <Grid container spacing={2}>
          <Grid item>
            <CardMedia
              component="img"
              sx={{ width: 150, height: 150 }}
              image={event.image || "https://via.placeholder.com/150"}
              alt={event.title}
            />
          </Grid>
          <Grid item xs={12} sm container>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                {event.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {event.description}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Date: {event.date}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Location: {event.location}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default Eventdetails;
