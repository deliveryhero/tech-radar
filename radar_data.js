var h = 1000;
var w = 1450;

var radar_arcs = [
  {
    "name": "ADOPT",
    "r": 130
  },
  {
    "name": "TRIAL",
    "r": 220
  },
  {
    "name": "ASSESS",
    "r": 310
  },
  {
    "name": "HOLD",
    "r": 400
  }
];

// movement:
//   t = moved (triangle)
//   c = stayed put (circle)
//
// blipSize: 
//  This is optional, if you omit this property, then blip size will be 70.
//
// url:
//  This is optional, if you add it then blips will be clickable to some URL.
//
// pc: (polar coordinates)
//  r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//  t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
var radar_data = [
  { 
    "quadrant": "Techniques, Frameworks & Tools",
    "left" : 45,
    "top" : 188,
    "color" : "#8FA227",
    "items" : [
  {
    "name": "Airflow",
    "pc": {
      "r": 92,
      "t": 126
    },
    "movement": "c"
  },
  {
    "name": "Google Data Studio",
    "pc": {
      "r": 82,
      "t": 165
    },
    "movement": "c"
  },
  {
    "name": "OpenAPI (Swagger)",
    "pc": {
      "r": 52,
      "t": 139
    },
    "movement": "t"
  },
  {
    "name": "ReactJS",
    "pc": {
      "r": 50,
      "t": 152
    },
    "movement": "c"
  },
  {
    "name": "Akka (Scala)",
    "pc": {
      "r": 268,
      "t": 96
    },
    "movement": "c"
  },
  {
    "name": "Play (Java, Scala)",
    "pc": {
      "r": 243,
      "t": 146
    },
    "movement": "t"
  },
  {
    "name": "Angular",
    "pc": {
      "r": 194,
      "t": 170
    },
    "movement": "t"
  },
  {
    "name": "Avro/JSON",
    "pc": {
      "r": 207,
      "t": 146
    },
    "movement": "t"
  },
  {
    "name": "CircleCI",
    "pc": {
      "r": 143,
      "t": 158
    },
    "movement": "c"
  },
  {
    "name": "Drone.io",
    "pc": {
      "r": 204,
      "t": 122
    },
    "movement": "t"
  },
  {
    "name": "gRPC",
    "pc": {
      "r": 164,
      "t": 110
    },
    "movement": "t"
  },
  {
    "name": "Jenkins",
    "pc": {
      "r": 201,
      "t": 98
    },
    "movement": "c"
  },
  {
    "name": "Jupyter",
    "pc": {
      "r": 156,
      "t": 134
    },
    "movement": "t"
  },
  {
    "name": "k6",
    "pc": {
      "r": 196,
      "t": 116
    },
    "movement": "c"
  },
  {
    "name": "Node.js",
    "pc": {
      "r": 177,
      "t": 104
    },
    "movement": "c"
  },
  {
    "name": "protobuf",
    "pc": {
      "r": 188,
      "t": 140
    },
    "movement": "t"
  },
  {
    "name": "Spring / Spring Boot",
    "pc": {
      "r": 205,
      "t": 164
    },
    "movement": "c"
  },
  {
    "name": "Tensorflow",
    "pc": {
      "r": 194,
      "t": 128
    },
    "movement": "t"
  },
  {
    "name": "Vue.js",
    "pc": {
      "r": 204,
      "t": 152
    },
    "movement": "c"
  }
]
  },
  { 
    "quadrant": "Data Management",
    "left": w-300+30,
    "top" : 188,
    "color" : "#587486",
    "items" : [
  {
    "name": "AWS DynamoDB",
    "pc": {
      "r": 80,
      "t": 75
    },
    "movement": "c"
  },
  {
    "name": "AWS SNS",
    "pc": {
      "r": 81,
      "t": 49
    },
    "movement": "c"
  },
  {
    "name": "AWS SQS",
    "pc": {
      "r": 82,
      "t": 36
    },
    "movement": "c"
  },
  {
    "name": "Google BigQuery",
    "pc": {
      "r": 84,
      "t": 23
    },
    "movement": "c"
  },
  {
    "name": "MemCached",
    "pc": {
      "r": 112,
      "t": 62
    },
    "movement": "t"
  },
  {
    "name": "PostgreSQL ",
    "pc": {
      "r": 62,
      "t": 10
    },
    "movement": "t"
  },
  {
    "name": "Redis",
    "pc": {
      "r": 86,
      "t": 29
    },
    "movement": "c"
  },
  {
    "name": "Cassandra",
    "pc": {
      "r": 270,
      "t": 56
    },
    "movement": "t"
  },
  {
    "name": "Hadoop/HDFS",
    "pc": {
      "r": 280,
      "t": 76
    },
    "movement": "t"
  },
  {
    "name": "MongoDB",
    "pc": {
      "r": 260,
      "t": 6
    },
    "movement": "c"
  },
  {
    "name": "Neo4j",
    "pc": {
      "r": 259,
      "t": 16
    },
    "movement": "t"
  },
  {
    "name": "RabbitMQ",
    "pc": {
      "r": 290,
      "t": 36
    },
    "movement": "t"
  },
  {
    "name": "Solr",
    "pc": {
      "r": 287,
      "t": 26
    },
    "movement": "c"
  },
  {
    "name": "MSSQL",
    "pc": {
      "r": 335,
      "t": 76
    },
    "movement": "t"
  },
  {
    "name": "AWS Athena",
    "pc": {
      "r": 159,
      "t": 20
    },
    "movement": "t"
  },
  {
    "name": "AWS AURORA",
    "pc": {
      "r": 156,
      "t": 8
    },
    "movement": "t"
  },
  {
    "name": "AWS Kinesis",
    "pc": {
      "r": 156,
      "t": 32
    },
    "movement": "c"
  },
  {
    "name": "AWS Redshift",
    "pc": {
      "r": 167,
      "t": 80
    },
    "movement": "t"
  },
  {
    "name": "Elasticsearch",
    "pc": {
      "r": 168,
      "t": 44
    },
    "movement": "c"
  },
  {
    "name": "Google PubSub",
    "pc": {
      "r": 161,
      "t": 56
    },
    "movement": "t"
  },
  {
    "name": "Kafka",
    "pc": {
      "r": 140,
      "t": 68
    },
    "movement": "t"
  },
  {
    "name": "MySQL",
    "pc": {
      "r": 202,
      "t": 62
    },
    "movement": "t"
  },
  {
    "name": "Spark",
    "pc": {
      "r": 140,
      "t": 14
    },
    "movement": "c"
  }
]
  },
  {   
    "quadrant": "Platforms & Infrastructure",
    "left" :45,
    "top" : (h/2 + 38),
    "color" : "#DC6F1D",
    "items" : [
  {
    "name": "AWS Lambda",
    "pc": {
      "r": 60,
      "t": 216
    },
    "movement": "c"
  },
  {
    "name": "Cloudflare Workers",
    "pc": {
      "r": 65,
      "t": 229
    },
    "movement": "t"
  },
  {
    "name": "Datadog",
    "pc": {
      "r": 77,
      "t": 242
    },
    "movement": "c"
  },
  {
    "name": "Docker",
    "pc": {
      "r": 64,
      "t": 255
    },
    "movement": "c"
  },
  {
    "name": "EKS",
    "pc": {
      "r": 64,
      "t": 203
    },
    "movement": "t"
  },
  {
    "name": "Kubernetes",
    "pc": {
      "r": 70,
      "t": 190
    },
    "movement": "c"
  },
  {
    "name": "Terraform",
    "pc": {
      "r": 82,
      "t": 196
    },
    "movement": "c"
  },
  {
    "name": "Vault",
    "pc": {
      "r": 85,
      "t": 209
    },
    "movement": "t"
  },
  {
    "name": "AWS Cloudformation",
    "pc": {
      "r": 287,
      "t": 236
    },
    "movement": "t"
  },
  {
    "name": "saltstack",
    "pc": {
      "r": 280,
      "t": 246
    },
    "movement": "t"
  },
  {
    "name": "GCP AppEngine",
    "pc": {
      "r": 369,
      "t": 224
    },
    "movement": "c"
  },
  {
    "name": "AWS KMS",
    "pc": {
      "r": 207,
      "t": 212
    },
    "movement": "c"
  },
  {
    "name": "Helm",
    "pc": {
      "r": 194,
      "t": 260
    },
    "movement": "t"
  },
  {
    "name": "istio",
    "pc": {
      "r": 165,
      "t": 248
    },
    "movement": "t"
  },
  {
    "name": "New Relic",
    "pc": {
      "r": 147,
      "t": 236
    },
    "movement": "c"
  }
]
  },
  { 
    "quadrant": "Languages",
    "color" : "#B70062",
    "left"  : (w-300+30),
    "top" :   (h/2 + 38),
    "items" : [
  {
    "name": "Go",
    "pc": {
      "r": 66,
      "t": 306
    },
    "movement": "c"
  },
  {
    "name": "Javascript",
    "pc": {
      "r": 79,
      "t": 293
    },
    "movement": "c"
  },
  {
    "name": "Kotlin",
    "pc": {
      "r": 82,
      "t": 280
    },
    "movement": "c"
  },
  {
    "name": "Python",
    "pc": {
      "r": 62,
      "t": 319
    },
    "movement": "c"
  },
  {
    "name": "Swift",
    "pc": {
      "r": 113,
      "t": 345
    },
    "movement": "c"
  },
  {
    "name": "Typescript",
    "pc": {
      "r": 91,
      "t": 332
    },
    "movement": "t"
  },
  {
    "name": "R",
    "pc": {
      "r": 284,
      "t": 346
    },
    "movement": "c"
  },
  {
    "name": "React-Native",
    "pc": {
      "r": 264,
      "t": 326
    },
    "movement": "t"
  },
  {
    "name": "Scala",
    "pc": {
      "r": 245,
      "t": 286
    },
    "movement": "t"
  },
  {
    "name": "Grails",
    "pc": {
      "r": 368,
      "t": 274
    },
    "movement": "c"
  },
  {
    "name": "PHP",
    "pc": {
      "r": 352,
      "t": 330
    },
    "movement": "c"
  },
  {
    "name": "Rails",
    "pc": {
      "r": 374,
      "t": 298
    },
    "movement": "t"
  },
  {
    "name": ".NET Core",
    "pc": {
      "r": 201,
      "t": 338
    },
    "movement": "t"
  },
  {
    "name": "Flutter",
    "pc": {
      "r": 198,
      "t": 326
    },
    "movement": "t"
  },
  {
    "name": "Java",
    "pc": {
      "r": 180,
      "t": 314
    },
    "movement": "t"
  }
]
  }
];
