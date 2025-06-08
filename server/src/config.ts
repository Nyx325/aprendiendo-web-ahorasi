import dotenv from "dotenv";

dotenv.config();

function getPort(): number {
  const port = process.env.PORT;

  if (port === undefined) {
    return 3000;
  } else if (Number.isNaN(port)) {
    throw Error(`PORT expects a number, recived ${port}`);
  }

  return Number(port);
}

export const PORT = getPort();
