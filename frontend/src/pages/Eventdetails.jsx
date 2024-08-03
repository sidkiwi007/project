import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEventById } from '../../src/api'; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import '../../src/App.css';

const Eventdetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const eventData = await getEventById(id);
        setEvent(eventData);
      } catch (error) {
        setError('Event not found');
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

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
                Date: {new Date(event.date).toLocaleDateString()}
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
