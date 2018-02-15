/* Created by: Rajiv Sancheti
 * Date: August 23rd 2017
 */


//Speech output strings
 var speechOutput;
 var reprompt;
 var welcomeOutput = "You can ask me questions about Caltrain";
 var welcomeReprompt = "Try asking questions about Caltrain departure times from a certain stations to another station";


var allStopsList = [ "gilroy", "san martin", "morgan hill", "blossom hill", "capitol", "capital", "tamien", "me", "san jose diridon", "san jose", "diridon", "college park", "santa clara", "lawerence", "sunnyvale", "mountain view", "san antonio", "california avenue", "california ave", "stanford", "palo alto","menlo park", "atherton", "redwood city", "san carlos", "belmont", "hillsdale", "hayward park", "san mateo", "burlingame", "broadway", "millbrae", "san bruno", "south san francisco", "bayshore", "22nd street", "san francisco", ];

var train101 = [ "San Jose Diridon 04:28",	    "Diridon 04:28",	    "Santa Clara 04:33",	    "Lawerence 04:39",	    "Sunnyvale 04:43",	    "Mountain View 04:48",	    "San Antonio 04:52",	    "California Ave 04:57",	    "Palo Alto 05:01",	    "Menlo Park 05:04",	    "Redwood City 05:10",	    "San Carlos 05:15",	    "Belmont 05:18",	    "Hillsdale 05:22",	    "Hayward Park 05:25",	    "Hayward 05:25",	    "San Mateo 05:28",	    "Burlingame 05:32",	    "Millbrae 05:36",	    "San Bruno 05:41",	    "South San Francisco 05:45",	    "Bayshore 05:51",	    "22nd Street 05:57",	    "San Francisco 06:03",	    "No more stations 00:00"		];
var train103 = [	    "Tamien 04:55",	    "San Jose Diridon 05:03",	    "San Jose 05:03",	    "Diridon 05:03",	    "Santa Clara 05:08",	    "Lawerence 05:13",	    "Sunnyvale 05:18",	    "Mountain View 05:23",	    "San Antonio 05:27",	    "California Ave 05:31",	    "Palo Alto 05:36",	    "Menlo Park 05:39",	    "Redwood City 05:44",	    "San Carlos 05:49",	    "Belmont 05:52",	    "Hillsdale 05:56",	    "Hayward Park 05:59",	    "Hayward 05:59",	    "San Mateo 06:03",	    "Burlingame 06:06",	    "Millbrae 06:11",	    "San Bruno 06:16",	    "South San Francisco 06:20",	    "Bayshore 06:26",	    "22nd Street 06:32",	    "San Francisco 06:38",	    "No more stations 00:00"    	];
var train305 = [	   "San Jose Diridon 05:45",	   "San Jose 05:45",	   "Mountain View 06:00",	   "Palo Alto 06:08",	   "Hillsdale 06:18",	   "Millbrae 06:26",	   "San Francisco 06:47",	   "No more stations 00:00"	];
var train207 = [	    "Tamien 05:51",	    "San Jose Diridon 05:59",	    "San Jose 05:59",	    "Diridon 05:59",	    "Santa Clara 06:06",	    "Lawerence 06:12",	    "Sunnyvale 06:20",	    "Mountain View 06:25",	    "San Antonio 06:29",	    "California Avenue 06:34",	    "California Ave 06:34",	    "Palo Alto 06:38",	    "Menlo Park 06:41",	    "Redwood City 06:47",	    "Hillsdale 06:54",	    "Millbrae 07:03",	    "South San Francisco 07:09",	    "San Francisco 07:24",	    "No more stations 00:00"	];
var train309 = [ 	    "Tamien 05:56",	    "San Jose Diridon 06:04",	    "San Jose 06:04",	    "Diridon 06:04",	    "Sunnyvale 06:14",	    "Palo Alto 06:26",	    "Redwood City 06:32",	    "San Mateo 06:43",	    "Millbrae 06:51",	    "San Francisco 07:08",	    "No more stations 00:00"	]
var train211 = [	    "san jose diridon 06:23",	    "diridon 06:23",	    "santa clara 06:28",	    "sunnyvale 06:36",	    "mountain view 06:42",	    "california avenue 06:48",	    "menlo park 06:54",	    "redwood city 06:59",	    "san carlos 07:04",	    "belmont 07:07",	    "hillsdale 07:11",	    "hayward park 07:14",	    "san mateo 07:18",	    "burlingame 07:21",	    "millbrae 07:26",	    "san bruno 07:30",	    "south san francisco 07:34",	    "bayshore 07:41",	    "22nd street 07:50",	    "san francisco 07:57",	    "No more stations 00:00",	];
var train215 = [	    "san jose diridon 06:54",	    "diridon 06:54",	    "sunnyvale 07:06",	    "mountain view 07:11",	    "california avenue 07:17",	    "california ave 07:17",	    "palo alto 07:21",	    "san carlos 07:29",	    "hillsdale 07:34",	    "san mateo 07:38",	    "burlingame 07:43",	    "san bruno 07:50",	    "san francisco 08:07",	    "No more stations 00:00",	];
var train313 = [	    "san jose diridon 06:49",	    "diridon 06:49",	    "mountain view 07:04",	    "palo alto 07:12",	    "hillsdale 07:23",	    "millbrae 07:31",	    "san francisco 07:51",	    "No more stations 00:00",	];
var train217 = [	    "Gilroy 06:06",	    "San Martin 06:15",	    "Morgan Hill 06:21",	    "Blossom Hill 06:36",	    "Capitol 06:42",	    "Capital 06:42",	    "Tamien 06:50",	    "Me 06:50",	    "San Jose Diridon 06:59",	    "San Jose 06:59",	    "Diridon 06:59",	    "Santa Clara 07:06",	    "Lawerence 07:12",	    "Sunnyvale 07:20",	    "Mountain View 07:25",	    "San Antonio 07:29",	    "California Ave 07:34",	    "Palo Alto 07:38",	    "Menlo Park 07:41",	    "Redwood City 07:47",	    "Hillsdale 07:54",	    "Millbrae 08:03",	    "South San Francisco 08:09",	    "San Francisco 08:24",	    "No more stations 00:00"	];
var train319 = [	    "tamien 06:56",	    "san jose diridon 07:04",	    "diridon 07:04",	    "san jose 07:04",	    "sunnyvale 07:14",	    "palo alto 07:26",	    "redwood city 07:32",	    "san mateo 07:43",	    "millbrae 07:51",	    "san francisco 08:11",	    "No more stations 00:00",	];
var train221 = [	   "gilroy 06:28",	    "san martin 06:37",	    "morgan hill 06:43",	    "blossom hill 06:58",	    "capitol 07:04",	    "capital 07:04",	    "tamien 07:15",	    "me 07:15",	    "san jose diridon 07:23",	    "diridon 07:23",	    "san jose 07:23",	    "santa clara 07:28",	    "lawerence 07:33",	    "sunnyvale 07:38",	    "mountain view 07:44",	    "california avenue 07:49",	    "california ave 07:49",	    "menlo park 07:54",	    "redwood city 08:00",	    "san carlos 08:05",	    "belmont 08:08",	    "hillsdale 08:12",	    "hayward park 08:15",	    "san mateo 08:19",	    "burlingame 08:22",	    "millbrae 08:27",	    "san bruno 08:31",	    "south san francisco 08:35",	    "bayshore 08:43",	    "22nd street 08:51",	    "san francisco 08:58",	    "No more stations 00:00",	];		var train323 = [	    "san jose diridon 07:49",	    "diridon 07:49",	    "mountain view 08:04",	    "palo alto 08:12",	    "hillsdale 08:24",	    "millbrae 08:33",	    "san francisco 08:53",	    "No more stations 00:00",	];		var train225 = [	    "san jose diridon 07:54",	    "diridon 07:54",	    "sunnyvale 08:06",	    "mountain view 08:11",	    "california avenue 08:17",	    "california ave 08:17",	    "palo alto 08:21",	    "san carlos 08:29",	    "hillsdale 08:34",	    "san mateo 08:38",	    "burlingame 08:43",	    "san bruno 08:50",	    "san francisco 09:07",	    "No more stations 00:00",	];		var train227 = [ 	    "gilroy 07:06",	    "san martin 07:15",	    "morgan hill 07:21",	    "blossom hill 07:36",	    "capitol 07:42",	    "capital 07:42",	    "tamien 07:53",	    "me 07:53",	    "san jose diridon 07:59",	    "diridon 07:59",	    "san jose 07:59",	    "college park 08:03",	    "santa clara 08:08",	    "lawerence 08:15",	    "sunnyvale 08:22",	    "mountain view 08:28",	    "san antonio 08:32",	    "california avenue 08:36",	    "california ave 08:36",	    "palo alto 08:41",	    "menlo park 08:44",	    "redwood city 08:51",	    "hillsdale 08:59",	    "millbrae 09:08",	    "south san francisco 09:14",	    "san francisco 09:29",	    "No more stations 00:00",	];		var train329 = [	  "tamien 07:59",	    "san jose diridon 08:04",	    "san jose 08:04",	    "diridon 08:04",	    "sunnyvale 08:14",	    "palo alto 08:27",	    "redwood city 08:34",	    "san mateo 08:44",	    "millbrae 08:52",	    "san francisco 09:11",	    "No more stations 00:00",	];
var train231 = [	    "san jose diridon 08:23",	    "diridon 08:23",	    "santa clara 08:28",	    "sunnyvale 08:36",	    "mountain view 08:42",	    "menlo park 08:51",	    "redwood city 08:57",	    "san carlos 09:02",	    "belmont 09:05",	    "hillsdale 09:09",	    "hayward park 09:12",	    "san mateo 09:15",	    "burlingame 09:19",	    "millbrae 09:24",	    "san bruno 09:28",	    "south san francisco 09:32",	    "bayshore 09:39",	    "22nd street 09:45",	    "san francisco 09:52",	    "No more stations 00:00",	];
var train233 = [	    "tamien 08:28",	    "san jose diridon 08:39",	    "diridon 08:39",	    "san jose 08:39",	    "santa clara 08:44",	    "lawerence 08:50",	    "sunnyvale 08:55",	    "mountain view 09:00",	    "san antonio 09:04",	    "california avenue 09:09",	    "california ave 09:09",	    "palo alto 09:14",	    "menlo park 09:17",	    "redwood city 09:24",	    "san carlos 09:28",	    "belmont 09:32",	    "hillsdale 09:35",	    "san mateo 09:40",	    "burlingame 09:43",	    "millbrae 09:48",	    "san bruno 09:53",	    "san francisco 10:09",	    "No more stations 00:00",	];
var train135 = [	"san jose diridon 09:13",	"diridon 09:13",	"santa clara 09:18",	"lawerence 09:24",	"sunnyvale 09:29",	"mountain view 09:34",	"san antonio 09:38",	"california avenue 09:42",	"california ave 09:42",	"palo alto 09:47",	"menlo park 09:50",	"redwood city 09:57",	"san carlos 10:01",	"belmont 10:05",	"hillsdale 10:08",	"hayward park 10:11",	"san mateo 10:14",	"burlingame 10:17",	"millbrae 10:22",	"san bruno 10:27",	"south san francisco 10:31",	"bayshore 10:37",	"22nd street 10:43",	"san francisco 10:50",    	];
var train237 = [	"tamien 09:37",	"san jose diridon 09:50",	"diridon 09:50",	"san jose 09:50",	"santa clara 09:55",	"lawerence 10:00",	"sunnyvale 10:05",	"mountain view 10:10",	"san antonio 10:14",	"california avenue 10:18",	"california ave 10:18",	"palo alto 10:23",	"menlo park 10:26",	"redwood city 10:32",	"san carlos 10:37",	"belmont 10:40",	"hillsdale 10:44",	"san mateo 10:49",	"burlingame 10:52",	"millbrae 10:57",	"san bruno 11:02",	"san francisco 11:17", 	];
var train139 = [	"san jose diridon 10:13",	"diridon 10:13",	"santa clara 10:18",	"lawerence 10:24",	"sunnyvale 10:28",	"mountain view 10:33",	"san antonio 10:37",	"california avenue 10:42",	"california ave 10:42",	"palo alto 10:47",	"menlo park 10:50",	"redwood city 10:55",	"san carlos 10:59",	"belmont 11:03",	"hillsdale 11:06",	"hayward park 11:09",	"san mateo 11:12",	"burlingame 11:15",	"millbrae 11:20",	"san bruno 11:25",	"south san francisco 11:29",	"bayshore 11:35",	"22nd street 11:41",	"san francisco 11:48",];
var train143 = [	"san jose diridon 11:13",	"diridon 11:13",	"santa clara 11:18",	"lawerence 11:24",	"sunnyvale 11:28",	"mountain view 11:33",	"san antonio 11:37",	"california avenue 11:41",	"california ave 11:41",	"palo alto 11:46",	"menlo park 11:49",	"redwood city 11:55",	"san carlos 11:59",	"belmont 12:03",	"hillsdale 12:06",	"hayward park 12:09",	"san mateo 12:12",	"burlingame 12:15",	"millbrae 12:20",	"san bruno 12:25",	"south san francisco 12:29",	"bayshore 12:35",	"22nd street 12:41",	"san francisco 12:48",];
var train147 = [	 "san jose diridon 12:13",	"diridon 12:13",	"santa clara 12:18",	"lawerence 12:24",	"sunnyvale 12:28",	"mountain view 12:33",	"san antonio 12:37",	"california avenue 12:41",	"california ave 12:41",	"palo alto 12:46",	"menlo park 12:49",	"redwood city 12:55",	"san carlos 12:59",	"belmont 13:03",	"hillsdale 13:06",	"hayward park 13:09",	"san mateo 13:12",	"burlingame 13:15",	"millbrae 13:20",	"san bruno 13:25",	"south san francisco 13:29",	"bayshore 13:35",	"22nd street 13:41",	"san francisco 13:48",];
var train151 = [	"san jose diridon 13:13",	"diridon 13:13",	"santa clara 13:18",	"lawerence 13:24",	"sunnyvale 13:28",	"mountain view 13:33",	"san antonio 13:37",	"california avenue 13:41",	"california ave 13:41",	"palo alto 13:46",	"menlo park 13:49",	"redwood city 13:55",	"san carlos 13:59",	"belmont 14:03",	"hillsdale 14:06",	"hayward park 14:09",	"san mateo 14:12",	"burlingame 14:15",	"millbrae 14:20",	"san bruno 14:25",	"south san francisco 14:29",	"bayshore 14:35",	"22nd street 14:41",	"san francisco 14:48",	];
var train155 = [	"san jose diridon 14:13",	"diridon 14:13",	"santa clara 14:18",	"lawerence 14:24",	"sunnyvale 14:28",	"mountain view 14:33",	"san antonio 14:37",	"california avenue 14:41",	"california ave 14:41",	"palo alto 14:46",	"menlo park 14:49",	"redwood city 14:55",	"san carlos 14:59",	"belmont 15:03",	"hillsdale 15:06",	"hayward park 15:09",	"san mateo 15:12",	"burlingame 15:15",	"millbrae 15:20",	"san bruno 15:25",	"south san francisco 15:29",	"bayshore 15:35",	"22nd street 15:41",	"san francisco 15:48",	];
var train257 = [	"tamien 14:16",	"san jose diridon 14:24",	"diridon 14:24",	"san jose 14:24",	"santa clara 14:29",	"lawerence 14:34",	"sunnyvale 14:39",	"mountain view 14:44",	"san antonio 14:47",	"california avenue 14:52",	"california ave 14:52",	"palo alto 14:56",	"menlo park 14:59",	"redwood city 15:05",	"san carlos 15:09",	"belmont 15:13",	"hillsdale 15:16",	"san mateo 15:21",	"burlingame 15:24",	"millbrae 15:29",	"san bruno 15:33",	"san francisco 15:50", 	];
var train159 =[	"san jose diridon 15:13",	"diridon 15:13",	"college park 15:16",	"santa clara 15:20",	"lawerence 15:25",	"sunnyvale 15:30",	"mountain view 15:35",	"san antonio 15:39",	"california avenue 15:43",	"california ave 15:43",	"palo alto 15:47",	"menlo park 15:51",	"redwood city 15:56",	"san carlos 16:01",	"belmont 16:04",	"hillsdale 16:08",	"hayward park 16:11",	"san mateo 16:15",	"burlingame 16:18",	"millbrae 16:23",	"san bruno 16:28",	"south san francisco 16:32",	"bayshore 16:38",	"22nd street 16:44",	"san francisco 16:50",	];
var train261 = [	"tamien 15:32",	"san jose diridon 15:40",	"diridon 15:40",	"san jose 15:40",	"santa clara 15:45",	"lawerence 15:50",	"sunnyvale 15:57",	"mountain view 16:02",	"san antonio 16:06",	"california avenue 16:11",	"california ave 16:11",	"palo alto 16:15",	"menlo park 16:19",	"redwood city 16:24",	"san carlos 16:29",	"san mateo 16:36",	"millbrae 16:42",	"22nd street 16:56",	"san francisco 17:02",    	];
var train263 = [	"san jose diridon 16:12",	"diridon 16:12",	"santa clara 16:18",	"palo alto 16:33",	"redwood city 16:40",	"san carlos 16:44",	"belmont 16:47",	"hillsdale 16:51",	"hayward park 16:54",	"san mateo 16:57",	"burlingame 17:01",	"millbrae 17:05",	"san bruno 17:10",	"south san francisco 17:14",	"bayshore 17:21",	"22nd street 17:30",	"san francisco 17:36",    	];
var train365 = [	"san jose diridon 16:24",	"diridon 16:24",	"mountain view 16:36",	"palo alto 16:44",	"menlo park 16:47",	"redwood city 16:53",	"millbrae 17:10",	"22nd street 17:25",	"san francisco 17:31",	];
var train267 = [	"san jose diridon 16:30",	"diridon 16:30",	"lawerence 16:39",	"mountain view 16:46",	"palo alto 16:54",	"menlo park 16:57",	"san carlos 17:05",	"hillsdale 17:09",	"san mateo 17:13",	"burlingame 17:17",	"san bruno 17:24",	"22nd street 17:35",	"san francisco 17:42",    	];
var train269 = [	"tamien 16:32",	"san jose diridon 16:40",	"diridon 16:40",	"san jose 16:40",	"santa clara 16:46",	"lawerence 16:54",	"sunnyvale 17:00",	"mountain view 17:05",	"san antonio 17:09",	"california avenue 17:14",	"california ave 17:14",	"palo alto 17:20",	"menlo park 17:23",	"redwood city 17:29",	"san carlos 17:33",	"san mateo 17:40",	"millbrae 17:48",	"22nd street 18:00",	"san francisco 18:06",    	];
var train371 = [	"san jose diridon 16:45",	"diridon 16:45",	"mountain view 16:57",	"palo alto 17:05",	"redwood city 17:11",	"hillsdale 17:18",	"millbrae 17:30",	"22nd street 17:45",	"san francisco 17:51",    	];
var train273 = [	"san jose diridon 17:08",	"diridon 17:08",	"santa clara 17:14",	"palo alto 17:29",	"redwood city 17:36",	"san carlos 17:40",	"belmont 17:43",	"hillsdale 17:47",	"hayward park 17:50",	"san mateo 17:53",	"burlingame 17:57",	"millbrae 18:01",	"san bruno 18:06",	"south san francisco 18:10",	"bayshore 18:17",	"22nd street 18:26",	"san francisco 18:33",    	];
var train375 = [	"san jose diridon 17:20",	"diridon 17:20",	"mountain view 17:32",	"palo alto 17:40",	"menlo park 17:43",	"redwood city 17:49",	"millbrae 18:06",	"22nd street 18:21",	"san francisco 18:27",    	];
var train277 = [	"san jose diridon 17:30",	"lawerence 17:39",	"mountain view 17:46",	"palo alto 17:54",	"menlo park 17:57",	"san carlos 18:05",	"hillsdale 18:09",	"san mateo 18:13",	"burlingame 18:17",	"san bruno 18:24",	"22nd street 18:35",	"san francisco 18:42",    	];
var train279 = [	"tamien 17:32",	"san jose diridon 17:40",	"san jose 17:40",	"santa clara 17:46",	"lawerence 17:54",	"sunnyvale 18:00",	"mountain view 18:05",	"san antonio 18:09",	"california avenue 18:14",	"palo alto 18:20",	"menlo park 18:23",	"redwood city 18:29",	"san carlos 18:33",	"san mateo 18:40",	"millbrae 18:48",	"22nd street 19:00",	"san francisco 19:06",    	];
var train381 = [	"san jose diridon 17:45",	"mountain view 17:57",	"palo alto 18:05",	"redwood city 18:11",	"hillsdale 18:18",	"millbrae 18:30",	"22nd street 18:45",	"san francisco 18:51",    	];
var train283 = [	"san jose diridon 18:08",	"santa clara 18:14",	"palo alto 18:29",	"redwood city 18:36",	"san carlos 18:40",	"belmont 18:43",	"hillsdale 18:47",	"hayward park 18:50",	"san mateo 18:53",	"burlingame 18:57",	"millbrae 19:01",	"san bruno 19:06",	"south san francisco 19:10",	"bayshore 19:17",	"22nd street 19:26",	"san francisco 19:33", 	];
var train385 = [	"san jose diridon 18:20",	"mountain view 18:32",	"palo alto 18:40",	"menlo park 18:43",	"redwood city 18:49",	"millbrae 19:06",	"22nd street 19:21",	"san francisco 19:27",    	];
var train287 = [	"san jose diridon 18:35",	"lawerence 18:44",	"sunnyvale 18:48",	"mountain view 18:53",	"palo alto 19:01",	"menlo park 19:04",	"san carlos 19:12",	"hillsdale 19:16",	"san mateo 19:20",	"burlingame 19:24",	"san bruno 19:31",	"22nd street 19:42",	"san francisco 19:49",    	];
var train289 = [	"tamien 18:38",	"san jose diridon 18:45",	"san jose 18:45",	"lawerence 18:53",	"mountain view 19:01",	"california avenue 19:07",	"palo alto 19:11",	"menlo park 19:14",	"redwood city 19:20",	"san carlos 19:24",	"hillsdale 19:29",	"san mateo 19:33",	"burlingame 19:37",	"millbrae 19:41",	"22nd street 19:55",	"san francisco 20:02",    	];
var train191 = [	"san jose diridon 19:07",	"santa clara 19:12",	"lawerence 19:18",	"sunnyvale 19:22",	"mountain view 19:27",	"san antonio 19:31",	"california avenue 19:35",	"palo alto 19:40",	"menlo park 19:43",	"redwood city 19:49",	"san carlos 19:53",	"belmont 19:57",	"hillsdale 20:00",	"hayward park 20:03",	"san mateo 20:07",	"burlingame 20:10",	"millbrae 20:15",	"san bruno 20:20",	"south san francisco 20:24",	"bayshore 20:30",	"22nd street 20:36",	"san francisco 20:42",    	];
var train193 = [	"san jose diridon 19:45",	"santa clara 19:50",	"lawerence 19:55",	"sunnyvale 20:00",	"mountain view 20:05",	"san antonio 20:08",	"california avenue 20:13",	"palo alto 20:17",	"menlo park 20:20",	"redwood city 20:27",	"san carlos 20:31",	"belmont 20:35",	"hillsdale 20:38",	"hayward park 20:41",	"san mateo 20:44",	"burlingame 20:48",	"millbrae 20:52",	"san bruno 20:57",	"south san francisco 21:01",	"bayshore 21:07",	"22nd street 21:13",	"san francisco 21:20",    	];
var train195 = [	"tamien 20:37",	"san jose diridon 20:45",	"san jose 20:45",	"santa clara 20:50",	"lawerence 20:55",	"sunnyvale 21:00",	"mountain view 21:05",	"san antonio 21:08",	"california avenue 21:13",	"palo alto 21:17",	"menlo park 21:20",	"redwood city 21:27",	"san carlos 21:31",	"belmont 21:35",	"hillsdale 21:38",	"hayward park 21:41",	"san mateo 21:44",	"burlingame 21:48",	"millbrae 21:52",	"san bruno 21:57",	"south san francisco 22:01",	"bayshore 22:07",	"22nd street 22:13",	"san francisco 22:20",    	];
var train197 = [	"tamien 21:37",	"san jose diridon 21:45",	"san jose 21:45",	"santa clara 21:50",	"lawerence 21:55",	"sunnyvale 22:00",	"mountain view 22:05",	"san antonio 22:08",	"california avenue 22:13",	"palo alto 22:17",	"menlo park 22:20",	"redwood city 22:27",	"san carlos 22:31",	"belmont 22:35",	"hillsdale 22:38",	"hayward park 22:41",	"san mateo 22:44",	"burlingame 22:48",	"millbrae 22:52",	"san bruno 22:57",	"south san francisco 23:01",	"bayshore 23:07",	"22nd street 23:13",	"san francisco 23:20",    	];
var train199 = [	"san jose diridon 22:30",	"santa clara 22:35",	"lawerence 22:40",	"sunnyvale 22:45",	"mountain view 22:50",	"san antonio 22:54",	"california avenue 22:59",	"palo alto 23:04",	"menlo park 23:07",	"redwood city 23:13",	"san carlos 23:17",	"belmont 23:21",	"hillsdale 23:24",	"hayward park 23:27",	"san mateo 23:30",	"burlingame 23:34",	"millbrae 23:38",	"san bruno 23:42",	"south san francisco 23:46",	"bayshore 23:52",	"22nd street 23:58",	"san francisco 23:59",    	];
var train102 = [	"san francisco 04:55",	"22nd street 04:59",	"bayshore 05:04",	"south san francisco 05:10",	"san bruno 05:14",	"millbrae 05:18",	"burlingame 05:22",	"san mateo 05:25",	"hayward park 05:28",	"hillsdale 05:32",	"belmont 05:35",	"san carlos 05:38",	"redwood city 05:41",	"menlo park 05:47",	"palo alto 05:51",	"california avenue 05:55",	"san antonio 05:59",	"mountain view 06:04",	"sunnyvale 06:10",	"lawrence 06:15",	"santa clara 06:22",	"san jose 06:31",	"san jose diridon 06:31",	];
var train104 = [	"san francisco 05:25",	"22nd street 05:29",	"bayshore 05:34",	"south san francisco 05:40",	"san bruno 05:44",	"millbrae 05:48",	"burlingame 05:53",	"san mateo 05:57",	"hayward park 06:00",	"hillsdale 06:03",	"belmont 06:07",	"san carlos 06:10",	"redwood city 06:15",	"menlo park 06:20",	"palo alto 06:24",	"california avenue 06:28",	"san antonio 06:32",	"mountain view 06:37",	"sunnyvale 06:42",	"lawrence 06:46",	"santa clara 06:51",	"san jose 07:01",	"san jose diridon 07:01",	"me 07:06",	"tamien 07:06",	];
var train206 = [	"san francisco 06:05",	"22nd street 06:09",	"millbrae 06:22",	"burlingame 06:26",	"san mateo 06:30",	"hillsdale 06:34",	"san carlos 06:39",	"redwood city 06:44",	"menlo park 06:50",	"palo alto 06:54",	"california avenue 06:57",	"mountain view 07:04",	"lawrence 07:09",	"san jose 07:19",	"san jose diridon 07:19",	];
var train208 = [	"san francisco 06:15",	"22nd street 06:19",	"bayshore 06:24",	"south san francisco 06:31",	"san bruno 06:35",	"millbrae 06:39",	"burlingame 06:44",	"san mateo 06:48",	"hayward park 06:51",	"hillsdale 06:54",	"belmont 06:58",	"san carlos 07:02",	"redwood city 07:06",	"palo alto 07:14",	"california avenue  ",	"santa clara 07:27",	"san jose 07:36",	"san jose diridon 07:36",	];
var train310 = [	"san francisco 06:35",	"22nd street 06:39",	"millbrae 06:52",	"redwood city 07:11",	"menlo park 07:17",	"palo alto 07:21",	"mountain view 07:28",	"san jose 07:43",	"san jose diridon 07:43",	"me 07:48",	"tamien 07:48",	];
var train212 = [	"san francisco 06:45",	"22nd street 06:51",	"millbrae 07:04",	"san mateo 07:11",	"san carlos 07:18",	"redwood city 07:23",	"menlo park 07:29",	"palo alto 07:33",	"california avenue 07:37",	"san antonio 07:41",	"mountain view 07:46",	"sunnyvale 07:51",	"lawrence 07:56",	"santa clara 08:03",	"college park 08:06",	"san jose 08:12",	"san jose diridon 08:12",	];
var train314 = [	"san francisco 06:59",	"22nd street 07:03",	"millbrae 07:16",	"hillsdale 07:24",	"redwood city 07:31",	"palo alto 07:37",	"california avenue  ",	"mountain view 07:50",	"san jose 08:05",	"san jose diridon 08:05",	];
var train216 = [	"san francisco 07:05",	"22nd street 07:10",	"san bruno 07:20",	"burlingame 07:27",	"san mateo 07:31",	"hillsdale 07:35",	"san carlos 07:40",	"menlo park 07:48",	"palo alto 07:52",	"mountain view 07:59",	"lawrence 08:07",	"san jose 08:20",	"san jose diridon 08:20",	];
var train218 = [	"san francisco 07:15",	"22nd street 07:19",	"bayshore 07:24",	"south san francisco 07:31",	"san bruno 07:35",	"millbrae 07:39",	"burlingame 07:44",	"san mateo 07:48",	"hayward park 07:51",	"hillsdale 07:54",	"belmont 07:58",	"san carlos 08:02",	"redwood city 08:06",	"palo alto 08:14",	"santa clara 08:27",	"san jose diridon 08:36",	"san jose 08:36",	];
var train320 = [	"san francisco 07:35",	"22nd street 07:39",	"millbrae 07:52",	"redwood city 08:11",	"menlo park 08:17",	"palo alto 08:21",	"mountain view 08:28",	"san jose 08:43",	"san jose diridon 08:43",	"tamien 08:48",	"me 08:48",	];
var train222 = [	"san francisco 07:45",	"22nd street 07:51",	"millbrae 08:04",	"san mateo 08:11",	"san carlos 08:18",	"redwood city 08:23",	"menlo park 08:29",	"palo alto 08:33",	"california avenue 08:37",	"san antonio 08:41",	"mountain view 08:46",	"sunnyvale 08:51",	"lawrence 08:56",	"santa clara 09:03",	"san jose 09:12",	"san jose diridon 09:12",	];
var train324 = [	"san francisco 07:59",	"22nd street 08:03",	"millbrae 08:16",	"hillsdale 08:24",	"redwood city 08:31",	"palo alto 08:37",	"mountain view 08:50",	"san jose 09:05",	"san jose diridon 09:05",	];
var train226 = [	"san francisco 08:05",	"22nd street 08:10",	"san bruno 08:20",	"burlingame 08:27",	"san mateo 08:31",	"hillsdale 08:35",	"san carlos 08:40",	"menlo park 08:48",	"palo alto 08:52",	"mountain view 08:59",	"lawrence 09:07",	"san jose 09:20",	"san jose diridon 09:20",	];
var train228 = [	"san francisco 08:15",	"22nd street 08:19",	"bayshore 08:24",	"south san francisco 08:31",	"san bruno 08:35",	"millbrae 08:39",	"burlingame 08:44",	"san mateo 08:48",	"hayward park 08:51",	"hillsdale 08:54",	"belmont 08:58",	"san carlos 09:02",	"redwood city 09:06",	"palo alto 09:14",	"santa clara 09:27",	"san jose 09:36",	"san jose diridon 09:36",	];
var train330 = [	"san francisco 08:35",	"22nd street 08:39",	"millbrae 08:52",	"redwood city 09:11",	"menlo park 09:17",	"palo alto 09:21",	"mountain view 09:28",	"san jose 09:43",	"san jose diridon 09:43",	"tamien 09:48",	"me 09:48",	];
var train232 = [	"san francisco 08:45",	"22nd street 08:49",	"millbrae 09:02",	"san mateo 09:09",	"hillsdale 09:13",	"san carlos 09:18",	"redwood city 09:23",	"menlo park 09:29",	"palo alto 09:33",	"california avenue 09:37",	"san antonio 09:41",	"mountain view 09:46",	"sunnyvale 09:51",	"lawrence 09:56",	"santa clara 10:03",	"san jose diridon 10:11",	"san jose 10:11",	];
var train134 = [	"san francisco 09:00",	"22nd street 09:05",	"bayshore 09:10",	"south san francisco 09:17",	"san bruno 09:21",	"millbrae 09:25",	"burlingame 09:29",	"san mateo 09:32",	"hayward park 09:36",	"hillsdale 09:39",	"belmont 09:43",	"san carlos 09:46",	"redwood city 09:51",	"menlo park 09:56",	"palo alto 10:00",	"california avenue 10:04",	"san antonio 10:08",	"mountain view 10:13",	"sunnyvale 10:18",	"lawrence 10:22",	"santa clara 10:27",	"san jose diridon 10:35",	"san jose 10:35",	];
var train236 = [	"san francisco 09:45",	"san bruno 09:57",	"millbrae 10:01",	"burlingame 10:06",	"san mateo 10:10",	"hayward park  ",	"hillsdale 10:14",	"belmont 10:18",	"san carlos 10:21",	"redwood city 10:26",	"menlo park 10:31",	"palo alto 10:35",	"california avenue 10:38",	"san antonio 10:43",	"mountain view 10:47",	"sunnyvale 10:52",	"lawrence 10:56",	"santa clara 11:02",	"san jose diridon 11:12",	"san jose 11:12",	"me 11:17",	"tamien 11:17",	];
var train138 = [	"san francisco 10:00",	"22nd street 10:04",	"bayshore 10:09",	"south san francisco 10:16",	"san bruno 10:20",	"millbrae 10:25",	"burlingame 10:29",	"san mateo 10:32",	"hayward park 10:36",	"hillsdale 10:39",	"belmont 10:43",	"san carlos 10:46",	"redwood city 10:51",	"menlo park 10:56",	"palo alto 11:00",	"california avenue 11:04",	"san antonio 11:08",	"mountain view 11:13",	"sunnyvale 11:18",	"lawrence 11:22",	"santa clara 11:28",	"san jose 11:35",	"san jose diridon 11:35",	];
var train142 = [	"san francisco 11:00",	"22nd street 11:04",	"bayshore 11:09",	"south san francisco 11:16",	"san bruno 11:20",	"millbrae 11:25",	"burlingame 11:29",	"san mateo 11:32",	"hayward park 11:36",	"hillsdale 11:39",	"belmont 11:43",	"san carlos 11:46",	"redwood city 11:51",	"menlo park 11:56",	"palo alto 12:00",	"california avenue 12:04",	"san antonio 12:08",	"mountain view 12:13",	"sunnyvale 12:18",	"lawrence 12:22",	"santa clara 12:28",	"san jose 12:35",	"san jose diridon 12:35",	];
var train146 = [	"san francisco 12:00",	"22nd street 12:04",	"bayshore 12:09",	"south san francisco 12:16",	"san bruno 12:20",	"millbrae 12:25",	"burlingame 12:29",	"san mateo 12:32",	"hayward park 12:36",	"hillsdale 12:39",	"belmont 12:43",	"san carlos 12:46",	"redwood city 12:51",	"menlo park 12:56",	"palo alto 13:00",	"california avenue 13:04",	"san antonio 13:08",	"mountain view 13:13",	"sunnyvale 13:18",	"lawrence 13:22",	"santa clara 13:28",	"san jose 13:35",	"san jose diridon 13:35",	];
var train150 = [	"san francisco 13:00",	"22nd street 13:04",	"bayshore 13:09",	"south san francisco 13:16",	"san bruno 13:20",	"millbrae 13:25",	"burlingame 13:29",	"san mateo 13:32",	"hayward park 13:36",	"hillsdale 13:39",	"belmont 13:43",	"san carlos 13:46",	"redwood city 13:51",	"menlo park 13:56",	"palo alto 14:00",	"california avenue 14:04",	"san antonio 14:08",	"mountain view 14:13",	"sunnyvale 14:18",	"lawrence 14:22",	"santa clara 14:28",	"san jose 14:35",	"san jose diridon 14:35",	];
var train152 = [	"san francisco 14:00",	"22nd street 14:04",	"bayshore 14:09",	"south san francisco 14:16",	"san bruno 14:20",	"millbrae 14:25",	"burlingame 14:29",	"san mateo 14:32",	"hayward park 14:36",	"hillsdale 14:39",	"belmont 14:43",	"san carlos 14:46",	"redwood city 14:51",	"menlo park 14:56",	"palo alto 15:00",	"california avenue 15:04",	"san antonio 15:08",	"mountain view 15:13",	"sunnyvale 15:18",	"lawrence 15:22",	"santa clara 15:28",	"san jose 15:35",	"san jose diridon 15:35",	];
var train254 = [	"san francisco 14:43",	"san bruno 14:55",	"millbrae 14:59",	"burlingame 15:04",	"san mateo 15:07",	"hayward park  ",	"hillsdale 15:11",	"belmont 15:15",	"san carlos 15:18",	"redwood city 15:23",	"menlo park 15:28",	"palo alto 15:32",	"california avenue 15:36",	"san antonio 15:40",	"mountain view 15:45",	"sunnyvale 15:50",	"lawrence 15:54",	"santa clara 15:59",	"san jose 16:09",	"san jose diridon 16:09",	"tamien 16:14",	"me 16:14",	];
var train156 = [	"san francisco 15:00",	"22nd street 15:04",	"bayshore 15:09",	"south san francisco 15:16",	"san bruno 15:20",	"millbrae 15:24",	"burlingame 15:29",	"san mateo 15:32",	"hayward park 15:36",	"hillsdale 15:39",	"belmont 15:43",	"san carlos 15:46",	"redwood city 15:51",	"menlo park 15:56",	"palo alto 16:00",	"california avenue 16:04",	"san antonio 16:08",	"mountain view 16:13",	"sunnyvale 16:18",	"lawrence 16:23",	"santa clara 16:28",	"college park 16:31",	"san jose diridon 16:40",	"san jose 16:40",	"tamien 16:45",	"me 16:45",	"capitol 16:52",	"capital 16:52",	"blossom hill 16:58",	"morgan hill 17:11",	"san martin 17:17",	"gilroy 17:30",	];
var train258 = [	"san francisco 15:34",	"san bruno 15:46",	"millbrae 15:51",	"burlingame 15:56",	"san mateo 15:59",	"hillsdale 16:04",	"belmont 16:08",	"san carlos 16:11",	"redwood city 16:16",	"menlo park 16:22",	"palo alto 16:26",	"california avenue 16:29",	"san antonio 16:34",	"mountain view 16:38",	"sunnyvale 16:44",	"lawrence 16:48",	"santa clara 16:53",	"san jose diridon 17:03",	"san jose 17:03",	"me 17:08",	"tamien 17:08",	];
var train360 = [	"san francisco 16:12",	"millbrae 16:27",	"hillsdale 16:35",	"palo alto 16:46",	"mountain view 16:55",	"san jose 17:11",	"san jose diridon 17:11",	];
var train262 = [	"san francisco 16:23",	"san bruno 16:36",	"burlingame 16:42",	"san mateo 16:46",	"hillsdale 16:50",	"san carlos 16:56",	"palo alto 17:04",	"california avenue 17:08",	"mountain view 17:15",	"sunnyvale 17:20",	"santa clara 17:27",	"san jose 17:34",	"san jose diridon 17:34",	];
var train264 = [	"san francisco 16:32",	"22nd street 16:36",	"bayshore 16:41",	"south san francisco 16:52",	"san bruno 16:55",	"millbrae 17:00",	"burlingame 17:05",	"san mateo 17:08",	"hayward park 17:12",	"hillsdale 17:15",	"belmont 17:19",	"san carlos 17:22",	"redwood city 17:28",	"menlo park 17:34",	"mountain view 17:42",	"sunnyvale 17:47",	"santa clara 17:54",	"san jose 18:02",	"san jose diridon 18:02",	];
var train366 = [	"san francisco 16:38",	"millbrae 16:53",	"san mateo 16:59",	"redwood city 17:08",	"palo alto 17:15",	"california avenue 17:18",	"sunnyvale 17:29",	"san jose 17:44",	"san jose diridon 17:44",	"tamien 17:49",	"tamien 17:49",	];
var train268 = [	"san francisco 16:58",	"south san francisco 17:09",	"millbrae 17:15",	"hillsdale 17:23",	"redwood city 17:33",	"menlo park 17:39",	"palo alto 17:43",	"california avenue 17:46",	"san antonio 17:50",	"mountain view 17:55",	"sunnyvale 18:00",	"lawrence 18:06",	"santa clara 18:13",	"san jose diridon 18:24",	"san jose 18:24",	"me 18:29",	"tamien 18:29",	"capitol 18:36",	"capital 18:36",	"blossom hill 18:42",	"morgan hill 18:55",	"san martin 19:01",	"gilroy 19:14",	];
var train370 = [	"san francisco 17:16",	"millbrae 17:33",	"hillsdale 17:43",	"palo alto 17:56",	"mountain view 18:03",	"san jose diridon 18:18",	"san jose 18:18",	];
var train272 = [	"san francisco 17:27",	"san bruno 17:40",	"burlingame 17:46",	"san mateo 17:50",	"hillsdale 17:54",	"san carlos 18:00",	"palo alto 18:08",	"california avenue 18:12",	"mountain view 18:19",	"sunnyvale 18:24",	"santa clara 18:31",	"san jose diridon 18:38",	"san jose 18:38",	];
var train274 = [	"san francisco 17:32",	"22nd street 17:36",	"bayshore 17:42",	"south san francisco 17:51",	"san bruno 17:55",	"millbrae 18:00",	"burlingame 18:05",	"san mateo 18:09",	"hayward park 18:12",	"hillsdale 18:15",	"belmont 18:19",	"san carlos 18:22",	"redwood city 18:28",	"menlo park 18:34",	"mountain view 18:42",	"sunnyvale 18:47",	"lawrence 18:51",	"santa clara 18:57",	"san jose diridon 19:06",	"san jose 19:06",	"me 19:11",	"tamien 19:11",	"capitol 19:18",	"capital 19:19",	"blossom hill 19:24",	"morgan hill 19:37",	"san martin 19:43",	"gilroy 19:56",	];
var train376 = [	"san francisco 17:38",	"millbrae 17:53",	"san mateo 17:59",	"redwood city 18:08",	"palo alto 18:15",	"california avenue 18:18",	"sunnyvale 18:29",	"san jose diridon 18:44",	"san jose 18:44",	"tamien 18:49",	"tamien 18:49",	];
var train278 = [	"san francisco 17:58",	"south san francisco 18:09",	"millbrae 18:15",	"hillsdale 18:23",	"redwood city 18:33",	"menlo park 18:39",	"palo alto 18:43",	"california avenue 18:46",	"san antonio 18:50",	"mountain view 18:55",	"sunnyvale 19:00",	"lawrence 07:05",	"santa clara 07:12",	"san jose diridon 19:24",	"san jose 19:24",	"me 19:29",	"tamien 19:29",	];
var train380 = [	"san francisco 18:16",	"millbrae 18:33",	"hillsdale 18:43",	"palo alto 18:55",	"mountain view 19:02",	"san jose diridon 19:18",	"san jose 19:18",	];
var train282 = [	"san francisco 18:23",	"san bruno 18:36",	"burlingame 18:42",	"san mateo 18:46",	"hayward park  ",	"hillsdale 18:50",	"san carlos 18:56",	"palo alto 19:04",	"california avenue 19:08",	"mountain view 19:15",	"sunnyvale 19:20",	"san jose diridon 19:33",	"san jose 19:33",	];
var train284 = [	"san francisco 18:32",	"22nd street 18:36",	"bayshore 18:41",	"south san francisco 18:52",	"san bruno 18:55",	"millbrae 19:00",	"burlingame 19:05",	"san mateo 19:08",	"hayward park 19:12",	"hillsdale 19:15",	"belmont 19:19",	"san carlos 19:22",	"redwood city 19:28",	"menlo park 19:34",	"california avenue  ",	"mountain view 19:43",	"sunnyvale 19:48",	"santa clara 19:55",	"san jose diridon 20:04",	"san jose 20:04",	];
var train386 = [	"san francisco 18:38",	"millbrae 18:53",	"san mateo 18:59",	"redwood city 19:08",	"palo alto 19:15",	"sunnyvale 19:28",	"san jose diridon 19:43",	"san jose 19:43",	"me 19:48",	"tamien 19:48",	];
var train288 = [	"san francisco 18:58",	"south san francisco 19:09",	"millbrae 19:15",	"hayward park  ",	"hillsdale 19:23",	"redwood city 19:33",	"menlo park 19:39",	"palo alto 19:43",	"california avenue 19:46",	"san antonio 19:50",	"mountain view 19:55",	"sunnyvale 20:00",	"lawrence 20:05",	"santa clara 20:10",	"san jose diridon 20:21",	"san jose 20:21",	"tamien 20:26",	"me 20:26",	];
var train190 = [	"san francisco 19:30",	"22nd street 19:34",	"bayshore 19:39",	"south san francisco 19:46",	"san bruno 19:50",	"millbrae 19:56",	"burlingame 20:01",	"san mateo 20:04",	"hayward park 20:08",	"hillsdale 20:11",	"belmont 20:15",	"san carlos 20:18",	"redwood city 20:23",	"menlo park 20:28",	"palo alto 20:32",	"california avenue 20:35",	"san antonio 20:39",	"mountain view 20:44",	"sunnyvale 20:49",	"lawrence 20:53",	"santa clara 20:58",	"san jose diridon 21:06",	"san jose 21:06",	];
var train192 = [	"san francisco 20:30",	"22nd street 20:34",	"bayshore 20:39",	"south san francisco 20:46",	"san bruno 20:50",	"millbrae 20:56",	"burlingame 21:01",	"san mateo 21:04",	"hayward park 21:08",	"hillsdale 21:11",	"belmont 21:15",	"san carlos 21:18",	"redwood city 21:23",	"menlo park 21:28",	"palo alto 21:32",	"california avenue 21:35",	"san antonio 21:39",	"mountain view 21:44",	"sunnyvale 21:49",	"lawrence 21:53",	"santa clara 21:58",	"san jose diridon 22:06",	"san jose 22:06",	"me 22:11",	"tamien 22:11",	];
var train194 = [	"san francisco 21:30",	"22nd street 21:34",	"bayshore 21:39",	"south san francisco 21:46",	"san bruno 21:50",	"millbrae 21:56",	"burlingame 22:01",	"san mateo 22:04",	"hayward park 22:08",	"hillsdale 22:11",	"belmont 22:15",	"san carlos 22:18",	"redwood city 22:23",	"menlo park 22:28",	"palo alto 22:32",	"california avenue 22:35",	"san antonio 22:39",	"mountain view 22:44",	"sunnyvale 22:49",	"lawrence 22:53",	"santa clara 22:58",	"san jose diridon 23:06",	"san jose 23:06",	"tamien 23:11",	"tamien 23:11",	];
var train196 = [	"san francisco 22:40",	"22nd street 22:44",	"bayshore 22:49",	"south san francisco 22:56",	"san bruno 23:00",	"millbrae 23:06",	"burlingame 23:11",	"san mateo 23:14",	"hayward park 23:18",	"hillsdale 23:21",	"belmont 23:25",	"san carlos 23:28",	"redwood city 23:33",	"menlo park 23:38",	"palo alto 23:42",	"california avenue 23:45",	"san antonio 23:49",	"mountain view 23:54",	"sunnyvale 23:59",	"lawrence 23:59",	"santa clara 23:59",	"san jose 23:59",	"san jose diridon 23:59",	];

