-- Family Legacy Wealth OS Seed Data

INSERT INTO legacy_goals (name, category, target_date, target_amount, current_amount) VALUES
  ('Sophia & Leo Higher Education Fund', 'education', '2032-09', 150000.00, 48000.00),
  ('Pacific Coast Multi-Generational Holding Cabin', 'real_estate', '2038-06', 380000.00, 112000.00),
  ('Family Micro-Venture Seed Incubator Fund', 'legacy_fund', '2045-12', 250000.00, 35000.00),
  ('Clean Water Endowment Philanthropic Trust', 'philanthropy', '2035-01', 100000.00, 28500.00);

INSERT INTO allowance_chores (task, value, assigned_to, category, status) VALUES
  ('Read "The Richest Man in Babylon" & present 3 major tenets', 45.00, 'Sophia', 'Learning & Growth', 'approved'),
  ('Aggregate and cross-examine family utility bill trends for Q1', 20.00, 'Leo', 'Entrepreneurship', 'completed'),
  ('Audit household recycling sorting accuracy & suggest 3 system tweaks', 15.00, 'Maya', 'Family Contribution', 'pending'),
  ('Complete Introduction to Microeconomics 10-module study course', 60.00, 'Leo', 'Learning & Growth', 'approved'),
  ('Prepare weekly presentation mapping compound interest charts', 20.00, 'Sophia', 'Learning & Growth', 'completed');

INSERT INTO family_trust_ledgers (member_name, balance, total_earned, compounded_horizon_estimate) VALUES
  ('Sophia', 840.00, 1420.00, 18500.00),
  ('Leo', 690.00, 1150.00, 14800.00),
  ('Maya', 385.00, 520.00, 9200.00);
