"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Odpowiedz",
    embedded: false
  },
  {
    name: "WarunekPytania",
    embedded: false
  },
  {
    name: "Pytanie",
    embedded: false
  },
  {
    name: "Uzytkownik",
    embedded: false
  },
  {
    name: "Ankieta",
    embedded: false
  },
  {
    name: "Odpowiedzi",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/mariusz-cieslak/GraphQL/dev`
});
exports.prisma = new exports.Prisma();
