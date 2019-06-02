module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.33.0). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateAnkieta {
  count: Int!
}

type AggregateOdpowiedz {
  count: Int!
}

type AggregateOdpowiedzi {
  count: Int!
}

type AggregatePytanie {
  count: Int!
}

type AggregateUzytkownik {
  count: Int!
}

type AggregateWarunekPytania {
  count: Int!
}

type Ankieta {
  id: ID!
  nazwaAnkiety: String!
  tworca: Uzytkownik!
  czasZakonczenia: DateTime!
  pytania(where: PytanieWhereInput, orderBy: PytanieOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Pytanie!]
}

type AnkietaConnection {
  pageInfo: PageInfo!
  edges: [AnkietaEdge]!
  aggregate: AggregateAnkieta!
}

input AnkietaCreateInput {
  id: ID
  nazwaAnkiety: String!
  tworca: UzytkownikCreateOneInput!
  czasZakonczenia: DateTime!
  pytania: PytanieCreateManyInput
}

input AnkietaCreateOneInput {
  create: AnkietaCreateInput
  connect: AnkietaWhereUniqueInput
}

type AnkietaEdge {
  node: Ankieta!
  cursor: String!
}

enum AnkietaOrderByInput {
  id_ASC
  id_DESC
  nazwaAnkiety_ASC
  nazwaAnkiety_DESC
  czasZakonczenia_ASC
  czasZakonczenia_DESC
}

type AnkietaPreviousValues {
  id: ID!
  nazwaAnkiety: String!
  czasZakonczenia: DateTime!
}

type AnkietaSubscriptionPayload {
  mutation: MutationType!
  node: Ankieta
  updatedFields: [String!]
  previousValues: AnkietaPreviousValues
}

input AnkietaSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AnkietaWhereInput
  AND: [AnkietaSubscriptionWhereInput!]
  OR: [AnkietaSubscriptionWhereInput!]
  NOT: [AnkietaSubscriptionWhereInput!]
}

input AnkietaUpdateDataInput {
  nazwaAnkiety: String
  tworca: UzytkownikUpdateOneRequiredInput
  czasZakonczenia: DateTime
  pytania: PytanieUpdateManyInput
}

input AnkietaUpdateInput {
  nazwaAnkiety: String
  tworca: UzytkownikUpdateOneRequiredInput
  czasZakonczenia: DateTime
  pytania: PytanieUpdateManyInput
}

input AnkietaUpdateManyMutationInput {
  nazwaAnkiety: String
  czasZakonczenia: DateTime
}

input AnkietaUpdateOneRequiredInput {
  create: AnkietaCreateInput
  update: AnkietaUpdateDataInput
  upsert: AnkietaUpsertNestedInput
  connect: AnkietaWhereUniqueInput
}

input AnkietaUpsertNestedInput {
  update: AnkietaUpdateDataInput!
  create: AnkietaCreateInput!
}

input AnkietaWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  nazwaAnkiety: String
  nazwaAnkiety_not: String
  nazwaAnkiety_in: [String!]
  nazwaAnkiety_not_in: [String!]
  nazwaAnkiety_lt: String
  nazwaAnkiety_lte: String
  nazwaAnkiety_gt: String
  nazwaAnkiety_gte: String
  nazwaAnkiety_contains: String
  nazwaAnkiety_not_contains: String
  nazwaAnkiety_starts_with: String
  nazwaAnkiety_not_starts_with: String
  nazwaAnkiety_ends_with: String
  nazwaAnkiety_not_ends_with: String
  tworca: UzytkownikWhereInput
  czasZakonczenia: DateTime
  czasZakonczenia_not: DateTime
  czasZakonczenia_in: [DateTime!]
  czasZakonczenia_not_in: [DateTime!]
  czasZakonczenia_lt: DateTime
  czasZakonczenia_lte: DateTime
  czasZakonczenia_gt: DateTime
  czasZakonczenia_gte: DateTime
  pytania_every: PytanieWhereInput
  pytania_some: PytanieWhereInput
  pytania_none: PytanieWhereInput
  AND: [AnkietaWhereInput!]
  OR: [AnkietaWhereInput!]
  NOT: [AnkietaWhereInput!]
}

input AnkietaWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createAnkieta(data: AnkietaCreateInput!): Ankieta!
  updateAnkieta(data: AnkietaUpdateInput!, where: AnkietaWhereUniqueInput!): Ankieta
  updateManyAnkietas(data: AnkietaUpdateManyMutationInput!, where: AnkietaWhereInput): BatchPayload!
  upsertAnkieta(where: AnkietaWhereUniqueInput!, create: AnkietaCreateInput!, update: AnkietaUpdateInput!): Ankieta!
  deleteAnkieta(where: AnkietaWhereUniqueInput!): Ankieta
  deleteManyAnkietas(where: AnkietaWhereInput): BatchPayload!
  createOdpowiedz(data: OdpowiedzCreateInput!): Odpowiedz!
  updateOdpowiedz(data: OdpowiedzUpdateInput!, where: OdpowiedzWhereUniqueInput!): Odpowiedz
  updateManyOdpowiedzes(data: OdpowiedzUpdateManyMutationInput!, where: OdpowiedzWhereInput): BatchPayload!
  upsertOdpowiedz(where: OdpowiedzWhereUniqueInput!, create: OdpowiedzCreateInput!, update: OdpowiedzUpdateInput!): Odpowiedz!
  deleteOdpowiedz(where: OdpowiedzWhereUniqueInput!): Odpowiedz
  deleteManyOdpowiedzes(where: OdpowiedzWhereInput): BatchPayload!
  createOdpowiedzi(data: OdpowiedziCreateInput!): Odpowiedzi!
  updateOdpowiedzi(data: OdpowiedziUpdateInput!, where: OdpowiedziWhereUniqueInput!): Odpowiedzi
  updateManyOdpowiedzis(data: OdpowiedziUpdateManyMutationInput!, where: OdpowiedziWhereInput): BatchPayload!
  upsertOdpowiedzi(where: OdpowiedziWhereUniqueInput!, create: OdpowiedziCreateInput!, update: OdpowiedziUpdateInput!): Odpowiedzi!
  deleteOdpowiedzi(where: OdpowiedziWhereUniqueInput!): Odpowiedzi
  deleteManyOdpowiedzis(where: OdpowiedziWhereInput): BatchPayload!
  createPytanie(data: PytanieCreateInput!): Pytanie!
  updatePytanie(data: PytanieUpdateInput!, where: PytanieWhereUniqueInput!): Pytanie
  updateManyPytanies(data: PytanieUpdateManyMutationInput!, where: PytanieWhereInput): BatchPayload!
  upsertPytanie(where: PytanieWhereUniqueInput!, create: PytanieCreateInput!, update: PytanieUpdateInput!): Pytanie!
  deletePytanie(where: PytanieWhereUniqueInput!): Pytanie
  deleteManyPytanies(where: PytanieWhereInput): BatchPayload!
  createUzytkownik(data: UzytkownikCreateInput!): Uzytkownik!
  updateUzytkownik(data: UzytkownikUpdateInput!, where: UzytkownikWhereUniqueInput!): Uzytkownik
  updateManyUzytkowniks(data: UzytkownikUpdateManyMutationInput!, where: UzytkownikWhereInput): BatchPayload!
  upsertUzytkownik(where: UzytkownikWhereUniqueInput!, create: UzytkownikCreateInput!, update: UzytkownikUpdateInput!): Uzytkownik!
  deleteUzytkownik(where: UzytkownikWhereUniqueInput!): Uzytkownik
  deleteManyUzytkowniks(where: UzytkownikWhereInput): BatchPayload!
  createWarunekPytania(data: WarunekPytaniaCreateInput!): WarunekPytania!
  updateWarunekPytania(data: WarunekPytaniaUpdateInput!, where: WarunekPytaniaWhereUniqueInput!): WarunekPytania
  updateManyWarunekPytanias(data: WarunekPytaniaUpdateManyMutationInput!, where: WarunekPytaniaWhereInput): BatchPayload!
  upsertWarunekPytania(where: WarunekPytaniaWhereUniqueInput!, create: WarunekPytaniaCreateInput!, update: WarunekPytaniaUpdateInput!): WarunekPytania!
  deleteWarunekPytania(where: WarunekPytaniaWhereUniqueInput!): WarunekPytania
  deleteManyWarunekPytanias(where: WarunekPytaniaWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Odpowiedz {
  id: ID!
  nrOdpowiedzi: Int!
  odpowiedz: String!
}

type OdpowiedzConnection {
  pageInfo: PageInfo!
  edges: [OdpowiedzEdge]!
  aggregate: AggregateOdpowiedz!
}

input OdpowiedzCreateInput {
  id: ID
  nrOdpowiedzi: Int!
  odpowiedz: String!
}

input OdpowiedzCreateManyInput {
  create: [OdpowiedzCreateInput!]
  connect: [OdpowiedzWhereUniqueInput!]
}

type OdpowiedzEdge {
  node: Odpowiedz!
  cursor: String!
}

type Odpowiedzi {
  id: ID!
  idAnkiety: Ankieta!
  pseudonim: String!
  odpowiedzi(where: OdpowiedzWhereInput, orderBy: OdpowiedzOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Odpowiedz!]
}

type OdpowiedziConnection {
  pageInfo: PageInfo!
  edges: [OdpowiedziEdge]!
  aggregate: AggregateOdpowiedzi!
}

input OdpowiedziCreateInput {
  id: ID
  idAnkiety: AnkietaCreateOneInput!
  pseudonim: String!
  odpowiedzi: OdpowiedzCreateManyInput
}

type OdpowiedziEdge {
  node: Odpowiedzi!
  cursor: String!
}

enum OdpowiedziOrderByInput {
  id_ASC
  id_DESC
  pseudonim_ASC
  pseudonim_DESC
}

type OdpowiedziPreviousValues {
  id: ID!
  pseudonim: String!
}

type OdpowiedziSubscriptionPayload {
  mutation: MutationType!
  node: Odpowiedzi
  updatedFields: [String!]
  previousValues: OdpowiedziPreviousValues
}

input OdpowiedziSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OdpowiedziWhereInput
  AND: [OdpowiedziSubscriptionWhereInput!]
  OR: [OdpowiedziSubscriptionWhereInput!]
  NOT: [OdpowiedziSubscriptionWhereInput!]
}

