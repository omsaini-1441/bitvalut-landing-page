declare namespace NodeJS {
  interface ProcessEnv {
    PORT?: string;
    NODE_ENV?: "development" | "production" | "test";
    NEXT_PUBLIC_SITE_URL?: string;
    NEXT_PUBLIC_APK_URL?: string;
    DASHBOARD_API_URL?: string;
    DATABASE_URL?: string;
    AUTH_SECRET?: string;
    AUTH_URL?: string;
  }
}

export {};
