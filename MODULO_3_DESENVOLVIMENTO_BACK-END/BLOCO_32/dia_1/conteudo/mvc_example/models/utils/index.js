const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullname = [firstName, middleName, lastName]
    .filter(name => name)
    .join(' ');

  return { id, firstName, middleName, lastName, name: fullname };
};

const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
});

module.exports = {
  getNewAuthor,
  serialize,
};
