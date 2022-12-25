const pluralizedWords = {
  boter: {
    one: "boter",
    two: "botra",
    threeOrFour: "botri",
    zeroOrFivePlus: "botrov",
  },
  muca: {
    one: "muca",
    two: "muci",
    threeOrFour: "muce",
    zeroOrFivePlus: "muc",
  },
  leto: {
    one: "leto",
    two: "leti",
    threeOrFour: "leta",
    zeroOrFivePlus: "let",
  },
  mesec: {
    one: "mesec",
    two: "mesca",
    threeOrFour: "mesci",
    zeroOrFivePlus: "mesecev",
  },
  dan: {
    one: "dan",
    two: "dneva",
    threeOrFour: "dnevi",
    zeroOrFivePlus: "dni",
  },
};

export const pluralize = (key: keyof typeof pluralizedWords, count: number) => {
  const ref = pluralizedWords[key];

  switch (count) {
    case 1:
      return ref.one;
    case 2:
      return ref.two;
    case 3:
    case 4:
      return ref.threeOrFour;
    default:
      return ref.zeroOrFivePlus;
  }
};