//saturday northbound trains
var train421 = [	"san jose diridon 07:00",	"santa clara 07:00",	"lawrence 07:10",	"sunnyvale 07:14",	"mountain view 07:19",	"san antonio 07:23",	"california ave 07:27",	"palo alto 07:31",	"menlo park 07:34",	"atherton 07:37",	"redwood city 07:41",	"san carlos 07:45",	"belmont 07:48",	"hillsdale 07:51",	"hayward park 07:55",	"san mateo 07:58",	"burlingame 08:02",	"broadway 08:06",	"millbrae 08:09",	"san bruno 08:14",	"south san francisco 08:19",	"bayshore 08:25",	"22nd street 08:31",	"san francisco 08:38",	];
var train423 = [	"tamien 08:11",	"san jose diridon 08:38",	"santa clara 08:43",	"lawrence 08:49",	"sunnyvale 08:53",	"mountain view 08:59",	"san antonio 09:03",	"california ave 09:07",	"palo alto 09:12",	"menlo park 09:15",	"atherton 09:19",	"redwood city 09:23",	"san carlos 09:28",	"belmont 09:32",	"hillsdale 09:35",	"hayward park 09:39",	"san mateo 09:42",	"burlingame 09:46",	"broadway 09:50",	"millbrae 09:53",	"san bruno 09:58",	"south san francisco 10:03",	"bayshore 10:09",	"22nd street 10:15",	"san francisco 10:22",	];
var train801 = [	"tamien 09:24",	"san jose diridon 09:51",	"santa clara 00:00",	"lawrence 00:00",	"sunnyvale 10:01",	"mountain view 10:06",	"palo alto 10:13",	"redwood city 10:20",	"hillsdale 10:27",	"san mateo 10:31",	"millbrae 10:38",	"san francisco 10:57",	];
var train425 = [	"tamien 09:46",	"san jose diridon 10:08",	"santa clara 10:13",	"lawrence 10:19",	"sunnyvale 10:23",	"mountain view 10:29",	"san antonio 10:33",	"california ave 10:37",	"palo alto 10:42",	"menlo park 10:45",	"atherton 10:49",	"redwood city 10:53",	"san carlos 10:58",	"belmont 11:02",	"hillsdale 11:05",	"hayward park 11:09",	"san mateo 11:12",	"burlingame 11:16",	"broadway 11:20",	"millbrae 11:23",	"san bruno 11:28",	"south san francisco 11:33",	"bayshore 11:39",	"22nd street 11:45",	"san francisco 11:52",	];
var train427 = [	"tamien 11:11",	"san jose diridon 11:38",	"santa clara 11:43",	"lawrence 11:49",	"sunnyvale 11:53",	"mountain view 11:59",	"san antonio 12:03",	"california ave 12:07",	"palo alto 12:12",	"menlo park 12:15",	"atherton 12:19",	"redwood city 12:23",	"san carlos 12:28",	"belmont 12:32",	"hillsdale 12:35",	"hayward park 12:39",	"san mateo 12:42",	"burlingame 12:46",	"broadway 12:50",	"millbrae 12:53",	"san bruno 12:58",	"south san francisco 13:03",	"bayshore 13:09",	"22nd street 13:15",	"san francisco 13:22",	];
var train429 = [	"tamien 12:41",	"san jose diridon 13:08",	"santa clara 13:13",	"lawrence 13:19",	"sunnyvale 13:23",	"mountain view 13:29",	"san antonio 13:33",	"california ave 13:37",	"palo alto 13:42",	"menlo park 13:45",	"atherton 13:49",	"redwood city 13:53",	"san carlos 13:58",	"belmont 14:02",	"hillsdale 14:05",	"hayward park 14:09",	"san mateo 14:12",	"burlingame 14:16",	"broadway 14:20",	"millbrae 14:23",	"san bruno 14:28",	"south san francisco 14:33",	"bayshore 14:39",	"22nd street 14:45",	"san francisco 14:52",	];
var train431 = [	"tamien 14:11",	"san jose diridon 14:38",	"santa clara 14:43",	"lawrence 14:49",	"sunnyvale 14:53",	"mountain view 14:59",	"san antonio 15:03",	"california ave 15:07",	"palo alto 15:12",	"menlo park 15:15",	"atherton 15:19",	"redwood city 15:23",	"san carlos 15:28",	"belmont 15:32",	"hillsdale 15:35",	"hayward park 15:39",	"san mateo 15:42",	"burlingame 15:46",	"broadway 15:50",	"millbrae 15:53",	"san bruno 15:58",	"south san francisco 16:03",	"bayshore 16:09",	"22nd street 16:15",	"san francisco 16:22",	];
var train433 = [	"tamien 15:41",	"san jose diridon 16:08",	"santa clara 16:13",	"lawrence 16:19",	"sunnyvale 16:23",	"mountain view 16:29",	"san antonio 16:33",	"california ave 16:37",	"palo alto 16:42",	"menlo park 16:45",	"atherton 16:49",	"redwood city 16:53",	"san carlos 16:58",	"belmont 17:02",	"hillsdale 17:05",	"hayward park 17:09",	"san mateo 17:12",	"burlingame 17:16",	"broadway 17:20",	"millbrae 17:23",	"san bruno 17:28",	"south san francisco 17:33",	"bayshore 17:39",	"22nd street 17:45",	"san francisco 17:52",	];
var train803 = [	"tamien 16:54",	"san jose diridon 17:21",	"sunnyvale 17:31",	"mountain view 17:36",	"palo alto 17:43",	"redwood city 17:50",	"hillsdale 17:57",	"san mateo 18:01",	"millbrae 18:08",	"san francisco 18:27",	];
var train435 = [	"tamien 17:16",	"san jose diridon 17:38",	"santa clara 17:43",	"lawrence 17:49",	"sunnyvale 17:53",	"mountain view 17:59",	"san antonio 18:03",	"california ave 18:07",	"palo alto 18:12",	"menlo park 18:15",	"atherton 18:19",	"redwood city 18:23",	"san carlos 18:28",	"belmont 18:32",	"hillsdale 18:35",	"hayward park 18:39",	"san mateo 18:42",	"burlingame 18:46",	"broadway 18:50",	"millbrae 18:53",	"san bruno 18:58",	"south san francisco 19:03",	"bayshore 19:09",	"22nd street 19:15",	"san francisco 19:22",	];
var train437 = [	"tamien 18:41",	"san jose diridon 19:08",	"santa clara 19:13",	"lawrence 19:19",	"sunnyvale 19:23",	"mountain view 19:29",	"san antonio 19:33",	"california ave 19:37",	"palo alto 19:42",	"menlo park 19:45",	"atherton 19:49",	"redwood city 19:53",	"san carlos 19:58",	"belmont 20:02",	"hillsdale 20:05",	"hayward park 20:09",	"san mateo 20:12",	"burlingame 20:16",	"broadway 20:20",	"millbrae 20:23",	"san bruno 20:28",	"south san francisco 20:33",	"bayshore 20:39",	"22nd street 20:45",	"san francisco 20:52",	];
var train439 = [	"tamien 20:11",	"san jose diridon 20:38",	"santa clara 20:43",	"lawrence 20:49",	"sunnyvale 20:53",	"mountain view 20:59",	"san antonio 21:03",	"california ave 21:07",	"palo alto 21:12",	"menlo park 21:15",	"atherton 21:19",	"redwood city 21:23",	"san carlos 21:28",	"belmont 21:32",	"hillsdale 21:35",	"hayward park 21:39",	"san mateo 21:42",	"burlingame 21:46",	"broadway 21:50",	"millbrae 21:53",	"san bruno 21:58",	"south san francisco 22:03",	"bayshore 22:09",	"22nd street 22:15",	"san francisco 22:22",	];
var train441 = [	"tamien 21:41",	"san jose diridon 22:08",	"santa clara 22:13",	"lawrence 22:19",	"sunnyvale 22:23",	"mountain view 22:29",	"san antonio 22:33",	"california ave 22:37",	"palo alto 22:42",	"menlo park 22:45",	"atherton 22:49",	"redwood city 22:53",	"san carlos 22:58",	"belmont 23:02",	"hillsdale 23:05",	"hayward park 23:09",	"san mateo 23:12",	"burlingame 23:16",	"broadway 23:20",	"millbrae 23:23",	"san bruno 23:28",	"south san francisco 23:33",	"bayshore 23:39",	"22nd street 23:45",	"san francisco 23:52",	];
var train443 = [	"san jose diridon 22:30",	"santa clara 22:35",	"lawrence 22:40",	"sunnyvale 22:44",	"mountain view 22:49",	"san antonio 22:53",	"california ave 22:57",	"palo alto 23:02",	"menlo park 23:05",	"atherton 23:09",	"redwood city 23:13",	"san carlos 23:18",	"belmont 23:22",	"hillsdale 23:25",	"hayward park 23:29",	"san mateo 23:32",	"burlingame 23:36",	"broadway 23:40",	"millbrae 23:43",	"san bruno 23:48",	"south san francisco 23:53",	"bayshore 23:59",	"22nd street 23:59",	"san francisco 23:59",	];


