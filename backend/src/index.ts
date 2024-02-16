import Express from "express";
import connect from "./config/connect";
import cors from "cors";
import path from 'path'
import connectToDatabase from "./db/connect";
import route from "./routes/video";

const app = Express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);
app.use(Express.json());

app.use(route);

app.use('/public', Express.static(path.join(__dirname, 'public')))

connectToDatabase()
  .then(() =>
    app.listen(connect.PORT, () =>
      console.log(`Server is listening to ${connect.PORT}`)
    )
  )
  .catch((err: any) => console.log(err));
