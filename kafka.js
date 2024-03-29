const { Kafka } = require("@confluentinc/kafka-javascript").KafkaJS;
require('dotenv').config()

  const kafka = new Kafka({
    kafkaJS: 
        {  brokers: ['pkc-921jm.us-east-2.aws.confluent.cloud:9092'],
          ssl: true,
          sasl: {
              mechanism: 'plain',
              username: process.env.CONFLUENT_API_KEY,
              password: process.env.CONFLUENT_API_SECRET,
          },}
      
  });

export const consumer = kafka.consumer({ kafkaJS: {groupId: "groupies"} });

export const producer = kafka.producer({ kafkaJS: { acks: 1 } });