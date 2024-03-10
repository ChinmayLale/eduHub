import mongoose , {connect} from 'mongoose';

const dbUrl = 'mongodb+srv://astrochinmay:astrochinmay@eduhub.2sgtwed.mongodb.net/?retryWrites=true&w=majority&appName=EduHub';

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected TO Mongo "))
  .catch((err) => console.error(err));
