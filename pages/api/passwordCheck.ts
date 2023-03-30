import { passwordCheckHandler } from 'next-password-protect';

const password = process.env.ADMIN_PASSWORD;

export default passwordCheckHandler(password, {
  // Options go here (optional)
  cookieName: 'next-password-protect',
});
