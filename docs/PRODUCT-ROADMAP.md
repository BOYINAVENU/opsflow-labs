# Agency Automation Reliability Kit — development roadmap

**Status:** Prototype only. Not available for sale.

## Planned commercial deliverables
- Intake workflow with validation and persistent duplicate prevention
- Human-reviewed proposal drafting (no automatic outbound sending)
- Error routing with sensitive-data redaction
- Alert notification adapter with safe retry limits
- Deployment guide, fixtures, and reproducible tests

## Acceptance gates
1. Import cleanly into a supported n8n version.
2. Test valid, invalid, duplicate, and malformed submissions.
3. Verify duplicate suppression persists across executions.
4. Test rate-limit, timeout, and retry paths without duplicate side effects.
5. Confirm logs and alerts redact secrets and personal information.
6. Verify that no customer-facing communication is sent without review.

No claims of production reliability, profitability, or customer savings before validation.
