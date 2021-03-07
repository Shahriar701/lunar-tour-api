import { hello, getAllListings } from "./query";

export const resolvers = {
    Query: {
        getAllListings: (root, args, context) => getAllListings(args, context),
        hello: (root, args, context) => hello(args, context)
    },
};