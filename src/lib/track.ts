type TrackParams = Record<string, string | number | boolean | undefined>

export const trackEvent = (
  event: string,
  params?: TrackParams
) => {
  if (typeof window === "undefined") return

  window.gtag?.("event", event, params)
  window.fbq?.("track", event, params)
  window.ttq?.track(event, params)
}
