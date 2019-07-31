import Sequelize from 'sequelize'

import { mysql } from '../../config'
const { database, port, user, password, host, port} = mysql

export const sequelize = new Sequelize(database, user, password, {
  dialect: 'mysql',
  host,
  port,
  logging: true,
  timezone: '+08:00',
  define: {
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    underscored: true,
    freezeTableName: true,
    scopes: {
      bh: {
        attributes: {
          exclude: ['updated_at', 'deleted_at', 'created_at']
        }
      }
    }
  }
})


// 创建模型
sequelize.sync({
  force: false
})