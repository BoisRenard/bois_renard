import en from './messages/en.json';
import fr from './messages/fr.json';

type Messages = typeof en

 
declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}