"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const Gasto_1 = require("./Gasto");
exports.User = _1.default.define('User', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'users',
    underscored: true
});
exports.User.hasMany(Gasto_1.Gasto, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});
Gasto_1.Gasto.hasOne(exports.User, {
    foreignKey: 'id'
});
