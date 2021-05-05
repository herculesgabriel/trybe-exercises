const createEmployees = (sequelize, DataTypes) => {
  const Employees = sequelize.define(
    'Employees',
    {
      employee_id: { type: DataTypes.INTEGER, primaryKey: true },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      age: DataTypes.INTEGER,
    },
    {
      timestamps: false,
    },
  );

  Employees.associate = (models) => {
    Employees.hasOne(models.Addresses,
      { foreignKey: 'employee_id', as: 'addresses' });
  };

  return Employees;
};

module.exports = createEmployees;
