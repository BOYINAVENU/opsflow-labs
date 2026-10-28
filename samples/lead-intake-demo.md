# Agency Lead Intake Demo

This is a **non-production educational workflow**. It accepts a JSON POST webhook and normalizes lead fields. It does not contact leads, send messages, persist data, or prevent duplicates across executions.

## Example test payload

```json
{"name":"Demo Customer","company":"Example Studio","email":"demo@example.com","message":"Interested in a quote","consent":true}
```

## Test steps
1. Import `lead-intake-demo.json` into a test n8n instance.
2. Open the Webhook node and click **Listen for test event**.
3. POST the example JSON to the test URL using an HTTP client.
4. Inspect the **Validate and Normalize** output. A valid submission should show `PENDING_HUMAN_REVIEW`.
5. Repeat with `consent:false` and an invalid email to verify rejection.

## Before production
- Protect the webhook against abuse, enforce rate limits and suitable authentication where appropriate.
- Implement persistent deduplication in a database with a unique constraint on `dedupeKey`; the demo only computes the key.
- Add consent recordkeeping, privacy notices, retention limits, and a manual review destination.
- Configure safe error handling and test against malformed requests.
- Note that the webhook acknowledges receipt, not successful downstream processing.

Never publish real customer information or API keys in GitHub.
