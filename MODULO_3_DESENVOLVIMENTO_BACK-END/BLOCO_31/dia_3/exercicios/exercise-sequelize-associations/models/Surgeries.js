const createSurgeries = (sequelize, DataTypes) => {
  const Surgeries = sequelize.define(
    'Surgeries',
    {
      surgery_id: { type: DataTypes.INTEGER, primaryKey: true },
      specialty: DataTypes.STRING,
      doctor: DataTypes.INTEGER,
    },
    {
      timestamps: false,
    },
  );

  return Surgeries;
};

module.exports = createSurgeries;
