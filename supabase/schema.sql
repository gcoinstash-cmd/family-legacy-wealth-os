-- Family Legacy Wealth OS Database Schema
-- Row Level Security (RLS) Enabled

CREATE TABLE IF NOT EXISTS legacy_goals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('education', 'real_estate', 'legacy_fund', 'venture', 'philanthropy')),
  target_date TEXT NOT NULL,
  target_amount NUMERIC(12, 2) NOT NULL,
  current_amount NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS allowance_chores (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  task TEXT NOT NULL,
  value NUMERIC(8, 2) NOT NULL,
  assigned_to TEXT NOT NULL,
  category TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'approved')),
  verified_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS family_trust_ledgers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  member_name TEXT NOT NULL,
  balance NUMERIC(10, 2) NOT NULL DEFAULT 0.00,
  total_earned NUMERIC(10, 2) NOT NULL DEFAULT 0.00,
  compounded_horizon_estimate NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security
ALTER TABLE legacy_goals ENABLE ROW LEVEL SECURITY;
ALTER TABLE allowance_chores ENABLE ROW LEVEL SECURITY;
ALTER TABLE family_trust_ledgers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to legacy goals"
  ON legacy_goals FOR SELECT
  USING (true);

CREATE POLICY "Allow public read access to allowance chores"
  ON allowance_chores FOR SELECT
  USING (true);

CREATE POLICY "Allow public read access to family trust ledgers"
  ON family_trust_ledgers FOR SELECT
  USING (true);