input OdpowiedziUpdateInput {
  idAnkiety: AnkietaUpdateOneRequiredInput
  pseudonim: String
  odpowiedzi: OdpowiedzUpdateManyInput
}

input OdpowiedziUpdateManyMutationInput {
  pseudonim: String
}

input OdpowiedziWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  idAnkiety: AnkietaWhereInput
  pseudonim: String
  pseudonim_not: String
  pseudonim_in: [String!]
  pseudonim_not_in: [String!]
  pseudonim_lt: String
  pseudonim_lte: String
  pseudonim_gt: String
  pseudonim_gte: String
  pseudonim_contains: String
  pseudonim_not_contains: String
  pseudonim_starts_with: String
  pseudonim_not_starts_with: String
  pseudonim_ends_with: String
  pseudonim_not_ends_with: String
  odpowiedzi_every: OdpowiedzWhereInput
  odpowiedzi_some: OdpowiedzWhereInput
  odpowiedzi_none: OdpowiedzWhereInput
  AND: [OdpowiedziWhereInput!]
  OR: [OdpowiedziWhereInput!]
  NOT: [OdpowiedziWhereInput!]
}

input OdpowiedziWhereUniqueInput {
  id: ID
}

enum OdpowiedzOrderByInput {
  id_ASC
  id_DESC
  nrOdpowiedzi_ASC
  nrOdpowiedzi_DESC
  odpowiedz_ASC
  odpowiedz_DESC
}

type OdpowiedzPreviousValues {
  id: ID!
  nrOdpowiedzi: Int!
  odpowiedz: String!
}

input OdpowiedzScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  nrOdpowiedzi: Int
  nrOdpowiedzi_not: Int
  nrOdpowiedzi_in: [Int!]
  nrOdpowiedzi_not_in: [Int!]
  nrOdpowiedzi_lt: Int
  nrOdpowiedzi_lte: Int
  nrOdpowiedzi_gt: Int
  nrOdpowiedzi_gte: Int
  odpowiedz: String
  odpowiedz_not: String
  odpowiedz_in: [String!]
  odpowiedz_not_in: [String!]
  odpowiedz_lt: String
  odpowiedz_lte: String
  odpowiedz_gt: String
  odpowiedz_gte: String
  odpowiedz_contains: String
  odpowiedz_not_contains: String
  odpowiedz_starts_with: String
  odpowiedz_not_starts_with: String
  odpowiedz_ends_with: String
  odpowiedz_not_ends_with: String
  AND: [OdpowiedzScalarWhereInput!]
  OR: [OdpowiedzScalarWhereInput!]
  NOT: [OdpowiedzScalarWhereInput!]
}

type OdpowiedzSubscriptionPayload {
  mutation: MutationType!
  node: Odpowiedz
  updatedFields: [String!]
  previousValues: OdpowiedzPreviousValues
}

input OdpowiedzSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OdpowiedzWhereInput
  AND: [OdpowiedzSubscriptionWhereInput!]
  OR: [OdpowiedzSubscriptionWhereInput!]
  NOT: [OdpowiedzSubscriptionWhereInput!]
}

