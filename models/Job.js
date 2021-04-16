const { Model, DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/connection");
const Department = require("./Department");
class Job extends Model {}

Job.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type:DataTypes.STRING,
            allowNull: false
        },
        salary: {
            type:DataTypes.INTEGER,
            allowNull: false
        },
        department_id: {
            type:DataTypes.INTEGER,
            references: {
                model: Department,
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
        modelName: "job"
    }
);

// Job.belongsTo(Department);

module.exports = Job;