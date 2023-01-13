exports.helloWorld = (req, res) => {
  const message = "<font color='blue'> Cloud Function!!!! </font><br><b>v 1.0.0</b>;
  res.status(200).send(message);
  }
