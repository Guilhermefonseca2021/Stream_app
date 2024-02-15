import Express from "express";
import connect from "./config/connect";
import cors from "cors";
import connectToDatabase from "./db/connect";
import route from "./routes/video";

const app = Express();

app.use(
  cors({
    origin: "https://localhost:3000",
    credentials: true,
  })
);
app.use(Express.json());

app.use(route);

connectToDatabase()
  .then(() =>
    app.listen(connect.PORT, () =>
      console.log(`Server is listening to ${connect.PORT}`)
    )
  )
  .catch((err: any) => console.log(err));