var trainArr = [
[	"gilroy",	"0606  217",	"0628  221",	"0706  227",	],
[	"san martin",	"0615  217",	"0637  221",	"0715  227",	],
[	"morgan hill",	"0621  217",	"0643  221",	"0721  227",	],
[	"blossom hill",	"0636  217",	"0658  221",	"0736  227",	],
[	"capitol",	"0642  217",	"0704  221",	"0742  227",	],
[	"tamien",	"0455  103",	"0650  217",	"0656  319",	"0715  221",	"0753  227",	"0759  329",	"0828  233",	"0937  237",	"1416  257",	"1532  261",	"1632  269",	"1732  279",	"1838  289",	"2037  195",	"2137  197",	],
[	"san jose diridon",	"0428  101",	"0503  103",	"0545  305",	"0559  207",	"0604  309",	"0623  211",	"0649  313",	"0654  215",	"0659  217",	"0704  319",	"0723  221",	"0749  323",	"0754  225",	"0759  227",	"0804  329",	"0823  231",	"0839  233",	"0913  135",	"0950  237",	"1013  139",	"1113  143",	"1213  147",	"1313  151",	"1413  155",	"1424  257",	"1513  159",	"1540  261",	"1612  263",	"1624  365",	"1630  267",	"1640  269",	"1645  371",	"1708  273",	"1720  375",	"1730  277",	"1740  279",	"1745  381",	"1808  283",	"1820  385",	"1835  287",	"1845  289",	"1907  191",	"1945  193",	"2045  195",	"2145  197",	"2230  199",	],
[	"college park",	"0803  227",	"1516  159",	],
[	"santa clara",	"0433  101",	"0508  103",	"0606  207",	"0628  211",	"0706  217",	"0728  221",	"0808  227",	"0828  231",	"0844  233",	"0918  135",	"0955  237",	"1018  139",	"1118  143",	"1218  147",	"1318  151",	"1418  155",	"1429  257",	"1520  159",	"1545  261",	"1618  263",	"1646  269",	"1714  273",	"1746  279",	"1814  283",	"1912  191",	"1950  193",	"2050  195",	"2150  197",	"2235  199",	],
[	"lawrence",	"0439  101",	"0513  103",	"0612  207",	"0712  217",	"0733  221",	"0815  227",	"0850  233",	"0924  135",	"1000  237",	"1024  139",	"1124  143",	"1224  147",	"1324  151",	"1424  155",	"1434  257",	"1525  159",	"1550  261",	"1639  267",	"1654  269",	"1739  277",	"1754  279",	"1844  287",	"1853  289",	"1918  191",	"1955  193",	"2055  195",	"2155  197",	"2240  199",	],
[	"sunnyvale",	"0443  101",	"0518  103",	"0620  207",	"0614  309",	"0636  211",	"0706  215",	"0720  217",	"0714  319",	"0738  221",	"0806  225",	"0822  227",	"0814  329",	"0836  231",	"0855  233",	"0929  135",	"1005  237",	"1028  139",	"1128  143",	"1228  147",	"1328  151",	"1428  155",	"1439  257",	"1530  159",	"1557  261",	"1700  269",	"1800  279",	"1848  287",	"1922  191",	"2000  193",	"2100  195",	"2200  197",	"2245  199",	],
[	"mountain view",	"0448  101",	"0523  103",	"0600  305",	"0625  207",	"0642  211",	"0704  313",	"0711  215",	"0725  217",	"0744  221",	"0804  323",	"0811  225",	"0828  227",	"0842  231",	"0900  233",	"0934  135",	"1010  237",	"1033  139",	"1133  143",	"1233  147",	"1333  151",	"1433  155",	"1444  257",	"1535  159",	"1602  261",	"1636  365",	"1646  267",	"1705  269",	"1657  371",	"1732  375",	"1746  277",	"1805  279",	"1757  381",	"1832  385",	"1853  287",	"1901  289",	"1927  191",	"2005  193",	"2105  195",	"2205  197",	"2250  199",	],
[	"san antonio",	"0452  101",	"0527  103",	"0629  207",	"0729  217",	"0832  227",	"0904  233",	"0938  135",	"1014  237",	"1037  139",	"1137  143",	"1237  147",	"1337  151",	"1437  155",	"1447  257",	"1539  159",	"1606  261",	"1709  269",	"1809  279",	"1931  191",	"2008  193",	"2108  195",	"2208  197",	"2254  199",	],
[	"california ave",	"0457  101",	"0531  103",	"0634  207",	"0648  211",	"0717  215",	"0734  217",	"0749  221",	"0817  225",	"0836  227",	"0909  233",	"0942  135",	"1018  237",	"1042  139",	"1141  143",	"1241  147",	"1341  151",	"1441  155",	"1452  257",	"1543  159",	"1611  261",	"1714  269",	"1814  279",	"1907  289",	"1935  191",	"2013  193",	"2113  195",	"2213  197",	"2259  199",	],
[	"palo alto",	"0501  101",	"0536  103",	"0608  305",	"0638  207",	"0626  309",	"0712  313",	"0721  215",	"0738  217",	"0726  319",	"0812  323",	"0821  225",	"0841  227",	"0827  329",	"0914  233",	"0947  135",	"1023  237",	"1047  139",	"1146  143",	"1246  147",	"1346  151",	"1446  155",	"1456  257",	"1547  159",	"1615  261",	"1633  263",	"1644  365",	"1654  267",	"1720  269",	"1705  371",	"1729  273",	"1740  375",	"1754  277",	"1820  279",	"1805  381",	"1829  283",	"1840  385",	"1901  287",	"1911  289",	"1940  191",	"2017  193",	"2117  195",	"2217  197",	"2304  199",	],
[	"menlo park",	"0504  101",	"0539  103",	"0641  207",	"0654  211",	"0741  217",	"0754  221",	"0844  227",	"0851  231",	"0917  233",	"0950  135",	"1026  237",	"1050  139",	"1149  143",	"1249  147",	"1349  151",	"1449  155",	"1459  257",	"1551  159",	"1619  261",	"1647  365",	"1657  267",	"1723  269",	"1743  375",	"1757  277",	"1823  279",	"1843  385",	"1904  287",	"1914  289",	"1943  191",	"2020  193",	"2120  195",	"2220  197",	"2307  199",	],
[	"redwood city",	"0510  101",	"0544  103",	"0647  207",	"0632  309",	"0659  211",	"0747  217",	"0732  319",	"0800  221",	"0851  227",	"0834  329",	"0857  231",	"0924  233",	"0957  135",	"1032  237",	"1055  139",	"1155  143",	"1255  147",	"1355  151",	"1455  155",	"1505  257",	"1556  159",	"1624  261",	"1640  263",	"1653  365",	"1729  269",	"1711  371",	"1736  273",	"1749  375",	"1829  279",	"1811  381",	"1836  283",	"1849  385",	"1920  289",	"1949  191",	"2027  193",	"2127  195",	"2227  197",	"2313  199",	],
[	"san carlos",	"0515  101",	"0549  103",	"0704  211",	"0729  215",	"0805  221",	"0829  225",	"0902  231",	"0928  233",	"1001  135",	"1037  237",	"1059  139",	"1159  143",	"1259  147",	"1359  151",	"1459  155",	"1509  257",	"1601  159",	"1629  261",	"1644  263",	"1705  267",	"1733  269",	"1740  273",	"1805  277",	"1833  279",	"1840  283",	"1912  287",	"1924  289",	"1953  191",	"2031  193",	"2131  195",	"2231  197",	"2317  199",	],
[	"belmont",	"0518  101",	"0552  103",	"0707  211",	"0808  221",	"0905  231",	"0932  233",	"1005  135",	"1040  237",	"1103  139",	"1203  143",	"1303  147",	"1403  151",	"1503  155",	"1513  257",	"1604  159",	"1647  263",	"1743  273",	"1843  283",	"1957  191",	"2035  193",	"2135  195",	"2235  197",	"2321  199",	],
[	"hillsdale",	"0522  101",	"0556  103",	"0618  305",	"0654  207",	"0711  211",	"0723  313",	"0734  215",	"0754  217",	"0812  221",	"0824  323",	"0834  225",	"0859  227",	"0909  231",	"0935  233",	"1008  135",	"1044  237",	"1106  139",	"1206  143",	"1306  147",	"1406  151",	"1506  155",	"1516  257",	"1608  159",	"1651  263",	"1709  267",	"1718  371",	"1747  273",	"1809  277",	"1818  381",	"1847  283",	"1916  287",	"1929  289",	"2000  191",	"2038  193",	"2138  195",	"2238  197",	"2324  199",	],
[	"hayward park",	"0525  101",	"0559  103",	"0714  211",	"0815  221",	"0912  231",	"1011  135",	"1109  139",	"1209  143",	"1309  147",	"1409  151",	"1509  155",	"1611  159",	"1654  263",	"1750  273",	"1850  283",	"2003  191",	"2041  193",	"2141  195",	"2241  197",	"2327  199",	],
[	"san mateo",	"0528  101",	"0603  103",	"0643  309",	"0718  211",	"0738  215",	"0743  319",	"0819  221",	"0838  225",	"0844  329",	"0915  231",	"0940  233",	"1014  135",	"1049  237",	"1112  139",	"1212  143",	"1312  147",	"1412  151",	"1512  155",	"1521  257",	"1615  159",	"1636  261",	"1657  263",	"1713  267",	"1740  269",	"1753  273",	"1813  277",	"1840  279",	"1853  283",	"1920  287",	"1933  289",	"2007  191",	"2044  193",	"2144  195",	"2244  197",	"2330  199",	],
[	"burlingame",	"0532  101",	"0606  103",	"0721  211",	"0743  215",	"0822  221",	"0843  225",	"0919  231",	"0943  233",	"1017  135",	"1052  237",	"1115  139",	"1215  143",	"1315  147",	"1415  151",	"1515  155",	"1524  257",	"1618  159",	"1701  263",	"1717  267",	"    269",	"1757  273",	"1817  277",	"1857  283",	"1924  287",	"1937  289",	"2010  191",	"2048  193",	"2148  195",	"2248  197",	"2334  199",	],
[	"millbrae",	"0536  101",	"0611  103",	"0626  305",	"0703  207",	"0651  309",	"0726  211",	"0731  313",	"0803  217",	"0751  319",	"0827  221",	"0833  323",	"0908  227",	"0852  329",	"0924  231",	"0948  233",	"1022  135",	"1057  237",	"1120  139",	"1220  143",	"1320  147",	"1420  151",	"1520  155",	"1529  257",	"1623  159",	"1642  261",	"1705  263",	"1710  365",	"1748  269",	"1730  371",	"1801  273",	"1806  375",	"1848  279",	"1830  381",	"1901  283",	"1906  385",	"1941  289",	"2015  191",	"2052  193",	"2152  195",	"2252  197",	"2338  199",	],
[	"san bruno",	"0541  101",	"0616  103",	"0730  211",	"0750  215",	"0831  221",	"0850  225",	"0928  231",	"0953  233",	"1027  135",	"1102  237",	"1125  139",	"1225  143",	"1325  147",	"1425  151",	"1525  155",	"1533  257",	"1628  159",	"1710  263",	"1724  267",	"1806  273",	"1824  277",	"1906  283",	"1931  287",	"2020  191",	"2057  193",	"2157  195",	"2257  197",	"2342  199",	],
[	"south san francisco",	"0545  101",	"0620  103",	"0709  207",	"0734  211",	"0809  217",	"0835  221",	"0914  227",	"0932  231",	"1031  135",	"1129  139",	"1229  143",	"1329  147",	"1429  151",	"1529  155",	"1632  159",	"1714  263",	"1810  273",	"1910  283",	"2024  191",	"2101  193",	"2201  195",	"2301  197",	"2346  199",	],
[	"bayshore",	"0551  101",	"0626  103",	"0741  211",	"0843  221",	"0000  323",	"0939  231",	"1037  135",	"1135  139",	"1235  143",	"1335  147",	"1435  151",	"1535  155",	"1638  159",	"1721  263",	"1817  273",	"1917  283",	"2030  191",	"2107  193",	"2207  195",	"2307  197",	"2352  199",	],
[	"22nd street",	"0557  101",	"0632  103",	"0750  211",	"0851  221",	"0945  231",	"1043  135",	"1141  139",	"1241  143",	"1341  147",	"1441  151",	"1541  155",	"1644  159",	"1656  261",	"1730  263",	"1725  365",	"1735  267",	"1800  269",	"1745  371",	"1826  273",	"1821  375",	"1835  277",	"1900  279",	"1845  381",	"1926  283",	"1921  385",	"1942  287",	"1955  289",	"2036  191",	"2113  193",	"2213  195",	"2313  197",	"2358  199",	],
[	"san francisco",	"0603  101",	"0638  103",	"0647  305",	"0724  207",	"0708  309",	"0757  211",	"0751  313",	"0807  215",	"0824  217",	"0811  319",	"0858  221",	"0853  323",	"0907  225",	"0929  227",	"0911  329",	"0952  231",	"1009  233",	"1050  135",	"1117  237",	"1148  139",	"1248  143",	"1348  147",	"1448  151",	"1548  155",	"1550  257",	"1650  159",	"1702  261",	"1736  263",	"1731  365",	"1742  267",	"1806  269",	"1751  371",	"1833  273",	"1827  375",	"1842  277",	"1906  279",	"1851  381",	"1933  283",	"1927  385",	"1949  287",	"2002  289",	"2042  191",	"2120  193",	"2220  195",	"2320  197",	"2359  199",	],
];

