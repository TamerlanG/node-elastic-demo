# Node Express Elastic APM Demo

This is a demo on how to integrate application performance monitoring (APM) provided by Elastic to a node-express application. 

To check out the code specific to the implementation checkout the files:

- `.env` -- For required environment variables
- `/src/api/server.ts` -- For the one line integration (line number 2)

## How to Install and Run 

### Step 1: Have an ELK instance up and running

For this, I would suggest going through this [repository](https://github.com/sherifabdlnaby/elastdocker)

TLDR: 
1. `git clone https://github.com/sherifabdlnaby/elastdocker.git`
2. `cd elastdocker`
3. `make setup`
4. `make all`
5. You now have access to the kibana dashboard at https://localhost:5601
    - Username: elastic 
    - Password: changeme
    - APM Secret Token: secrettokengoeshere

### Step 2: Setup our Project
1. `git clone https://github.com/TamerlanG/node-elastic-demo`
2. `yarn`
3. `yarn run dev`
4. Go to the Kibana -> Observability -> APM and find the project named: job-board.
