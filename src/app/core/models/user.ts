import { School } from "./school";

export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    school?: School;
}
