import { createContext } from "react";

const userContext=createContext({
    loggedInuser:"default user",
});

export default userContext;