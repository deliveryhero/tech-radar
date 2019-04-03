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
      "r": 114,
      "t": 100
    },
    "movement": "c"
  },
  {
    "name": "AngularJS 1.x",
    "pc": {
      "r": 295,
      "t": 156
    },
    "movement": "c"
  },
  {
    "name": "BackboneJS",
    "pc": {
      "r": 260,
      "t": 106
    },
    "movement": "c"
  },
  {
    "name": "PHP Symfony",
    "pc": {
      "r": 234,
      "t": 166
    },
    "movement": "t"
  },
  {
    "name": "Akka (Scala)",
    "pc": {
      "r": 187,
      "t": 134
    },
    "movement": "c"
  },
  {
    "name": "Angular",
    "pc": {
      "r": 154,
      "t": 110
    },
    "movement": "c"
  },
  {
    "name": "Ember.js",
    "pc": {
      "r": 168,
      "t": 98
    },
    "movement": "t"
  },
  {
    "name": "jQuery",
    "pc": {
      "r": 152,
      "t": 146
    },
    "movement": "c"
  },
  {
    "name": "Maven",
    "pc": {
      "r": 191,
      "t": 158
    },
    "movement": "c"
  },
  {
    "name": "Node.js",
    "pc": {
      "r": 150,
      "t": 170
    },
    "movement": "c"
  },
  {
    "name": "ReactJS",
    "pc": {
      "r": 199,
      "t": 122
    },
    "movement": "t"
  },
  {
    "name": "Spring / Spring Boot",
    "pc": {
      "r": 199,
      "t": 116
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
      "r": 114,
      "t": 10
    },
    "movement": "c"
  },
  {
    "name": "AWS SNS",
    "pc": {
      "r": 105,
      "t": 62
    },
    "movement": "c"
  },
  {
    "name": "AWS SQS",
    "pc": {
      "r": 90,
      "t": 75
    },
    "movement": "c"
  },
  {
    "name": "ElasticSearch",
    "pc": {
      "r": 68,
      "t": 23
    },
    "movement": "t"
  },
  {
    "name": "PostgreSQL",
    "pc": {
      "r": 76,
      "t": 49
    },
    "movement": "c"
  },
  {
    "name": "Redis",
    "pc": {
      "r": 61,
      "t": 36
    },
    "movement": "c"
  },
  {
    "name": "CouchBase",
    "pc": {
      "r": 361,
      "t": 4
    },
    "movement": "t"
  },
  {
    "name": "ActiveMQ",
    "pc": {
      "r": 173,
      "t": 20
    },
    "movement": "c"
  },
  {
    "name": "AWS DynamoDB",
    "pc": {
      "r": 168,
      "t": 68
    },
    "movement": "c"
  },
  {
    "name": "AWS Kinesis",
    "pc": {
      "r": 151,
      "t": 44
    },
    "movement": "c"
  },
  {
    "name": "Cassandra",
    "pc": {
      "r": 148,
      "t": 8
    },
    "movement": "c"
  },
  {
    "name": "Hadoop/HDFS",
    "pc": {
      "r": 207,
      "t": 32
    },
    "movement": "c"
  },
  {
    "name": "InfluxDB",
    "pc": {
      "r": 168,
      "t": 56
    },
    "movement": "c"
  },
  {
    "name": "Kafka",
    "pc": {
      "r": 170,
      "t": 80
    },
    "movement": "c"
  },
  {
    "name": "MemCached",
    "pc": {
      "r": 181,
      "t": 74
    },
    "movement": "c"
  },
  {
    "name": "MongoDB",
    "pc": {
      "r": 165,
      "t": 38
    },
    "movement": "c"
  },
  {
    "name": "MySQL",
    "pc": {
      "r": 190,
      "t": 62
    },
    "movement": "c"
  },
  {
    "name": "Oracle DB",
    "pc": {
      "r": 209,
      "t": 50
    },
    "movement": "t"
  },
  {
    "name": "RabbitMQ",
    "pc": {
      "r": 179,
      "t": 14
    },
    "movement": "c"
  },
  {
    "name": "Solr",
    "pc": {
      "r": 180,
      "t": 26
    },
    "movement": "c"
  },
  {
    "name": "Spark",
    "pc": {
      "r": 164,
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
      "r": 74,
      "t": 216
    },
    "movement": "c"
  },
  {
    "name": "Docker",
    "pc": {
      "r": 66,
      "t": 242
    },
    "movement": "c"
  },
  {
    "name": "Kubernetes",
    "pc": {
      "r": 101,
      "t": 190
    },
    "movement": "c"
  },
  {
    "name": "Nginx",
    "pc": {
      "r": 70,
      "t": 203
    },
    "movement": "c"
  },
  {
    "name": "Terraform",
    "pc": {
      "r": 101,
      "t": 255
    },
    "movement": "c"
  },
  {
    "name": "log4j",
    "pc": {
      "r": 232,
      "t": 236
    },
    "movement": "c"
  },
  {
    "name": "Puppet",
    "pc": {
      "r": 246,
      "t": 226
    },
    "movement": "c"
  },
  {
    "name": "JBoss",
    "pc": {
      "r": 336,
      "t": 248
    },
    "movement": "c"
  },
  {
    "name": "AWS Cloudformation",
    "pc": {
      "r": 173,
      "t": 188
    },
    "movement": "c"
  },
  {
    "name": "Consul",
    "pc": {
      "r": 168,
      "t": 212
    },
    "movement": "c"
  },
  {
    "name": "HAProxy",
    "pc": {
      "r": 154,
      "t": 248
    },
    "movement": "c"
  },
  {
    "name": "Jetty",
    "pc": {
      "r": 172,
      "t": 236
    },
    "movement": "t"
  },
  {
    "name": "log4j2",
    "pc": {
      "r": 164,
      "t": 224
    },
    "movement": "c"
  },
  {
    "name": "saltstack",
    "pc": {
      "r": 197,
      "t": 260
    },
    "movement": "c"
  },
  {
    "name": "Tomcat",
    "pc": {
      "r": 195,
      "t": 200
    },
    "movement": "c"
  },
  {
    "name": "Zookeeper",
    "pc": {
      "r": 192,
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
      "r": 52,
      "t": 306
    },
    "movement": "c"
  },
  {
    "name": "Python",
    "pc": {
      "r": 107,
      "t": 280
    },
    "movement": "c"
  },
  {
    "name": "Scala",
    "pc": {
      "r": 68,
      "t": 345
    },
    "movement": "t"
  },
  {
    "name": "Swift",
    "pc": {
      "r": 52,
      "t": 319
    },
    "movement": "c"
  },
  {
    "name": "C/C++",
    "pc": {
      "r": 276,
      "t": 326
    },
    "movement": "c"
  },
  {
    "name": "Erlang",
    "pc": {
      "r": 294,
      "t": 276
    },
    "movement": "c"
  },
  {
    "name": "PHP",
    "pc": {
      "r": 270,
      "t": 336
    },
    "movement": "c"
  },
  {
    "name": "Perl",
    "pc": {
      "r": 364,
      "t": 330
    },
    "movement": "c"
  },
  {
    "name": ".NET / languages",
    "pc": {
      "r": 198,
      "t": 350
    },
    "movement": "c"
  },
  {
    "name": "Go",
    "pc": {
      "r": 200,
      "t": 326
    },
    "movement": "c"
  },
  {
    "name": "Groovy",
    "pc": {
      "r": 196,
      "t": 314
    },
    "movement": "c"
  },
  {
    "name": "Java",
    "pc": {
      "r": 149,
      "t": 338
    },
    "movement": "c"
  },
  {
    "name": "R",
    "pc": {
      "r": 196,
      "t": 302
    },
    "movement": "c"
  },
  {
    "name": "Ruby",
    "pc": {
      "r": 188,
      "t": 278
    },
    "movement": "c"
  }
]
  }
];
