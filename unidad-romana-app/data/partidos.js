const M=(id,year,tournament,date,opponent,home,ur,opp,cards,pending,events,url,extra={})=>({id,year,tournament,date,opponent,home,ur,opp,url,teamCards:{yellow:cards[0],red:cards[1]},pending:{goals:pending[0],yellow:pending[1],red:pending[2]},events:events.map(e=>({type:e[0],player:e[1],confirmed:true})),...extra});

window.UR_DATA={matches:[

M("2018-a-caru",2018,"Apertura","2018-03-17","C.A.R.U.",true,4,0,[1,0],[0,0,0],[["goal","Andres Isais Vaninetti"],["goal","Andres Isais Vaninetti"],["goal","Jose Mohamed"],["goal","Guido Lucas Zamolo"],["yellow","Nicolás Valdez"]],"http://www.lachacrafutbol.com.ar/web/event/unidad-romana-vs-c-a-r-u/"),

M("2018-a-resaca",2018,"Apertura","2018-03-24","Deportivo Resaca",false,2,0,[2,0],[0,0,0],[["goal","Diego Zamolo"],["goal","Guido Lucas Zamolo"],["yellow","Matías Prado"],["yellow","Guido Lucas Zamolo"]],"http://www.lachacrafutbol.com.ar/web/event/deportivo-resaca-vs-unidad-romana/"),

M("2018-a-comodos",2018,"Apertura","2018-03-30","Comodos F.C.",true,1,3,[2,0],[0,0,0],[["goal","Andres Isais Vaninetti"],["yellow","Agustin Bedecarras"],["yellow","Guido Lucas Zamolo"]],"http://www.lachacrafutbol.com.ar/web/event/unidad-romana-vs-comodos-f-c/"),

M("2018-a-tulos",2018,"Apertura",null,"Los Tulos",false,5,1,[1,0],[0,0,0],[["goal","Nicolás Tardella"],["goal","Diego Zamolo"],["goal","Sebastian Stjerne"],["goal","Guido Lucas Zamolo"],["goal","Guido Lucas Zamolo"],["yellow","Ezequiel Alberto De Simone"]],"http://www.lachacrafutbol.com.ar/web/event/los-tulos-vs-unidad-romana/"),

M("2018-a-nuestra-tierra",2018,"Apertura",null,"Nuestra Tierra",true,4,1,[3,0],[0,0,0],[["goal","Andres Isais Vaninetti"],["goal","Sebastian Stjerne"],["goal","Jose Mohamed"],["goal","Jose Mohamed"],["yellow","Nicolás Valdez"],["yellow","Sebastian Kunichek"],["yellow","Matías Prado"]],"http://www.lachacrafutbol.com.ar/web/event/unidad-romana-vs-nuestra-tierra/"),

M("2018-a-lepra",2018,"Apertura",null,"La Lepra",true,1,2,[1,0],[0,0,0],[["goal","Nicolás Tardella"],["yellow","Guido Lucas Zamolo"]],"http://www.lachacrafutbol.com.ar/web/event/unidad-romana-vs-la-lepra/"),

M("2018-a-mimetizarte",2018,"Apertura",null,"Mimetizarte",false,0,2,[1,0],[0,0,0],[["yellow","Nicolás Tardella"]],"http://www.lachacrafutbol.com.ar/web/event/mimetizarte-vs-unidad-romana/"),

M("2018-a-pqtej",2018,"Apertura",null,"Para Que Te Traje",true,4,5,[1,1],[0,0,0],[["goal","Nicolás Valdez"],["goal","Cristian Ebbens"],["goal","Cristian Ebbens"],["goal","Matías Prado"],["yellow","Nicolás Tardella"],["red","Sebastian Kunichek"]],"http://www.lachacrafutbol.com.ar/web/event/unidad-romana-vs-para-que-te-traje/"),

M("2018-a-spice",2018,"Apertura",null,"Spice Boys",false,7,2,[0,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["goal","Guido Lucas Zamolo"],["goal","Guido Lucas Zamolo"],["goal","Jose Mohamed"],["goal","Diego Zamolo"],["goal","Martin Najle"],["goal","Andres Isais Vaninetti"]],"http://www.lachacrafutbol.com.ar/web/event/spice-boys-vs-unidad-romana/"),

M("2018-a-eclecticos",2018,"Apertura",null,"Eclécticos F.C.",false,3,2,[2,0],[0,0,0],[["goal","Diego Zamolo"],["goal","Jose Mohamed"],["goal","Matías Prado"],["yellow","Nicolás Tardella"],["yellow","Marco Stella"]],"http://www.lachacrafutbol.com.ar/web/event/eclecticos-f-c-vs-unidad-romana/"),

M("2018-a-cultural",2018,"Apertura",null,"El Equipo del Canal Cultural",true,2,2,[1,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["goal","Luciano Orcajada"],["yellow","Juan Castelli"]],"http://www.lachacrafutbol.com.ar/web/event/unidad-romana-vs-el-equipo-del-canal-cultural/"),

M("7265",2018,"Clausura","2018-08-25","Deportivo Resaca",false,1,2,[1,0],[0,0,0],[["goal","Sebastian Kunichek"],["yellow","Marco Stella"]],"https://www.lachacrafutbol.com.ar/web/event/7265/"),

M("7270",2018,"Clausura",null,"Carasucias",true,3,0,[4,1],[0,0,0],[["yellow","Cristian Ebbens"],["yellow","Sebastian Stjerne"],["yellow","Sebastian Kunichek"],["yellow","Sebastian Kunichek"],["red","Sebastian Kunichek"]],"https://www.lachacrafutbol.com.ar/web/event/7270/",{administrativeResult:true}),

M("7279",2018,"Clausura",null,"Los Repo",false,1,1,[1,1],[0,0,0],[["goal","Ezequiel Alberto De Simone"],["yellow","Nicolás Tardella"],["red","Matías Prado"]],"https://www.lachacrafutbol.com.ar/web/event/7279/"),

M("7281",2018,"Clausura",null,"Mística",true,4,4,[2,0],[0,0,0],[["goal","Ezequiel Erviti"],["goal","Guido Lucas Zamolo"],["goal","Ezequiel Alberto De Simone"],["goal","Luciano Orcajada"],["yellow","Nicolás Valdez"],["yellow","Cristian Ebbens"]],"https://www.lachacrafutbol.com.ar/web/event/7281/"),

M("7304",2018,"Clausura",null,"Toros FFAA",true,4,0,[1,0],[0,0,0],[["goal","Cristian Ebbens"],["goal","Cristian Ebbens"],["goal","Sebastian Stjerne"],["goal","Ezequiel Erviti"],["yellow","Sebastian Stjerne"]],"https://www.lachacrafutbol.com.ar/web/event/7304/"),

M("7292",2018,"Clausura",null,"C.A.R.U.",false,4,1,[3,0],[0,0,0],[["goal","Nicolás Tardella"],["goal","Nicolás Valdez"],["goal","Diego Zamolo"],["goal","Diego Zamolo"],["yellow","Nicolás Valdez"],["yellow","Cristian Ebbens"],["yellow","Matías Prado"]],"https://www.lachacrafutbol.com.ar/web/event/7292/"),

M("7305",2018,"Clausura",null,"Tortu Style L.V.",false,1,2,[2,1],[0,0,0],[["goal","Guido Lucas Zamolo"],["yellow","Ezequiel Erviti"],["yellow","Ezequiel Erviti"],["red","Ezequiel Erviti"]],"https://www.lachacrafutbol.com.ar/web/event/7305/"),

M("7315",2018,"Clausura",null,"Tres Dedos F.C.",true,2,0,[1,1],[0,0,0],[["goal","Guido Lucas Zamolo"],["goal","Guido Lucas Zamolo"],["yellow","Ezequiel Alberto De Simone"],["red","Ezequiel Alberto De Simone"]],"https://www.lachacrafutbol.com.ar/web/event/7315/"),

M("7318",2018,"Clausura",null,"Cómodos F.C.",false,1,3,[0,0],[0,0,0],[["goal","Ezequiel Erviti"]],"https://www.lachacrafutbol.com.ar/web/event/7318/"),

M("7326",2018,"Clausura",null,"Los Nuñes",true,2,2,[1,0],[0,0,0],[["goal","Cristian Ebbens"],["goal","Ezequiel Erviti"],["yellow","Nicolás Valdez"]],"https://www.lachacrafutbol.com.ar/web/event/7326/"),

M("7337",2018,"Clausura",null,"Mimetizarte",true,4,1,[0,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["goal","Cristian Ebbens"],["goal","Agustin Bedecarras"],["goal","Nicolás Valdez"]],"https://www.lachacrafutbol.com.ar/web/event/7337/"),

M("7331",2018,"Clausura",null,"Deportivo Trifásica",false,2,0,[1,0],[0,0,0],[["goal","Agustin Bedecarras"],["goal","Martin Najle"],["yellow","Guido Lucas Zamolo"]],"https://www.lachacrafutbol.com.ar/web/event/7331/"),

M("8886",2019,"Apertura",null,"Borrachines",false,1,1,[3,1],[0,0,0],[["goal","David Barraza"],["yellow","Marco Stella"],["yellow","Sebastian Stjerne"],["yellow","Sebastian Stjerne"],["red","Sebastian Stjerne"]],"https://www.lachacrafutbol.com.ar/web/event/8886/"),

M("8892",2019,"Apertura","2019-03-30","Cómodos F.C.",true,3,3,[1,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["goal","Jose Mohamed"],["goal","Martin Najle"],["yellow","Diego Zamolo"]],"https://www.lachacrafutbol.com.ar/web/event/8892/"),

M("8899",2019,"Apertura",null,"Pipa",false,0,3,[0,0],[0,0,0],[],"https://www.lachacrafutbol.com.ar/web/event/8899/"),

M("8903",2019,"Apertura",null,"Tercer Tiempo F.C.",true,4,2,[0,1],[0,0,0],[["goal","Guido Lucas Zamolo"],["goal","Guido Lucas Zamolo"],["goal","Guido Lucas Zamolo"],["goal","Nicolás Tardella"],["red","Jose Mohamed"]],"https://www.lachacrafutbol.com.ar/web/event/8903/"),

M("8912",2019,"Apertura",null,"Los Repo",false,2,4,[0,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["goal","Guido Lucas Zamolo"]],"https://www.lachacrafutbol.com.ar/web/event/8912/"),

M("8914",2019,"Apertura",null,"Deportivo Resaca",true,5,4,[3,0],[0,0,0],[["goal","David Barraza"],["goal","Guido Lucas Zamolo"],["goal","Jose Mohamed"],["goal","Marco Stella"],["goal","Nicolás Valdez"],["yellow","Cristian Ebbens"],["yellow","Matías Prado"],["yellow","Nicolás Valdez"]],"https://www.lachacrafutbol.com.ar/web/event/8914/"),

M("8925",2019,"Apertura",null,"Carasucias",false,2,2,[3,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["goal","Jose Mohamed"],["yellow","Guido Lucas Zamolo"],["yellow","Juan Viglio"],["yellow","Sebastian Stjerne"]],"https://www.lachacrafutbol.com.ar/web/event/8925/"),

M("8938",2019,"Apertura",null,"Los Nuñes",false,0,2,[2,0],[0,0,0],[["yellow","Guido Lucas Zamolo"],["yellow","Juan Castelli"]],"https://www.lachacrafutbol.com.ar/web/event/8938/"),

M("8948",2019,"Apertura",null,"C.A.R.U.",true,3,4,[1,0],[0,0,0],[["goal","David Barraza"],["goal","David Barraza"],["goal","Guido Lucas Zamolo"],["yellow","Juan Viglio"]],"https://www.lachacrafutbol.com.ar/web/event/8948/"),

M("8951",2019,"Apertura",null,"Mimetizarte",false,2,4,[1,1],[0,0,0],[["goal","Matías Prado"],["goal","Nicolás Valdez"],["yellow","Ezequiel Alberto De Simone"],["red","Cristian Ebbens"]],"https://www.lachacrafutbol.com.ar/web/event/8951/"),

M("8937",2019,"Apertura",null,"Tortu Style L.V.",true,0,1,[1,0],[0,0,0],[["yellow","Guido Lucas Zamolo"]],"https://www.lachacrafutbol.com.ar/web/event/8937/"),

M("8881",2019,"Apertura",null,"Toros FFAA",true,4,3,[1,0],[0,0,0],[["goal","Diego Zamolo"],["goal","Guido Lucas Zamolo"],["goal","Martin Najle"],["goal","Matías Prado"],["yellow","Nicolás Valdez"]],"https://www.lachacrafutbol.com.ar/web/event/8881/"),

M("10600",2019,"Clausura",null,"Deportivo Resaca",true,3,0,[1,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["goal","Guido Lucas Zamolo"],["goal","Guido Lucas Zamolo"],["yellow","Nicolás Valdez"]],"https://www.lachacrafutbol.com.ar/web/event/10600/"),

M("10613",2019,"Clausura",null,"Toros FFAA",true,1,4,[0,0],[0,0,0],[["goal","Luciano Orcajada"]],"https://www.lachacrafutbol.com.ar/web/event/10613/"),

M("10626",2019,"Clausura",null,"Los Nuñes",false,1,2,[0,0],[0,0,0],[["goal","Guido Lucas Zamolo"]],"https://www.lachacrafutbol.com.ar/web/event/10626/"),

M("10630",2019,"Clausura",null,"Carasucias",true,0,1,[0,0],[0,0,0],[],"https://www.lachacrafutbol.com.ar/web/event/10630/"),

M("10639",2019,"Clausura",null,"Mimetizarte",false,0,2,[2,0],[0,0,0],[["yellow","Juan Castelli"],["yellow","Ezequiel Erviti"]],"https://www.lachacrafutbol.com.ar/web/event/10639/"),

M("10645",2019,"Clausura",null,"Los Repo",true,5,2,[1,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["goal","Guido Lucas Zamolo"],["goal","Guido Lucas Zamolo"],["goal","Jose Mohamed"],["goal","Jose Mohamed"],["yellow","David Barraza"]],"https://www.lachacrafutbol.com.ar/web/event/10645/"),

M("10652",2019,"Clausura",null,"Tercer Tiempo F.C.",false,2,2,[0,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["goal","Jose Mohamed"]],"https://www.lachacrafutbol.com.ar/web/event/10652/"),

M("10660",2019,"Clausura",null,"C.A.R.U.",true,1,3,[0,0],[0,0,0],[["goal","Guido Lucas Zamolo"]],"https://www.lachacrafutbol.com.ar/web/event/10660/"),

M("10665",2019,"Clausura",null,"Sun Fine",true,1,3,[0,0],[0,0,0],[["goal","Luciano Orcajada"]],"https://www.lachacrafutbol.com.ar/web/event/10665/"),

M("10676",2019,"Clausura",null,"Boxer F.C.",false,2,0,[0,0],[0,0,0],[["goal","Luciano Orcajada"],["goal","Nicolás Valdez"]],"https://www.lachacrafutbol.com.ar/web/event/10676/"),

M("10679",2019,"Clausura",null,"Cómodos F.C.",true,2,1,[1,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["goal","Ezequiel Erviti"],["yellow","Martin Najle"]],"https://www.lachacrafutbol.com.ar/web/event/10679/"),

M("10691",2019,"Clausura",null,"Para Que Te Traje",false,0,2,[0,0],[0,0,0],[],"https://www.lachacrafutbol.com.ar/web/event/10691/"),

M("12896",2020,"Apertura","2020-12-12","Fulvencito",null,2,5,[1,0],[0,0,0],[["goal","Cristian Ebbens"],["goal","Nicolás Valdez"],["yellow","Santiago Ibañez"]],"https://www.lachacrafutbol.com.ar/web/event/12896/"),

M("12906",2020,"Apertura","2020-12-19","Cómodos F.C.",null,3,4,[2,0],[0,0,0],[["goal","Adriel Monsalvo"],["goal","Andres Isais Vaninetti"],["goal","Martin Klepalow"],["yellow","Adriel Monsalvo"],["yellow","Juan Viglio"]],"https://www.lachacrafutbol.com.ar/web/event/12906/"),

M("12909",2020,"Apertura","2021-01-09","Boxer F.C.",null,2,4,[1,0],[0,0,0],[["goal","David Barraza"],["goal","Guido Lucas Zamolo"],["yellow","Adrián Brutti"]],"https://www.lachacrafutbol.com.ar/web/event/12909/"),

M("12917",2020,"Apertura","2021-01-16","Media Pinta",null,1,4,[2,1],[0,0,0],[["goal","Guido Lucas Zamolo"],["yellow","Adriel Monsalvo"],["yellow","Agustin Bedecarras"],["red","Matías Prado"]],"https://www.lachacrafutbol.com.ar/web/event/12917/"),

M("12922",2020,"Apertura","2021-01-23","El Equipo del Banco",null,1,3,[1,0],[0,0,0],[["goal","David Barraza"],["yellow","Ezequiel Alberto De Simone"]],"https://www.lachacrafutbol.com.ar/web/event/12922/"),

M("12928",2020,"Apertura","2021-02-06","Los Tulos",null,0,4,[0,1],[0,0,0],[["red","Danilo Chaile"]],"https://www.lachacrafutbol.com.ar/web/event/12928/"),

M("12935",2020,"Apertura","2021-02-20","Maestrulis",false,1,5,[2,0],[0,0,0],[["goal","Nicolás Tardella"],["yellow","Adrián Brutti"],["yellow","Nicolás Valdez"]],"https://www.lachacrafutbol.com.ar/web/event/12935/"),

M("12939",2020,"Apertura","2021-02-27","Mágicos F.C.",false,3,4,[2,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["goal","Guido Lucas Zamolo"],["goal","Nicolás Tardella"],["yellow","Nicolás Tardella"],["yellow","Nicolás Valdez"]],"https://www.lachacrafutbol.com.ar/web/event/12939/"),

M("12948",2020,"Apertura","2021-03-06","Café Veloz",null,6,4,[1,0],[0,0,0],[["goal","Danilo Chaile"],["goal","Danilo Chaile"],["goal","Guido Lucas Zamolo"],["goal","Guido Lucas Zamolo"],["goal","Guido Lucas Zamolo"],["goal","Sebastian Stjerne"],["yellow","Guido Lucas Zamolo"]],"https://www.lachacrafutbol.com.ar/web/event/12948/"),

M("12950",2020,"Apertura","2021-03-13","Los Repo",null,4,5,[1,0],[0,0,0],[["goal","Adriel Monsalvo"],["goal","David Barraza"],["goal","David Barraza"],["goal","Santiago Ibañez"],["yellow","Adriel Monsalvo"]],"https://www.lachacrafutbol.com.ar/web/event/12950/"),

M("12961",2020,"Apertura","2021-03-20","Ahí No Me Servís",null,0,5,[1,0],[0,0,0],[["yellow","Adriel Monsalvo"]],"https://www.lachacrafutbol.com.ar/web/event/12961/"),

M("12973",2020,"Apertura","2021-04-03","Toros FFAA",null,2,6,[2,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["goal","Guido Lucas Zamolo"],["yellow","Nicolás Valdez"],["yellow","Santiago Ibañez"]],"https://www.lachacrafutbol.com.ar/web/event/12973/"),

M("15991",2021,"Apertura",null,"Fulvencito",null,1,2,[3,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["yellow","Ezequiel Alberto De Simone"],["yellow","Guido Lucas Zamolo"],["yellow","Nicolás Valdez"]],"https://www.lachacrafutbol.com.ar/web/event/15991/"),

M("15998",2021,"Apertura",null,"Media Pinta",null,1,2,[0,0],[0,0,0],[["goal","David Barraza"]],"https://www.lachacrafutbol.com.ar/web/event/15998/"),

M("16002",2021,"Apertura",null,"Maestrulis",null,0,3,[0,1],[0,0,0],[["red","Adrián Brutti"]],"https://www.lachacrafutbol.com.ar/web/event/16002/"),

M("16011",2021,"Apertura",null,"Boxer F.C.",null,2,2,[3,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["goal","Guido Lucas Zamolo"],["yellow","Ezequiel Alberto De Simone"],["yellow","Guido Lucas Zamolo"],["yellow","Juan Castelli"]],"https://www.lachacrafutbol.com.ar/web/event/16011/"),

M("16024",2021,"Apertura",null,"Café Veloz",null,0,2,[1,1],[0,0,0],[["yellow","Juan Viglio"],["red","Nicolás Valdez"]],"https://www.lachacrafutbol.com.ar/web/event/16024/"),

M("16036",2021,"Apertura",null,"El Equipo del Banco",null,1,3,[1,0],[0,0,0],[["goal","Christian Olza"],["yellow","David Barraza"]],"https://www.lachacrafutbol.com.ar/web/event/16036/"),

M("16037",2021,"Apertura",null,"Los Tulos",null,2,2,[1,0],[0,0,0],[["goal","Leandro Mancebo"],["goal","Matías Prado"],["yellow","Juan Viglio"]],"https://www.lachacrafutbol.com.ar/web/event/16037/"),

M("16047",2021,"Apertura",null,"Cómodos F.C.",null,4,2,[1,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["goal","Jose Mohamed"],["goal","Leandro Mancebo"],["goal","Nicolás Valdez"],["yellow","Guido Lucas Zamolo"]],"https://www.lachacrafutbol.com.ar/web/event/16047/"),

M("16050",2021,"Apertura",null,"Mágicos F.C.",null,2,3,[1,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["goal","Nicolás Tardella"],["yellow","David Barraza"]],"https://www.lachacrafutbol.com.ar/web/event/16050/"),

M("16058",2021,"Apertura",null,"Los Repo",null,0,2,[0,0],[0,0,0],[],"https://www.lachacrafutbol.com.ar/web/event/16058/"),

M("16063",2021,"Apertura",null,"Ahí No Me Servís",null,1,1,[0,0],[0,0,0],[["goal","Nicolás Valdez"]],"https://www.lachacrafutbol.com.ar/web/event/16063/"),

M("16013",2021,"Apertura",null,"Toros FFAA",null,3,5,[1,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["goal","Guido Lucas Zamolo"],["goal","Nicolás Valdez"],["yellow","Nicolás Valdez"]],"https://www.lachacrafutbol.com.ar/web/event/16013/"),

M("18662",2022,"Apertura","2022-02-19","Fulvencito",null,3,2,[1,0],[0,0,0],[["goal","David Barraza"],["goal","Guido Lucas Zamolo"],["goal","Nicolás Tardella"],["yellow","Sebastian Kunichek"]],"https://www.lachacrafutbol.com.ar/web/event/18662/"),

M("18672",2022,"Apertura","2022-03-05","Media Pinta",null,3,3,[1,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["goal","Guido Lucas Zamolo"],["goal","Nicolás Tardella"],["yellow","David Barraza"]],"https://www.lachacrafutbol.com.ar/web/event/18672/"),

M("18675",2022,"Apertura","2022-03-12","Maestrulis",null,0,2,[2,0],[0,0,0],[["yellow","Guido Lucas Zamolo"],["yellow","Santiago Duhalde"]],"https://www.lachacrafutbol.com.ar/web/event/18675/"),

M("18868",2022,"Apertura","2022-03-19","Toros FC",null,1,2,[1,0],[0,0,0],[["goal","Ezequiel Alberto De Simone"],["yellow","Leandro Mancebo"]],"https://www.lachacrafutbol.com.ar/web/event/18868/"),

M("18873",2022,"Apertura","2022-04-02","Boxer FC",null,2,2,[2,0],[0,0,0],[["goal","Nicolás Tardella"],["goal","Luciano Orcajada"],["yellow","Juan Castelli"],["yellow","Sebastian Kunichek"]],"https://www.lachacrafutbol.com.ar/web/event/18873/"),

M("18695",2022,"Apertura","2022-04-09","Cafe Veloz",null,1,1,[2,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["yellow","Leandro Mancebo"],["yellow","Sebastian Kunichek"]],"https://www.lachacrafutbol.com.ar/web/event/18695/"),

M("18878",2022,"Apertura","2022-04-23","Eclécticos FC",null,0,4,[0,0],[0,0,0],[],"https://www.lachacrafutbol.com.ar/web/event/18878/"),

M("18702",2022,"Apertura","2022-04-30","Cómodos FC",null,2,1,[2,0],[0,0,0],[["goal","Leandro Mancebo"],["goal","Luciano Orcajada"],["yellow","Matías Prado"],["yellow","Sebastian Kunichek"]],"https://www.lachacrafutbol.com.ar/web/event/18702/"),

M("18883",2022,"Apertura","2022-05-07","Mufasa FC",null,1,0,[0,0],[0,0,0],[["goal","Ezequiel Erviti"]],"https://www.lachacrafutbol.com.ar/web/event/18883/"),

M("18715",2022,"Apertura","2022-05-14","Ahí No Me Servís",null,3,0,[0,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["goal","Guido Lucas Zamolo"],["goal","Nicolás Tardella"]],"https://www.lachacrafutbol.com.ar/web/event/18715/"),

M("18721",2022,"Apertura","2022-05-21","5digos",null,1,0,[1,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["yellow","Nicolás Valdez"]],"https://www.lachacrafutbol.com.ar/web/event/18721/"),

M("18682",2022,"Apertura","2022-06-04","Los Tulos",null,8,2,[0,0],[0,0,0],[["goal","Agustin Bedecarras"],["goal","Guido Lucas Zamolo"],["goal","Guido Lucas Zamolo"],["goal","Leonardo López"],["goal","Leonardo López"],["goal","Nicolás Valdez"],["goal","Ezequiel Erviti"],["goal","Ezequiel Alberto De Simone"]],"https://www.lachacrafutbol.com.ar/web/event/18682/"),

M("20673",2022,"Clausura","2022-08-20","Toros FC",null,2,4,[2,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["goal","Guido Lucas Zamolo"],["yellow","Ezequiel Alberto De Simone"],["yellow","Nicolás Valdez"]],"https://www.lachacrafutbol.com.ar/web/event/20673/"),

M("20684",2022,"Clausura","2022-08-27","El Equipo del Banco",null,0,3,[0,0],[0,0,0],[],"https://www.lachacrafutbol.com.ar/web/event/20684/"),

M("20696",2022,"Clausura","2022-09-10","Mufasa FC",null,2,3,[1,0],[0,0,0],[["goal","Ezequiel Alberto De Simone"],["goal","Guido Lucas Zamolo"],["yellow","Guido Lucas Zamolo"]],"https://www.lachacrafutbol.com.ar/web/event/20696/"),

M("20697",2022,"Clausura","2022-09-17","Boxer FC",null,1,4,[0,0],[0,0,0],[["goal","Agustin Bedecarras"]],"https://www.lachacrafutbol.com.ar/web/event/20697/"),

M("20707",2022,"Clausura","2022-09-24","Media Pinta",null,1,2,[1,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["yellow","Luciano Orcajada"]],"https://www.lachacrafutbol.com.ar/web/event/20707/"),

M("20710",2022,"Clausura","2022-10-01","Fulvencito FC",null,0,1,[1,0],[0,0,0],[["yellow","Guido Lucas Zamolo"]],"https://www.lachacrafutbol.com.ar/web/event/20710/"),

M("20718",2022,"Clausura","2022-10-15","El Expreso FC",null,1,2,[1,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["yellow","Luciano Orcajada"]],"https://www.lachacrafutbol.com.ar/web/event/20718/"),

M("20723",2022,"Clausura","2022-10-22","Ahí No Me Servís",null,5,1,[0,0],[0,0,0],[["goal","Leonardo López"],["goal","Nicolás Tardella"],["goal","Nicolás Tardella"],["goal","Ezequiel Alberto De Simone"],["goal","Ezequiel Alberto De Simone"]],"https://www.lachacrafutbol.com.ar/web/event/20723/"),

M("20729",2022,"Clausura","2022-10-29","5digos",null,2,0,[1,0],[0,0,0],[["goal","Mariano Miqueo"],["goal","Ezequiel Alberto De Simone"],["yellow","Nicolás Valdez"]],"https://www.lachacrafutbol.com.ar/web/event/20729/"),

M("20736",2022,"Clausura",null,"Cafe Veloz",null,1,3,[1,0],[0,0,0],[["goal","Ezequiel Alberto De Simone"],["yellow","Sebastian Kunichek"]],"https://www.lachacrafutbol.com.ar/web/event/20736/"),

M("20740",2022,"Clausura",null,"Los Tulos",null,3,3,[0,0],[0,0,0],[],"https://www.lachacrafutbol.com.ar/web/event/20740/",{excludedIndividualGoals:3,individualComplete:true}),

M("20749",2022,"Clausura","2022-11-19","La Columna",null,0,6,[1,1],[0,0,0],[["yellow","Sebastian Kunichek"],["red","Juan Castelli"]],"https://www.lachacrafutbol.com.ar/web/event/20749/"),

M("22781",2023,"Apertura","2023-02-25","Mambo FC",null,1,0,[0,0],[0,0,0],[["goal","Guido Lucas Zamolo"]],"https://www.lachacrafutbol.com.ar/web/event/22781/"),

M("22793",2023,"Apertura","2023-03-04","Bóxer FC",null,3,2,[0,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["goal","Mariano Miqueo"],["goal","Sebastian Kunichek"]],"https://www.lachacrafutbol.com.ar/web/event/22793/"),

M("22795",2023,"Apertura","2023-03-11","Expreso FC",null,3,2,[4,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["goal","Mariano Miqueo"],["goal","Patricio Coplo"],["yellow","Guido Lucas Zamolo"],["yellow","Martin Najle"],["yellow","Matías Prado"],["yellow","Sebastian Kunichek"]],"https://www.lachacrafutbol.com.ar/web/event/22795/"),

M("22804",2023,"Apertura","2023-03-18","Ahí No Me Servís",null,1,1,[0,0],[0,0,0],[["goal","Matías Ferraro"]],"https://www.lachacrafutbol.com.ar/web/event/22804/"),

M("22808",2023,"Apertura","2023-03-25","5digos",null,5,1,[0,0],[0,0,0],[["goal","Gaston Manoli"],["goal","Leonardo López"],["goal","Luciano Orcajada"],["goal","Matías Prado"],["goal","Nicolás Valdez"]],"https://www.lachacrafutbol.com.ar/web/event/22808/"),

M("22815",2023,"Apertura","2023-04-01","Café Veloz",null,2,1,[0,0],[0,0,0],[["goal","Juan Viglio"],["goal","Matías Ferraro"]],"https://www.lachacrafutbol.com.ar/web/event/22815/"),

M("22821",2023,"Apertura","2023-04-21","Los Tulos",null,3,1,[0,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["goal","Nicolás Tardella"],["goal","Guido Pochettino"]],"https://www.lachacrafutbol.com.ar/web/event/22821/"),

M("22826",2023,"Apertura","2023-04-28","La Columna",null,2,3,[3,2],[0,0,0],[["goal","Guido Lucas Zamolo"],["goal","Guido Lucas Zamolo"],["yellow","Ezequiel Alberto De Simone"],["yellow","Ezequiel Alberto De Simone"],["yellow","Guido Lucas Zamolo"],["red","Ezequiel Alberto De Simone"],["red","Patricio Coplo"]],"https://www.lachacrafutbol.com.ar/web/event/22826/"),

M("22834",2023,"Apertura","2023-05-13","Graduados",null,2,5,[4,0],[0,0,0],[["goal","Nicolás Valdez"],["goal","Nicolás Valdez"],["yellow","Guido Lucas Zamolo"],["yellow","Luciano Orcajada"],["yellow","Nicolás Valdez"],["yellow","Guido Pochettino"]],"https://www.lachacrafutbol.com.ar/web/event/22834/"),

M("22837",2023,"Apertura","2023-05-20","Para Que Te Traje",null,1,4,[2,0],[0,0,0],[["goal","Christian Olza"],["yellow","Mariano Miqueo"],["yellow","Patricio Coplo"]],"https://www.lachacrafutbol.com.ar/web/event/22837/"),

M("22847",2023,"Apertura","2023-06-03","Eclécticos FC",null,0,1,[0,0],[0,0,0],[],"https://www.lachacrafutbol.com.ar/web/event/22847/"),

M("24754",2023,"Clausura","2023-08-19","El Equipo del Banco",true,0,5,[2,0],[0,0,0],[["yellow","Patricio Coplo"],["yellow","Sebastian Kunichek"]],"https://www.lachacrafutbol.com.ar/web/event/24754/"),

M("24763",2023,"Clausura","2023-08-26","Para Que Te Traje",false,0,3,[2,0],[0,0,0],[["yellow","Patricio Coplo"],["yellow","Sebastian Kunichek"]],"https://www.lachacrafutbol.com.ar/web/event/24763/"),

M("24765",2023,"Clausura","2023-09-02","La Mancha Ester",true,2,2,[2,0],[0,0,0],[["goal","Guido Pochettino"],["goal","Luciano Orcajada"],["yellow","Christian Olza"],["yellow","Sebastian Kunichek"]],"https://www.lachacrafutbol.com.ar/web/event/24765/"),

M("24776",2023,"Clausura","2023-09-09","Deportivo Resaca",false,2,4,[2,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["goal","Guido Pochettino"],["yellow","Guido Lucas Zamolo"],["yellow","Luciano Orcajada"]],"https://www.lachacrafutbol.com.ar/web/event/24776/"),

M("24788",2023,"Clausura","2023-09-23","Mimetizarte",true,1,5,[3,0],[0,0,0],[["goal","Christian Olza"],["yellow","Guido Lucas Zamolo"],["yellow","Juan Castelli"],["yellow","Luciano Orcajada"]],"https://www.lachacrafutbol.com.ar/web/event/24788/"),

M("24789",2023,"Clausura","2023-09-30","Eber Ludueña",false,1,2,[3,0],[0,0,0],[["goal","Luciano Orcajada"],["yellow","Guido Lucas Zamolo"],["yellow","Guido Pochettino"],["yellow","Matías Ferraro"]],"https://www.lachacrafutbol.com.ar/web/event/24789/"),

M("24799",2023,"Clausura","2023-10-07","Echale Pesteke",true,1,2,[2,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["yellow","Guido Lucas Zamolo"],["yellow","Patricio Coplo"]],"https://www.lachacrafutbol.com.ar/web/event/24799/"),

M("24802",2023,"Clausura","2023-10-21","Mágicos F.C.",false,2,1,[2,0],[0,0,0],[["goal","Guido Pochettino"],["yellow","Guido Lucas Zamolo"],["yellow","Patricio Coplo"]],"https://www.lachacrafutbol.com.ar/web/event/24802/",{excludedIndividualGoals:1,individualComplete:true}),

M("24810",2023,"Clausura","2023-10-28","Tortu Style L.V.",true,1,3,[1,0],[0,0,0],[["goal","Leonardo López"],["yellow","Matías Prado"]],"https://www.lachacrafutbol.com.ar/web/event/24810/"),

M("24815",2023,"Clausura","2023-11-04","C.A.R.U.",false,1,5,[0,1],[0,0,0],[["goal","Guido Pochettino"],["red","Patricio Coplo"]],"https://www.lachacrafutbol.com.ar/web/event/24815/"),

M("24821",2023,"Clausura","2023-11-11","Mufasa F.C.",true,3,1,[1,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["goal","Guido Pochettino"],["yellow","Martin Najle"]],"https://www.lachacrafutbol.com.ar/web/event/24821/",{excludedIndividualGoals:1,individualComplete:true}),

M("24828",2023,"Clausura","2023-11-25","Los Repo",false,1,1,[0,0],[0,0,0],[["goal","Guido Pochettino"]],"https://www.lachacrafutbol.com.ar/web/event/24828/"),

M("29300",2024,"Apertura","2024-03-02","Echale Pesteke",false,0,6,[1,0],[0,0,0],[["yellow","Sebastian Kunichek"]],"https://www.lachacrafutbol.com.ar/web/event/29300/"),

M("29312",2024,"Apertura","2024-03-16","Graduados F.C.",true,2,1,[2,0],[0,0,0],[["goal","Mariano Orio"],["goal","Christian Olza"],["yellow","Guido Pochettino"],["yellow","Mariano Orio"]],"https://www.lachacrafutbol.com.ar/web/event/29312/"),

M("29323",2024,"Apertura","2024-04-13","Los Palmeras F.C.",true,2,1,[0,0],[0,0,0],[["goal","Agustin Bedecarras"],["goal","Guido Lucas Zamolo"]],"https://www.lachacrafutbol.com.ar/web/event/29323/"),

M("29326",2024,"Apertura","2024-04-20","Toros FFAA",false,1,1,[2,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["yellow","Matías Prado"],["yellow","Guido Pochettino"]],"https://www.lachacrafutbol.com.ar/web/event/29326/"),

M("29334",2024,"Apertura","2024-04-27","Mimetizarte",true,1,3,[1,0],[0,0,0],[["goal","Ezequiel Alberto De Simone"],["yellow","Ezequiel Alberto De Simone"]],"https://www.lachacrafutbol.com.ar/web/event/29334/"),

M("29339",2024,"Apertura","2024-05-04","Eber Ludueña",false,1,2,[1,0],[0,0,0],[["goal","Guido Pochettino"],["yellow","Sebastian Kunichek"]],"https://www.lachacrafutbol.com.ar/web/event/29339/"),

M("29345",2024,"Apertura","2024-05-11","Los Tulos",true,1,2,[0,0],[0,0,0],[["goal","Mariano Orio"]],"https://www.lachacrafutbol.com.ar/web/event/29345/"),

M("29352",2024,"Apertura","2024-05-18","El Expreso FC",false,0,6,[1,0],[0,0,0],[["yellow","Sebastian Kunichek"]],"https://www.lachacrafutbol.com.ar/web/event/29352/"),

M("29356",2024,"Apertura","2024-05-25","Los Nuñes",true,0,2,[0,2],[0,0,0],[["red","Luciano Orcajada"],["red","Sebastian Kunichek"]],"https://www.lachacrafutbol.com.ar/web/event/29356/"),

M("29365",2024,"Apertura","2024-06-01","AS Broma",false,2,1,[2,0],[0,0,0],[["goal","Matías Prado"],["goal","Matías Prado"],["yellow","Matías Ferraro"],["yellow","Leonardo López"]],"https://www.lachacrafutbol.com.ar/web/event/29365/"),

M("29367",2024,"Apertura","2024-06-08","Media Pinta",true,0,2,[1,0],[0,0,0],[["yellow","Guido Pochettino"]],"https://www.lachacrafutbol.com.ar/web/event/29367/"),

M("29313",2024,"Apertura","2024-06-15","Ahí No Me Servís",false,2,9,[0,0],[0,0,0],[],"https://www.lachacrafutbol.com.ar/web/event/29313/",{excludedIndividualGoals:2,individualComplete:true}),

M("31923",2024,"Clausura","2024-09-14","Eber Ludueña",null,1,0,[3,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["yellow","Gaston Manoli"],["yellow","Patricio Coplo"],["yellow","Guido Pochettino"]],"https://www.lachacrafutbol.com.ar/web/event/31923/"),

M("31935",2024,"Clausura","2024-09-21","Toros FC",null,3,3,[0,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["goal","Luciano Orcajada"],["goal","Nicolás Tardella"]],"https://www.lachacrafutbol.com.ar/web/event/31935/"),

M("31936",2024,"Clausura","2024-09-28","Media Pinta FC",null,1,1,[2,0],[0,0,0],[["goal","Ezequiel Alberto De Simone"],["yellow","Leonardo López"],["yellow","Luciano Orcajada"]],"https://www.lachacrafutbol.com.ar/web/event/31936/"),

M("31946",2024,"Clausura","2024-10-05","Échale Pesteke",null,2,3,[3,0],[0,0,0],[["goal","Nicolás Tardella"],["goal","Nicolás Tardella"],["yellow","Juan Castelli"],["yellow","Patricio Coplo"],["yellow","Sebastian Kunichek"]],"https://www.lachacrafutbol.com.ar/web/event/31946/"),

M("31949",2024,"Clausura","2024-10-12","Palmeras",null,6,0,[0,0],[0,0,0],[["goal","Ezequiel Alberto De Simone"],["goal","Ezequiel Alberto De Simone"],["goal","Gaston Manoli"],["goal","Guido Lucas Zamolo"],["goal","Luciano Orcajada"],["goal","Sebastian Kunichek"]],"https://www.lachacrafutbol.com.ar/web/event/31949/"),

M("31957",2024,"Clausura","2024-10-19","Café Veloz",null,2,3,[1,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["goal","Sebastian Kunichek"],["yellow","Juan Castelli"]],"https://www.lachacrafutbol.com.ar/web/event/31957/"),

M("31962",2024,"Clausura","2024-10-26","Ahí No Me Servís",null,4,1,[0,0],[0,0,0],[["goal","Christian Olza"],["goal","Ezequiel Alberto De Simone"],["goal","Luciano Orcajada"],["goal","Mariano Miqueo"]],"https://www.lachacrafutbol.com.ar/web/event/31962/"),

M("31910",2024,"Clausura","2024-11-16","El Equipo del Banco",null,1,2,[1,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["yellow","Ezequiel Alberto De Simone"]],"https://www.lachacrafutbol.com.ar/web/event/31910/"),

M("31979",2024,"Clausura","2024-11-23","Los Tulos",null,1,1,[1,0],[0,0,0],[["goal","Christian Olza"],["yellow","Guido Lucas Zamolo"]],"https://www.lachacrafutbol.com.ar/web/event/31979/"),

M("31968",2024,"Clausura","2024-12-07","AS Broma",null,2,1,[1,0],[0,0,0],[["goal","Luciano Orcajada"],["goal","Mariano Miqueo"],["yellow","Patricio Coplo"]],"https://www.lachacrafutbol.com.ar/web/event/31968/"),

M("31912",2024,"Clausura","2024-11-30","Graduados",null,4,1,[0,0],[0,0,0],[["goal","Gaston Manoli"],["goal","Guido Lucas Zamolo"],["goal","Guido Lucas Zamolo"],["goal","Mariano Miqueo"]],"https://www.lachacrafutbol.com.ar/web/event/31912/"),

M("34769",2025,"Apertura","2025-03-15","Deportivo Resaca",true,4,1,[1,0],[0,0,0],[["goal","Ezequiel Alberto De Simone"],["goal","Guido Lucas Zamolo"],["goal","Guido Pochettino"],["goal","Nicolás Tardella"],["yellow","Guido Lucas Zamolo"]],"https://www.lachacrafutbol.com.ar/web/event/34769/"),

M("34778",2025,"Apertura","2025-03-22","El Equipo del Banco",false,1,1,[2,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["yellow","Luciano Orcajada"],["yellow","Martin Najle"]],"https://www.lachacrafutbol.com.ar/web/event/34778/"),

M("34780",2025,"Apertura","2025-03-29","Graduados",true,2,3,[1,0],[0,0,0],[["goal","Christian Olza"],["goal","Ezequiel Alberto De Simone"],["yellow","Mariano Miqueo"]],"https://www.lachacrafutbol.com.ar/web/event/34780/"),

M("34791",2025,"Apertura","2025-04-05","Eber Ludueña",false,1,1,[2,0],[0,0,0],[["goal","Guido Pochettino"],["yellow","Christian Olza"],["yellow","Guido Pochettino"]],"https://www.lachacrafutbol.com.ar/web/event/34791/"),

M("34803",2025,"Apertura","2025-04-26","Toros FFAA",true,3,3,[1,0],[0,0,0],[["goal","Gaston Manoli"],["goal","Guido Lucas Zamolo"],["goal","Matías Prado"],["yellow","Juan Castelli"]],"https://www.lachacrafutbol.com.ar/web/event/34803/"),

M("34804",2025,"Apertura","2025-05-03","Palmeras FC",false,1,2,[0,0],[0,0,0],[["goal","Mariano Miqueo"]],"https://www.lachacrafutbol.com.ar/web/event/34804/"),

M("34814",2025,"Apertura","2025-05-10","La Traviesa",true,4,3,[0,0],[0,0,0],[["goal","Gaston Manoli"],["goal","Guido Pochettino"],["goal","Matías Prado"],["goal","Nicolás Tardella"]],"https://www.lachacrafutbol.com.ar/web/event/34814/"),

M("34817",2025,"Apertura",null,"Los Tulos",false,0,0,[1,0],[0,0,0],[["yellow","Mariano Orio"]],"https://www.lachacrafutbol.com.ar/web/event/34817/"),

M("34830",2025,"Apertura","2025-05-31","Ahí No Me Servís",false,2,1,[0,0],[0,0,0],[["goal","Guido Pochettino"],["goal","Matías Prado"]],"https://www.lachacrafutbol.com.ar/web/event/34830/"),

M("34836",2025,"Apertura","2025-06-07","AS Broma",true,1,0,[2,1],[0,0,0],[["goal","Patricio Coplo"],["yellow","Patricio Coplo"],["yellow","Sebastian Kunichek"],["red","Matías Prado"]],"https://www.lachacrafutbol.com.ar/web/event/34836/"),

M("34825",2025,"Apertura","2025-06-28","Expresso FC",true,2,2,[0,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["goal","Nicolás Tardella"]],"https://www.lachacrafutbol.com.ar/web/event/34825/"),

M("34765",2025,"Apertura","2025-07-05","Cafe Veloz",false,0,2,[1,0],[0,0,0],[["yellow","Patricio Coplo"]],"https://www.lachacrafutbol.com.ar/web/event/34765/"),

M("37433",2025,"Clausura",null,"Toros FFAA",false,2,2,[0,0],[0,0,0],[["goal","Luciano Orcajada"],["goal","Mariano Eizmendi"]],"https://www.lachacrafutbol.com.ar/web/event/37433/"),

M("37435",2025,"Clausura",null,"Graduados",true,2,3,[1,0],[0,0,0],[["goal","Christian Olza"],["goal","Mariano Eizmendi"],["yellow","Guido Pochettino"]],"https://www.lachacrafutbol.com.ar/web/event/37435/"),

M("37458",2025,"Clausura",null,"Deportivo Resaca",true,1,2,[1,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["yellow","Ezequiel Alberto De Simone"]],"https://www.lachacrafutbol.com.ar/web/event/37458/"),

M("37459",2025,"Clausura",null,"Media Pinta",false,1,2,[2,0],[0,0,0],[["goal","Guido Pochettino"],["yellow","Juan Castelli"],["yellow","Ezequiel Erviti"]],"https://www.lachacrafutbol.com.ar/web/event/37459/"),

M("37469",2025,"Clausura",null,"La Traviesa",true,3,5,[1,0],[0,0,0],[["goal","Christian Olza"],["goal","Matías Prado"],["goal","Ezequiel Erviti"],["yellow","Patricio Coplo"]],"https://www.lachacrafutbol.com.ar/web/event/37469/"),

M("37472",2025,"Clausura",null,"Toro Rosso",false,2,2,[2,0],[0,0,0],[["goal","Ezequiel Erviti"],["goal","Mariano Eizmendi"],["yellow","Luciano Orcajada"],["yellow","Matías Prado"]],"https://www.lachacrafutbol.com.ar/web/event/37472/"),

M("37480",2025,"Clausura",null,"Giraffe Soccer",true,1,3,[3,0],[0,0,0],[["goal","Leonardo López"],["yellow","Nicolás Valdez"],["yellow","Patricio Coplo"],["yellow","Sebastian Kunichek"]],"https://www.lachacrafutbol.com.ar/web/event/37480/"),

M("37485",2025,"Clausura",null,"Los Palmeras",false,1,1,[2,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["yellow","Leonardo López"],["yellow","Matías Prado"]],"https://www.lachacrafutbol.com.ar/web/event/37485/"),

M("37491",2025,"Clausura",null,"Eber Ludueña",true,2,4,[2,1],[0,0,0],[["goal","Guido Lucas Zamolo"],["goal","Guido Pochettino"],["yellow","Guido Pochettino"],["yellow","Luciano Orcajada"],["red","Guido Pochettino"]],"https://www.lachacrafutbol.com.ar/web/event/37491/"),

M("37498",2025,"Clausura",null,"AS Broma",false,2,3,[1,0],[0,0,0],[["goal","Leonardo López"],["goal","Mariano Eizmendi"],["yellow","Patricio Coplo"]],"https://www.lachacrafutbol.com.ar/web/event/37498/"),

M("37502",2025,"Clausura",null,"Café Veloz",true,6,2,[2,0],[0,0,0],[["goal","Gaston Manoli"],["goal","Guido Lucas Zamolo"],["goal","Guido Lucas Zamolo"],["goal","Guido Pochettino"],["goal","Guido Pochettino"],["goal","Guido Pochettino"],["yellow","Leonardo López"],["yellow","Patricio Coplo"]],"https://www.lachacrafutbol.com.ar/web/event/37502/"),

M("37446",2025,"Clausura",null,"Ahí No Me Servís",false,1,4,[0,0],[0,0,0],[["goal","Mariano Eizmendi"]],"https://www.lachacrafutbol.com.ar/web/event/37446/"),

M("40111",2026,"Apertura","2026-02-21","Toro Rosso F.C.",false,0,7,[3,1],[0,0,0],[["yellow","Patricio Coplo"],["yellow","Sebastian Kunichek"],["yellow","Ezequiel Erviti"],["red","Sebastian Kunichek"]],"https://www.lachacrafutbol.com.ar/web/event/40111/"),

M("40121",2026,"Apertura","2026-02-28","Toros FFAA",true,3,2,[0,0],[0,0,0],[["goal","Christian Olza"],["goal","Ezequiel Alberto De Simone"],["goal","Nicolás Valdez"]],"https://www.lachacrafutbol.com.ar/web/event/40121/"),

M("40124",2026,"Apertura","2026-03-07","Deportivo Resaca",false,1,3,[0,0],[0,0,0],[["goal","Guido Lucas Zamolo"]],"https://www.lachacrafutbol.com.ar/web/event/40124/"),

M("40132",2026,"Apertura","2026-03-14","Los Palmeras F.C.",true,0,5,[0,0],[0,0,0],[],"https://www.lachacrafutbol.com.ar/web/event/40132/"),

M("40137",2026,"Apertura","2026-03-21","Mambo F.C.",false,1,0,[2,0],[0,0,0],[["goal","Mariano Eizmendi"],["yellow","Luciano Orcajada"],["yellow","Mariano Eizmendi"]],"https://www.lachacrafutbol.com.ar/web/event/40137/"),

M("40143",2026,"Apertura","2026-03-28","Media Pinta",true,1,2,[4,1],[0,0,0],[["goal","Ezequiel Erviti"],["yellow","Sebastian Kunichek"],["yellow","Mariano Eizmendi"],["yellow","Ezequiel Erviti"],["yellow","Ezequiel Erviti"],["red","Ezequiel Erviti"]],"https://www.lachacrafutbol.com.ar/web/event/40143/"),

M("40150",2026,"Apertura","2026-04-18","AS Broma",false,0,2,[2,0],[0,0,0],[["yellow","Luciano Orcajada"],["yellow","Matías Prado"]],"https://www.lachacrafutbol.com.ar/web/event/40150/"),

M("40154",2026,"Apertura","2026-04-25","Café Veloz",true,0,0,[1,0],[0,0,0],[["yellow","Patricio Coplo"]],"https://www.lachacrafutbol.com.ar/web/event/40154/"),

M("40163",2026,"Apertura","2026-05-02","Graduados F.C.",false,3,2,[3,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["goal","Mariano Miqueo"],["goal","Mariano Eizmendi"],["yellow","Leonardo López"],["yellow","Matías Prado"],["yellow","Sebastian Kunichek"]],"https://www.lachacrafutbol.com.ar/web/event/40163/"),

M("40176",2026,"Apertura","2026-05-16","Ahí No Me Servís",false,1,5,[1,0],[0,0,0],[["goal","Ezequiel Erviti"],["yellow","Ezequiel Alberto De Simone"]],"https://www.lachacrafutbol.com.ar/web/event/40176/"),

M("40165",2026,"Apertura","2026-06-13","C.A.R.U.",true,4,3,[3,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["goal","Martin Najle"],["goal","Patricio Coplo"],["goal","Mariano Eizmendi"],["yellow","Guido Lucas Zamolo"],["yellow","Patricio Coplo"],["yellow","Mariano Eizmendi"]],"https://www.lachacrafutbol.com.ar/web/event/40165/"),

M("40188",2026,"Apertura","2026-06-20","Los Tulos",true,2,6,[1,0],[0,0,0],[["goal","Guido Lucas Zamolo"],["goal","Guido Pochettino"],["yellow","Patricio Coplo"]],"https://www.lachacrafutbol.com.ar/web/event/40188/")

].map(m=>({
  ...m,
  individualComplete:
    m.individualComplete ??
    ((m.pending?.goals||0)===0 &&
     (m.pending?.yellow||0)===0 &&
     (m.pending?.red||0)===0),
  players:[...new Set((m.events||[]).map(e=>e.player))]
}))};