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
    "name": "OpenAPI (Swagger)",
    "pc": {
      "r": 70,
      "t": 126
    },
    "movement": "c"
  },
  {
    "name": "AngularJS 1.x",
    "pc": {
      "r": 264,
      "t": 96
    },
    "movement": "c"
  },
  {
    "name": "BackboneJS",
    "pc": {
      "r": 258,
      "t": 116
    },
    "movement": "c"
  },
  {
    "name": "PHP Symfony",
    "pc": {
      "r": 274,
      "t": 126
    },
    "movement": "c"
  },
  {
    "name": "Akka (Scala)",
    "pc": {
      "r": 150,
      "t": 110
    },
    "movement": "c"
  },
  {
    "name": "Angular",
    "pc": {
      "r": 149,
      "t": 158
    },
    "movement": "c"
  },
  {
    "name": "Ember.js",
    "pc": {
      "r": 153,
      "t": 98
    },
    "movement": "c"
  },
  {
    "name": "jQuery",
    "pc": {
      "r": 192,
      "t": 146
    },
    "movement": "c"
  },
  {
    "name": "Maven",
    "pc": {
      "r": 174,
      "t": 122
    },
    "movement": "c"
  },
  {
    "name": "Node.js",
    "pc": {
      "r": 187,
      "t": 170
    },
    "movement": "c"
  },
  {
    "name": "ReactJS",
    "pc": {
      "r": 158,
      "t": 134
    },
    "movement": "c"
  },
  {
    "name": "Spring / Spring Boot",
    "pc": {
      "r": 189,
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
    "name": "AWS S3",
    "pc": {
      "r": 50,
      "t": 75
    },
    "movement": "c"
  },
  {
    "name": "AWS SNS",
    "pc": {
      "r": 116,
      "t": 23
    },
    "movement": "c"
  },
  {
    "name": "AWS SQS",
    "pc": {
      "r": 75,
      "t": 62
    },
    "movement": "c"
  },
  {
    "name": "ElasticSearch",
    "pc": {
      "r": 75,
      "t": 36
    },
    "movement": "c"
  },
  {
    "name": "PostgreSQL",
    "pc": {
      "r": 84,
      "t": 10
    },
    "movement": "c"
  },
  {
    "name": "Redis",
    "pc": {
      "r": 77,
      "t": 49
    },
    "movement": "c"
  },
  {
    "name": "CouchBase",
    "pc": {
      "r": 354,
      "t": 52
    },
    "movement": "c"
  },
  {
    "name": "ActiveMQ",
    "pc": {
      "r": 181,
      "t": 80
    },
    "movement": "c"
  },
  {
    "name": "AWS DynamoDB",
    "pc": {
      "r": 187,
      "t": 32
    },
    "movement": "c"
  },
  {
    "name": "AWS Kinesis",
    "pc": {
      "r": 195,
      "t": 68
    },
    "movement": "c"
  },
  {
    "name": "Cassandra",
    "pc": {
      "r": 169,
      "t": 56
    },
    "movement": "c"
  },
  {
    "name": "Hadoop/HDFS",
    "pc": {
      "r": 173,
      "t": 44
    },
    "movement": "c"
  },
  {
    "name": "InfluxDB",
    "pc": {
      "r": 194,
      "t": 8
    },
    "movement": "c"
  },
  {
    "name": "Kafka",
    "pc": {
      "r": 197,
      "t": 20
    },
    "movement": "c"
  },
  {
    "name": "MemCached",
    "pc": {
      "r": 206,
      "t": 26
    },
    "movement": "c"
  },
  {
    "name": "MongoDB",
    "pc": {
      "r": 148,
      "t": 62
    },
    "movement": "c"
  },
  {
    "name": "MySQL",
    "pc": {
      "r": 187,
      "t": 50
    },
    "movement": "c"
  },
  {
    "name": "Oracle DB",
    "pc": {
      "r": 164,
      "t": 38
    },
    "movement": "c"
  },
  {
    "name": "RabbitMQ",
    "pc": {
      "r": 199,
      "t": 14
    },
    "movement": "c"
  },
  {
    "name": "Solr",
    "pc": {
      "r": 200,
      "t": 74
    },
    "movement": "c"
  },
  {
    "name": "Spark",
    "pc": {
      "r": 200,
      "t": 0
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
      "r": 113,
      "t": 216
    },
    "movement": "c"
  },
  {
    "name": "Docker",
    "pc": {
      "r": 92,
      "t": 242
    },
    "movement": "c"
  },
  {
    "name": "Kubernetes",
    "pc": {
      "r": 101,
      "t": 255
    },
    "movement": "c"
  },
  {
    "name": "Nginx",
    "pc": {
      "r": 116,
      "t": 190
    },
    "movement": "c"
  },
  {
    "name": "Terraform",
    "pc": {
      "r": 92,
      "t": 203
    },
    "movement": "c"
  },
  {
    "name": "log4j",
    "pc": {
      "r": 238,
      "t": 236
    },
    "movement": "c"
  },
  {
    "name": "Puppet",
    "pc": {
      "r": 263,
      "t": 186
    },
    "movement": "c"
  },
  {
    "name": "JBoss",
    "pc": {
      "r": 349,
      "t": 200
    },
    "movement": "c"
  },
  {
    "name": "AWS Cloudformation",
    "pc": {
      "r": 185,
      "t": 260
    },
    "movement": "c"
  },
  {
    "name": "Consul",
    "pc": {
      "r": 196,
      "t": 236
    },
    "movement": "c"
  },
  {
    "name": "HAProxy",
    "pc": {
      "r": 199,
      "t": 188
    },
    "movement": "c"
  },
  {
    "name": "Jetty",
    "pc": {
      "r": 176,
      "t": 212
    },
    "movement": "c"
  },
  {
    "name": "log4j2",
    "pc": {
      "r": 147,
      "t": 224
    },
    "movement": "c"
  },
  {
    "name": "saltstack",
    "pc": {
      "r": 184,
      "t": 200
    },
    "movement": "c"
  },
  {
    "name": "Tomcat",
    "pc": {
      "r": 161,
      "t": 248
    },
    "movement": "c"
  },
  {
    "name": "Zookeeper",
    "pc": {
      "r": 158,
      "t": 206
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
    "name": "Javascript",
    "pc": {
      "r": 112,
      "t": 293
    },
    "movement": "c"
  },
  {
    "name": "Python",
    "pc": {
      "r": 94,
      "t": 280
    },
    "movement": "c"
  },
  {
    "name": "Scala",
    "pc": {
      "r": 119,
      "t": 332
    },
    "movement": "c"
  },
  {
    "name": "Swift",
    "pc": {
      "r": 96,
      "t": 306
    },
    "movement": "c"
  },
  {
    "name": "C/C++",
    "pc": {
      "r": 244,
      "t": 316
    },
    "movement": "c"
  },
  {
    "name": "Erlang",
    "pc": {
      "r": 271,
      "t": 326
    },
    "movement": "c"
  },
  {
    "name": "PHP",
    "pc": {
      "r": 275,
      "t": 306
    },
    "movement": "c"
  },
  {
    "name": "Perl",
    "pc": {
      "r": 357,
      "t": 306
    },
    "movement": "c"
  },
  {
    "name": ".NET / languages",
    "pc": {
      "r": 204,
      "t": 338
    },
    "movement": "c"
  },
  {
    "name": "Go",
    "pc": {
      "r": 155,
      "t": 302
    },
    "movement": "c"
  },
  {
    "name": "Groovy",
    "pc": {
      "r": 207,
      "t": 326
    },
    "movement": "c"
  },
  {
    "name": "Java",
    "pc": {
      "r": 208,
      "t": 278
    },
    "movement": "c"
  },
  {
    "name": "R",
    "pc": {
      "r": 141,
      "t": 290
    },
    "movement": "c"
  },
  {
    "name": "Ruby",
    "pc": {
      "r": 148,
      "t": 350
    },
    "movement": "c"
  }
]
  }
];
