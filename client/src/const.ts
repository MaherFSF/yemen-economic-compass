export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const APP_TITLE = import.meta.env.VITE_APP_TITLE || "App";

export const APP_LOGO = "/logo-final.png";

// Platform branding
export const PLATFORM_NAME_AR = "منصّة البوصلة الاقتصادية للحرب في اليمن";
export const PLATFORM_NAME_EN = "Yemen Economic Compass";
export const PLATFORM_SUBTITLE_AR = "مشروع بحثي من كوزواي";
export const PLATFORM_SUBTITLE_EN = "A CauseWay Research Project";
export const PLATFORM_ATTRIBUTION = "Part of CauseWay Consultancies - Financial Intelligence Division";

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
