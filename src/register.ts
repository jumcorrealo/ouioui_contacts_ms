import { Request, Response } from "express";

import { Member } from "./models/member";

const register = async (req: Request, res: Response) => {
  const { idContact, longitude, latitude } = req.body;

  if (!idContact)
    return res.send({ error: true, message: "Please enter an idContact" });
  if (!longitude)
    return res.send({ error: true, message: "Please enter a latitude" });
  if (!latitude)
    return res.send({ error: true, message: "Please enter a longitude" });
  
  const active = true;
  const registrationDate = new Date(new Date().toUTCString());

  try {
    // Verify email doesn't already exist
    const member = await Member.findOne({ idContact });
    if (member !== null)
      return res.send({
        error: true,
        message: "The idContact specified already exists"
      });


    const newMember = await new Member({
      idContact,
      longitude,
      latitude,
      active,
      registrationDate
    }).save();

    return res.send({ error: false, member: newMember });
  } catch (err) {
    console.error(err);
  }
};

export {register}