input OdpowiedzUpdateDataInput {
  nrOdpowiedzi: Int
  odpowiedz: String
}

input OdpowiedzUpdateInput {
  nrOdpowiedzi: Int
  odpowiedz: String
}

input OdpowiedzUpdateManyDataInput {
  nrOdpowiedzi: Int
  odpowiedz: String
}

input OdpowiedzUpdateManyInput {
  create: [OdpowiedzCreateInput!]
  update: [OdpowiedzUpdateWithWhereUniqueNestedInput!]
  upsert: [OdpowiedzUpsertWithWhereUniqueNestedInput!]
  delete: [OdpowiedzWhereUniqueInput!]
  connect: [OdpowiedzWhereUniqueInput!]
  set: [OdpowiedzWhereUniqueInput!]
  disconnect: [OdpowiedzWhereUniqueInput!]
  deleteMany: [OdpowiedzScalarWhereInput!]
  updateMany: [OdpowiedzUpdateManyWithWhereNestedInput!]
}

input OdpowiedzUpdateManyMutationInput {
  nrOdpowiedzi: Int
  odpowiedz: String
}

input OdpowiedzUpdateManyWithWhereNestedInput {
  where: OdpowiedzScalarWhereInput!
  data: OdpowiedzUpdateManyDataInput!
}

input OdpowiedzUpdateWithWhereUniqueNestedInput {
  where: OdpowiedzWhereUniqueInput!
  data: OdpowiedzUpdateDataInput!
}

input OdpowiedzUpsertWithWhereUniqueNestedInput {
  where: OdpowiedzWhereUniqueInput!
  update: OdpowiedzUpdateDataInput!
  create: OdpowiedzCreateInput!
}

input OdpowiedzWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  nrOdpowiedzi: Int
  nrOdpowiedzi_not: Int
  nrOdpowiedzi_in: [Int!]
  nrOdpowiedzi_not_in: [Int!]
  nrOdpowiedzi_lt: Int
  nrOdpowiedzi_lte: Int
  nrOdpowiedzi_gt: Int
  nrOdpowiedzi_gte: Int
  odpowiedz: String
  odpowiedz_not: String
  odpowiedz_in: [String!]
  odpowiedz_not_in: [String!]
  odpowiedz_lt: String
  odpowiedz_lte: String
  odpowiedz_gt: String
  odpowiedz_gte: String
  odpowiedz_contains: String
  odpowiedz_not_contains: String
  odpowiedz_starts_with: String
  odpowiedz_not_starts_with: String
  odpowiedz_ends_with: String
  odpowiedz_not_ends_with: String
  AND: [OdpowiedzWhereInput!]
  OR: [OdpowiedzWhereInput!]
  NOT: [OdpowiedzWhereInput!]
}

input OdpowiedzWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Pytanie {
  id: ID!
  nrPytania: Int!
  trescPytania: String!
  pytanieKontrolne: Boolean!
  reprezentacjaPytania: String!
  warunkiPytania(where: WarunekPytaniaWhereInput, orderBy: WarunekPytaniaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [WarunekPytania!]
  odpowiedzi(where: OdpowiedzWhereInput, orderBy: OdpowiedzOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Odpowiedz!]
}

type PytanieConnection {
  pageInfo: PageInfo!
  edges: [PytanieEdge]!
  aggregate: AggregatePytanie!
}

input PytanieCreateInput {
  id: ID
  nrPytania: Int!
  trescPytania: String!
  pytanieKontrolne: Boolean!
  reprezentacjaPytania: String!
  warunkiPytania: WarunekPytaniaCreateManyInput
  odpowiedzi: OdpowiedzCreateManyInput
}

input PytanieCreateManyInput {
  create: [PytanieCreateInput!]
  connect: [PytanieWhereUniqueInput!]
}

type PytanieEdge {
  node: Pytanie!
  cursor: String!
}

enum PytanieOrderByInput {
  id_ASC
  id_DESC
  nrPytania_ASC
  nrPytania_DESC
  trescPytania_ASC
  trescPytania_DESC
  pytanieKontrolne_ASC
  pytanieKontrolne_DESC
  reprezentacjaPytania_ASC
  reprezentacjaPytania_DESC
}

type PytaniePreviousValues {
  id: ID!
  nrPytania: Int!
  trescPytania: String!
  pytanieKontrolne: Boolean!
  reprezentacjaPytania: String!
}

input PytanieScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  nrPytania: Int
  nrPytania_not: Int
  nrPytania_in: [Int!]
  nrPytania_not_in: [Int!]
  nrPytania_lt: Int
  nrPytania_lte: Int
  nrPytania_gt: Int
  nrPytania_gte: Int
  trescPytania: String
  trescPytania_not: String
  trescPytania_in: [String!]
  trescPytania_not_in: [String!]
  trescPytania_lt: String
  trescPytania_lte: String
  trescPytania_gt: String
  trescPytania_gte: String
  trescPytania_contains: String
  trescPytania_not_contains: String
  trescPytania_starts_with: String
  trescPytania_not_starts_with: String
  trescPytania_ends_with: String
  trescPytania_not_ends_with: String
  pytanieKontrolne: Boolean
  pytanieKontrolne_not: Boolean
  reprezentacjaPytania: String
  reprezentacjaPytania_not: String
  reprezentacjaPytania_in: [String!]
  reprezentacjaPytania_not_in: [String!]
  reprezentacjaPytania_lt: String
  reprezentacjaPytania_lte: String
  reprezentacjaPytania_gt: String
  reprezentacjaPytania_gte: String
  reprezentacjaPytania_contains: String
  reprezentacjaPytania_not_contains: String
  reprezentacjaPytania_starts_with: String
  reprezentacjaPytania_not_starts_with: String
  reprezentacjaPytania_ends_with: String
  reprezentacjaPytania_not_ends_with: String
  AND: [PytanieScalarWhereInput!]
  OR: [PytanieScalarWhereInput!]
  NOT: [PytanieScalarWhereInput!]
}