var trainArrSouth = [
[	"san francisco",	"0455  102",	"0525  104",	"0605  206",	"0615  208",	"0635  310",	"0645  212",	"0659  314",	"0705  216",	"0715  218",	"0735  320",	"0745  222",	"0759  324",	"0805  226",	"0815  228",	"0835  330",	"0845  232",	"0900  134",	"0945  236",	"1000  138",	"1100  142",	"1200  146",	"1300  150",	"1400  152",	"1443  254",	"1500  156",	"1534  258",	"1612  360",	"1623  262",	"1632  264",	"1638  366",	"1658  268",	"1716  370",	"1727  272",	"1732  274",	"1738  376",	"1758  278",	"1816  380",	"1823  282",	"1832  284",	"1838  386",	"1858  288",	"1930  190",	"2030  192",	"2130  194",	"2240  196",	"1205  198",	],
[	"22nd street",	"0459  102",	"0529  104",	"0609  206",	"0619  208",	"0639  310",	"0651  212",	"0703  314",	"0710  216",	"0719  218",	"0739  320",	"0751  222",	"0803  324",	"0810  226",	"0819  228",	"0839  330",	"0849  232",	"0905  134",	"1004  138",	"1104  142",	"1204  146",	"1304  150",	"1404  152",	"1504  156",	"1636  264",	"1736  274",	"1836  284",	"1934  190",	"2034  192",	"2134  194",	"2244  196",	"1210  198",	],
[	"bayshore",	"0504  102",	"0534  104",	"0624  208",	"0724  218",	"0824  228",	"0910  134",	"1009  138",	"1109  142",	"1209  146",	"1309  150",	"1409  152",	"1509  156",	"1641  264",	"1742  274",	"1841  284",	"1939  190",	"2039  192",	"2139  194",	"2249  196",	"1215  198",	],
[	"south san francisco",	"0510  102",	"0540  104",	"0631  208",	"0731  218",	"0831  228",	"0917  134",	"1016  138",	"1116  142",	"1216  146",	"1316  150",	"1416  152",	"1516  156",	"1652  264",	"1709  268",	"1751  274",	"1809  278",	"1852  284",	"1909  288",	"1946  190",	"2046  192",	"2146  194",	"2256  196",	"1221  198",	],
[	"san bruno",	"0514  102",	"0544  104",	"0635  208",	"0720  216",	"0735  218",	"0820  226",	"0835  228",	"0921  134",	"0957  236",	"1020  138",	"1120  142",	"1220  146",	"1320  150",	"1420  152",	"1455  254",	"1520  156",	"1546  258",	"1636  262",	"1655  264",	"1740  272",	"1755  274",	"1836  282",	"1855  284",	"1950  190",	"2050  192",	"2150  194",	"2300  196",	"1225  198",	],
[	"millbrae",	"0518  102",	"0548  104",	"0622  206",	"0639  208",	"0652  310",	"0716  314",	"0739  218",	"0752  320",	"0804  222",	"0816  324",	"0839  228",	"0852  330",	"0902  232",	"0925  134",	"1001  236",	"1025  138",	"1125  142",	"1225  146",	"1325  150",	"1425  152",	"1459  254",	"1524  156",	"1551  258",	"1627  360",	"1700  264",	"1653  366",	"1715  268",	"1733  370",	"1800  274",	"1753  376",	"1815  278",	"1833  380",	"1900  284",	"1853  386",	"1915  288",	"1956  190",	"2056  192",	"2156  194",	"2306  196",	"1229  198",	],
[	"burlingame",	"0522  102",	"0553  104",	"0626  206",	"0644  208",	"0727  216",	"0744  218",	"0827  226",	"0844  228",	"0929  134",	"1006  236",	"1029  138",	"1129  142",	"1229  146",	"1329  150",	"1429  152",	"1504  254",	"1529  156",	"1556  258",	"1642  262",	"1705  264",	"1746  272",	"1805  274",	"1842  282",	"1905  284",	"2001  190",	"2101  192",	"2201  194",	"2311  196",	"1233  198",	],
[	"san mateo",	"0525  102",	"0557  104",	"0630  206",	"0648  208",	"0711  212",	"0731  216",	"0748  218",	"0811  222",	"0831  226",	"0848  228",	"0909  232",	"0932  134",	"1010  236",	"1032  138",	"1132  142",	"1232  146",	"1332  150",	"1432  152",	"1507  254",	"1532  156",	"1559  258",	"1646  262",	"1708  264",	"1659  366",	"1750  272",	"1809  274",	"1759  376",	"1846  282",	"1908  284",	"1859  386",	"2004  190",	"2104  192",	"2204  194",	"2314  196",	"1236  198",	],
[	"hayward park",	"0528  102",	"0600  104",	"0651  208",	"0751  218",	"0851  228",	"0936  134",	"1036  138",	"1136  142",	"1236  146",	"1336  150",	"1436  152",	"1536  156",	"1712  264",	"1812  274",	"1912  284",	"2008  190",	"2108  192",	"2208  194",	"2318  196",	"1240  198",	],
[	"hillsdale",	"0532  102",	"0603  104",	"0634  206",	"0654  208",	"0724  314",	"0735  216",	"0754  218",	"0824  324",	"0835  226",	"0854  228",	"0913  232",	"0939  134",	"1014  236",	"1039  138",	"1139  142",	"1239  146",	"1339  150",	"1439  152",	"1511  254",	"1539  156",	"1604  258",	"1635  360",	"1650  262",	"1715  264",	"1723  268",	"1743  370",	"1754  272",	"1815  274",	"1823  278",	"1843  380",	"1850  282",	"1915  284",	"1923  288",	"2011  190",	"2111  192",	"2211  194",	"2321  196",	"1243  198",	],
[	"belmont",	"0535  102",	"0607  104",	"0658  208",	"0758  218",	"0858  228",	"0943  134",	"1018  236",	"1043  138",	"1143  142",	"1243  146",	"1343  150",	"1443  152",	"1515  254",	"1543  156",	"1608  258",	"1719  264",	"1819  274",	"1919  284",	"2015  190",	"2115  192",	"2215  194",	"2325  196",	"1247  198",	],
[	"san carlos",	"0538  102",	"0610  104",	"0639  206",	"0702  208",	"0718  212",	"0740  216",	"0802  218",	"0818  222",	"0840  226",	"0902  228",	"0918  232",	"0946  134",	"1021  236",	"1046  138",	"1146  142",	"1246  146",	"1346  150",	"1446  152",	"1518  254",	"1546  156",	"1611  258",	"1656  262",	"1722  264",	"1800  272",	"1822  274",	"1856  282",	"1922  284",	"2018  190",	"2118  192",	"2218  194",	"2328  196",	"1250  198",	],
[	"redwood city",	"0541  102",	"0615  104",	"0644  206",	"0706  208",	"0711  310",	"0723  212",	"0731  314",	"0806  218",	"0811  320",	"0823  222",	"0831  324",	"0906  228",	"0911  330",	"0923  232",	"0951  134",	"1026  236",	"1051  138",	"1151  142",	"1251  146",	"1351  150",	"1451  152",	"1523  254",	"1551  156",	"1616  258",	"1728  264",	"1708  366",	"1733  268",	"1828  274",	"1808  376",	"1833  278",	"1928  284",	"1908  386",	"1933  288",	"2023  190",	"2123  192",	"2223  194",	"2333  196",	"1255  198",	],
[	"menlo park",	"0547  102",	"0620  104",	"0650  206",	"0717  310",	"0729  212",	"0748  216",	"0817  320",	"0829  222",	"0848  226",	"0917  330",	"0929  232",	"0956  134",	"1031  236",	"1056  138",	"1156  142",	"1256  146",	"1356  150",	"1456  152",	"1528  254",	"1556  156",	"1622  258",	"1734  264",	"1739  268",	"1834  274",	"1839  278",	"1934  284",	"1939  288",	"2028  190",	"2128  192",	"2228  194",	"2338  196",	"0100  198",	],
[	"palo alto",	"0551  102",	"0624  104",	"0654  206",	"0714  208",	"0721  310",	"0733  212",	"0737  314",	"0752  216",	"0814  218",	"0821  320",	"0833  222",	"0837  324",	"0852  226",	"0914  228",	"0921  330",	"0933  232",	"1000  134",	"1035  236",	"1100  138",	"1200  142",	"1300  146",	"1400  150",	"1500  152",	"1532  254",	"1600  156",	"1626  258",	"1646  360",	"1704  262",	"1715  366",	"1743  268",	"1756  370",	"1808  272",	"1815  376",	"1843  278",	"1855  380",	"1904  282",	"1915  386",	"1943  288",	"2032  190",	"2132  192",	"2232  194",	"2342  196",	"0104  198",	],
[	"california ave",	"0555  102",	"0628  104",	"0657  206",	"0737  212",	"0837  222",	"0937  232",	"1004  134",	"1038  236",	"1104  138",	"1204  142",	"1304  146",	"1404  150",	"1504  152",	"1536  254",	"1604  156",	"1629  258",	"1708  262",	"1718  366",	"1746  268",	"1812  272",	"1818  376",	"1846  278",	"1908  282",	"1946  288",	"2035  190",	"2135  192",	"2235  194",	"2345  196",	"0107  198",	],
[	"san antonio",	"0559  102",	"0632  104",	"0741  212",	"0841  222",	"0941  232",	"1008  134",	"1043  236",	"1108  138",	"1208  142",	"1308  146",	"1408  150",	"1508  152",	"1540  254",	"1608  156",	"1634  258",	"1750  268",	"1850  278",	"1950  288",	"2039  190",	"2139  192",	"2239  194",	"2349  196",	"0111  198",	],
[	"mountain view",	"0604  102",	"0637  104",	"0704  206",	"0728  310",	"0746  212",	"0750  314",	"0759  216",	"0828  320",	"0846  222",	"0850  324",	"0859  226",	"0928  330",	"0946  232",	"1013  134",	"1047  236",	"1113  138",	"1213  142",	"1313  146",	"1413  150",	"1513  152",	"1545  254",	"1613  156",	"1638  258",	"1655  360",	"1715  262",	"1742  264",	"1755  268",	"1803  370",	"1819  272",	"1842  274",	"1855  278",	"1902  380",	"1915  282",	"1943  284",	"1955  288",	"2044  190",	"2144  192",	"2244  194",	"2354  196",	"0116  198",	],
[	"sunnyvale",	"0610  102",	"0642  104",	"0751  212",	"0851  222",	"0951  232",	"1018  134",	"1052  236",	"1118  138",	"1218  142",	"1318  146",	"1418  150",	"1518  152",	"1550  254",	"1618  156",	"1644  258",	"1720  262",	"1747  264",	"1729  366",	"1800  268",	"1824  272",	"1847  274",	"1829  376",	"1900  278",	"1920  282",	"1948  284",	"1928  386",	"2000  288",	"2049  190",	"2149  192",	"2249  194",	"2359  196",	"0121  198",	],
[	"lawerence",	"0615  102",	"0646  104",	"0709  206",	"0756  212",	"0807  216",	"0856  222",	"0907  226",	"0956  232",	"1022  134",	"1056  236",	"1122  138",	"1222  142",	"1322  146",	"1422  150",	"1522  152",	"1554  254",	"1623  156",	"1648  258",	"1806  268",	"1851  274",	"1905  278",	"2005  288",	"2053  190",	"2153  192",	"2253  194",	"2359  196",	"0125  198",	],
[	"santa clara",	"0622  102",	"0651  104",	"0727  208",	"0803  212",	"0827  218",	"0903  222",	"0927  228",	"1003  232",	"1027  134",	"1102  236",	"1128  138",	"1228  142",	"1328  146",	"1428  150",	"1528  152",	"1559  254",	"1628  156",	"1653  258",	"1727  262",	"1754  264",	"1813  268",	"1831  272",	"1857  274",	"1912  278",	"1955  284",	"2010  288",	"2058  190",	"2158  192",	"2258  194",	"2359  196",	"0130  198",	],
[	"college park",	"0806  212",	"1631  156",	],
[	"san jose diridon",	"0631  102",	"0701  104",	"0719  206",	"0736  208",	"0743  310",	"0812  212",	"0805  314",	"0820  216",	"0836  218",	"0843  320",	"0912  222",	"0905  324",	"0920  226",	"0936  228",	"0943  330",	"1011  232",	"1035  134",	"1112  236",	"1135  138",	"1235  142",	"1335  146",	"1435  150",	"1535  152",	"1609  254",	"1640  156",	"1703  258",	"1711  360",	"1734  262",	"1802  264",	"1744  366",	"1824  268",	"1818  370",	"1838  272",	"1906  274",	"1844  376",	"1924  278",	"1918  380",	"1933  282",	"2004  284",	"1943  386",	"2021  288",	"2106  190",	"2206  192",	"2306  194",	"2359  196",	"0138  198",	],
[	"tamien",	"0706  104",	"0748  310",	"0848  320",	"0948  330",	"1117  236",	"1614  254",	"1645  156",	"1708  258",	"1749  366",	"1829  268",	"1911  274",	"1849  376",	"1929  278",	"1948  386",	"2026  288",	"2211  192",	"2311  194",	],
[	"capitol",	"1652  156",	"1836  268",	"1918  274",	],
[	"blossom hill",	"1658  156",	"1842  268",	"1924  274",	],
[	"morgan hill",	"1711  156",	"1855  268",	"1937  274",	],
[	"san martin",	"1717  156",	"1901  268",	"1943  274",	],
[	"gilroy",	"1730  156",	"1914  268",	"1956  274",	],
];

