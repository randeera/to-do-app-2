CREATE TABLE IF NOT EXISTS task(
                            id SERIAL PRIMARY KEY,
                            description VARCHAR(100) NOT NULL,
                            status BOOLEAN NOT NULL,
                            email VARCHAR(150) NOT NULL
);