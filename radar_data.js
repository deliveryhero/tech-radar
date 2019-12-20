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
      "r": 100,
      "t": 165
    },
    "movement": "t"
  },
  {
    "name": "Google Data Studio",
    "pc": {
      "r": 114,
      "t": 100
    },
    "movement": "t"
  },
  {
    "name": "ReactJS",
    "pc": {
      "r": 58,
      "t": 126
    },
    "movement": "c"
  },
  {
    "name": "Akka (Scala)",
    "pc": {
      "r": 294,
      "t": 146
    },
    "movement": "t"
  },
  {
    "name": "Angular",
    "pc": {
      "r": 375,
      "t": 126
    },
    "movement": "t"
  },
  {
    "name": "Play (Java)",
    "pc": {
      "r": 333,
      "t": 174
    },
    "movement": "t"
  },
  {
    "name": "CircleCI",
    "pc": {
      "r": 146,
      "t": 158
    },
    "movement": "t"
  },
  {
    "name": "Jenkins",
    "pc": {
      "r": 158,
      "t": 122
    },
    "movement": "t"
  },
  {
    "name": "k6",
    "pc": {
      "r": 201,
      "t": 110
    },
    "movement": "t"
  },
  {
    "name": "Node.js",
    "pc": {
      "r": 168,
      "t": 170
    },
    "movement": "c"
  },
  {
    "name": "OpenAPI (Swagger)",
    "pc": {
      "r": 149,
      "t": 98
    },
    "movement": "t"
  },
  {
    "name": "Spring / Spring Boot",
    "pc": {
      "r": 205,
      "t": 146
    },
    "movement": "c"
  },
  {
    "name": "TravisCI",
    "pc": {
      "r": 178,
      "t": 134
    },
    "movement": "t"
  },
  {
    "name": "Vue.js",
    "pc": {
      "r": 178,
      "t": 140
    },
    "movement": "t"
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
    "name": "AWS AURORA",
    "pc": {
      "r": 66,
      "t": 49
    },
    "movement": "t"
  },
  {
    "name": "AWS DynamoDB",
    "pc": {
      "r": 77,
      "t": 62
    },
    "movement": "t"
  },
  {
    "name": "AWS SNS",
    "pc": {
      "r": 53,
      "t": 36
    },
    "movement": "c"
  },
  {
    "name": "AWS SQS",
    "pc": {
      "r": 109,
      "t": 23
    },
    "movement": "c"
  },
  {
    "name": "Google BigQuery",
    "pc": {
      "r": 91,
      "t": 75
    },
    "movement": "c"
  },
  {
    "name": "MySQL",
    "pc": {
      "r": 100,
      "t": 10
    },
    "movement": "t"
  },
  {
    "name": "PostgreSQL",
    "pc": {
      "r": 116,
      "t": 16
    },
    "movement": "c"
  },
  {
    "name": "Redis",
    "pc": {
      "r": 56,
      "t": 55
    },
    "movement": "c"
  },
  {
    "name": "AWS Redshift",
    "pc": {
      "r": 276,
      "t": 76
    },
    "movement": "t"
  },
  {
    "name": "Hadoop/HBase",
    "pc": {
      "r": 263,
      "t": 66
    },
    "movement": "t"
  },
  {
    "name": "Kafka",
    "pc": {
      "r": 235,
      "t": 56
    },
    "movement": "t"
  },
  {
    "name": "MemCached",
    "pc": {
      "r": 247,
      "t": 16
    },
    "movement": "t"
  },
  {
    "name": "MongoDB",
    "pc": {
      "r": 261,
      "t": 46
    },
    "movement": "t"
  },
  {
    "name": "Solr",
    "pc": {
      "r": 258,
      "t": 36
    },
    "movement": "t"
  },
  {
    "name": "ActiveMQ",
    "pc": {
      "r": 328,
      "t": 76
    },
    "movement": "t"
  },
  {
    "name": "Aerospike",
    "pc": {
      "r": 386,
      "t": 4
    },
    "movement": "t"
  },
  {
    "name": "Cassandra",
    "pc": {
      "r": 355,
      "t": 20
    },
    "movement": "t"
  },
  {
    "name": "Neo4j",
    "pc": {
      "r": 359,
      "t": 36
    },
    "movement": "t"
  },
  {
    "name": "RabbitMQ",
    "pc": {
      "r": 385,
      "t": 12
    },
    "movement": "t"
  },
  {
    "name": "AWS Kinesis",
    "pc": {
      "r": 154,
      "t": 56
    },
    "movement": "c"
  },
  {
    "name": "Elasticsearch",
    "pc": {
      "r": 164,
      "t": 44
    },
    "movement": "t"
  },
  {
    "name": "MSSQL",
    "pc": {
      "r": 197,
      "t": 8
    },
    "movement": "t"
  },
  {
    "name": "Spark",
    "pc": {
      "r": 153,
      "t": 32
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
      "r": 71,
      "t": 203
    },
    "movement": "c"
  },
  {
    "name": "Datadog",
    "pc": {
      "r": 57,
      "t": 255
    },
    "movement": "t"
  },
  {
    "name": "Docker",
    "pc": {
      "r": 104,
      "t": 242
    },
    "movement": "c"
  },
  {
    "name": "Helm",
    "pc": {
      "r": 82,
      "t": 216
    },
    "movement": "t"
  },
  {
    "name": "Kubernetes",
    "pc": {
      "r": 92,
      "t": 229
    },
    "movement": "c"
  },
  {
    "name": "Terraform",
    "pc": {
      "r": 69,
      "t": 190
    },
    "movement": "c"
  },
  {
    "name": "istio",
    "pc": {
      "r": 270,
      "t": 236
    },
    "movement": "t"
  },
  {
    "name": "AWS Cloudformation",
    "pc": {
      "r": 372,
      "t": 192
    },
    "movement": "t"
  },
  {
    "name": "GCP AppEngine",
    "pc": {
      "r": 352,
      "t": 200
    },
    "movement": "t"
  },
  {
    "name": "Puppet",
    "pc": {
      "r": 347,
      "t": 184
    },
    "movement": "t"
  },
  {
    "name": "saltstack",
    "pc": {
      "r": 388,
      "t": 240
    },
    "movement": "t"
  },
  {
    "name": "AWS KMS",
    "pc": {
      "r": 194,
      "t": 260
    },
    "movement": "t"
  },
  {
    "name": "Cloudflare Workers",
    "pc": {
      "r": 176,
      "t": 224
    },
    "movement": "t"
  },
  {
    "name": "EKS",
    "pc": {
      "r": 205,
      "t": 188
    },
    "movement": "t"
  },
  {
    "name": "New Relic",
    "pc": {
      "r": 171,
      "t": 200
    },
    "movement": "t"
  },
  {
    "name": "Vault",
    "pc": {
      "r": 159,
      "t": 248
    },
    "movement": "t"
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
      "r": 119,
      "t": 345
    },
    "movement": "t"
  },
  {
    "name": "Java",
    "pc": {
      "r": 74,
      "t": 332
    },
    "movement": "t"
  },
  {
    "name": "Javascript",
    "pc": {
      "r": 115,
      "t": 280
    },
    "movement": "c"
  },
  {
    "name": "Kotlin",
    "pc": {
      "r": 75,
      "t": 293
    },
    "movement": "t"
  },
  {
    "name": "Python",
    "pc": {
      "r": 98,
      "t": 319
    },
    "movement": "c"
  },
  {
    "name": "Swift",
    "pc": {
      "r": 109,
      "t": 306
    },
    "movement": "c"
  },
  {
    "name": ".NET Core",
    "pc": {
      "r": 298,
      "t": 286
    },
    "movement": "t"
  },
  {
    "name": "R",
    "pc": {
      "r": 262,
      "t": 316
    },
    "movement": "t"
  },
  {
    "name": "Grails",
    "pc": {
      "r": 342,
      "t": 322
    },
    "movement": "t"
  },
  {
    "name": "PHP",
    "pc": {
      "r": 333,
      "t": 338
    },
    "movement": "t"
  },
  {
    "name": "Scala",
    "pc": {
      "r": 358,
      "t": 290
    },
    "movement": "t"
  },
  {
    "name": "Rails",
    "pc": {
      "r": 192,
      "t": 326
    },
    "movement": "t"
  },
  {
    "name": "Typescript",
    "pc": {
      "r": 206,
      "t": 278
    },
    "movement": "t"
  }
]
  }
];
