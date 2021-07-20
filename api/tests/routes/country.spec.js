/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Tourism, conn } = require('../../src/db.js');


const agent = session(app);
const activity = {
  name: 'Caminar',
  difficulty:3,
  duration:3,
  season:"summer"
};

describe('Tourism routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Tourism.sync({ force: true })
    .then(() => Tourism.create(activity)));
  describe('GET /activity', () => {
    it('should get 200', () =>
      agent.get('/activity').expect(200)
    );
  });
});
