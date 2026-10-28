# Error Alert Starter (free sample)

This is a minimal, importable n8n error workflow demonstration. It is **not** a production alerting solution yet: it formats error data but does not send notifications or automatically retry failed executions.

## How to try
1. In a test n8n instance, import `error-alert-workflow.json`.
2. Review the Code node and output schema.
3. Configure this workflow as the error workflow in a separate test workflow's settings.
4. Deliberately fail a test execution and inspect the formatted error output.
5. Add your own Slack/email notification node after **Format Error**, and test delivery before relying on it.

Do not send secrets, personal data, or raw customer payloads to external alert services. n8n's error trigger may not run for all manual test scenarios; use an automatic test execution. Never activate unreviewed imported workflows in production.

## Planned improvements
- Redaction of sensitive fields
- Notification adapters and alert deduplication
- Explicit retry policies with idempotency safeguards
- Automated integration tests