type PytanieSubscriptionPayload {
  mutation: MutationType!
  node: Pytanie
  updatedFields: [String!]
  previousValues: PytaniePreviousValues
}

input PytanieSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PytanieWhereInput
  AND: [PytanieSubscriptionWhereInput!]
  OR: [PytanieSubscriptionWhereInput!]
  NOT: [PytanieSubscriptionWhereInput!]
}

input PytanieUpdateDataInput {
  nrPytania: Int
  trescPytania: String
  pytanieKontrolne: Boolean
  reprezentacjaPytania: String
  warunkiPytania: WarunekPytaniaUpdateManyInput
  odpowiedzi: OdpowiedzUpdateManyInput
}

input PytanieUpdateInput {
  nrPytania: Int
  trescPytania: String
  pytanieKontrolne: Boolean
  reprezentacjaPytania: String
  warunkiPytania: WarunekPytaniaUpdateManyInput
  odpowiedzi: OdpowiedzUpdateManyInput
}

input PytanieUpdateManyDataInput {
  nrPytania: Int
  trescPytania: String
  pytanieKontrolne: Boolean
  reprezentacjaPytania: String
}

input PytanieUpdateManyInput {
  create: [PytanieCreateInput!]
  update: [PytanieUpdateWithWhereUniqueNestedInput!]
  upsert: [PytanieUpsertWithWhereUniqueNestedInput!]
  delete: [PytanieWhereUniqueInput!]
  connect: [PytanieWhereUniqueInput!]
  set: [PytanieWhereUniqueInput!]
  disconnect: [PytanieWhereUniqueInput!]
  deleteMany: [PytanieScalarWhereInput!]
  updateMany: [PytanieUpdateManyWithWhereNestedInput!]
}

input PytanieUpdateManyMutationInput {
  nrPytania: Int
  trescPytania: String
  pytanieKontrolne: Boolean
  reprezentacjaPytania: String
}

input PytanieUpdateManyWithWhereNestedInput {
  where: PytanieScalarWhereInput!
  data: PytanieUpdateManyDataInput!
}

input PytanieUpdateWithWhereUniqueNestedInput {
  where: PytanieWhereUniqueInput!
  data: PytanieUpdateDataInput!
}

input PytanieUpsertWithWhereUniqueNestedInput {
  where: PytanieWhereUniqueInput!
  update: PytanieUpdateDataInput!
  create: PytanieCreateInput!
}

input PytanieWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  nrPytania: Int
  nrPytania_not: Int
  nrPytania_in: [Int!]
  nrPytania_not_in: [Int!]
  nrPytania_lt: Int
  nrPytania_lte: Int
  nrPytania_gt: Int
  nrPytania_gte: Int
  trescPytania: String
  trescPytania_not: String
  trescPytania_in: [String!]
  trescPytania_not_in: [String!]
  trescPytania_lt: String
  trescPytania_lte: String
  trescPytania_gt: String
  trescPytania_gte: String
  trescPytania_contains: String
  trescPytania_not_contains: String
  trescPytania_starts_with: String
  trescPytania_not_starts_with: String
  trescPytania_ends_with: String
  trescPytania_not_ends_with: String
  pytanieKontrolne: Boolean
  pytanieKontrolne_not: Boolean
  reprezentacjaPytania: String
  reprezentacjaPytania_not: String
  reprezentacjaPytania_in: [String!]
  reprezentacjaPytania_not_in: [String!]
  reprezentacjaPytania_lt: String
  reprezentacjaPytania_lte: String
  reprezentacjaPytania_gt: String
  reprezentacjaPytania_gte: String
  reprezentacjaPytania_contains: String
  reprezentacjaPytania_not_contains: String
  reprezentacjaPytania_starts_with: String
  reprezentacjaPytania_not_starts_with: String
  reprezentacjaPytania_ends_with: String
  reprezentacjaPytania_not_ends_with: String
  warunkiPytania_every: WarunekPytaniaWhereInput
  warunkiPytania_some: WarunekPytaniaWhereInput
  warunkiPytania_none: WarunekPytaniaWhereInput
  odpowiedzi_every: OdpowiedzWhereInput
  odpowiedzi_some: OdpowiedzWhereInput
  odpowiedzi_none: OdpowiedzWhereInput
  AND: [PytanieWhereInput!]
  OR: [PytanieWhereInput!]
  NOT: [PytanieWhereInput!]
}

input PytanieWhereUniqueInput {
  id: ID
}

