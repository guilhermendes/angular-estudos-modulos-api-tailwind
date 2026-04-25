import { AuthConfig } from 'angular-oauth2-oidc';

export const auth: AuthConfig = {
  issuer: 'https://accounts.google.com',
  redirectUri: window.location.origin,
  clientId:
    '98208220340-oupv0408k9s9qjf0udl9hp05snkka82s.apps.googleusercontent.com',
  scope: 'openid profile email',
  strictDiscoveryDocumentValidation: false,
};
