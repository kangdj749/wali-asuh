export {}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    fbq?: (...args: any[]) => void
    ttq?: {
      track: (event: string, params?: Record<string, any>) => void
    }
  }
}
