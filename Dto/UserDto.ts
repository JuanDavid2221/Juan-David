class User {
    email: string;
    nombres: string;
    departamento: string;
    municipio: string;
    direccion: string;
    telefono: string;
    password: string;
    constructor(
        email: string, nombres: string,
        departamento: string, municipio: string,
        direccion: string, telefono: string,
        password: string
    ) {
        this.email = email;
        this.nombres = nombres;
        this.departamento = departamento;
        this.municipio = municipio;
        this.direccion = direccion;
        this.telefono = telefono;
        this.password = password;
    }
}

export default User;