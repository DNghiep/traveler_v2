const data = [
  {
    _id: 56110,
    by: "Train",
    name: "Kelley Estrada",
    from: "Tonopah",
    to: "Ernstville",
    date_go: "16-01-2019",
    date_back: "18-04-2019",
    status: "Pending",
    price: 846142
  },
  {
    _id: 40169,
    by: "Car",
    name: "Karen Vargas",
    from: "Tooleville",
    to: "Knowlton",
    date_go: "31-03-2019",
    date_back: "26-04-2019",
    status: "Pending",
    price: 28803
  },
  {
    _id: 38783,
    by: "Car",
    name: "Lidia Barker",
    from: "Twilight",
    to: "Aberdeen",
    date_go: "13-04-2019",
    date_back: "20-04-2019",
    status: "Cancelled",
    price: 577698
  },
  {
    _id: 33919,
    by: "Plane",
    name: "Preston Dalton",
    from: "Weogufka",
    to: "Bangor",
    date_go: "05-04-2019",
    date_back: "17-04-2019",
    status: "Pending",
    price: 650934
  },
  {
    _id: 97308,
    by: "Car",
    name: "Dean Mcdowell",
    from: "Volta",
    to: "Islandia",
    date_go: "28-01-2019",
    date_back: "29-04-2019",
    status: "Done",
    price: 905717
  },
  {
    _id: 83547,
    by: "Plane",
    name: "Singleton Petty",
    from: "Canoochee",
    to: "Masthope",
    date_go: "25-04-2019",
    date_back: "15-04-2019",
    status: "Pending",
    price: 674557
  },
  {
    _id: 18911,
    by: "Plane",
    name: "Parsons Coleman",
    from: "Baden",
    to: "Dixie",
    date_go: "20-04-2019",
    date_back: "21-04-2019",
    status: "Cancelled",
    price: 265633
  },
  {
    _id: 82400,
    by: "Plane",
    name: "Angie Whitney",
    from: "Takilma",
    to: "Sultana",
    date_go: "11-01-2019",
    date_back: "12-04-2019",
    status: "Cancelled",
    price: 430331
  },
  {
    _id: 66164,
    by: "Car",
    name: "Clarke Hahn",
    from: "Alderpoint",
    to: "Richford",
    date_go: "23-03-2019",
    date_back: "13-04-2019",
    status: "Cancelled",
    price: 36344
  },
  {
    _id: 79298,
    by: "Plane",
    name: "Banks Bass",
    from: "Canby",
    to: "Omar",
    date_go: "14-02-2019",
    date_back: "16-04-2019",
    status: "Done",
    price: 243882
  },
  {
    _id: 13154,
    by: "Plane",
    name: "Joy Carrillo",
    from: "Emison",
    to: "Farmers",
    date_go: "12-01-2019",
    date_back: "29-04-2019",
    status: "Pending",
    price: 734789
  },
  {
    _id: 20361,
    by: "Plane",
    name: "Cherry Clayton",
    from: "Carrsville",
    to: "Graniteville",
    date_go: "21-01-2019",
    date_back: "25-04-2019",
    status: "Cancelled",
    price: 726715
  },
  {
    _id: 96922,
    by: "Plane",
    name: "Anthony Clarke",
    from: "Foxworth",
    to: "Kylertown",
    date_go: "28-04-2019",
    date_back: "10-04-2019",
    status: "Pending",
    price: 728923
  },
  {
    _id: 13077,
    by: "Plane",
    name: "Cotton Villarreal",
    from: "Crawfordsville",
    to: "Florence",
    date_go: "03-04-2019",
    date_back: "25-04-2019",
    status: "Done",
    price: 943089
  },
  {
    _id: 37416,
    by: "Plane",
    name: "Gay Burns",
    from: "Machias",
    to: "Mahtowa",
    date_go: "18-03-2019",
    date_back: "22-04-2019",
    status: "Cancelled",
    price: 872548
  },
  {
    _id: 62298,
    by: "Plane",
    name: "Terra Lara",
    from: "Loomis",
    to: "Seymour",
    date_go: "13-02-2019",
    date_back: "28-04-2019",
    status: "Pending",
    price: 166485
  },
  {
    _id: 27975,
    by: "Train",
    name: "Valarie Oneil",
    from: "Albrightsville",
    to: "Belfair",
    date_go: "06-03-2019",
    date_back: "12-04-2019",
    status: "Done",
    price: 498006
  },
  {
    _id: 2864,
    by: "Train",
    name: "Bette Tucker",
    from: "Grazierville",
    to: "Shawmut",
    date_go: "17-02-2019",
    date_back: "23-04-2019",
    status: "Pending",
    price: 827337
  },
  {
    _id: 34088,
    by: "Car",
    name: "Tia Frye",
    from: "Kidder",
    to: "Montura",
    date_go: "20-02-2019",
    date_back: "12-04-2019",
    status: "Cancelled",
    price: 347888
  },
  {
    _id: 18894,
    by: "Train",
    name: "Leta Orr",
    from: "Glidden",
    to: "Hoehne",
    date_go: "06-04-2019",
    date_back: "25-04-2019",
    status: "Pending",
    price: 863913
  },
  {
    _id: 68897,
    by: "Plane",
    name: "Kirk Prince",
    from: "Santel",
    to: "Iberia",
    date_go: "19-04-2019",
    date_back: "19-04-2019",
    status: "Done",
    price: 366649
  },
  {
    _id: 10151,
    by: "Train",
    name: "Jaclyn Fowler",
    from: "Terlingua",
    to: "Bentonville",
    date_go: "15-04-2019",
    date_back: "11-04-2019",
    status: "Done",
    price: 29716
  },
  {
    _id: 4731,
    by: "Train",
    name: "Velazquez Duran",
    from: "Sylvanite",
    to: "Swartzville",
    date_go: "21-04-2019",
    date_back: "12-04-2019",
    status: "Cancelled",
    price: 850542
  },
  {
    _id: 94476,
    by: "Train",
    name: "Patterson Glenn",
    from: "Springville",
    to: "Fresno",
    date_go: "02-04-2019",
    date_back: "21-04-2019",
    status: "Done",
    price: 24992
  },
  {
    _id: 20461,
    by: "Car",
    name: "Newman Young",
    from: "Dexter",
    to: "Osage",
    date_go: "30-04-2019",
    date_back: "18-04-2019",
    status: "Done",
    price: 691876
  },
  {
    _id: 20806,
    by: "Plane",
    name: "Cornelia Higgins",
    from: "Keller",
    to: "Coalmont",
    date_go: "13-04-2019",
    date_back: "27-04-2019",
    status: "Done",
    price: 990332
  },
  {
    _id: 23736,
    by: "Car",
    name: "Price Jacobs",
    from: "Templeton",
    to: "Winfred",
    date_go: "13-02-2019",
    date_back: "16-04-2019",
    status: "Pending",
    price: 983049
  },
  {
    _id: 23569,
    by: "Car",
    name: "Reyna Paul",
    from: "Martinsville",
    to: "Witmer",
    date_go: "19-04-2019",
    date_back: "23-04-2019",
    status: "Pending",
    price: 61523
  },
  {
    _id: 98361,
    by: "Train",
    name: "Johns Grant",
    from: "Mulberry",
    to: "Fairmount",
    date_go: "10-04-2019",
    date_back: "22-04-2019",
    status: "Cancelled",
    price: 801242
  },
  {
    _id: 37753,
    by: "Car",
    name: "Hendrix Shaffer",
    from: "Lumberton",
    to: "Leming",
    date_go: "06-04-2019",
    date_back: "11-04-2019",
    status: "Pending",
    price: 245813
  },
  {
    _id: 8896,
    by: "Train",
    name: "Josie Tanner",
    from: "Rossmore",
    to: "Movico",
    date_go: "14-04-2019",
    date_back: "12-04-2019",
    status: "Done",
    price: 291954
  },
  {
    _id: 46405,
    by: "Plane",
    name: "Gertrude Farley",
    from: "Bellfountain",
    to: "Zeba",
    date_go: "13-02-2019",
    date_back: "14-04-2019",
    status: "Done",
    price: 434445
  },
  {
    _id: 33414,
    by: "Car",
    name: "Elvira Gibson",
    from: "Edgewater",
    to: "Golconda",
    date_go: "19-01-2019",
    date_back: "18-04-2019",
    status: "Pending",
    price: 480849
  },
  {
    _id: 29117,
    by: "Train",
    name: "Contreras Heath",
    from: "Itmann",
    to: "Fruitdale",
    date_go: "05-03-2019",
    date_back: "11-04-2019",
    status: "Done",
    price: 556269
  },
  {
    _id: 62203,
    by: "Car",
    name: "Emma Blevins",
    from: "Bordelonville",
    to: "Emerald",
    date_go: "02-01-2019",
    date_back: "11-04-2019",
    status: "Done",
    price: 547597
  },
  {
    _id: 31905,
    by: "Car",
    name: "Renee Ray",
    from: "Conway",
    to: "Shelby",
    date_go: "27-01-2019",
    date_back: "29-04-2019",
    status: "Done",
    price: 920920
  },
  {
    _id: 98862,
    by: "Plane",
    name: "Hogan Alford",
    from: "Tolu",
    to: "Adelino",
    date_go: "03-01-2019",
    date_back: "30-04-2019",
    status: "Cancelled",
    price: 694693
  },
  {
    _id: 12254,
    by: "Train",
    name: "Johnnie Rivers",
    from: "Shaft",
    to: "Harrodsburg",
    date_go: "25-02-2019",
    date_back: "10-04-2019",
    status: "Done",
    price: 704030
  },
  {
    _id: 61833,
    by: "Plane",
    name: "Stefanie Ruiz",
    from: "Lupton",
    to: "Darrtown",
    date_go: "15-04-2019",
    date_back: "12-04-2019",
    status: "Done",
    price: 414096
  },
  {
    _id: 83492,
    by: "Plane",
    name: "Luann Avery",
    from: "Bentley",
    to: "Waikele",
    date_go: "24-03-2019",
    date_back: "21-04-2019",
    status: "Pending",
    price: 337736
  },
  {
    _id: 71144,
    by: "Plane",
    name: "Guy Neal",
    from: "Mammoth",
    to: "Calpine",
    date_go: "19-02-2019",
    date_back: "25-04-2019",
    status: "Cancelled",
    price: 125314
  },
  {
    _id: 33350,
    by: "Plane",
    name: "Lindsey Valentine",
    from: "Bourg",
    to: "Saddlebrooke",
    date_go: "26-02-2019",
    date_back: "20-04-2019",
    status: "Pending",
    price: 209041
  },
  {
    _id: 16892,
    by: "Train",
    name: "Quinn Parker",
    from: "Lopezo",
    to: "Boyd",
    date_go: "30-03-2019",
    date_back: "10-04-2019",
    status: "Pending",
    price: 489353
  },
  {
    _id: 89575,
    by: "Plane",
    name: "Jackie Rojas",
    from: "Ripley",
    to: "Vandiver",
    date_go: "09-04-2019",
    date_back: "17-04-2019",
    status: "Done",
    price: 592982
  },
  {
    _id: 81885,
    by: "Plane",
    name: "Mitzi Williamson",
    from: "Deltaville",
    to: "Disautel",
    date_go: "17-01-2019",
    date_back: "10-04-2019",
    status: "Pending",
    price: 536102
  },
  {
    _id: 20364,
    by: "Plane",
    name: "Jenkins Graves",
    from: "Wright",
    to: "Longoria",
    date_go: "27-01-2019",
    date_back: "17-04-2019",
    status: "Pending",
    price: 674919
  },
  {
    _id: 57942,
    by: "Train",
    name: "Mabel Kent",
    from: "Gwynn",
    to: "Rivers",
    date_go: "29-03-2019",
    date_back: "17-04-2019",
    status: "Done",
    price: 394793
  },
  {
    _id: 3573,
    by: "Train",
    name: "Michael Moore",
    from: "Lydia",
    to: "Nogal",
    date_go: "22-03-2019",
    date_back: "25-04-2019",
    status: "Done",
    price: 278000
  },
  {
    _id: 64492,
    by: "Train",
    name: "Lillian Ashley",
    from: "Hayden",
    to: "Turah",
    date_go: "04-04-2019",
    date_back: "12-04-2019",
    status: "Pending",
    price: 573434
  },
  {
    _id: 84062,
    by: "Car",
    name: "Watkins Abbott",
    from: "Rodman",
    to: "Barronett",
    date_go: "28-03-2019",
    date_back: "30-04-2019",
    status: "Pending",
    price: 329075
  },
  {
    _id: 88765,
    by: "Car",
    name: "Mullins Fuentes",
    from: "Thatcher",
    to: "Gulf",
    date_go: "07-03-2019",
    date_back: "26-04-2019",
    status: "Done",
    price: 338098
  },
  {
    _id: 69004,
    by: "Plane",
    name: "Shaw Lester",
    from: "Delshire",
    to: "Glenshaw",
    date_go: "03-02-2019",
    date_back: "12-04-2019",
    status: "Cancelled",
    price: 392246
  },
  {
    _id: 86234,
    by: "Train",
    name: "Miriam Navarro",
    from: "Camino",
    to: "Farmington",
    date_go: "03-03-2019",
    date_back: "29-04-2019",
    status: "Pending",
    price: 326734
  },
  {
    _id: 52546,
    by: "Car",
    name: "Aileen Patrick",
    from: "Craig",
    to: "Edenburg",
    date_go: "24-04-2019",
    date_back: "10-04-2019",
    status: "Pending",
    price: 163225
  },
  {
    _id: 73816,
    by: "Plane",
    name: "Gordon Aguirre",
    from: "Emory",
    to: "Crenshaw",
    date_go: "07-02-2019",
    date_back: "29-04-2019",
    status: "Cancelled",
    price: 440499
  },
  {
    _id: 59705,
    by: "Train",
    name: "Woodward Cochran",
    from: "Wescosville",
    to: "Riner",
    date_go: "13-02-2019",
    date_back: "20-04-2019",
    status: "Done",
    price: 395398
  },
  {
    _id: 23149,
    by: "Car",
    name: "Rosemarie Solomon",
    from: "Cliffside",
    to: "Dalton",
    date_go: "12-02-2019",
    date_back: "28-04-2019",
    status: "Pending",
    price: 558887
  },
  {
    _id: 51292,
    by: "Plane",
    name: "Jo Cooke",
    from: "Cliff",
    to: "Hollins",
    date_go: "12-02-2019",
    date_back: "19-04-2019",
    status: "Cancelled",
    price: 150950
  },
  {
    _id: 94910,
    by: "Train",
    name: "Leonor Holloway",
    from: "Hardyville",
    to: "Collins",
    date_go: "08-01-2019",
    date_back: "10-04-2019",
    status: "Cancelled",
    price: 677336
  },
  {
    _id: 43112,
    by: "Car",
    name: "Letha Boyle",
    from: "Manitou",
    to: "Clayville",
    date_go: "23-02-2019",
    date_back: "29-04-2019",
    status: "Pending",
    price: 639535
  },
  {
    _id: 41911,
    by: "Car",
    name: "Teri Howard",
    from: "Brogan",
    to: "Accoville",
    date_go: "07-04-2019",
    date_back: "10-04-2019",
    status: "Pending",
    price: 425394
  },
  {
    _id: 60338,
    by: "Car",
    name: "Clara Rosa",
    from: "Hatteras",
    to: "Rockhill",
    date_go: "16-02-2019",
    date_back: "18-04-2019",
    status: "Cancelled",
    price: 982518
  },
  {
    _id: 13033,
    by: "Train",
    name: "Jacklyn Barnes",
    from: "Salunga",
    to: "Barclay",
    date_go: "12-04-2019",
    date_back: "16-04-2019",
    status: "Done",
    price: 529259
  },
  {
    _id: 1459,
    by: "Train",
    name: "Wendy Irwin",
    from: "Eggertsville",
    to: "Shindler",
    date_go: "07-02-2019",
    date_back: "17-04-2019",
    status: "Pending",
    price: 29144
  },
  {
    _id: 59126,
    by: "Plane",
    name: "Carey Everett",
    from: "Tyhee",
    to: "Salvo",
    date_go: "02-03-2019",
    date_back: "19-04-2019",
    status: "Pending",
    price: 257306
  },
  {
    _id: 72013,
    by: "Plane",
    name: "Franks Curtis",
    from: "Blairstown",
    to: "Katonah",
    date_go: "21-04-2019",
    date_back: "27-04-2019",
    status: "Pending",
    price: 603324
  },
  {
    _id: 44196,
    by: "Car",
    name: "Denise Weaver",
    from: "Belgreen",
    to: "Riviera",
    date_go: "09-03-2019",
    date_back: "22-04-2019",
    status: "Cancelled",
    price: 207863
  },
  {
    _id: 89496,
    by: "Train",
    name: "Cooke Slater",
    from: "Laurelton",
    to: "Statenville",
    date_go: "13-01-2019",
    date_back: "13-04-2019",
    status: "Cancelled",
    price: 654673
  },
  {
    _id: 77454,
    by: "Train",
    name: "Fischer Matthews",
    from: "Nipinnawasee",
    to: "Rosedale",
    date_go: "15-03-2019",
    date_back: "27-04-2019",
    status: "Done",
    price: 827745
  },
  {
    _id: 64780,
    by: "Train",
    name: "Melisa Leonard",
    from: "Galesville",
    to: "Westerville",
    date_go: "31-01-2019",
    date_back: "25-04-2019",
    status: "Done",
    price: 444126
  },
  {
    _id: 28217,
    by: "Plane",
    name: "Carpenter Dickson",
    from: "Coventry",
    to: "Titanic",
    date_go: "07-03-2019",
    date_back: "15-04-2019",
    status: "Cancelled",
    price: 824059
  },
  {
    _id: 33546,
    by: "Car",
    name: "Copeland Chavez",
    from: "Benson",
    to: "Cawood",
    date_go: "15-02-2019",
    date_back: "19-04-2019",
    status: "Pending",
    price: 509151
  },
  {
    _id: 55814,
    by: "Plane",
    name: "Kari Clay",
    from: "Blackgum",
    to: "Detroit",
    date_go: "02-01-2019",
    date_back: "17-04-2019",
    status: "Done",
    price: 124054
  },
  {
    _id: 26861,
    by: "Train",
    name: "Carson Hull",
    from: "Zarephath",
    to: "Rosewood",
    date_go: "04-01-2019",
    date_back: "23-04-2019",
    status: "Cancelled",
    price: 991155
  },
  {
    _id: 51043,
    by: "Plane",
    name: "Pansy Dyer",
    from: "Makena",
    to: "Cleary",
    date_go: "27-04-2019",
    date_back: "19-04-2019",
    status: "Done",
    price: 69768
  },
  {
    _id: 35220,
    by: "Plane",
    name: "Donna Torres",
    from: "Keyport",
    to: "Bynum",
    date_go: "25-04-2019",
    date_back: "22-04-2019",
    status: "Cancelled",
    price: 84051
  },
  {
    _id: 68856,
    by: "Car",
    name: "Cecilia Mayer",
    from: "Colton",
    to: "Gardiner",
    date_go: "18-04-2019",
    date_back: "12-04-2019",
    status: "Pending",
    price: 610024
  },
  {
    _id: 62549,
    by: "Train",
    name: "Nona Raymond",
    from: "Munjor",
    to: "Klondike",
    date_go: "04-03-2019",
    date_back: "15-04-2019",
    status: "Done",
    price: 624161
  },
  {
    _id: 5210,
    by: "Train",
    name: "Joyce Reese",
    from: "Marienthal",
    to: "Macdona",
    date_go: "28-01-2019",
    date_back: "27-04-2019",
    status: "Cancelled",
    price: 408548
  },
  {
    _id: 3310,
    by: "Plane",
    name: "Delacruz Franklin",
    from: "Cecilia",
    to: "Wollochet",
    date_go: "11-01-2019",
    date_back: "29-04-2019",
    status: "Cancelled",
    price: 600470
  },
  {
    _id: 25519,
    by: "Car",
    name: "Arnold Johns",
    from: "Nettie",
    to: "Imperial",
    date_go: "29-03-2019",
    date_back: "28-04-2019",
    status: "Done",
    price: 416407
  },
  {
    _id: 66983,
    by: "Plane",
    name: "Frankie Ware",
    from: "Cloverdale",
    to: "Groton",
    date_go: "18-01-2019",
    date_back: "21-04-2019",
    status: "Pending",
    price: 383595
  },
  {
    _id: 39873,
    by: "Train",
    name: "Dodson Ellison",
    from: "Allison",
    to: "Tilden",
    date_go: "31-01-2019",
    date_back: "24-04-2019",
    status: "Pending",
    price: 390141
  },
  {
    _id: 80803,
    by: "Train",
    name: "Cash Aguilar",
    from: "Sena",
    to: "Rosine",
    date_go: "16-02-2019",
    date_back: "17-04-2019",
    status: "Done",
    price: 843622
  },
  {
    _id: 67415,
    by: "Plane",
    name: "Sonya Kaufman",
    from: "Dargan",
    to: "Datil",
    date_go: "29-04-2019",
    date_back: "15-04-2019",
    status: "Pending",
    price: 573859
  },
  {
    _id: 97022,
    by: "Plane",
    name: "Summers Cooley",
    from: "Gilmore",
    to: "Nanafalia",
    date_go: "26-02-2019",
    date_back: "29-04-2019",
    status: "Done",
    price: 389326
  },
  {
    _id: 40415,
    by: "Car",
    name: "Claudette Ortega",
    from: "Maplewood",
    to: "Malott",
    date_go: "31-01-2019",
    date_back: "14-04-2019",
    status: "Done",
    price: 238859
  },
  {
    _id: 39568,
    by: "Train",
    name: "Clarissa Valenzuela",
    from: "Kimmell",
    to: "Libertytown",
    date_go: "15-03-2019",
    date_back: "27-04-2019",
    status: "Cancelled",
    price: 243577
  },
  {
    _id: 26292,
    by: "Plane",
    name: "Adela Hyde",
    from: "Chamberino",
    to: "Garberville",
    date_go: "22-02-2019",
    date_back: "20-04-2019",
    status: "Done",
    price: 576560
  },
  {
    _id: 29441,
    by: "Car",
    name: "Garcia England",
    from: "Bonanza",
    to: "Clay",
    date_go: "22-03-2019",
    date_back: "26-04-2019",
    status: "Cancelled",
    price: 147353
  },
  {
    _id: 71921,
    by: "Train",
    name: "Barry Tyler",
    from: "Fingerville",
    to: "Slovan",
    date_go: "21-04-2019",
    date_back: "11-04-2019",
    status: "Cancelled",
    price: 862308
  },
  {
    _id: 69002,
    by: "Train",
    name: "Buckner Williams",
    from: "Norvelt",
    to: "Vale",
    date_go: "01-04-2019",
    date_back: "11-04-2019",
    status: "Cancelled",
    price: 300411
  },
  {
    _id: 25364,
    by: "Train",
    name: "Johanna Cannon",
    from: "Oneida",
    to: "Whitewater",
    date_go: "19-04-2019",
    date_back: "20-04-2019",
    status: "Done",
    price: 32394
  },
  {
    _id: 47369,
    by: "Plane",
    name: "Hooper Garza",
    from: "Drytown",
    to: "Juarez",
    date_go: "25-01-2019",
    date_back: "10-04-2019",
    status: "Cancelled",
    price: 370103
  },
  {
    _id: 88668,
    by: "Train",
    name: "Beach Huffman",
    from: "Wikieup",
    to: "Chumuckla",
    date_go: "11-02-2019",
    date_back: "24-04-2019",
    status: "Cancelled",
    price: 117635
  },
  {
    _id: 80703,
    by: "Car",
    name: "Meyers Albert",
    from: "Nelson",
    to: "Jardine",
    date_go: "28-03-2019",
    date_back: "11-04-2019",
    status: "Pending",
    price: 233575
  },
  {
    _id: 92116,
    by: "Car",
    name: "Bryan Hebert",
    from: "Geyserville",
    to: "Guilford",
    date_go: "13-04-2019",
    date_back: "10-04-2019",
    status: "Done",
    price: 550063
  },
  {
    _id: 54906,
    by: "Train",
    name: "Lina Malone",
    from: "Lemoyne",
    to: "Ogema",
    date_go: "03-01-2019",
    date_back: "16-04-2019",
    status: "Done",
    price: 124787
  },
  {
    _id: 47972,
    by: "Plane",
    name: "Reese Rutledge",
    from: "Hackneyville",
    to: "Lowell",
    date_go: "02-01-2019",
    date_back: "15-04-2019",
    status: "Done",
    price: 28265
  },
  {
    _id: 43196,
    by: "Car",
    name: "Pruitt Dennis",
    from: "Wacissa",
    to: "Starks",
    date_go: "23-03-2019",
    date_back: "23-04-2019",
    status: "Cancelled",
    price: 948552
  }
];
export default data;