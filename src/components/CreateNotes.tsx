import * as React from 'react';
import { Form, Button } from 'react-bootstrap';

interface ICreateNotesProps {
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = (props) => {
  return (
      <>
        <h2>Create Notes</h2>
        <Form className="mt-3 mb-3">
            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Title for the Note"></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Title</Form.Label>
                <Form.Control placeholder="Enter your notes" as="textarea" rows={3}></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
                <Form.Label>Title</Form.Label>
                <Form.Control type="color" id="colorInput" default="#dfdfdf" title="Enter Coor"></Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary">Submit</Button>
        </Form>
      </>
  );
};

export default CreateNotes;
