import Joi from "joi";

interface UserInterface {
  name: string;
  email: string;
  password: string;
}

const createUserValidation = (payload: UserInterface) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  return schema.validate(payload);
};

export default {
  createUserValidation,
};