var trainArrNorthSat = [
[	"tamien",	"0811  423",	"0924  801",	"0946  425",	"1111  427",	"1241  429",	"1411  431",	"1541  433",	"1654  803",	"1716  435",	"1841  437",	"2011  439",	"2141  441",	],
[	"san jose diridon",	"0700  421",	"0838  423",	"0951  801",	"1008  425",	"1138  427",	"1308  429",	"1438  431",	"1608  433",	"1721  803",	"1738  435",	"1908  437",	"2038  439",	"2208  441",	"2230  443",	],
[	"santa clara",	"0700  421",	"0843  423",	"1013  425",	"1143  427",	"1313  429",	"1443  431",	"1613  433",	"1743  435",	"1913  437",	"2043  439",	"2213  441",	"2235  443",	],
[	"lawrence",	"0710  421",	"0849  423",	"1019  425",	"1149  427",	"1319  429",	"1449  431",	"1619  433",	"1749  435",	"1919  437",	"2049  439",	"2219  441",	"2240  443",	],
[	"sunnyvale",	"0714  421",	"0853  423",	"1001  801",	"1023  425",	"1153  427",	"1323  429",	"1453  431",	"1623  433",	"1731  803",	"1753  435",	"1923  437",	"2053  439",	"2223  441",	"2244  443",	],
[	"mountain view",	"0719  421",	"0859  423",	"1006  801",	"1029  425",	"1159  427",	"1329  429",	"1459  431",	"1629  433",	"1736  803",	"1759  435",	"1929  437",	"2059  439",	"2229  441",	"2249  443",	],
[	"san antonio",	"0723  421",	"0903  423",	"1033  425",	"1203  427",	"1333  429",	"1503  431",	"1633  433",	"1803  435",	"1933  437",	"2103  439",	"2233  441",	"2253  443",	],
[	"california ave",	"0727  421",	"0907  423",	"1037  425",	"1207  427",	"1337  429",	"1507  431",	"1637  433",	"1807  435",	"1937  437",	"2107  439",	"2237  441",	"2257  443",	],
[	"palo alto",	"0731  421",	"0912  423",	"1013  801",	"1042  425",	"1212  427",	"1342  429",	"1512  431",	"1642  433",	"1743  803",	"1812  435",	"1942  437",	"2112  439",	"2242  441",	"2302  443",	],
[	"menlo park",	"0734  421",	"0915  423",	"1045  425",	"1215  427",	"1345  429",	"1515  431",	"1645  433",	"1815  435",	"1945  437",	"2115  439",	"2245  441",	"2305  443",	],
[	"atherton",	"0737  421",	"0919  423",	"1049  425",	"1219  427",	"1349  429",	"1519  431",	"1649  433",	"1819  435",	"1949  437",	"2119  439",	"2249  441",	"2309  443",	],
[	"redwood city",	"0741  421",	"0923  423",	"1020  801",	"1053  425",	"1223  427",	"1353  429",	"1523  431",	"1653  433",	"1750  803",	"1823  435",	"1953  437",	"2123  439",	"2253  441",	"2313  443",	],
[	"san carlos",	"0745  421",	"0928  423",	"1058  425",	"1228  427",	"1358  429",	"1528  431",	"1658  433",	"1828  435",	"1958  437",	"2128  439",	"2258  441",	"2318  443",	],
[	"belmont",	"0748  421",	"0932  423",	"1102  425",	"1232  427",	"1402  429",	"1532  431",	"1702  433",	"1832  435",	"2002  437",	"2132  439",	"2302  441",	"2322  443",	],
[	"hillsdale",	"0751  421",	"0935  423",	"1027  801",	"1105  425",	"1235  427",	"1405  429",	"1535  431",	"1705  433",	"1757  803",	"1835  435",	"2005  437",	"2135  439",	"2305  441",	"2325  443",	],
[	"hayward park",	"0755  421",	"0939  423",	"1109  425",	"1239  427",	"1409  429",	"1539  431",	"1709  433",	"1839  435",	"2009  437",	"2139  439",	"2309  441",	"2329  443",	],
[	"san mateo",	"0758  421",	"0942  423",	"1031  801",	"1112  425",	"1242  427",	"1412  429",	"1542  431",	"1712  433",	"1801  803",	"1842  435",	"2012  437",	"2142  439",	"2312  441",	"2332  443",	],
[	"burlingame",	"0802  421",	"0946  423",	"1116  425",	"1246  427",	"1416  429",	"1546  431",	"1716  433",	"1846  435",	"2016  437",	"2146  439",	"2316  441",	"2336  443",	],
[	"broadway",	"0806  421",	"0950  423",	"1120  425",	"1250  427",	"1420  429",	"1550  431",	"1720  433",	"1850  435",	"2020  437",	"2150  439",	"2320  441",	"2340  443",	],
[	"millbrae",	"0809  421",	"0953  423",	"1038  801",	"1123  425",	"1253  427",	"1423  429",	"1553  431",	"1723  433",	"1808  803",	"1853  435",	"2023  437",	"2153  439",	"2323  441",	"2343  443",	],
[	"san bruno",	"0814  421",	"0958  423",	"1128  425",	"1258  427",	"1428  429",	"1558  431",	"1728  433",	"1858  435",	"2028  437",	"2158  439",	"2328  441",	"2348  443",	],
[	"south san francisco",	"0819  421",	"1003  423",	"1133  425",	"0103  427",	"1433  429",	"1603  431",	"1733  433",	"1903  435",	"2033  437",	"2203  439",	"2333  441",	"2353  443",	],
[	"bayshore",	"0825  421",	"1009  423",	"1139  425",	"0109  427",	"1439  429",	"1609  431",	"1739  433",	"1909  435",	"2039  437",	"2209  439",	"2339  441",	"2359  443",	],
[	"22nd street",	"0831  421",	"1015  423",	"1145  425",	"0115  427",	"1445  429",	"1615  431",	"1745  433",	"1915  435",	"2045  437",	"2215  439",	"2345  441",	"2359  443",	],
[	"san francisco",	"0838  421",	"1022  423",	"1057  801",	"1152  425",	"0122  427",	"1452  429",	"1622  431",	"1752  433",	"1827  803",	"1922  435",	"2052  437",	"2222  439",	"2352  441",	"2359  443",	],
];

