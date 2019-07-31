import { sequelize } from '../lib/db';
import { Sequelize, Model} from 'sequelize'


// 定义用户模型
export default class User extends Model {

}

// 初始用户模型
User.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nickname: Sequelize.STRING
}, {
    sequelize,
    tableName: 'user'
})