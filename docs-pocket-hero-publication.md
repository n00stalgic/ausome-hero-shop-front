# Pocket Heroes nomination to card review

Nomination is private intake only. The existing form's checkbox covers permission to **nominate**, not family permission to publish a child. The public Quiet Garden route renders only the fictional, reviewed roster; it never reads nominations or the publication-review table.

Before a real child's card can be proposed:
1. Confirm the parent or guardian's identity through a trusted contact route and obtain explicit, recorded permission for the exact proposed name, story, photo or illustration, and public audience. Give the family a way to decline or revise. Store the scope and evidence privately.
2. Prepare the card draft privately, and let Bianca review the final portrayal, design and audience. Store her explicit approval with evidence.
3. Only a trusted server-side editor may record `published_at`. The database check rejects that state without both records. No browser-only admin switch or public write policy is provided.
4. Publication requires a separate, deliberate deployment that adds the approved card to a public registry. No automatic nomination-to-publication job exists. Revocation or changes to the card need a new review and removal path before any real card is launched.

Do not store guardian consent as the existing `hero_nominations.has_permission` checkbox. Do not include private nomination data in the Vite bundle or expose the review table through a public API. Deploy and validate the SQL migration before anyone depends on it; the code PR alone does not create an operational consent workflow.
