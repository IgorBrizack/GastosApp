import { DataTypes } from 'sequelize'
import db from '.'
// import { User } from './User'

export const Gasto = db.define('Gasto', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  value: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  gastoDate: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'gastos',
  underscored: true
})

// Gasto.belongsTo(User, {
//   onDelete: 'CASCADE'
// })
