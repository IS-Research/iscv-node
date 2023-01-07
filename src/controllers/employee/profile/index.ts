import { Request, Response } from "express";
import { Agent } from "http";
import { create, urlSource } from "ipfs-http-client";
// import {create} from 'ipfs-core'
// const ipfs = await import("ipfs-http-client");

export const postAvatar = async (req: Request, res: Response) => {
  try {
    const auth = 'Basic ' + Buffer.from("2Jxa8k8BoXm3qcU10oAYOuJkRQG" + ':' + "e2b46edcfcc46e20fd89c54b8f80d9f1").toString('base64');

    const client = create({
      host: 'ipfs.infura.io',
      port: 5001,
      protocol: 'https',
      headers: {
          authorization: auth,
      },
    })
    const { cid } = await client.add("aaa");
    // const ipfs = await create({
    // })
    
    // const { cid } = await ipfs.add('Hello world')
    console.log(cid)
    res.status(200).json(cid.toString());
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
  res.end();
};
