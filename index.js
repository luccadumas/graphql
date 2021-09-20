const { gql, ApolloServer } = require("apollo-server");

const produtos = [
    {
        id: 1,
        nome: 'Notebook',
        valor: 12000.32
    },
    {
        id: 2,
        nome: 'TV',
        valor: 6000.32
    }
];

const usuarios = [
    {
        id: 1,
        nome: 'Teste 1',
        salario: 1234.54,
        ativo: true,
        idade: 23
    },
    {
        id: 2,
        nome: 'Teste 2',
        salario: 4321.54,
        ativo: false,
        idade: 30
    }
];

const typeDefs = gql`
	type Produto {
		id: ID
		nome: String
		valor: Float
	}
	type Usuario {
		idade: Int
		salario: Float
		nome: String
		ativo: Boolean
		id: ID
	}
	type Query {
		usuarios: [Usuario]
		produtos: [Produto]
	}
`;
const resolvers = {
    Query: {
        usuarios() {
            return usuarios;
        },
        produtos() {
            return produtos;
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen(4000)