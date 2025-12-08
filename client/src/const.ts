export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const APP_TITLE = import.meta.env.VITE_APP_TITLE || "App";

export const APP_LOGO = "/causeway-yemen-logo.png";

// Platform branding
export const PLATFORM_NAME_AR = "مرصد كوزواي المالي والاقتصادي للمساءلة والشفافية";
export const PLATFORM_NAME_EN = "CauseWay Yemen Financial and Economic Observatory for Accountability and Transparency";
export const PLATFORM_SUBTITLE_AR = "تحليل شامل للتحولات المالية والاقتصادية في اليمن (2010-2025)";
export const PLATFORM_SUBTITLE_EN = "Comprehensive Analysis of Financial and Economic Transformations in Yemen (2010-2025)";
export const PLATFORM_ATTRIBUTION = "مرصد كوزواي اليمن - الخدمات المالية والمصرفية | CauseWay Yemen Observatory";

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};
