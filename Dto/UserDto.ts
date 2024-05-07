    class User {
        private _email: string;
        private _nombres: string;
        private _departamento:string;
        private _municipio: string;
        private _direccion:string;
        private _telefono: string;
        private _password: string
    constructor(
        email: string, nombres: string,
        departamento: string, municipio: string,
        direccion: string, telefono: string,
        password: string
    ) {
        this._email = email;
        this._nombres = nombres;
        this._departamento=departamento;
        this._municipio = municipio;
        this._direccion=direccion;
        this._telefono = telefono;
        this._password = password
    }
// Getters
get email(): string {
    return this._email;
}

get nombres(): string {
    return this._nombres;
}

get departamento(): string {
    return this._departamento;
}

get municipio(): string {
    return this._municipio;
}

get direccion(): string {
    return this._direccion;
}

get telefono(): string {
    return this._telefono;
}

get password(): string {
    return this._password;
}

// Setters
set email(email: string) {
    this._email = email;
}

set nombres(nombres: string) {
    this._nombres = nombres;
}

set departamento(departamento: string) {
    this._departamento = departamento;
}

set municipio(municipio: string) {
    this._municipio = municipio;
}

set direccion(direccion: string) {
    this._direccion = direccion;
}

set telefono(telefono: string) {
    this._telefono = telefono;
}

set password(password: string) {
    this._password = password;
}
}


export default User;