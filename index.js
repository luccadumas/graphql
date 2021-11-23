const { gql, ApolloServer } = require("apollo-server");

const db = [
  {
    id: 1,
    nome: "Teste",
    email: "teste@email.com",
    telefone: "11 1234 1234",
    perfil: 1,
  },
  {
    id: 2,
    nome: "Teste 2",
    email: "teste2@email.com",
    telefone: "34 1234 1234",
    perfil: 2,
  },
];

const perfis = [
  { id: 1, descricao: "ADMIN" },
  { id: 2, descricao: "NORMAL" },
];

const typeDefs = gql`
  type Usuario {
    id: Int
    nome: String
    email: String
    telefone: String
    perfil: Perfil
  }
  type Perfil {
    id: Int
    descricao: String
  }
  type Query {
    usuario(id: Int): Usuario
    perfis: [Perfil]
  }
`;
const resolvers = {
  Usuario: {
    perfil(usuario) {
      return perfis.find((p) => p.id === usuario.perfil);
    },
  },
  Query: {
    usuario(obj, args) {
      return db.find((db) => db.id === args.id);
    },
    perfis() {
      return perfis;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(3000);

// query Query {
// 	perfis {
// 	  descricao
// 	},
// 	usuario(id: 1) {
// 	  id,
// 	  nome,
// 	  email,
// 	  telefone
// 	}
// }
