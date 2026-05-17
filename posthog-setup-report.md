<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into Fluentopia, an Expo (React Native) language-learning app. Here's a summary of all changes made:

- **Installed packages**: `posthog-react-native` and `react-native-svg` (required peer dependency).
- **`app.config.js`** (created): Migrated from `app.json` to a JS config that exposes `POSTHOG_PROJECT_TOKEN` and `POSTHOG_HOST` from `.env` via `expo-constants` extras.
- **`src/config/posthog.ts`** (created): PostHog client singleton configured with app lifecycle capture, batching, debug mode in dev, and graceful no-op when token is missing.
- **`app/_layout.tsx`** (edited): Added `PostHogProvider` wrapping the app with autocapture (touches enabled, screen tracking manual), plus a `useEffect` that manually tracks screen views via `posthog.screen()` on every Expo Router pathname change.
- **`app/(tabs)/_layout.tsx`** (edited): Added `posthog.identify(user.id)` via a `useEffect` that fires once the Clerk user is loaded — links all analytics events to the authenticated user using their non-PII Clerk user ID.
- **`app/onboarding.tsx`** (edited): Captures `onboarding_get_started_tapped` on CTA press.
- **`app/(auth)/sign-up.tsx`** (edited): Captures `sign_up_submitted` on form submit, `sign_up_completed` on email verification success (with `posthog.identify` using Clerk user ID), and `social_auth_completed` on successful SSO.
- **`app/(auth)/sign-in.tsx`** (edited): Captures `sign_in_submitted` after email code is sent, `sign_in_completed` on verification success, and `social_auth_completed` on successful SSO.
- **`app/language-select.tsx`** (edited): Captures `language_selected` with `language_id` and `language_name` properties on confirmation.
- **`components/ContinueLearningBanner.tsx`** (edited): Captures `continue_learning_tapped` with language and unit context.
- **`components/TodayPlanList.tsx`** (edited): Captures `plan_item_tapped` with item id, title, and completion state when a plan item is tapped.
- **`app/(tabs)/profile.tsx`** (edited): Captures `sign_out` and calls `posthog.reset()` to clear the user session before signing out.
- **`.env`** (created): `POSTHOG_PROJECT_TOKEN` and `POSTHOG_HOST` environment variables set.

## Events

| Event | Description | File |
|---|---|---|
| `onboarding_get_started_tapped` | User taps 'Get Started' on the onboarding screen — top of the acquisition funnel | `app/onboarding.tsx` |
| `sign_up_submitted` | User submits the sign-up form with email and password | `app/(auth)/sign-up.tsx` |
| `sign_up_completed` | User successfully completes email verification and account creation | `app/(auth)/sign-up.tsx` |
| `sign_in_submitted` | User submits the sign-in form with their email | `app/(auth)/sign-in.tsx` |
| `sign_in_completed` | User successfully verifies their code and signs in | `app/(auth)/sign-in.tsx` |
| `social_auth_completed` | User successfully authenticates via a social provider (Google, Apple, Facebook) | `app/(auth)/sign-in.tsx`, `app/(auth)/sign-up.tsx` |
| `language_selected` | User confirms their language selection on the language select screen | `app/language-select.tsx` |
| `continue_learning_tapped` | User taps the 'Continue' button on the Continue Learning banner on the home screen | `components/ContinueLearningBanner.tsx` |
| `plan_item_tapped` | User taps an item in today's plan list on the home screen | `components/TodayPlanList.tsx` |
| `sign_out` | User signs out from the profile screen | `app/(tabs)/profile.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](/dashboard/686738)
- [Onboarding to Sign-up Funnel](/insights/uZOV1lQk) — conversion from Get Started tap through sign-up completion
- [Daily Sign-ups and Sign-ins](/insights/cYlpIy89) — daily activation volume trend
- [Social Auth by Provider](/insights/He8lejtp) — which social providers are most popular
- [Language Selection Choices](/insights/KiCbMqVq) — which languages users most want to learn
- [Daily Active Learners](/insights/kBblIBfo) — engagement indicator via continue-learning taps

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-expo/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
