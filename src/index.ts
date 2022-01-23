import "dotenv/config";
import express, { Request, Response } from "express";
/*use cors*/
import cors from "cors";

import bodyParser from "body-parser";
const app = express();

import { connect } from "./db";
import { register } from "./register";
import { Member } from "./models/member";

app.use(cors());



const allowedOrigins = ["http://localhost:20000", "http://localhost:20001"];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));
app.use(express.json());
/* app.use("/members" ); */


require("dotenv").config();
 connect().then(() => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.get("/", async (req: Request, res: Response) => {
    return res.send(`Loading v3 of ${Math.random()}`);
  });

  app.get("/members", async (req: Request, res: Response) => {
    const {longitude, latitude } = req.body;
    const members = await Member.find().select("longitude latitude");
    /* create a empty array */ 
    const distances = [1];
    members.forEach(member => {
      const member_longitude = member.longitude;
      const member_latitude = member.latitude;
      const user_latitude = latitude;
      const user_longitude = longitude;
      /* calculate distance from member to user */
/*       const user_latitude = req.query.latitude;
      const user_longitude = req.query.longitude; */
     /*  const user_longitude = 0.13;
      const user_latitude = 51.51; */
      const distance = Math.sqrt( Math.pow(user_longitude - member_longitude, 2) + Math.pow(user_latitude - member_latitude, 2) );
      console.log(distance);
      /* add distance to distances array */
      distances.push(distance);
    
    });
    return res.json({ distances, members });
  });

  /* get the user position in a get request called /position */
/*   app.get("/position", async (req: Request, res: Response) => {
    const user_longitude = req.query.longitude;
    const user_latitude = req.query.latitude;
    const user_position = {
      longitude: user_longitude,
      latitude: user_latitude
    };
    return res.json(user_position);
  });
 */

  app.post("/register", register);
  
  console.log("===APPLICATION RUNNING===")
  app.listen(80);
});
