'use strict';

var Gql$BsGql = require("../src/Gql.js");

var allCards = Gql$BsGql.named("AllCards", /* :: */[
      Gql$BsGql.withSelection(Gql$BsGql.withAlias(Gql$BsGql.field("allCards"), "characters"), /* :: */[
            Gql$BsGql.field("uid"),
            /* :: */[
              Gql$BsGql.field("title"),
              /* :: */[
                Gql$BsGql.field("subtitle"),
                /* :: */[
                  Gql$BsGql.withSelection(Gql$BsGql.field("effect"), /* :: */[
                        Gql$BsGql.field("symbol"),
                        /* :: */[
                          Gql$BsGql.field("text"),
                          /* [] */0
                        ]
                      ]),
                  /* :: */[
                    Gql$BsGql.withSelection(Gql$BsGql.field("image"), /* :: */[
                          Gql$BsGql.field("thumbnail"),
                          /* [] */0
                        ]),
                    /* [] */0
                  ]
                ]
              ]
            ]
          ]),
      /* [] */0
    ]);

var Query = /* module */[/* allCards */allCards];

exports.Query = Query;
/* allCards Not a pure module */
