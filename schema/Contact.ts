import { Document, model, models, Schema } from "mongoose";

export interface IContact extends Document {
  name: string;
  tel: string;
  email?: string;
  dateOfBirth?: Date;
  description?: string;
}

const contactSchema: Schema = new Schema({
  name: { type: String, required: true },
  tel: { type: String, required: true },
  email: { type: String },
  dateOfBirth: { type: Date },
  description: { type: String },
});

const Contact = models.Contact || model<IContact>("Contact", contactSchema);

export default Contact;
