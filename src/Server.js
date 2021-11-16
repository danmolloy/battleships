import { createServer, Model } from "miragejs"

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
    },
    
    routes() {
      this.namespace = "api"

      this.get("/get/users", () => ({
        users: [
          { name: "Kelly", id: 1, moves: 38 },
          { name: "Eoghan", id: 2, moves: 44 },
          { name: "Fiona", id: 3, moves: 45 },
          { name: "Ed", id: 4, moves: 48 },
          { name: "Dan", id: 5, moves: 49 },
          { name: "Jorge", id: 6, moves: 54 },
        ]
      }), { timing: 1000 })

      let newId = 7
      this.post("/post/users", (schema, request) => {
        let attrs = JSON.parse(request.requestBody)
        attrs.id = newId++
        return { user: attrs }
      })
    },
  })

  return server
}