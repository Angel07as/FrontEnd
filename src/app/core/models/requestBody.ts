export interface RequestBody {
    email: string,
    password: string,
    name?: string, 
    surname?: string, 
    phone?: Number, 
    departament?: string,
    projects?: string[]
}