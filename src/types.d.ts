export interface User { // newUsers
    id: number;
    profile?: string;
    username: string;
    password: string;
    payments?: any;
    location?: string;
}

export interface NewUser extends User { // to Create New User
    name: string;
    lastname: string
    mail: string;
}