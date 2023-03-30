import { loginHandler } from 'next-password-protect';

const password = process.env.ADMIN_PASSWORD;

export default loginHandler(password, {
  // Options go here (optional)
  cookieName: 'next-password-protect',
});
