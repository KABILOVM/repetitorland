-- Enable RLS on all tables
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE teachers ENABLE ROW LEVEL SECURITY;
ALTER TABLE course_teachers ENABLE ROW LEVEL SECURITY;
ALTER TABLE branches ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Public read for active/published content
CREATE POLICY "Public read courses" ON courses FOR SELECT USING (is_active = TRUE);
CREATE POLICY "Public read teachers" ON teachers FOR SELECT USING (TRUE);
CREATE POLICY "Public read course_teachers" ON course_teachers FOR SELECT USING (TRUE);
CREATE POLICY "Public read branches" ON branches FOR SELECT USING (TRUE);
CREATE POLICY "Public read reviews" ON reviews FOR SELECT USING (is_published = TRUE);
CREATE POLICY "Public read posts" ON posts FOR SELECT USING (is_published = TRUE);

-- Public insert for leads (anyone can submit)
CREATE POLICY "Public insert leads" ON leads FOR INSERT WITH CHECK (TRUE);

-- Admin full access (authenticated users)
CREATE POLICY "Admin all courses" ON courses FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin all teachers" ON teachers FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin all course_teachers" ON course_teachers FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin all branches" ON branches FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin all reviews" ON reviews FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin all posts" ON posts FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin all leads" ON leads FOR ALL USING (auth.role() = 'authenticated');
