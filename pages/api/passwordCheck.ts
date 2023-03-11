// API route can be removed once password protection is removed

import { passwordCheckHandler } from 'next-password-protect';

const password = process.env.BETA_PASSWORD;

export default passwordCheckHandler(password, {
  // Options go here (optional)
  cookieName: 'next-password-protect',
});
