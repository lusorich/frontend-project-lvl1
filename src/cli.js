import { welcomeTextForUser, setUserName, helloTextForUser } from './index.js';

export const helloUser = () => {
  welcomeTextForUser();
  setUserName();
  helloTextForUser();
};
