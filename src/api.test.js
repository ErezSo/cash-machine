const request = require("supertest");
const server = require("./server");

const api = request(server);

describe("API", () => {
  test("successful POST request", () => {
    const expected = ["50.00", "20.00", "10.00"];
    return api
      .get("/withdraw/80")
      .then(res => {
        expect(res.body).toEqual(expected);
      })
      .catch(err => {
        console.error(err);
      });
  });

  describe("failing POST request", () => {
    test("not a number value", () => {
      const expected = [];
      return api
        .get("/withdraw/asdf")
        .expect(400)
        .then(res => {
          expect(res.body).toEqual(expected);
        })
        .catch(err => {
          console.error(err);
        });
    });

    test("negative number value", () => {
      const expected = "InvalidArgumentException";
      return api
        .get("/withdraw/-130")
        .expect(400)
        .then(res => {
          expect(res.text).toBe(expected);
        })
        .catch(err => {
          console.error(err);
        });
    });

    test("not devisible by 10 number value", () => {
      const expected = "NoteUnavailableException";
      return api
        .get("/withdraw/125")
        .expect(400)
        .then(res => {
          expect(res.text).toBe(expected);
        })
        .catch(err => {
          console.error(err);
        });
    });
  });
});
