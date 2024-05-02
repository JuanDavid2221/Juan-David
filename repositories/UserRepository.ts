import db from '../config/config-db';
import Auth from '../Dto/AuthDto';
import User from '../Dto/UserDto';

export class UserRepository {

    static async add(user: User){
        const sql = 'INSERT INTO users (email, nombres, departamento, municipio, direccion, telefono, password) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const values = [user.email, user.nombres, user.departamento, user.municipio, user.direccion, user.telefono, user.password];
        return db.execute(sql, values);
    }
        static async sel(auth: Auth){
            const sql = 'SELECT password FROM users WHERE nombres=?';
            const values = [auth.nombres];
            return db.execute(sql,values)
        }
    
        static async verytoken(user: User){
            const sql = 'SELECT * FROM users WHERE nombres =?'
            const values = [user.nombres];
            return db.execute(sql, values);
        }
    }
    
    
    export default UserRepository;



