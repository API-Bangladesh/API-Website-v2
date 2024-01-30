export const server =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://apisolutionsltd.com";

// export const authTokenKey = process.env.NEXT_PUBLIC_AUTH_TOKEN_KEY;
// export const authUserKey = process.env.NEXT_PUBLIC_AUTH_USER_KEY;
export const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

export const constants = {
  RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
  RECAPTCHA_SECRET_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY,
};
