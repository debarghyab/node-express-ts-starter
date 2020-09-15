import request from 'supertest';
import server from '../src/index';

afterEach(() => server.server.close());

describe("Test the root path", () => {
  test("It should return 200 status", async () => {
    const response = await request(server.app).get("/");
    expect(response.status).toBe(200);
  });
  test("It should return Hello World", async () => {
    const response = await request(server.app).get("/");
    expect(response.text).toEqual("Hello World");
  });
});