import mongoose from "mongoose";

const contactSchema = mongoose.Schema(
  {
    phone: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    linkedId: {
      type: Array,
      default: null,
    },
    linkedPrecedence: {
      type: String,
      default: "Primary",
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
