/**
 * Skip to Main Content Link
 * Improves accessibility for keyboard navigation
 * Allows screen reader users and keyboard users to skip navigation
 */

export default function SkipToMainContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only fixed top-0 left-0 z-9999 px-4 py-2 bg-primary text-white font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
    >
      Skip to main content
    </a>
  );
}
