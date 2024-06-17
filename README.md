## Development

# Frontend
```bash
cd frontend
npm install
npm run dev
```

# Backend

```bash
cd backend
cd Pasticceria
dotnet watch --project Pasticceria
```

# Database

```bash
docker run --name db -e POSTGRES_PASSWORD=admin -e PGDATA=/var/lib/postgresql/data/pgdata -p 5432:5432 -v REPLACE_WITH_ABSOLUTE_PATH/db-data:/var/lib/postgresql/data -d postgres
```

## Production

start application:

```bash
docker compose up -d
````
