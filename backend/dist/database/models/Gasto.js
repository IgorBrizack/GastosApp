"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gasto = void 0;
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
exports.Gasto = _1.default.define('Gasto', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    value: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    gastoDate: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'gastos',
    underscored: true
});
