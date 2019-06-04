const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const {forwardTo, Prisma} = require('prisma-binding')
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const resolvers = {
  Query: {
    ankieta: forwardTo('db'),
    odpowiedzis: forwardTo('db'),
    pobierzListeAnkiet: (root, args, context, info) => {
      console.log(Date.now() + " pobierzListeAnkiet")
      return context.prisma.ankietas(args, info)
    },
    wynikiAnkiety: (root, args, context, info) => {
      console.log(Date.now() + " wynikiAnkiety")
      return null
    },
    logowanie: async (root, args, context, info) => {
      console.log(Date.now() + " logowanie")
      var result = await context.prisma.uzytkownik({login: args.login})

      if(!bcrypt.compareSync(args.haslo, result.haslo)) { throw new Error("Haslo niepoprawne")}

      return context.prisma.uzytkownik({login: args.login}, info)
    }
  },
  Mutation: {
    rejestracja: (root, args, context, info) => {
      console.log(Date.now() + " rejestracja")
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
      console.log(Date.now() + " dodajAnkiete")
      var mutationString = `{`
      mutationString += `"nazwaAnkiety": "${args.data.nazwaAnkiety}",`
      mutationString += `"tworca": { "connect": { "token": "${args.data.tworca}"}},`
      mutationString += `"czasZakonczenia": "${args.data.czasZakonczenia}",`
      mutationString += `"pytania": {`
      mutationString += `"create": [`
      var pytanieStr = ""
      args.data.pytania.forEach((pytanie, key, arr) => { 
        mutationString += `{`
        mutationString += `"nrPytania": ` + pytanie.nrPytania + `,`
        mutationString += `"trescPytania": "` + pytanie.trescPytania + `",`
        mutationString += `"pytanieKontrolne": ` + pytanie.pytanieKontrolne + `,`
        mutationString += `"reprezentacjaPytania": "` + pytanie.reprezentacjaPytania + `",`
        if (pytanie.warunkiPytania) {
          mutationString += `"warunkiPytania": {`
          mutationString += `"create": [`
        pytanie.warunkiPytania.forEach((warunek, key, arr) => { 
          mutationString += `{ `
          mutationString += `"nrPytania": ` + warunek.nrPytania + `,`
          mutationString += `"nrOdpowiedzi": ` + warunek.nrOdpowiedzi + `,`
          mutationString += `"spojnik": "` + warunek.spojnik + `"}`
          if (!Object.is(arr.length - 1, key)){
            mutationString += `,` 
          } 
        })
        mutationString += "]},"
        }
        if (pytanie.odpowiedzi) {
          mutationString += `"odpowiedzi": { "create" :[`
        pytanie.odpowiedzi.forEach((odpowiedzTem, keyOdp, arrOdp) => {
          if (Object.is(arrOdp.length - 1, keyOdp)) {
            mutationString += `{ "nrOdpowiedzi": ${odpowiedzTem.nrOdpowiedzi} ,"odpowiedz": "${odpowiedzTem.odpowiedz}"}`
          } else {
            mutationString += `{ "nrOdpowiedzi": ` + odpowiedzTem.nrOdpowiedzi + `,`
            mutationString += `"odpowiedz": "` + odpowiedzTem.odpowiedz + `"},`
          }
        })
        mutationString += `]}`
        if (Object.is(arr.length - 1, key)){
          mutationString += ``
        }
        else {
          mutationString += `},`  
        }
        }
        
      })
      

      mutationString += "}]}}"
      console.log(mutationString);
      var a;
      try {
        a = JSON.parse(mutationString);
      } catch(e) {
        console.log(e)
        throw new Error("Niepoprawne dane");
      }
      return context.prisma.createAnkieta(a)
    },
    przeslijOdpowiedzi: async (root, args, context, info) => {
      console.log(Date.now() + " przeslijOdpowiedzi")
      var mutationString = `{`
      mutationString += `"idAnkiety": { "connect": { "id": "${args.data.idAnkiety}"}},`
      mutationString += `"pseudonim": "${args.data.pseudonim}",`
      mutationString += `"odpowiedzi": {`
      mutationString += `"create": [`
      if (args.data.odpowiedzi) {
      args.data.odpowiedzi.forEach((odpowiedzi, key, arr) => { 
        mutationString += `{`
        mutationString += `"nrOdpowiedzi": ` + odpowiedzi.nrOdpowiedzi + `,`
        mutationString += `"odpowiedz": "` + odpowiedzi.odpowiedz + `"}`
        if (!Object.is(arr.length - 1, key)){
          mutationString += `,` 
        } 
      })
    }

      mutationString += "]}}"
      
      return context.prisma.createOdpowiedzi(JSON.parse(mutationString))
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { 
    prisma,
    db: new Prisma({
      typeDefs: `src\\generated\\prisma-client\\prisma-client.graphql`,
      endpoint: 'https://eu1.prisma.sh/mariusz-cieslak/GraphQL/dev',
    }),
},
})
server.start(() => console.log(`Server is running`))