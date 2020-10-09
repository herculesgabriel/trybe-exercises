const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

test('if turns all letters to upper case', () => {
  uppercase('hercules', (string) => {
    expect(string).toBe('HERCULES');
  });
});