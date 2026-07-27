import type { CapacitorConfig } from '@capacitor/cli';

/**
 * Afroé mobile shell configuration.
 *
 * Strategy: this native app is a thin shell that loads the already-hosted
 * Next.js web app (app.afroe.studio) inside the native WebView. Because the
 * web app relies on server-side rendering, middleware auth, and server
 * actions, it cannot be statically exported — so we point Capacitor at the
 * live URL instead of bundling static files. Every Vercel deploy is therefore
 * reflected in the app instantly, with no store resubmission.
 *
 * `www/` still exists as the required local webDir and serves as an offline /
 * boot fallback splash.
 */
const config: CapacitorConfig = {
  appId: 'studio.afroe.app',
  appName: 'Afroé',
  webDir: 'www',
  server: {
    // The live production site the shell renders.
    url: 'https://app.afroe.studio',
    cleartext: false,
    // Hosts the WebView is allowed to navigate to without bouncing to the
    // system browser. Keep this tight — everything the app talks to directly.
    allowNavigation: [
      'app.afroe.studio',
      '*.supabase.co',
      '*.supabase.in',
      'api.mollie.com',
      'www.mollie.com',
      'api.brevo.com',
    ],
  },
  ios: {
    // Let the web app control safe-area insets itself.
    contentInset: 'always',
  },
  android: {
    allowMixedContent: false,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1200,
      backgroundColor: '#ffffff',
      showSpinner: false,
      androidScaleType: 'CENTER_CROP',
    },
  },
};

export default config;
