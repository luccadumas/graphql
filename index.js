const { ApolloServer } = require("apollo-server");
const { typeDefs, resolvers } = require("./src/graphql");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(3000).then(({ url }) => { console.log(`Server is started! 🚀 ${url}`); });

// apollographql

// Query

// query pesquisaUsuario($id: Int, $showPerfil: Boolean!, $skipTelefone: Boolean!){
//   usuario(id: $id){
//     id,
//     nome,
//     telefone @skip(if: $skipTelefone),
//     perfil @include(if: $showPerfil){
//       descricao
//     }
//   }
// }

// Variables

// {
//   "id": 1,
//   "showPerfil": true,
//   "skipTelefone": false
// }
