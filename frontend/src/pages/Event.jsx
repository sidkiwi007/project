import React from 'react';
import { Link } from 'react-router-dom';
import list from '../../public/list.json'; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, Container } from '@mui/material';
import '../../src/App.css'; 

function Event() {
  const filterData = list.filter((data) => data.name === 'event');

  return (
    <div className="event-container"> 
      <Container>
        <h1>Events Provided</h1>
        <Grid container spacing={4}>
          {filterData.length > 0 ? (
            filterData.map((event, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card>
                  <Link to={`/event/${event.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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
                        Date: {event.date}
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
