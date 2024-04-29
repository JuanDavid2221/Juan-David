import db from '../config/config-db';
import User from '../Dto/UserDto';

class UserRepository {

    static async add(user: User){
        const sql = 'INSERT INTO users (email, nombres, departamento, municipio, direccion, telefono, password) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const values = [user.email, user.nombres, user.departamento, user.municipio, user.direccion, user.telefono, user.password];
        return db.execute(sql, values);
    }
    static async sel(nombres : string) {
      try {
        // Realizar una consulta SQL para buscar un usuario por su correo electrónico
        const query = 'SELECT * FROM users WHERE nombres = ?';
        const values = [nombres];

        // Devolver los resultados de la consulta
        return await db.execute(query, values);

      } catch (error) {
        // Manejar errores si ocurre algún problema durante la consulta
        console.error('Error en UserRepository.add:', error);
        throw error;
      }
    }

}
export default UserRepository;

