const createPatientSurgeries = (sequelize, _DataTypes) => {
  const Patient_surgeries = sequelize.define(
    'Patient_surgeries',
    {},
    { timestamps: false },
  );

  Patient_surgeries.associate = (models) => {
    models.Patients.belongsToMany(models.Surgeries, {
      as: 'surgeries',
      through: Patient_surgeries,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id',
    });
    models.Surgeries.belongsToMany(models.Patients, {
      as: 'patients',
      through: Patient_surgeries,
      foreignKey: 'surgery_id',
      otherKey: 'patient_id',
    });
  };

  return Patient_surgeries;
};

module.exports = createPatientSurgeries;