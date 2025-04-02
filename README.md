#  EHR Services

Application to track EHR updates, designed using microservices architecture. This repository is a POC, including back-end (Nest.js + Supabase), front-end (Next.js), and docker config required files.

## Install guide
### Docker deployment
```bash
   cd ehr-services/docker
   docker-compose --env-file ../.env up --build
```

### Back-end
```bash
   cd ehr-services/backend
   npm install
   npm run start
```

### Front-end
```bash
   cd ehr-services/ehr-mapping
   npm install
   npm run dev
```

## License
MIT license.

# Architecture

## Frontend
I used create-remix@latest (create-remix@2.16.4) as template (and as it is a nice have in the job description) to test Remix as the boilerplate.
## Backend
I create a service in Nest.js and implemented Nginx as load balancer to handle this backend as one of the microservices regarding to each data model and standarization.

## Small research
[FHIR (Fast Health Interoperability Resources)](https://fhir.org/) is an HL7 specification for Healthcare Interoperability. Also I reviewed the 
[Core patient definition structure](http://hl7.org/fhir/us/core/StructureDefinition-us-core-patient.html)

