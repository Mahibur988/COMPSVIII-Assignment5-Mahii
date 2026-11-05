
const request = require('supertest');
const app = require('../server');

describe('Recipe API Tests', () => {

  test('GET /api/health should return healthy status', async () => {
    const response = await request(app).get('/api/health');

    expect(response.statusCode).toBe(200);

    // Intentionally incorrect for the failed pipeline demonstration
    expect(response.body.status).toBe('unhealthy');
  });

  test('GET /api/recipes should return recipes', async () => {
    const response = await request(app).get('/api/recipes');

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('POST /api/recipes should reject missing fields', async () => {
    const response = await request(app)
      .post('/api/recipes')
      .send({ name: 'Test Recipe' });

    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe('All fields are required');
  });

  test('POST /api/recipes should create a recipe', async () => {
    const response = await request(app)
      .post('/api/recipes')
      .send({
        name: 'Test Recipe',
        ingredients: 'Rice, salt',
        instructions: 'Cook the rice',
        cookTime: '20 minutes'
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.name).toBe('Test Recipe');
  });

  test('GET /api/recipes/:id should return 404 for missing recipe', async () => {
    const response = await request(app).get('/api/recipes/999999');

    expect(response.statusCode).toBe(404);
  });

});
