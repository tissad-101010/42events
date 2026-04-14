import axios from "axios";
import jwt from "jsonwebtoken";

export const get42AuthUrl = (): string => {
  const client_id = process.env.CLIENT_ID;
  const redirect_uri = process.env.REDIRECT_URI;

  return `https://api.intra.42.fr/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`;
};

export const handleOAuth = async (code: string): Promise<string> => {
  // 1. récupérer access_token
  const tokenResponse = await axios.post(
    "https://api.intra.42.fr/oauth/token",
    {
      grant_type: "authorization_code",
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      code,
      redirect_uri: process.env.REDIRECT_URI,
    }
  );

  const access_token = tokenResponse.data.access_token;

  // 2. récupérer user
  const userResponse = await axios.get(
    "https://api.intra.42.fr/v2/me",
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  const user = userResponse.data;

  // 3. générer JWT
  const jwtToken = jwt.sign(
    {
      id: user.id,
      login: user.login,
    },
    process.env.JWT_SECRET as string,
    { expiresIn: "1h" }
  );

  return jwtToken;
};