var trainArrNorthSun = [
[	"tamien",	"0811  423",	"0924  801",	"0946  425",	"1111  427",	"1241  429",	"1411  431",	"1541  433",	"1654  803",	"1716  435",	"1841  437",	"2011  439",	"2141  441",	],
[	"san jose diridon",	"0838  423",	"0951  801",	"1008  425",	"1138  427",	"1308  429",	"1438  431",	"1608  433",	"1721  803",	"1738  435",	"1908  437",	"2038  439",	"2208  441",	],
[	"santa clara",	"0843  423",	"1013  425",	"1143  427",	"1313  429",	"1443  431",	"1613  433",	"1743  435",	"1913  437",	"2043  439",	"2213  441",	],
[	"lawrence",	"0849  423",	"1019  425",	"1149  427",	"1319  429",	"1449  431",	"1619  433",	"1749  435",	"1919  437",	"2049  439",	"2219  441",	],
[	"sunnyvale",	"0853  423",	"1001  801",	"1023  425",	"1153  427",	"1323  429",	"1453  431",	"1623  433",	"1731  803",	"1753  435",	"1923  437",	"2053  439",	"2223  441",	],
[	"mountain view",	"0859  423",	"1006  801",	"1029  425",	"1159  427",	"1329  429",	"1459  431",	"1629  433",	"1736  803",	"1759  435",	"1929  437",	"2059  439",	"2229  441",	],
[	"san antonio",	"0903  423",	"1033  425",	"1203  427",	"1333  429",	"1503  431",	"1633  433",	"1803  435",	"1933  437",	"2103  439",	"2233  441",	],
[	"california ave",	"0907  423",	"1037  425",	"1207  427",	"1337  429",	"1507  431",	"1637  433",	"1807  435",	"1937  437",	"2107  439",	"2237  441",	],
[	"palo alto",	"0912  423",	"1013  801",	"1042  425",	"1212  427",	"1342  429",	"1512  431",	"1642  433",	"1743  803",	"1812  435",	"1942  437",	"2112  439",	"2242  441",	],
[	"menlo park",	"0915  423",	"1045  425",	"1215  427",	"1345  429",	"1515  431",	"1645  433",	"1815  435",	"1945  437",	"2115  439",	"2245  441",	],
[	"atherton",	"0919  423",	"1049  425",	"1219  427",	"1349  429",	"1519  431",	"1649  433",	"1819  435",	"1949  437",	"2119  439",	"2249  441",	],
[	"redwood city",	"0923  423",	"1020  801",	"1053  425",	"1223  427",	"1353  429",	"1523  431",	"1653  433",	"1750  803",	"1823  435",	"1953  437",	"2123  439",	"2253  441",	],
[	"san carlos",	"0928  423",	"1058  425",	"1228  427",	"1358  429",	"1528  431",	"1658  433",	"1828  435",	"1958  437",	"2128  439",	"2258  441",	],
[	"belmont",	"0932  423",	"1102  425",	"1232  427",	"1402  429",	"1532  431",	"1702  433",	"1832  435",	"2002  437",	"2132  439",	"2302  441",	],
[	"hillsdale",	"0935  423",	"1027  801",	"1105  425",	"1235  427",	"1405  429",	"1535  431",	"1705  433",	"1757  803",	"1835  435",	"2005  437",	"2135  439",	"2305  441",	],
[	"hayward park",	"0939  423",	"1109  425",	"1239  427",	"1409  429",	"1539  431",	"1709  433",	"1839  435",	"2009  437",	"2139  439",	"2309  441",	],
[	"san mateo",	"0942  423",	"1031  801",	"1112  425",	"1242  427",	"1412  429",	"1542  431",	"1712  433",	"1801  803",	"1842  435",	"2012  437",	"2142  439",	"2312  441",	],
[	"burlingame",	"0946  423",	"1116  425",	"1246  427",	"1416  429",	"1546  431",	"1716  433",	"1846  435",	"2016  437",	"2146  439",	"2316  441",	],
[	"broadway",	"0950  423",	"1120  425",	"1250  427",	"1420  429",	"1550  431",	"1720  433",	"1850  435",	"2020  437",	"2150  439",	"2320  441",	],
[	"millbrae",	"0953  423",	"1038  801",	"1123  425",	"1253  427",	"1423  429",	"1553  431",	"1723  433",	"1808  803",	"1853  435",	"2023  437",	"2153  439",	"2323  441",	],
[	"san bruno",	"0958  423",	"1128  425",	"1258  427",	"1428  429",	"1558  431",	"1728  433",	"1858  435",	"2028  437",	"2158  439",	"2328  441",	],
[	"south san francisco",	"1003  423",	"1133  425",	"1303  427",	"1433  429",	"1603  431",	"1733  433",	"1903  435",	"2033  437",	"2203  439",	"2333  441",	],
[	"bayshore",	"1009  423",	"1139  425",	"1309  427",	"1439  429",	"1609  431",	"1739  433",	"1909  435",	"2039  437",	"2209  439",	"2339  441",	],
[	"22nd street",	"1015  423",	"1145  425",	"1315  427",	"1445  429",	"1615  431",	"1745  433",	"1915  435",	"2045  437",	"2215  439",	"2345  441",	],
[	"san francisco",	"1022  423",	"1057  801",	"1152  425",	"1322  427",	"1452  429",	"1622  431",	"1752  433",	"1827  803",	"1922  435",	"2052  437",	"2222  439",	"2352  441",	],
];

var trainArrSouthSat = [
[	"san francisco",	"0807  422",	"0937  424",	"1107  426",	"1204  802",	"1237  428",	"1407  430",	"1537  432",	"1707  434",	"1837  436",	"1934  804",	"2007  438",	"2137  440",	"2251  442",	"1205  444",	],
[	"22nd street",	"0811  422",	"0941  424",	"1111  426",	"1241  428",	"1411  430",	"1541  432",	"1711  434",	"1841  436",	"2011  438",	"2141  440",	"2255  442",	"1210  444",	],
[	"bayshore",	"0818  422",	"0948  424",	"1118  426",	"1248  428",	"1418  430",	"1548  432",	"1718  434",	"1848  436",	"2018  438",	"2148  440",	"2302  442",	"1215  444",	],
[	"south san francisco",	"0824  422",	"0954  424",	"1124  426",	"1254  428",	"1424  430",	"1554  432",	"1724  434",	"1854  436",	"2024  438",	"2154  440",	"2308  442",	"1221  444",	],
[	"san bruno",	"0830  422",	"1000  424",	"1130  426",	"1300  428",	"1430  430",	"1600  432",	"1730  434",	"1900  436",	"2030  438",	"2200  440",	"2313  442",	"1225  444",	],
[	"millbrae",	"0834  422",	"1004  424",	"1134  426",	"1219  802",	"1304  428",	"1434  430",	"1604  432",	"1734  434",	"1904  436",	"1949  804",	"2034  438",	"2204  440",	"2318  442",	"1229  444",	],
[	"broadway",	"0838  422",	"1008  424",	"1138  426",	"1308  428",	"1438  430",	"1608  432",	"1738  434",	"1908  436",	"2038  438",	"2208  440",	"2322  442",	"1233  444",	],
[	"burlingame",	"0841  422",	"1011  424",	"1141  426",	"1311  428",	"1441  430",	"1611  432",	"1741  434",	"1911  436",	"2041  438",	"2211  440",	"2325  442",	"1235  444",	],
[	"san mateo",	"0845  422",	"1015  424",	"1145  426",	"1226  802",	"1315  428",	"1445  430",	"1615  432",	"1745  434",	"1915  436",	"1956  804",	"2045  438",	"2215  440",	"2329  442",	"1241  444",	],
[	"hayward park",	"0848  422",	"1018  424",	"1148  426",	"1318  428",	"1448  430",	"1618  432",	"1748  434",	"1918  436",	"2048  438",	"2218  440",	"2332  442",	"1244  444",	],
[	"hillsdale",	"0852  422",	"1022  424",	"1152  426",	"1230  802",	"1322  428",	"1452  430",	"1622  432",	"1752  434",	"1922  436",	"2000  804",	"2052  438",	"2222  440",	"2336  442",	"1247  444",	],
[	"belmont",	"0856  422",	"1026  424",	"1156  426",	"1326  428",	"1456  430",	"1626  432",	"1756  434",	"1926  436",	"2056  438",	"2226  440",	"2340  442",	"1250  444",	],
[	"san carlos",	"0859  422",	"1029  424",	"1159  426",	"1329  428",	"1459  430",	"1629  432",	"1759  434",	"1929  436",	"2059  438",	"2229  440",	"2343  442",	"1253  444",	],
[	"redwood city",	"0904  422",	"1034  424",	"1204  426",	"1237  802",	"1334  428",	"1504  430",	"1634  432",	"1804  434",	"1934  436",	"2007  804",	"2104  438",	"2234  440",	"2348  442",	"1259  444",	],
[	"atherton",	"0909  422",	"1039  424",	"1209  426",	"1339  428",	"1509  430",	"1639  432",	"1809  434",	"1939  436",	"2109  438",	"2239  440",	"2353  442",	"1259  444",	],
[	"menlo park",	"0912  422",	"1042  424",	"1212  426",	"1342  428",	"1512  430",	"1642  432",	"1812  434",	"1942  436",	"2112  438",	"2242  440",	"2356  442",	"1259  444",	],
[	"palo alto",	"0916  422",	"1046  424",	"1216  426",	"1244  802",	"1346  428",	"1516  430",	"1646  432",	"1816  434",	"1946  436",	"2014  804",	"2116  438",	"2246  440",	"1200  442",	"1259  444",	],
[	"california ave",	"0920  422",	"1050  424",	"1220  426",	"1350  428",	"1520  430",	"1650  432",	"1820  434",	"1950  436",	"2120  438",	"2250  440",	"1204  442",	"1259  444",	],
[	"san antonio",	"0924  422",	"1054  424",	"1224  426",	"1354  428",	"1524  430",	"1654  432",	"1824  434",	"1954  436",	"2124  438",	"2254  440",	"1208  442",	"1259  444",	],
[	"mountain view",	"0929  422",	"1059  424",	"1229  426",	"1252  802",	"1359  428",	"1529  430",	"1659  432",	"1829  434",	"1959  436",	"2022  804",	"2129  438",	"2259  440",	"1213  442",	"1259  444",	],
[	"sunnyvale",	"0934  422",	"1104  424",	"1234  426",	"1257  802",	"1404  428",	"1534  430",	"1704  432",	"1834  434",	"2004  436",	"2027  804",	"2134  438",	"2304  440",	"1218  442",	"1259  444",	],
[	"lawerence",	"0938  422",	"1108  424",	"1238  426",	"1408  428",	"1538  430",	"1708  432",	"1838  434",	"2008  436",	"2138  438",	"2308  440",	"1222  442",	"1259  444",	],
[	"santa clara",	"0944  422",	"1114  424",	"1244  426",	"1414  428",	"1544  430",	"1714  432",	"1844  434",	"2014  436",	"2144  438",	"2314  440",	"1228  442",	"1259  444",	],
[	"san jose diridon",	"0952  422",	"1122  424",	"1252  426",	"1312  802",	"1422  428",	"1552  430",	"1722  432",	"1852  434",	"2022  436",	"2039  804",	"2152  438",	"2322  440",	"1236  442",	"1259  444",	],
[	"tamien",	"1017  422",	"1147  424",	"1317  426",	"1337  802",	"1447  428",	"1617  430",	"1747  432",	"1917  434",	"2104  804",	"2217  438",	],
];

