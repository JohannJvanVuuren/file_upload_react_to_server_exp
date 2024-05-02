
export const retrieveFile = async (req, res) => {
  if (req.file) {
    res.status(200).send({message: 'File saved successfully'});
  } else {
    res.status(400).send({message: 'Error creating file'});
  }
}