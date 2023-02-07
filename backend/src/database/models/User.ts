import { DataTypes } from 'sequelize'
import db from '.'
import { Gasto } from './Gasto'

export const User = db.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'users',
  underscored: true
})

User.hasMany(Gasto, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
})
