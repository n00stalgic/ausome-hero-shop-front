-- Nominations are private intake, not permission to publish a child's identity.
-- This separate, service-role-only publication gate has no public INSERT/UPDATE policy.
-- A production editor must collect a recorded family consent and Bianca's decision
-- before inserting a public card into the approved registry.
CREATE TABLE IF NOT EXISTS public.pocket_hero_publication_reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nomination_id UUID NOT NULL REFERENCES public.hero_nominations(id) ON DELETE RESTRICT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  guardian_name TEXT,
  guardian_contact TEXT,
  guardian_consent_at TIMESTAMPTZ,
  guardian_consent_scope TEXT,
  guardian_consent_evidence TEXT,
  bianca_approved_at TIMESTAMPTZ,
  bianca_decision_evidence TEXT,
  proposed_card JSONB,
  published_at TIMESTAMPTZ,
  CONSTRAINT unique_review_per_nomination UNIQUE (nomination_id),
  CONSTRAINT publication_needs_both_approvals CHECK (
    published_at IS NULL OR (
      guardian_name IS NOT NULL AND length(trim(guardian_name)) > 0 AND
      guardian_contact IS NOT NULL AND length(trim(guardian_contact)) > 0 AND
      guardian_consent_at IS NOT NULL AND
      guardian_consent_scope IS NOT NULL AND length(trim(guardian_consent_scope)) > 0 AND
      guardian_consent_evidence IS NOT NULL AND length(trim(guardian_consent_evidence)) > 0 AND
      bianca_approved_at IS NOT NULL AND
      bianca_decision_evidence IS NOT NULL AND length(trim(bianca_decision_evidence)) > 0 AND
      proposed_card IS NOT NULL
    )
  )
);
ALTER TABLE public.pocket_hero_publication_reviews ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.pocket_hero_publication_reviews FROM anon, authenticated;
COMMENT ON TABLE public.pocket_hero_publication_reviews IS 'Private manual publication review. The public Pocket Heroes route renders fictional cards only; no public client may read or mutate this table.';
