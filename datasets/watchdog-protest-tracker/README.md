## About Dataset

This dataset contains information regarding 623 protests and 51 conflicts aggregated by the Watchdog Team (https://watchdog.team) between 30/03/2022 and 19/05/2022.

## About Data collection methodology

When Team Watchdog started tracking protests happening around the country on 1st April, 2022 (see [Incident report: The Mirihana Protest, a timeline](https://longform.watchdog.team/observations/incident-report-the-mirihana-protest-summarized)), our objective was merely to keep a record of locations for fact-checking purposes. However, as the protests began to grow in numbers and locations, we decided to recruit the help of our audiences who were out protesting.

This data was then added into a google spreadsheet and then parsed through piece-by-piece, starting with identifying the location of the protest through the process of geo-tagging. The protests are then tagged by size - small, medium, large - and we then note the organising party, be it the local populace, trade unions, students or anyone else.

Our intention with the protest tracker was to map public discourse around GotaGoHome protests and it's spread around Sri Lanka. The May 9th attacks (see [The SLPP Attack On GotaGoGama: a Timeline](https://longform.watchdog.team/observations/the-slpp-attack-on-gotagogama-a-timeline) and [The Attack on GotaGoGama: The Aftermath](https://longform.watchdog.team/observations/the-attack-on-gotagogama-the-aftermath)), marked a significant point in the protests, as well as the retaliatory attacks against MPs (see conflict tag under filters on the [protest tracker visualisation](https://protests.watchdog.team/)).

However, the situation in the country since was such that there have been as many, if not more, protests around the need for essentials and basic needs than there were for GotaGoHome protests.

As such, we ceased tracking GotaGoHome protests on 9th May 2022.

## Description of the data

```
.
├── README.md
├── conflict.geojson
└── protests.geojson
```

The data is divided into two [geojson](https://geojson.org/) files.

`conflict.geojson` tracks 51 retaliatory attacks against MPs as a result of the [May 9th Attacks](https://longform.watchdog.team/observations/the-attack-on-gotagogama-the-aftermath) on GotaGoGama.

```
    {
      "type": "Feature",
      "properties": {
        "id": "5",
        "links": ["https://twitter.com/viralvdoz/status/1523775465022181377"],
        "location": "Mahinda Rajapaksa's Ancestral Home in Medamulana, Walawwa",
        "date": "2022-05-09T00:00:00.000+00:00",
        "epoch": 1652054400,
        "damage": ["residence"],
        "accurate": true
      },
      "geometry": { "type": "Point", "coordinates": [80.7690184, 6.1790679, 0] }
    }
```

`protests.geojson` tracks 623 protests aggregated between 30/03/2022 to 19/05/2022.

```
    {
      "type": "Feature",
      "properties": {
        "id": "266",
        "links": [
          "https://twitter.com/Dailymirror_SL/status/1515553656023642112?s=20&t=KlxWE1vLybSFkZ6tcuNCyA"
        ],
        "location": "Matara*",
        "date": "2022-04-17T00:00:00.000+00:00",
        "epoch": 1650153600,
        "size": "small",
        "sizeValue": 1,
        "accurate": false
      },
      "geometry": {
        "type": "Point",
        "coordinates": [80.54707038771714, 5.9491919543585166, 0]
      }
    }
```

Note: Some records in the `protests.geojson` dataset will have an asterisks in the value under the `location` key. This was used by the contributors to signify that there was insufficient information to approximate the location of the protest and instead, an approximate location to ~1km

## Other Resources

- [WD Protest Tracker](https://protests.watchdog.team/)
- [WD Protest Tracker Google Sheet](https://docs.google.com/spreadsheets/d/1yShvemHd_eNNAtC3pmxPs9B5RbGmfBUP1O6WGQ5Ycrg/edit#gid=0)
- [WD Protest Tracker API](https://protests.watchdog.team/documentation)

## Authors

Collected and sythesized by [Watchdog](https://watchdog.team)

- [Yudhanjaya Wijeratne](http://twitter.com/@yudhanjaya)
- [Minoli Wijetunga](http://twitter.com/@Elliiipses)
- [Aisha Nazim](http://twitter.com/@aishnazim)
- [Ishan Marikar](http://twitter.com/@ishanmarikar)
- [Mohamed Fairooz](http://twitter.com/@Fairoozmbm)
- [Amalini De Sayrah](http://twitter.com/@amaliniii)

  and everyone who took the time to tag or send us footage.

## License

This is a public project. Feel free to use for journalism / discussion / research. Kindly credit and backlink to watchdog.team, that'll be appreciated. If you’re using someone’s photos or video, credit them (either by embedding their stuff directly in your website or by listing manually).

This project is licensed under the Apache License 2.0 - see https://tldrlegal.com/license/apache-license-2.0-(apache-2.0) for more information.
