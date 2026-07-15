/**
 * loading.tsx — Route-level skeleton
 *
 * Displays a skeleton UI while navigating between routes.
 * Uses the brand color palette for consistency.
 *
 * Per R3 consensus: shows skeleton while navigating (not the full loader).
 * This is distinct from CinematicLoader which only shows on first visit to `/`.
 */
export default function Loading() {
  return (
    <div
      className="min-h-[60vh] flex items-center justify-center px-6"
      style={{ background: "var(--pt-cream)" }}
    >
      <div className="w-full max-w-2xl">
        {/* Header skeleton */}
        <div className="flex items-center gap-4 mb-12">
          <div
            className="h-3 w-24 rounded animate-pulse"
            style={{ background: "var(--pt-sage-300)", opacity: 0.3 }}
          />
          <div
            className="h-3 w-20 rounded animate-pulse"
            style={{
              background: "var(--pt-sage-300)",
              opacity: 0.3,
              animationDelay: "0.1s",
            }}
          />
        </div>

        {/* Main content skeleton */}
        <div className="space-y-6">
          {/* Title skeleton */}
          <div className="space-y-3">
            <div
              className="h-10 w-3/4 rounded animate-pulse"
              style={{
                background: "var(--pt-sage-300)",
                opacity: 0.4,
              }}
            />
            <div
              className="h-10 w-1/2 rounded animate-pulse"
              style={{
                background: "var(--pt-sage-300)",
                opacity: 0.3,
                animationDelay: "0.15s",
              }}
            />
          </div>

          {/* Paragraph skeleton */}
          <div className="space-y-2">
            <div
              className="h-4 w-full rounded animate-pulse"
              style={{
                background: "var(--pt-sage-300)",
                opacity: 0.25,
              }}
            />
            <div
              className="h-4 w-5/6 rounded animate-pulse"
              style={{
                background: "var(--pt-sage-300)",
                opacity: 0.2,
                animationDelay: "0.1s",
              }}
            />
          </div>

          {/* Cards skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="p-6 rounded-lg"
                style={{
                  background: "var(--pt-cream-deep)",
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <div
                  className="h-4 w-20 rounded animate-pulse mb-3"
                  style={{
                    background: "var(--pt-sage-300)",
                    opacity: 0.3,
                  }}
                />
                <div
                  className="h-6 w-3/4 rounded animate-pulse mb-2"
                  style={{
                    background: "var(--pt-sage-300)",
                    opacity: 0.25,
                  }}
                />
                <div
                  className="h-4 w-full rounded animate-pulse mb-2"
                  style={{
                    background: "var(--pt-sage-300)",
                    opacity: 0.2,
                  }}
                />
                <div
                  className="h-4 w-2/3 rounded animate-pulse"
                  style={{
                    background: "var(--pt-sage-300)",
                    opacity: 0.15,
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Loading indicator */}
        <div className="flex justify-center mt-10">
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full animate-bounce"
              style={{
                background: "var(--pt-sage-500)",
                animationDelay: "0s",
              }}
            />
            <div
              className="w-2 h-2 rounded-full animate-bounce"
              style={{
                background: "var(--pt-sage-500)",
                animationDelay: "0.15s",
              }}
            />
            <div
              className="w-2 h-2 rounded-full animate-bounce"
              style={{
                background: "var(--pt-sage-500)",
                animationDelay: "0.3s",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
