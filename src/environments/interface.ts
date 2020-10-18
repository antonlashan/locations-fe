export interface Env {
  baseUrl: string;
  apiVersion: string;
  environment: 'dev' | 'staging' | 'prod';
  googleMapApiKey: string;
}
