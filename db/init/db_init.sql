CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TABLE images(
   id serial not null PRIMARY KEY,
   img_url VARCHAR not null,
   thumb_url VARCHAR not null,
   description VARCHAR,
   category VARCHAR not null,
   created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
   updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON images
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();