const { Kafka } = require("kafkajs")
require('dotenv').config()

  const kafka = new Kafka(
 
        {  brokers: ['pkc-921jm.us-east-2.aws.confluent.cloud:9092'],
        clientId: 'example',
          ssl: true,
          sasl: {
              mechanism: 'plain',
              username: process.env.CONFLUENT_API_KEY,
              password: process.env.CONFLUENT_API_SECRET,
          },}
      
  );

export const consumer = kafka.consumer({groupId: 'test-group'} );

export const producer = kafka.producer();