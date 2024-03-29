To reproduce:

1. Clone the repo.

1a. add a file .env in the root dir with values CONFLUENT_API_KEY and CONFLUENT_API_SECRET

2. npm install

3. run `npx next dev`

4. navigate to 'http://localhost:3000/event-sourced' in your browser

5. View the error.

6. Now, to try with Kafkajs, change line 2 in consumer.js to `import { consumer } from "./workingwithkafka";` 

7. Change line 2 in event-sourced/page.jsx to `import { producer } from "../../workingwithkafka";`

8. Save the changes. Run Ctrl+C to stop the server, then  `npx next dev` to re-run it. 

9. You should see the downstream error emanating from `db.js`, `Error: Cannot read properties of undefined (reading '0')`, which indicates that the app is past kafka errors.