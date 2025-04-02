# Additional descriptions
This section will answer some requirements that will not be implemented but considered for the POC.
## Requirement
Describe and plan out, but don’t implement, an API design that allows for
scalability as more users are added. This could involve efficient data structures,
load balancing, or other techniques.
### Description
For this requirement, I consider to use configure Supabase to handle authentication and database. You can use your Supabase credentials for online users, or create the container, using a custom .env or .env.prod file.

As supabase doesn't have the desired docker hub image, to achieve te Self-Hosting with Docker, we could follow the [supabase guide](https://supabase.com/docs/guides/self-hosting/docker) and create a deployment in the cloud.

I also considered to use GraphQL, but instead I used PostgreSQL.