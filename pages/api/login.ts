// API route can be removed once password protection is removed

import { loginHandler } from 'next-password-protect';

const password = process.env.BETA_PASSWORD;

export default loginHandler(password, {
  // Options go here (optional)
  cookieName: 'next-password-protect',
});
