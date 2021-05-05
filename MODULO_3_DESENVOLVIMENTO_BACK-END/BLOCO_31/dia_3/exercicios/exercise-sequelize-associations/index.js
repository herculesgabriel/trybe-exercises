const express = require('express');

const { Patients, Plans, Surgeries } = require('./models');

const app = express();

app.use(express.json());

app.get('/patients', async (req, res) => {
  try {
    const patients = await Patients.findAll({
      include: { model: Plans, as: 'plan' }
    });

    res.status(200).send(patients);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message || 'Erro interno' });
  }
});

app.get('/patients/surgeries', async (req, res) => {
  const { hide_doctor } = req.query;

  try {
    const options = {
      include: {
        model: Surgeries,
        as: 'surgeries',
        through: { attributes: [] },
      },
    };

    if (hide_doctor && hide_doctor === 'true') {
      options.include.attributes = { exclude: ['doctor'] };
    }

    const patients = await Patients.findAll(options);

    res.status(200).send(patients);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message || 'Erro interno' });
  }
});

app.get('/patients/plans/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const patients = await Patients.findAll({
      where: { plan_id: id },
    });

    res.status(200).send({ patients });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }


});

app.post('/patients', async (req, res) => {
  const { fullname, plan_id } = req.body;

  try {
    const foundPlan = await Plans.findOne({ where: { plan_id } });

    if (!foundPlan) {
      return res.status(400).send({ error: 'Invalid plan id' });
    }

    const patient = await Patients.create({ fullname, plan_id });

    res.status(201).send(patient);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message || 'Erro interno' });
  }
});

app.get('/surgeries/:doctor', async (req, res) => {
  const { doctor } = req.params;

  try {
    const surgeries = await Surgeries.findAll({
      where: { doctor },
      include: {
        model: Patients,
        as: 'patients',
        through: { attributes: [] }
      },
      attributes: { exclude: ['doctor'] }
    });

    res.status(200).send({ doctor, surgeries });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

app.listen(3000, () => console.log('Port: 3000'));
