const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://sreehari0131:G2NEelJovNwaG2oU@cluster0.rwqbj7n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
  
  
  const eventSchema = new mongoose.Schema({
    _id: Number,
    title: String,
    description: String,
    date: String,
    location: String,
    image: String,
    __v: { type: Number, default: 0 },
  });

  
  const Event = mongoose.model('Event', eventSchema);

  
  const events = [
    {
      _id: 1,
      title: "WEDDING",
      description: "Making your wedding experience memorable",
      date: "",
      location: "Trivandrum",
      image: "https://img.freepik.com/premium-vector/indian-couple-ai-generated-image_362642-2284.jpg?ga=GA1.1.1971686175.1722104086&semt=sph",
    },
    {
      _id: 2,
      title: "INAUGRATION",
      description: "",
      date: "",
      location: "Trivandrum",
      image: "https://img.freepik.com/free-vector/scissors-ribbon-realistic-illustration_98292-3236.jpg?ga=GA1.1.1971686175.1722104086&semt=sph",
    },
    {
      _id: 3,
      title: "Music Concert",
      description: "",
      date: "",
      location: "Trivandrum,Kochi",
      image: "https://img.freepik.com/free-photo/light-beam-crowd-people_1409-7694.jpg?ga=GA1.2.1971686175.1722104086",
    },
    {
      _id: 4,
      title: "BIRTHDAY",
      description: "",
      date: "",
      location: "Trivandrum,Kochi",
      image: "https://img.freepik.com/free-vector/happy-birthday-lettering_1094-119.jpg?ga=GA1.2.1971686175.1722104086&semt=sph",
    },
    {
      _id: 5,
      title: "Fundraising&Charity",
      description: "",
      date: "",
      location: "Trivandrum,Kochi",
      image: "https://img.freepik.com/premium-photo/child-adult-holding-money-jar-donation-saving-concept_49149-1117.jpg?ga=GA1.1.1971686175.1722104086&semt=sph",
    },
    {
      _id: 6,
      title: "Bachelor Party",
      description: "",
      date: "",
      location: "Trivandrum,Kochi",
      image: "https://img.freepik.com/free-vector/bachelor-party-concept-illustration_114360-6453.jpg?ga=GA1.2.1971686175.1722104086&semt=ais_user",
    },
    {
      _id: 7,
      title: "Festival&Fares",
      description: "",
      date: "",
      location: "Trivandrum,Kochi",
      image: "https://img.freepik.com/premium-photo/circus-night-with-fireworks-sky-game-environment-design-flat-background_985276-8102.jpg?ga=GA1.1.1971686175.1722104086&semt=ais_user",
    },
  ];

  
  Event.insertMany(events)
    .then(() => {
      console.log('Data inserted successfully');
      mongoose.connection.close();
    })
    .catch((error) => {
      console.error('Error inserting data:', error);
      mongoose.connection.close();
    });
});
