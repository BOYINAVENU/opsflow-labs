# Release gates

Current status: **Not ready for paid sale.**

## Automated local test
Run `node --test tests/lead-validation.test.cjs` with Node.js 20+.

## Required before paid release
- Test n8n import and runtime webhook behavior on a supported version.
- Add persistent storage with unique-key duplicate prevention.
- Add webhook authentication/rate limiting.
- Add secure alert routing with PII and credential redaction.
- Add human review destination, retention policy, and consent evidence.
- Verify retries and failures with no duplicate side effects.
- Configure payment processor, terms, refund policy, and delivery.
- Test end-to-end checkout and delivery.

The v0.2 sample only validates input and computes a duplicate key. It does not persist or suppress duplicates, and its webhook acknowledges receipt before downstream processing. No automated outbound marketing is included.
