import db from '../config/config-db';
import User from '../Dto/UserDto';
import bcrypt from 'bcryptjs';
import Auth from '../Dto/AuthDto';

export class UserRepository {

    static async add(user: User){
        const sql = 'INSERT INTO users (email, nombres, departamento, municipio, direccion, telefono, password) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const values = [user.email, user.nombres, user.departamento, user.municipio, user.direccion, user.telefono, user.password];
        return db.execute(sql, values);
    }

    static async sel(auth: Auth){
        const sql = 'SELECT password FROM users WHERE nombres=?';
        const values = [auth.nombres];
        const result: any = await db.execute(sql, values);
        if (result[0].length > 0){
          const isPasswordValid = await bcrypt.compare(auth.password, result[0][0].password);
          if (isPasswordValid){
            return {logged: true, status: "inicio de sesion exitosa"}
          }
          return {logged: false, status: "Invalid username or password" };
        }
        return {logged: false, status: "Invalid username or password" };
    }
  
            static async verytoken(user: User){
              const sql = 'SELECT * FROM users WHERE nombres =?'
              const values = [user.nombres];
              return db.execute(sql, values);
          }
      }
  
  
  
  export default UserRepository;


