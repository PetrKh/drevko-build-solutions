-- Create storage bucket for portfolio photos
INSERT INTO storage.buckets (id, name, public)
VALUES ('portfolio', 'portfolio', true)
ON CONFLICT (id) DO NOTHING;

-- Create policies for portfolio bucket
CREATE POLICY "Anyone can view portfolio images"
ON storage.objects
FOR SELECT
USING (bucket_id = 'portfolio');

CREATE POLICY "Anyone can upload portfolio images"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'portfolio');

CREATE POLICY "Anyone can update portfolio images"
ON storage.objects
FOR UPDATE
USING (bucket_id = 'portfolio');

CREATE POLICY "Anyone can delete portfolio images"
ON storage.objects
FOR DELETE
USING (bucket_id = 'portfolio');