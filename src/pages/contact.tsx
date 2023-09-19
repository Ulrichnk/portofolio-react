import React, { FunctionComponent, useState } from "react";
type Field = {
  value?: any;
  error?: string;
  isValid?: boolean;
};
type Form = {
  name: Field;
  surname?: Field;
  email: Field;
  number?: Field;
  subject: Field;
  message: Field;
};
type Props = {
  //define your props here
};

const Contact: FunctionComponent<Props> = ({}) => {
  const [Form, setForm] = useState<Form>({
    email: { value: "", isValid: true },
    message: { value: "", isValid: true },
    name: { value: "", isValid: true },
    subject: { value: "", isValid: true },
  });
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const fieldName: string = e.target.name;
    const fieldValue: string = e.target.value;
    const newField: Field = { [fieldName]: { value: fieldValue } };
    console.log("vous avez selectionner", fieldName);

    setForm({ ...Form, ...newField });
  };
  const HandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    console.log(Form);
  };
  return (
    <div className="contact" id="contact">
      <h1 className="txt-center">Contact</h1>
      <div className="flexCenter">
        <form
          className="form"
          onSubmit={(e) => {
            HandleSubmit(e);
          }}
        >
          <div className="flex-column cont-input">
               
            <label className="label">
              Votre mail:{" "}
              <input
                className="input"
                name="email"
                type="email"
                value={Form.email.value}
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
            </label >{" "}
            <label className="label">
              Votre nom:{" "}
              <input
                className="input"
                name="name"
                value={Form.name.value}
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
            </label>
            <label className="label">
              Votre subject :{" "}
              <input
                className="input"
                name="subject"
                type="text"
                value={Form.subject.value}
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
            </label>
            <label className="label-1">
              Votre message:{" "}
              <textarea
                className="input-msg"
                name="message"
                value={Form.message.value}
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
            </label>
          </div>
          <button type="submit" className="btn-1">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
