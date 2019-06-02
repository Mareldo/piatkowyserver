const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const {forwardTo} = require('prisma-binding')
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const resolvers = {
  Query: {
    ankieta: forwardTo('db'),
    pobierzListeAnkiet: (root, args, context, info) => {
      return context.prisma.ankietas(args, info)
    },
    wynikiAnkiety: (root, args, context, info) => {
      return null
    },
    logowanie: async (root, args, context, info) => {

      var result = await context.prisma.uzytkownik({login: args.login})

      if(!bcrypt.compareSync(args.haslo, result.haslo)) { throw new Error("Haslo niepoprawne")}

      return context.prisma.uzytkownik({login: args.login}, info)
    }
  },
  Mutation: {
    rejestracja: (root, args, context, info) => {
      var hash = bcrypt.hashSync(args.haslo, saltRounds);

      var token = jwt.sign(
        { 
          login: args.login,
          haslo: args.haslo
        }, 'dupskoxD')

      return context.prisma.createUzytkownik({
        login: args.login, 
        haslo: hash, 
        token: token}, info)
    },
    dodajAnkiete: (root, args, context, info) => {
      var mutationString = `{`
      mutationString += `"nazwaAnkiety": "${args.data.nazwaAnkiety}",`
      mutationString += `"tworca": { "connect": { "token": "${args.data.tworca}"}},`
      mutationString += `"czasZakonczenia": "${args.data.czasZakonczenia}",`
      mutationString += `"pytania": {`
      mutationString += `"create": [`
      var pytanieStr = ""
      args.data.pytania.forEach((pytanie, key, arr) => { 
        pytanieStr = `{`
        pytanieStr += `"numerPytania": ` + pytanie.numerPytania + `,`
        pytanieStr += `"trescPytnia": "` + pytanie.trescPytnia + `",`
        pytanieStr += `"pytanieKontrolne": ` + pytanie.pytanieKontrolne + `,`
        pytanieStr += `"reprezentacjaPytania": "` + pytanie.reprezentacjaPytania + `",`
        pytanieStr += `"odpowiedzi": { "create" :[`
        pytanie.odpowiedzi.forEach((odpowiedzTem, keyOdp, arrOdp) => {
          if (Object.is(arrOdp.length - 1, keyOdp)) {
            pytanieStr += `{ "nrOdpowiedzi": ${odpowiedzTem.nrOdpowiedzi} ,"odpowiedz": "${odpowiedzTem.odpowiedz}"}`
          } else {
            pytanieStr += `{ "nrOdpowiedzi": ` + odpowiedzTem.nrOdpowiedzi + `,`
            pytanieStr += `"odpowiedz": "` + odpowiedzTem.odpowiedz + `"},`
          }
        })
        if (Object.is(arr.length - 1, key)){
          pytanieStr += `]}`
        }
        else {
          pytanieStr += `]},`  
      }})
      mutationString += pytanieStr

      mutationString += "}]}}"

      console.log(mutationString)

      return context.prisma.createAnkieta(JSON.parse(mutationString))
    },
    przeslijOdpowiedzi: async (root, args, context, info) => {
      var mutationString = `{`
      mutationString += `"idAnkiety": { "connect": { "id": "${args.data.idAnkiety}"}},`
      mutationString += `"pseudonim": "${args.data.pseudonim}",`
      mutationString += `"odpowiedzi": {`
      mutationString += `"create": [`
      var pytanieStr = ""
      args.data.odpowiedzi.forEach((odpowiedzi, key, arr) => { 
        pytanieStr = `{`
        pytanieStr += `"nrOdpowiedzi": ` + odpowiedzi.nrOdpowiedzi + `,`
        pytanieStr += `"odpowiedz": "` + odpowiedzi.odpowiedz + `"}`
        if (!Object.is(arr.length - 1, key)){
          pytanieStr += `,` 
        } 
      })
      mutationString += pytanieStr

      mutationString += "]}}"

      console.log(mutationString)
      
      return context.prisma.createOdpowiedzi(JSON.parse(mutationString))
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { 
    prisma
},
})
server.start(() => console.log(`Server is running on http://localhost:4000`))