var trainArrSouthSun = [
[	"san francisco",	"0807  422",	"0937  424",	"1107  426",	"1204  802",	"1237  428",	"1407  430",	"1537  432",	"1707  434",	"1837  436",	"1934  804",	"2007  438",	"2137  440",	],
[	"22nd street",	"0811  422",	"0941  424",	"1111  426",	"1241  428",	"1411  430",	"1541  432",	"1711  434",	"1841  436",	"2011  438",	"2141  440",	],
[	"bayshore",	"0818  422",	"0948  424",	"1118  426",	"1248  428",	"1418  430",	"1548  432",	"1718  434",	"1848  436",	"2018  438",	"2148  440",	],
[	"south san francisco",	"0824  422",	"0954  424",	"1124  426",	"1254  428",	"1424  430",	"1554  432",	"1724  434",	"1854  436",	"2024  438",	"2154  440",	],
[	"san bruno",	"0830  422",	"1000  424",	"1130  426",	"1300  428",	"1430  430",	"1600  432",	"1730  434",	"1900  436",	"2030  438",	"2200  440",	],
[	"millbrae",	"0834  422",	"1004  424",	"1134  426",	"1219  802",	"1304  428",	"1434  430",	"1604  432",	"1734  434",	"1904  436",	"1949  804",	"2034  438",	"2204  440",	],
[	"broadway",	"0838  422",	"1008  424",	"1138  426",	"1308  428",	"1438  430",	"1608  432",	"1738  434",	"1908  436",	"2038  438",	"2208  440",	],
[	"burlingame",	"0841  422",	"1011  424",	"1141  426",	"1311  428",	"1441  430",	"1611  432",	"1741  434",	"1911  436",	"2041  438",	"2211  440",	],
[	"san mateo",	"0845  422",	"1015  424",	"1145  426",	"1226  802",	"1315  428",	"1445  430",	"1615  432",	"1745  434",	"1915  436",	"1956  804",	"2045  438",	"2215  440",	],
[	"hayward park",	"0848  422",	"1018  424",	"1148  426",	"1318  428",	"1448  430",	"1618  432",	"1748  434",	"1918  436",	"2048  438",	"2218  440",	],
[	"hillsdale",	"0852  422",	"1022  424",	"1152  426",	"1230  802",	"1322  428",	"1452  430",	"1622  432",	"1752  434",	"1922  436",	"2000  804",	"2052  438",	"2222  440",	],
[	"belmont",	"0856  422",	"1026  424",	"1156  426",	"1326  428",	"1456  430",	"1626  432",	"1756  434",	"1926  436",	"2056  438",	"2226  440",	],
[	"san carlos",	"0859  422",	"1029  424",	"1159  426",	"1329  428",	"1459  430",	"1629  432",	"1759  434",	"1929  436",	"2059  438",	"2229  440",	],
[	"redwood city",	"0904  422",	"1034  424",	"1204  426",	"1237  802",	"1334  428",	"1504  430",	"1634  432",	"1804  434",	"1934  436",	"2007  804",	"2104  438",	"2234  440",	],
[	"atherton",	"0909  422",	"1039  424",	"1209  426",	"1339  428",	"1509  430",	"1639  432",	"1809  434",	"1939  436",	"2109  438",	"2239  440",	],
[	"menlo park",	"0912  422",	"1042  424",	"1212  426",	"1342  428",	"1512  430",	"1642  432",	"1812  434",	"1942  436",	"2112  438",	"2242  440",	],
[	"palo alto",	"0916  422",	"1046  424",	"1216  426",	"1244  802",	"1346  428",	"1516  430",	"1646  432",	"1816  434",	"1946  436",	"2014  804",	"2116  438",	"2246  440",	],
[	"california ave",	"0920  422",	"1050  424",	"1220  426",	"1350  428",	"1520  430",	"1650  432",	"1820  434",	"1950  436",	"2120  438",	"2250  440",	],
[	"san antonio",	"0924  422",	"1054  424",	"1224  426",	"1354  428",	"1524  430",	"1654  432",	"1824  434",	"1954  436",	"2124  438",	"2254  440",	],
[	"mountain view",	"0929  422",	"1059  424",	"1229  426",	"1252  802",	"1359  428",	"1529  430",	"1659  432",	"1829  434",	"1959  436",	"2022  804",	"2129  438",	"2259  440",	],
[	"sunnyvale",	"0934  422",	"1104  424",	"1234  426",	"1257  802",	"1404  428",	"1534  430",	"1704  432",	"1834  434",	"2004  436",	"2027  804",	"2134  438",	"2304  440",	],
[	"lawerence",	"0938  422",	"1108  424",	"1238  426",	"1408  428",	"1538  430",	"1708  432",	"1838  434",	"2008  436",	"2138  438",	"2308  440",	],
[	"santa clara",	"0944  422",	"1114  424",	"1244  426",	"1414  428",	"1544  430",	"1714  432",	"1844  434",	"2014  436",	"2144  438",	"2314  440",	],
[	"san jose diridon",	"0952  422",	"1122  424",	"1252  426",	"1312  802",	"1422  428",	"1552  430",	"1722  432",	"1852  434",	"2022  436",	"2039  804",	"2152  438",	"2322  440",	],
[	"tamien",	"1017  422",	"1147  424",	"1317  426",	"1337  802",	"1447  428",	"1617  430",	"1747  432",	"1917  434",	"2104  804",	"2217  438",	],
];

//Code for all the intents and handlers
'use strict';
var Alexa = require('alexa-sdk');
var APP_ID = 'amzn1.ask.skill.48853845-5e7a-4619-b8c1-43327e984250';

var handlers = {
    'LaunchRequest': function () {
      this.emit(':ask', welcomeOutput, welcomeReprompt);
    },
    'planCaltrainTrip': function () {
        var filledSlots = delegateSlotCollection.call(this);
        var travelMode = isSlotValid(this.event.request, "travelMode");
        if (travelMode) {
          speechOutput += travelMode;
        } else {
          speechOutput += "You'll go ";
        }
        var fromCityVar = this.event.request.intent.slots.fromCity.value;
        var toCityVar=this.event.request.intent.slots.toCity.value;
        var timeToLeave = this.event.request.intent.slots.departureTime.value;
        var timeToLeaveInt = timeToLeave.replace(/\D/g,'');
        console.log("From city is:  " + fromCityVar + " To city is:  " + toCityVar);
        console.log("The currrent time is: " + getDateTime());
        console.log("The current full time is: " + getDateTimeFull());
        var today = new Date();
        if(today.getDay() == 6 || today.getDay() == 0){
            console.log("Its a weekend");
        }
        else{
            console.log("its a weekday: " + today.getDay());
        }
        if(directionFinder(fromCityVar, toCityVar)){
            if(today.getDay() == 6){
                var allInfoSouthSat = findTrainSouthSat(timeToLeaveInt, fromCityVar, toCityVar);
                this.emit(':tell', allInfoSouthSat);
            }
            else if(today.getDay() == 0){
                var allInfoSouthSun = findTrainSouthSun(timeToLeaveInt, fromCityVar, toCityVar);
                this.emit(':tell', allInfoSouthSun);
            }
            else{
            var allInfoSouth = findTrainSouth(timeToLeaveInt, fromCityVar, toCityVar);
            this.emit(':tell', allInfoSouth);
            }
        }
        else
        {
            if(today.getDay() == 6){
                var allInfoNorthSat = findTrainNorthSat(timeToLeaveInt, fromCityVar, toCityVar);
                this.emit(':tell', allInfoNorthSat);
            }
            else if(today.getDay() == 0){
                var allInfoNorthSun = findTrainNorthSun(timeToLeaveInt, fromCityVar, toCityVar);
                this.emit(':tell', allInfoNorthSun);
            }
            else{
            var allInfoNorth = findTrainNorth(timeToLeaveInt, fromCityVar, toCityVar);
            this.emit(':tell', allInfoNorth);
            }
        }
    },
    'nextCaltrainTrip': function () {
        var filledSlots = delegateSlotCollection.call(this);
        var travelMode = isSlotValid(this.event.request, "travelMode");
        if (travelMode) {
          speechOutput += travelMode;
        } else {
          speechOutput += "You'll go ";
        }
        var fromCityVar = this.event.request.intent.slots.fromCity.value;
        var toCityVar=this.event.request.intent.slots.toCity.value;
        console.log("Full time is: " + getDateTimeFull());
        var timeToLeave = getDateTime();
        //timeToLeave.setHours(timeToLeave.getHours() - 7);
        console.log("Time to leave is " + timeToLeave);
        var timeToLeaveInt = timeToLeave.replace(/\D/g,'');
        var today = new Date();
        if(directionFinder(fromCityVar, toCityVar)){
            if(today.getDay() == 6){
                var allInfoSouthSat = findTrainSouthSat(timeToLeaveInt, fromCityVar, toCityVar);
                this.emit(':tell', allInfoSouthSat);
            }
            else if(today.getDay() == 0){
                var allInfoSouthSun = findTrainSouthSun(timeToLeaveInt, fromCityVar, toCityVar);
                this.emit(':tell', allInfoSouthSun);
            }
            else{
            var allInfoSouth = findTrainSouth(timeToLeaveInt, fromCityVar, toCityVar);
            this.emit(':tell', allInfoSouth);
            }
        }
        else
        {
            if(today.getDay() == 6){
                var allInfoNorthSat = findTrainNorthSat(timeToLeaveInt, fromCityVar, toCityVar);
                this.emit(':tell', allInfoNorthSat);
            }
            else if(today.getDay() == 0){
                var allInfoNorthSun = findTrainNorthSun(timeToLeaveInt, fromCityVar, toCityVar);
                this.emit(':tell', allInfoNorthSun);
            }
            else{
            var allInfoNorth = findTrainNorth(timeToLeaveInt, fromCityVar, toCityVar);
            this.emit(':tell', allInfoNorth);
            }
        }
    },
    'AMAZON.HelpIntent': function () {
        speechOutput = "";
        reprompt = "";
        this.emit(':ask', welcomeReprompt);
    },
    'AMAZON.CancelIntent': function () {
        speechOutput = "";
        this.emit(':tell', speechOutput);
    },
    'AMAZON.StopIntent': function () {
        speechOutput = "";
        this.emit(':tell', speechOutput);
    },
    'SessionEndedRequest': function () {
        var speechOutput = "";
        this.emit(':tell', speechOutput);
    },
};

