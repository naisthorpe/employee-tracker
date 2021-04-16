const { Model, DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/connection");
const Job = require("./Job");

class Employee extends Model {}

Employee.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type:DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        job_id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Job,
                key: "id",
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        manager_id: {
            type:DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: Employee,
                key: "id",
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "employee"
    }
);

module.exports = Employee;