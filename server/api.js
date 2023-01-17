export async function api(app) {
  app.get("/api/client-id", (req, res) => {
    res.send({ id: conn.clientID });
  });
  app.get("/api/test-api", async (req, res) => {
    res.send({ check: true });
  });
}
