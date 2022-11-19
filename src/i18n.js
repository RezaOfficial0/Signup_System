import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
     resources: {
          en: {
               translations: {
                 'Sign up' : 'Sign up',
                 'Password Mismatch' : 'Password Mismatch',
                 "Enter Username" : "Enter Username",
                 "Enter Display Name" : "Enter Display Name",
                 "Enter Password" : "Enter Password",
                 "Repeat Password" : "Repeat Password"
               }
          },
          tr: {
               translations: {
           'Sign up' : 'Kayit ol',    
           'Password Mismatch' : 'ayni şifreyi giriniz',
           "Enter Username" : "Kulanci Adi",
           "Enter Display Name" : "Görünen isim",
                 "Enter Password" : "Şifre",
                 "Repeat Password" : "Şifre Tekrari"

               }
          },
          fr: {
               translations: {
           'Sign up' : 'Sinscrire',    
           'Password Mismatch' : 'Non concordance des mots de passe',
           "Enter Username" : "Saisissez votre nom d'utilisateur",
           "Enter Display Name" : "Entrez le nom d'affichage",
                 "Enter Password" : "Entrer le mot de passe",
                 "Repeat Password" : "Répéter le mot de passe"

               }
          }
     },
     fallbackLng: 'tr',
     ns: ['translations'],
     defaultNS: 'translations',
     keySeparator : false,
     interpolation: {
          escapeValue:false,
          formatSeparator:','
     },
     react: {
          wait: true
     }

});

export default i18n;