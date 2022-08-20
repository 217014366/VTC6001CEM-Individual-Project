import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';

const client = new OAuth2Client('322581881760-c0jmv85qrg5b90pgv589kv6rdrnevd8n.apps.googleusercontent.com');

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const googleToken = token.length > 1000;
    if (googleToken) {
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: '322581881760-c0jmv85qrg5b90pgv589kv6rdrnevd8n.apps.googleusercontent.com',
      });
      const payload = ticket.getPayload();
      req.user = {
        id: payload.sub,
        name: payload.name,
        photoURL: payload.picture,
      };
    } else {
      const decodedToken = jwt.verify(token, 'test');
      const { id, name, photoURL } = decodedToken;
      req.user = { id, name, photoURL };
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: 'Something is wrong with your authorization!',
    });
  }
};

export default auth;
