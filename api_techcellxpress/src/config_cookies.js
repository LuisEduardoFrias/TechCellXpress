//
const configCookies = {
  httpOnly: false,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'none',
  maxAge: 1000 * 60 * 60,
  path: '/'
};

export default configCookies;