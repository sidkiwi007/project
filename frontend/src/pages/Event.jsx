import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getEvents } from '../../src/api'; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, Container } from '@mui/material';
import '../../src/App.css';

function Event() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsData = await getEvents();
        setEvents(eventsData);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="event-container">
      <Container>
        <h1>Events Provided</h1>
        <Grid container spacing={4}>
          {events.length > 0 ? (
            events.map((event, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card>
                  <Link to={`/event/${event._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <CardMedia
                      component="img"
                      height="300"
                      image={event.image || "https://via.placeholder.com/150"}
                      alt={event.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {event.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {event.description}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Date: {new Date(event.date).toLocaleDateString()}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Location: {event.location}
                      </Typography>
                    </CardContent>
                  </Link>
                </Card>
              </Grid>
            ))
          ) : (
            <p>No events available.</p>
          )}
        </Grid>
      </Container>
    </div>
  );
}

export default Event;
