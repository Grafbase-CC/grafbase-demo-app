
export default function handler(req, res) {
  fetch(process.env.GRAFBASE_API_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-api-key': process.env.GRAFBASE_API_KEY
    },
    body: JSON.stringify({
      query: req.body.query,
      variables: req.body.variables
    })
  })
  .then(res => res.json())
  .then(({ data: { userCreate } }) => {
    res.status(200).json({ userCreate })
  });
}
