import {Hono} from "hono";
import {setCookie} from "hono/cookie";
const app = new Hono()


app.get('/dest', async (c) => {
  return c.json({
    message: "Oops, you are redirected to the wrong page."
  })
})

app.get('/api/hello', async (c) => {
  return c.json({
    message: "Hi, Hono"
  })
})

app.get('/api/redirect', async (c) => {
  setCookie(c, 'example', 'token', {})
  return c.redirect('/dest')
})


export default app