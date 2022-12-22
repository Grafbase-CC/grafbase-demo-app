
export default function handler(req, res) {
  console.log(JSON.stringify(req.body));

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
  .then((data) => res.status(200).json({ data }));
}
