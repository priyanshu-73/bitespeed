import Contact from "../model/contact.model.js";

export const identify = async (req, res) => {
  const { email, phone } = req.body;

  const existingContacts = await Contact.find({
    $or: [{ email }, { phone }],
  }).sort({ createdAt: 1 });

  let primaryContact = null;
  let linkedContacts = [];

  if (existingContacts.length > 0) {
    primaryContact = existingContacts.find(
      (contact) => contact.linkedPrecedence === "Primary"
    ) || existingContacts[0];

    linkedContacts = existingContacts.filter(
      (contact) => contact._id.toString() !== primaryContact._id.toString()
    );

    linkedContacts.forEach((contact) => {
      contact.linkedPrecedence = "Secondary";
      contact.linkedId = primaryContact._id;
      contact.save();
    });
  }

  if (!existingContacts.some((c) => c.email === email && c.phone === phone)) {
    const newContact = await Contact.create({
      email,
      phone,
      linkedPrecedence: "Secondary",
      linkedId: primaryContact ? primaryContact._id : null,
    });

    if (!primaryContact) {
      primaryContact = newContact;
    } else {
      linkedContacts.push(newContact);
    }
  }

  const emails = new Set(
    [primaryContact, ...linkedContacts].map((c) => c.email).filter(Boolean)
  );
  const phones = new Set(
    [primaryContact, ...linkedContacts].map((c) => c.phone).filter(Boolean)
  );
  const secondaryContactIds = linkedContacts.map((c) => c._id);

  res.status(200).json({
    contact: {
      primaryContactId: primaryContact._id,
      emails: Array.from(emails),
      phoneNumbers: Array.from(phones),
      secondaryContactIds,
    },
  });
};