exports.handler = (event, context) => {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

//Helper Functions
function delegateSlotCollection(){
    if (this.event.request.dialogState === "STARTED") {
      var updatedIntent=this.event.request.intent;
      this.emit(":delegate", updatedIntent);
    } else if (this.event.request.dialogState !== "COMPLETED") {
      this.emit(":delegate");
    } else {
      return this.event.request.intent;
    }
}

function isSlotValid(request, slotName){
        var slot = request.intent.slots[slotName];
        var slotValue;
        if (slot && slot.value) {
            slotValue = slot.value.toLowerCase();
            return slotValue;
        } else {
            return false;
        }
}

function findTrainNorth(departureTimeStr, departingCity, arrivalCity){
    var trainNum = 0;
    var trainStartTime = 0;
    var trainEndTime = 0;
    var actualDepartureTime = 0;
    var departureTime = parseInt(departureTimeStr);
    if(departureTime < 100){
        departureTime *= 100;
    }
    for(var row = 0; row < trainArr.length; row++){
        console.log("List of cities" + trainArr[row][0]);
        if(departingCity.toLowerCase() === trainArr[row][0]){
            var firstDepartureTime = parseInt(trainArr[row][1].substring(0,trainArr[row][1].length-4));
            var lastDepartureTime = parseInt(trainArr[row][trainArr[row].length-1].substring(0,trainArr[row][trainArr[row].length-1].length-4));
            console.log("First departure Time:  " + firstDepartureTime + " last departure time:  " + lastDepartureTime + " requested departure time: " + departureTime);
            if(lastDepartureTime < departureTime || departureTime <= firstDepartureTime){
	            departureTime = trainArr[row][1].substring(0,trainArr[row][1].length-4);
	            trainNum = trainArr[row][1].substring(trainArr[row][1].length-3);
	            //console.log(“Train number chosen is:  ” + trainNum);
	            var tempTrainArr1 = eval("train"+trainNum);
	            for(var k = 0; k < tempTrainArr1.length; k++){
                    var tempToCity = tempTrainArr1[k].substring(0, tempTrainArr1[k].length-6);
                    if(arrivalCity.toLowerCase() === tempToCity.toLowerCase()){
                        var tempToCity2Time = tempTrainArr1[k].substring(tempTrainArr1[k].length-5);
                        var tempTimeOneStr = trainArr[row][1].substring(0, 2);
                        var tempTimeOneStr2 = trainArr[row][1].substring(2, 4);
                        return ("At " + tempTimeOneStr +":" + tempTimeOneStr2 + ", train, " + trainNum + ", departs from "
                            + departingCity + " and will reach " + arrivalCity + " at " + tempToCity2Time);
                        }
                    }
                }
            for(var m = 1; m < trainArr[row].length; m++){
                var tempTimeOne = parseInt(trainArr[row][m].substring(0, trainArr[row][m].length-4))
                if(departureTime <= tempTimeOne){
                    trainNum = trainArr[row][m].substring(trainArr[row][m].length-3);
                    //console.log("Train number is " + trainNum);
                    console.log(trainNum);
                    //var tempTrainArr2 = trainDataPicker(trainNum);
                    var tempTrainArr2 = eval("train"+trainNum);
                    for(var j = 0; j < tempTrainArr2.length; j++){
                        var tempToCity2 = tempTrainArr2[j].substring(0, tempTrainArr2[j].length-6);
                        if(arrivalCity.toLowerCase() === tempToCity2.toLowerCase()){
                            var tempToCity2Time = tempTrainArr2[j].substring(tempTrainArr2[j].length-5);
                            var tempTimeOneStr = trainArr[row][m].substring(0, 2);
                            var tempTimeOneStr2 = trainArr[row][m].substring(2, 4);
                            return ("At " + tempTimeOneStr +":" + tempTimeOneStr2 + ", train, " + trainNum + ", departs from "
                                + departingCity + " and will reach " + arrivalCity + " at " + tempToCity2Time);
                            }
                        }
                    }
                }
                return ("There are not trains from these two locations during the week");
            }
        }
        return("my circuits are fried please try again later");
    };

function findTrainSouth(departureTimeStr, departingCity, arrivalCity){
    var trainNum = 0;
    var trainStartTime = 0;
    var trainEndTime = 0;
    var actualDepartureTime = 0;
    var departureTime = parseInt(departureTimeStr);
    if(departureTime < 100){
        departureTime *= 100;
    }
    for(var row = 0; row < trainArrSouth.length; row++){
        console.log("List of cities" + trainArrSouth[row][0]);
        if(departingCity.toLowerCase() === trainArrSouth[row][0]){
            var firstDepartureTime = parseInt(trainArrSouth[row][1].substring(0,trainArrSouth[row][1].length-4));
            var lastDepartureTime = parseInt(trainArrSouth[row][trainArrSouth[row].length-1].substring(0,trainArrSouth[row][trainArrSouth[row].length-1].length-4));
            console.log("First departure Time:  " + firstDepartureTime + " last departure time:  " + lastDepartureTime + " requested departure time: " + departureTime);
            if(lastDepartureTime < departureTime || departureTime <= firstDepartureTime){
	            departureTime = trainArrSouth[row][1].substring(0,trainArrSouth[row][1].length-4);
	            trainNum = trainArrSouth[row][1].substring(trainArrSouth[row][1].length-3);
	            //console.log(“Train number chosen is:  ” + trainNum);
	            var temptrainArrSouth1 = eval("train"+trainNum);
	            for(var k = 0; k < temptrainArrSouth1.length; k++){
                    var tempToCity = temptrainArrSouth1[k].substring(0, temptrainArrSouth1[k].length-6);
                    if(arrivalCity.toLowerCase() === tempToCity.toLowerCase()){
                        var tempToCity2Time = temptrainArrSouth1[k].substring(temptrainArrSouth1[k].length-5);
                        var tempTimeOneStr = trainArrSouth[row][1].substring(0, 2);
                        var tempTimeOneStr2 = trainArrSouth[row][1].substring(2, 4);
                        return ("At " + tempTimeOneStr +":" + tempTimeOneStr2 + ", train, " + trainNum + ", departs from "
                            + departingCity + " and will reach " + arrivalCity + " at " + tempToCity2Time);
                        }
                    }
                }
            for(var m = 1; m < trainArrSouth[row].length; m++){
                var tempTimeOne = parseInt(trainArrSouth[row][m].substring(0, trainArrSouth[row][m].length-4))
                if(departureTime <= tempTimeOne){
                    trainNum = trainArrSouth[row][m].substring(trainArrSouth[row][m].length-3);
                    //console.log("Train number is " + trainNum);
                    console.log(trainNum);
                    var temptrainArrSouth2 = eval("train"+trainNum);
                    for(var j = 0; j < temptrainArrSouth2.length; j++){
                        var tempToCity2 = temptrainArrSouth2[j].substring(0, temptrainArrSouth2[j].length-6);
                        if(arrivalCity.toLowerCase() === tempToCity2.toLowerCase()){
                            var tempToCity2Time = temptrainArrSouth2[j].substring(temptrainArrSouth2[j].length-5);
                            var tempTimeOneStr = trainArrSouth[row][m].substring(0, 2);
                            var tempTimeOneStr2 = trainArrSouth[row][m].substring(2, 4);
                            return ("At " + tempTimeOneStr +":" + tempTimeOneStr2 + ", train, " + trainNum + ", departs from "
                                + departingCity + " and will reach " + arrivalCity + " at " + tempToCity2Time);
                            }
                        }
                    }
                }
                return ("There are not trains from these two locations during the week");
            }
        }
        return("my circuits are fried please try again later");
    };

    function findTrainNorthSat(departureTimeStr, departingCity, arrivalCity){
    var trainNum = 0;
    var trainStartTime = 0;
    var trainEndTime = 0;
    var actualDepartureTime = 0;
    var departureTime = parseInt(departureTimeStr);
    if(departureTime < 100){
        departureTime *= 100;
    }
    for(var row = 0; row < trainArrNorthSat.length; row++){
        console.log("List of cities" + trainArrNorthSat[row][0]);
        if(departingCity.toLowerCase() === trainArrNorthSat[row][0]){
            var firstDepartureTime = parseInt(trainArrNorthSat[row][1].substring(0,trainArrNorthSat[row][1].length-4));
            var lastDepartureTime = parseInt(trainArrNorthSat[row][trainArrNorthSat[row].length-1].substring(0,trainArrNorthSat[row][trainArrNorthSat[row].length-1].length-4));
            console.log("First departure Time:  " + firstDepartureTime + " last departure time:  " + lastDepartureTime + " requested departure time: " + departureTime);
            if(lastDepartureTime < departureTime || departureTime <= firstDepartureTime){
	            departureTime = trainArrNorthSat[row][1].substring(0,trainArrNorthSat[row][1].length-4);
	            trainNum = trainArrNorthSat[row][1].substring(trainArrNorthSat[row][1].length-3);
	            //console.log(“Train number chosen is:  ” + trainNum);
	            var temptrainArrNorthSat1 = eval("train"+trainNum);
	            for(var k = 0; k < temptrainArrNorthSat1.length; k++){
                    var tempToCity = temptrainArrNorthSat1[k].substring(0, temptrainArrNorthSat1[k].length-6);
                    if(arrivalCity.toLowerCase() === tempToCity.toLowerCase()){
                        var tempToCity2Time = temptrainArrNorthSat1[k].substring(temptrainArrNorthSat1[k].length-5);
                        var tempTimeOneStr = trainArrNorthSat[row][1].substring(0, 2);
                        var tempTimeOneStr2 = trainArrNorthSat[row][1].substring(2, 4);
                        return ("At " + tempTimeOneStr +":" + tempTimeOneStr2 + ", train, " + trainNum + ", departs from "
                            + departingCity + " and will reach " + arrivalCity + " at " + tempToCity2Time);
                        }
                    }
                }
            for(var m = 1; m < trainArrNorthSat[row].length; m++){
                var tempTimeOne = parseInt(trainArrNorthSat[row][m].substring(0, trainArrNorthSat[row][m].length-4))
                if(departureTime <= tempTimeOne){
                    trainNum = trainArrNorthSat[row][m].substring(trainArrNorthSat[row][m].length-3);
                    //console.log("Train number is " + trainNum);
                    console.log(trainNum);
                    var temptrainArrNorthSat2 = eval("train"+trainNum);
                    for(var j = 0; j < temptrainArrNorthSat2.length; j++){
                        var tempToCity2 = temptrainArrNorthSat2[j].substring(0, temptrainArrNorthSat2[j].length-6);
                        if(arrivalCity.toLowerCase() === tempToCity2.toLowerCase()){
                            var tempToCity2Time = temptrainArrNorthSat2[j].substring(temptrainArrNorthSat2[j].length-5);
                            var tempTimeOneStr = trainArrNorthSat[row][m].substring(0, 2);
                            var tempTimeOneStr2 = trainArrNorthSat[row][m].substring(2, 4);
                            return ("At " + tempTimeOneStr +":" + tempTimeOneStr2 + ", train, " + trainNum + ", departs from "
                                + departingCity + " and will reach " + arrivalCity + " at " + tempToCity2Time);
                            }
                        }
                    }
                }
                return ("There are not trains from these two locations during the weekend");
            }
        }
        return("my circuits are fried please try again later");
    };

    function findTrainNorthSun(departureTimeStr, departingCity, arrivalCity){
    var trainNum = 0;
    var trainStartTime = 0;
    var trainEndTime = 0;
    var actualDepartureTime = 0;
    var departureTime = parseInt(departureTimeStr);
    if(departureTime < 100){
        departureTime *= 100;
    }
    for(var row = 0; row < trainArrNorthSun.length; row++){
        console.log("List of cities" + trainArrNorthSun[row][0]);
        if(departingCity.toLowerCase() === trainArrNorthSun[row][0]){
            var firstDepartureTime = parseInt(trainArrNorthSun[row][1].substring(0,trainArrNorthSun[row][1].length-4));
            var lastDepartureTime = parseInt(trainArrNorthSun[row][trainArrNorthSun[row].length-1].substring(0,trainArrNorthSun[row][trainArrNorthSun[row].length-1].length-4));
            console.log("First departure Time:  " + firstDepartureTime + " last departure time:  " + lastDepartureTime + " requested departure time: " + departureTime);
            if(lastDepartureTime < departureTime || departureTime <= firstDepartureTime){
	            departureTime = trainArrNorthSun[row][1].substring(0,trainArrNorthSun[row][1].length-4);
	            trainNum = trainArrNorthSun[row][1].substring(trainArrNorthSun[row][1].length-3);
	            //console.log(“Train number chosen is:  ” + trainNum);
	            console.log("train number chosen is:" + trainNum);
	            var temptrainArrNorthSun1 = eval("train"+trainNum);
	            for(var k = 0; k < temptrainArrNorthSun1.length; k++){
                    var tempToCity = temptrainArrNorthSun1[k].substring(0, temptrainArrNorthSun1[k].length-6);
                    if(arrivalCity.toLowerCase() === tempToCity.toLowerCase()){
                        var tempToCity2Time = temptrainArrNorthSun1[k].substring(temptrainArrNorthSun1[k].length-5);
                        var tempTimeOneStr = trainArrNorthSun[row][1].substring(0, 2);
                        var tempTimeOneStr2 = trainArrNorthSun[row][1].substring(2, 4);
                        return ("At " + tempTimeOneStr +":" + tempTimeOneStr2 + ", train, " + trainNum + ", departs from "
                            + departingCity + " and will reach " + arrivalCity + " at " + tempToCity2Time);
                        }
                    }
                }
            for(var m = 1; m < trainArrNorthSun[row].length; m++){
                var tempTimeOne = parseInt(trainArrNorthSun[row][m].substring(0, trainArrNorthSun[row][m].length-4))
                if(departureTime <= tempTimeOne){
                    trainNum = trainArrNorthSun[row][m].substring(trainArrNorthSun[row][m].length-3);
                    //console.log("Train number is " + trainNum);
                    console.log(trainNum);
                    var temptrainArrNorthSun2 = eval("train"+trainNum);
                    for(var j = 0; j < temptrainArrNorthSun2.length; j++){
                        var tempToCity2 = temptrainArrNorthSun2[j].substring(0, temptrainArrNorthSun2[j].length-6);
                        if(arrivalCity.toLowerCase() === tempToCity2.toLowerCase()){
                            var tempToCity2Time = temptrainArrNorthSun2[j].substring(temptrainArrNorthSun2[j].length-5);
                            var tempTimeOneStr = trainArrNorthSun[row][m].substring(0, 2);
                            var tempTimeOneStr2 = trainArrNorthSun[row][m].substring(2, 4);
                            return ("At " + tempTimeOneStr +":" + tempTimeOneStr2 + ", train, " + trainNum + ", departs from "
                                + departingCity + " and will reach " + arrivalCity + " at " + tempToCity2Time);
                            }
                        }
                    }
                }
                return ("There are not trains from these two locations during the weekend");
            }
        }
        return("my circuits are fried please try again later");
    };

    function findTrainSouthSat(departureTimeStr, departingCity, arrivalCity){
    var trainNum = 0;
    var trainStartTime = 0;
    var trainEndTime = 0;
    var actualDepartureTime = 0;
    var departureTime = parseInt(departureTimeStr);
    if(departureTime < 100){
        departureTime *= 100;
    }
    for(var row = 0; row < trainArrSouthSat.length; row++){
        console.log("List of cities" + trainArrSouthSat[row][0]);
        if(departingCity.toLowerCase() === trainArrSouthSat[row][0]){
            var firstDepartureTime = parseInt(trainArrSouthSat[row][1].substring(0,trainArrSouthSat[row][1].length-4));
            var lastDepartureTime = parseInt(trainArrSouthSat[row][trainArrSouthSat[row].length-1].substring(0,trainArrSouthSat[row][trainArrSouthSat[row].length-1].length-4));
            console.log("First departure Time:  " + firstDepartureTime + " last departure time:  " + lastDepartureTime + " requested departure time: " + departureTime);
            if(lastDepartureTime < departureTime || departureTime <= firstDepartureTime){
	            departureTime = trainArrSouthSat[row][1].substring(0,trainArrSouthSat[row][1].length-4);
	            trainNum = trainArrSouthSat[row][1].substring(trainArrSouthSat[row][1].length-3);
	            //console.log(“Train number chosen is:  ” + trainNum);
	            var temptrainArrSouthSat1 = eval("train"+trainNum);
	            for(var k = 0; k < temptrainArrSouthSat1.length; k++){
                    var tempToCity = temptrainArrSouthSat1[k].substring(0, temptrainArrSouthSat1[k].length-6);
                    if(arrivalCity.toLowerCase() === tempToCity.toLowerCase()){
                        var tempToCity2Time = temptrainArrSouthSat1[k].substring(temptrainArrSouthSat1[k].length-5);
                        var tempTimeOneStr = trainArrSouthSat[row][1].substring(0, 2);
                        var tempTimeOneStr2 = trainArrSouthSat[row][1].substring(2, 4);
                        return ("At " + tempTimeOneStr +":" + tempTimeOneStr2 + ", train, " + trainNum + ", departs from "
                            + departingCity + " and will reach " + arrivalCity + " at " + tempToCity2Time);
                        }
                    }
                }
            for(var m = 1; m < trainArrSouthSat[row].length; m++){
                var tempTimeOne = parseInt(trainArrSouthSat[row][m].substring(0, trainArrSouthSat[row][m].length-4))
                if(departureTime <= tempTimeOne){
                    trainNum = trainArrSouthSat[row][m].substring(trainArrSouthSat[row][m].length-3);
                    //console.log("Train number is " + trainNum);
                    console.log(trainNum);
                    var temptrainArrSouthSat2 = eval("train"+trainNum);
                    for(var j = 0; j < temptrainArrSouthSat2.length; j++){
                        var tempToCity2 = temptrainArrSouthSat2[j].substring(0, temptrainArrSouthSat2[j].length-6);
                        if(arrivalCity.toLowerCase() === tempToCity2.toLowerCase()){
                            var tempToCity2Time = temptrainArrSouthSat2[j].substring(temptrainArrSouthSat2[j].length-5);
                            var tempTimeOneStr = trainArrSouthSat[row][m].substring(0, 2);
                            var tempTimeOneStr2 = trainArrSouthSat[row][m].substring(2, 4);
                            return ("At " + tempTimeOneStr +":" + tempTimeOneStr2 + ", train, " + trainNum + ", departs from "
                                + departingCity + " and will reach " + arrivalCity + " at " + tempToCity2Time);
                            }
                        }
                    }
                }
                return ("There are not trains from these two locations during the weekend");
            }
        }
        return("my circuits are fried please try again later");
    };

    function findTrainSouthSun(departureTimeStr, departingCity, arrivalCity){
    var trainNum = 0;
    var trainStartTime = 0;
    var trainEndTime = 0;
    var actualDepartureTime = 0;
    var departureTime = parseInt(departureTimeStr);
    if(departureTime < 100){
        departureTime *= 100;
    }
    for(var row = 0; row < trainArrSouthSun.length; row++){
        console.log("List of cities" + trainArrSouthSun[row][0]);
        if(departingCity.toLowerCase() === trainArrSouthSun[row][0]){
            var firstDepartureTime = parseInt(trainArrSouthSun[row][1].substring(0,trainArrSouthSun[row][1].length-4));
            var lastDepartureTime = parseInt(trainArrSouthSun[row][trainArrSouthSun[row].length-1].substring(0,trainArrSouthSun[row][trainArrSouthSun[row].length-1].length-4));
            console.log("First departure Time:  " + firstDepartureTime + " last departure time:  " + lastDepartureTime + " requested departure time: " + departureTime);
            if(lastDepartureTime < departureTime || departureTime <= firstDepartureTime){
	            departureTime = trainArrSouthSun[row][1].substring(0,trainArrSouthSun[row][1].length-4);
	            trainNum = trainArrSouthSun[row][1].substring(trainArrSouthSun[row][1].length-3);
	            //console.log(“Train number chosen is:  ” + trainNum);
	            var temptrainArrSouthSun1 = eval("train"+trainNum);
	            for(var k = 0; k < temptrainArrSouthSun1.length; k++){
                    var tempToCity = temptrainArrSouthSun1[k].substring(0, temptrainArrSouthSun1[k].length-6);
                    if(arrivalCity.toLowerCase() === tempToCity.toLowerCase()){
                        var tempToCity2Time = temptrainArrSouthSun1[k].substring(temptrainArrSouthSun1[k].length-5);
                        var tempTimeOneStr = trainArrSouthSun[row][1].substring(0, 2);
                        var tempTimeOneStr2 = trainArrSouthSun[row][1].substring(2, 4);
                        return ("At " + tempTimeOneStr +":" + tempTimeOneStr2 + ", train, " + trainNum + ", departs from "
                            + departingCity + " and will reach " + arrivalCity + " at " + tempToCity2Time);
                        }
                    }
                }
            for(var m = 1; m < trainArrSouthSun[row].length; m++){
                var tempTimeOne = parseInt(trainArrSouthSun[row][m].substring(0, trainArrSouthSun[row][m].length-4))
                if(departureTime <= tempTimeOne){
                    trainNum = trainArrSouthSun[row][m].substring(trainArrSouthSun[row][m].length-3);
                    //console.log("Train number is " + trainNum);
                    console.log(trainNum);
                    var temptrainArrSouthSun2 = eval("train"+trainNum);
                    for(var j = 0; j < temptrainArrSouthSun2.length; j++){
                        var tempToCity2 = temptrainArrSouthSun2[j].substring(0, temptrainArrSouthSun2[j].length-6);
                        if(arrivalCity.toLowerCase() === tempToCity2.toLowerCase()){
                            var tempToCity2Time = temptrainArrSouthSun2[j].substring(temptrainArrSouthSun2[j].length-5);
                            var tempTimeOneStr = trainArrSouthSun[row][m].substring(0, 2);
                            var tempTimeOneStr2 = trainArrSouthSun[row][m].substring(2, 4);
                            return ("At " + tempTimeOneStr +":" + tempTimeOneStr2 + ", train, " + trainNum + ", departs from "
                                + departingCity + " and will reach " + arrivalCity + " at " + tempToCity2Time);
                            }
                        }
                    }
                }
                return ("There are not trains from these two locations during the weekend");
            }
        }
        return("my circuits are fried please try again later");
    };


function getDateTime() {

    var date = new Date();
    date.setHours(date.getHours()-7);
    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    return hour + ":" + min;
};

function getDateTimeFull() {

    var date = new Date();
    date.setHours(date.getHours()-7);
    //var hour = date.getHours()-7;
    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();

    day = (day < 10 ? "0" : "") + day;

    return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;
};

function directionFinder(startCity, endCity){
    var counterStart;
    var counterEnd;
    for(var i = 0; i < allStopsList.length; i++){
        if(startCity.toLowerCase() === allStopsList[i]){
            counterStart = i;
        }
        if(endCity.toLowerCase() === allStopsList[i]){
            counterEnd = i;
        }
    }
    if(counterStart > counterEnd){
        console.log("This train is going Southbound");
        return true;
    }
    else{
        console.log("This train is going Northbound");
        return false;
    }
};
