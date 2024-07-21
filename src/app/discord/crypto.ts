import { NextRequest } from "next/server";
import nacl from "tweetnacl";
import { HTTPError } from "./httpError";

// Your public key can be found on your application in the Developer Portal
const publicKey = process.env.DISCORD_PUBLIC;

export function validate(req: NextRequest, body: string) {
  const signature = req.headers.get("X-Signature-Ed25519");
  const timestamp = req.headers.get("X-Signature-Timestamp");

  if (!signature) throw new HTTPError(400, "Missing signature");
  if (!timestamp) throw new HTTPError(400, "Missing timestamp");
  if (!publicKey) throw new HTTPError(501, "Missing public key in env");

  const isVerified = nacl.sign.detached.verify(
    Buffer.from(timestamp + body),
    Buffer.from(signature, "hex"),
    Buffer.from(publicKey, "hex"),
  );

  if (!isVerified) throw new HTTPError(401, "Invalid signature");
}