type Query {
  ankieta(where: AnkietaWhereUniqueInput!): Ankieta
  ankietas(where: AnkietaWhereInput, orderBy: AnkietaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Ankieta]!
  ankietasConnection(where: AnkietaWhereInput, orderBy: AnkietaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AnkietaConnection!
  odpowiedz(where: OdpowiedzWhereUniqueInput!): Odpowiedz
  odpowiedzes(where: OdpowiedzWhereInput, orderBy: OdpowiedzOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Odpowiedz]!
  odpowiedzesConnection(where: OdpowiedzWhereInput, orderBy: OdpowiedzOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OdpowiedzConnection!
  odpowiedzi(where: OdpowiedziWhereUniqueInput!): Odpowiedzi
  odpowiedzis(where: OdpowiedziWhereInput, orderBy: OdpowiedziOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Odpowiedzi]!
  odpowiedzisConnection(where: OdpowiedziWhereInput, orderBy: OdpowiedziOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OdpowiedziConnection!
  pytanie(where: PytanieWhereUniqueInput!): Pytanie
  pytanies(where: PytanieWhereInput, orderBy: PytanieOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Pytanie]!
  pytaniesConnection(where: PytanieWhereInput, orderBy: PytanieOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PytanieConnection!
  uzytkownik(where: UzytkownikWhereUniqueInput!): Uzytkownik
  uzytkowniks(where: UzytkownikWhereInput, orderBy: UzytkownikOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Uzytkownik]!
  uzytkowniksConnection(where: UzytkownikWhereInput, orderBy: UzytkownikOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UzytkownikConnection!
  warunekPytania(where: WarunekPytaniaWhereUniqueInput!): WarunekPytania
  warunekPytanias(where: WarunekPytaniaWhereInput, orderBy: WarunekPytaniaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [WarunekPytania]!
  warunekPytaniasConnection(where: WarunekPytaniaWhereInput, orderBy: WarunekPytaniaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WarunekPytaniaConnection!
  node(id: ID!): Node
}

type Subscription {
  ankieta(where: AnkietaSubscriptionWhereInput): AnkietaSubscriptionPayload
  odpowiedz(where: OdpowiedzSubscriptionWhereInput): OdpowiedzSubscriptionPayload
  odpowiedzi(where: OdpowiedziSubscriptionWhereInput): OdpowiedziSubscriptionPayload
  pytanie(where: PytanieSubscriptionWhereInput): PytanieSubscriptionPayload
  uzytkownik(where: UzytkownikSubscriptionWhereInput): UzytkownikSubscriptionPayload
  warunekPytania(where: WarunekPytaniaSubscriptionWhereInput): WarunekPytaniaSubscriptionPayload
}

type Uzytkownik {
  id: ID!
  login: String!
  haslo: String!
  token: String!
}

type UzytkownikConnection {
  pageInfo: PageInfo!
  edges: [UzytkownikEdge]!
  aggregate: AggregateUzytkownik!
}

input UzytkownikCreateInput {
  id: ID
  login: String!
  haslo: String!
  token: String!
}

input UzytkownikCreateOneInput {
  create: UzytkownikCreateInput
  connect: UzytkownikWhereUniqueInput
}

type UzytkownikEdge {
  node: Uzytkownik!
  cursor: String!
}

enum UzytkownikOrderByInput {
  id_ASC
  id_DESC
  login_ASC
  login_DESC
  haslo_ASC
  haslo_DESC
  token_ASC
  token_DESC
}

type UzytkownikPreviousValues {
  id: ID!
  login: String!
  haslo: String!
  token: String!
}

type UzytkownikSubscriptionPayload {
  mutation: MutationType!
  node: Uzytkownik
  updatedFields: [String!]
  previousValues: UzytkownikPreviousValues
}

input UzytkownikSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UzytkownikWhereInput
  AND: [UzytkownikSubscriptionWhereInput!]
  OR: [UzytkownikSubscriptionWhereInput!]
  NOT: [UzytkownikSubscriptionWhereInput!]
}

input UzytkownikUpdateDataInput {
  login: String
  haslo: String
  token: String
}

input UzytkownikUpdateInput {
  login: String
  haslo: String
  token: String
}

input UzytkownikUpdateManyMutationInput {
  login: String
  haslo: String
  token: String
}

input UzytkownikUpdateOneRequiredInput {
  create: UzytkownikCreateInput
  update: UzytkownikUpdateDataInput
  upsert: UzytkownikUpsertNestedInput
  connect: UzytkownikWhereUniqueInput
}

input UzytkownikUpsertNestedInput {
  update: UzytkownikUpdateDataInput!
  create: UzytkownikCreateInput!
}

input UzytkownikWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  login: String
  login_not: String
  login_in: [String!]
  login_not_in: [String!]
  login_lt: String
  login_lte: String
  login_gt: String
  login_gte: String
  login_contains: String
  login_not_contains: String
  login_starts_with: String
  login_not_starts_with: String
  login_ends_with: String
  login_not_ends_with: String
  haslo: String
  haslo_not: String
  haslo_in: [String!]
  haslo_not_in: [String!]
  haslo_lt: String
  haslo_lte: String
  haslo_gt: String
  haslo_gte: String
  haslo_contains: String
  haslo_not_contains: String
  haslo_starts_with: String
  haslo_not_starts_with: String
  haslo_ends_with: String
  haslo_not_ends_with: String
  token: String
  token_not: String
  token_in: [String!]
  token_not_in: [String!]
  token_lt: String
  token_lte: String
  token_gt: String
  token_gte: String
  token_contains: String
  token_not_contains: String
  token_starts_with: String
  token_not_starts_with: String
  token_ends_with: String
  token_not_ends_with: String
  AND: [UzytkownikWhereInput!]
  OR: [UzytkownikWhereInput!]
  NOT: [UzytkownikWhereInput!]
}

input UzytkownikWhereUniqueInput {
  id: ID
  login: String
  token: String
}

type WarunekPytania {
  id: ID!
  nrPytania: Int!
  nrOdpowiedzi: Int!
  spojnik: String!
}

type WarunekPytaniaConnection {
  pageInfo: PageInfo!
  edges: [WarunekPytaniaEdge]!
  aggregate: AggregateWarunekPytania!
}

input WarunekPytaniaCreateInput {
  id: ID
  nrPytania: Int!
  nrOdpowiedzi: Int!
  spojnik: String!
}

input WarunekPytaniaCreateManyInput {
  create: [WarunekPytaniaCreateInput!]
  connect: [WarunekPytaniaWhereUniqueInput!]
}

type WarunekPytaniaEdge {
  node: WarunekPytania!
  cursor: String!
}

enum WarunekPytaniaOrderByInput {
  id_ASC
  id_DESC
  nrPytania_ASC
  nrPytania_DESC
  nrOdpowiedzi_ASC
  nrOdpowiedzi_DESC
  spojnik_ASC
  spojnik_DESC
}

type WarunekPytaniaPreviousValues {
  id: ID!
  nrPytania: Int!
  nrOdpowiedzi: Int!
  spojnik: String!
}

input WarunekPytaniaScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  nrPytania: Int
  nrPytania_not: Int
  nrPytania_in: [Int!]
  nrPytania_not_in: [Int!]
  nrPytania_lt: Int
  nrPytania_lte: Int
  nrPytania_gt: Int
  nrPytania_gte: Int
  nrOdpowiedzi: Int
  nrOdpowiedzi_not: Int
  nrOdpowiedzi_in: [Int!]
  nrOdpowiedzi_not_in: [Int!]
  nrOdpowiedzi_lt: Int
  nrOdpowiedzi_lte: Int
  nrOdpowiedzi_gt: Int
  nrOdpowiedzi_gte: Int
  spojnik: String
  spojnik_not: String
  spojnik_in: [String!]
  spojnik_not_in: [String!]
  spojnik_lt: String
  spojnik_lte: String
  spojnik_gt: String
  spojnik_gte: String
  spojnik_contains: String
  spojnik_not_contains: String
  spojnik_starts_with: String
  spojnik_not_starts_with: String
  spojnik_ends_with: String
  spojnik_not_ends_with: String
  AND: [WarunekPytaniaScalarWhereInput!]
  OR: [WarunekPytaniaScalarWhereInput!]
  NOT: [WarunekPytaniaScalarWhereInput!]
}

type WarunekPytaniaSubscriptionPayload {
  mutation: MutationType!
  node: WarunekPytania
  updatedFields: [String!]
  previousValues: WarunekPytaniaPreviousValues
}

input WarunekPytaniaSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: WarunekPytaniaWhereInput
  AND: [WarunekPytaniaSubscriptionWhereInput!]
  OR: [WarunekPytaniaSubscriptionWhereInput!]
  NOT: [WarunekPytaniaSubscriptionWhereInput!]
}

input WarunekPytaniaUpdateDataInput {
  nrPytania: Int
  nrOdpowiedzi: Int
  spojnik: String
}

input WarunekPytaniaUpdateInput {
  nrPytania: Int
  nrOdpowiedzi: Int
  spojnik: String
}

input WarunekPytaniaUpdateManyDataInput {
  nrPytania: Int
  nrOdpowiedzi: Int
  spojnik: String
}

input WarunekPytaniaUpdateManyInput {
  create: [WarunekPytaniaCreateInput!]
  update: [WarunekPytaniaUpdateWithWhereUniqueNestedInput!]
  upsert: [WarunekPytaniaUpsertWithWhereUniqueNestedInput!]
  delete: [WarunekPytaniaWhereUniqueInput!]
  connect: [WarunekPytaniaWhereUniqueInput!]
  set: [WarunekPytaniaWhereUniqueInput!]
  disconnect: [WarunekPytaniaWhereUniqueInput!]
  deleteMany: [WarunekPytaniaScalarWhereInput!]
  updateMany: [WarunekPytaniaUpdateManyWithWhereNestedInput!]
}

input WarunekPytaniaUpdateManyMutationInput {
  nrPytania: Int
  nrOdpowiedzi: Int
  spojnik: String
}

input WarunekPytaniaUpdateManyWithWhereNestedInput {
  where: WarunekPytaniaScalarWhereInput!
  data: WarunekPytaniaUpdateManyDataInput!
}

input WarunekPytaniaUpdateWithWhereUniqueNestedInput {
  where: WarunekPytaniaWhereUniqueInput!
  data: WarunekPytaniaUpdateDataInput!
}

input WarunekPytaniaUpsertWithWhereUniqueNestedInput {
  where: WarunekPytaniaWhereUniqueInput!
  update: WarunekPytaniaUpdateDataInput!
  create: WarunekPytaniaCreateInput!
}

input WarunekPytaniaWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  nrPytania: Int
  nrPytania_not: Int
  nrPytania_in: [Int!]
  nrPytania_not_in: [Int!]
  nrPytania_lt: Int
  nrPytania_lte: Int
  nrPytania_gt: Int
  nrPytania_gte: Int
  nrOdpowiedzi: Int
  nrOdpowiedzi_not: Int
  nrOdpowiedzi_in: [Int!]
  nrOdpowiedzi_not_in: [Int!]
  nrOdpowiedzi_lt: Int
  nrOdpowiedzi_lte: Int
  nrOdpowiedzi_gt: Int
  nrOdpowiedzi_gte: Int
  spojnik: String
  spojnik_not: String
  spojnik_in: [String!]
  spojnik_not_in: [String!]
  spojnik_lt: String
  spojnik_lte: String
  spojnik_gt: String
  spojnik_gte: String
  spojnik_contains: String
  spojnik_not_contains: String
  spojnik_starts_with: String
  spojnik_not_starts_with: String
  spojnik_ends_with: String
  spojnik_not_ends_with: String
  AND: [WarunekPytaniaWhereInput!]
  OR: [WarunekPytaniaWhereInput!]
  NOT: [WarunekPytaniaWhereInput!]
}

input WarunekPytaniaWhereUniqueInput {
  id: ID
}
`
      }
    