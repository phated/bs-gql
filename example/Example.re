module Query = {
  open Gql;

  let allCards = named("AllCards", [
    field("allCards")
      |. withAlias("characters")
      |. withSelection([
          field("uid"),
          field("title"),
          field("subtitle"),
          field("effect")
            |. withSelection([
              field("symbol"),
              field("text"),
            ]),
          field("image")
            |. withSelection([
              field("thumbnail")
            ]),
        ]),
    ]);
};
