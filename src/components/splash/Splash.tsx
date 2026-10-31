import SplashScreen from "./SplashScreen";

const SPLASH_ID = "splash";

// Runs before the first paint. Shows the splash once per session when the
// installed app launches (or on any page opened with ?splash).
function showSplash(id: string) {
  const splash = document.getElementById(id);
  if (!splash) return;

  const isInstalled =
    matchMedia("(display-mode: standalone)").matches ||
    (navigator as Navigator & { standalone?: boolean }).standalone === true;
  const isForced = new URLSearchParams(location.search).has("splash");
  let isSeen = false;
  try {
    isSeen = sessionStorage.getItem(id) !== null;
    sessionStorage.setItem(id, "1");
  } catch {}
  if (!isForced && (!isInstalled || isSeen)) return;

  splash.setAttribute("data-active", "");

  // Never hide the app for good if it fails to start
  setTimeout(() => (splash.style.visibility = "hidden"), 8000);
}

export default function Splash() {
  const args = JSON.stringify([SPLASH_ID]).replace(/</g, "\\u003c");

  return (
    <>
      <SplashScreen id={SPLASH_ID} />
      <script
        dangerouslySetInnerHTML={{
          __html: `(${showSplash.toString()})(...${args})`,
        }}
      />
    </>
  );
}
