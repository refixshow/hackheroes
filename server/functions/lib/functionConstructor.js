class FunctionConstructor {
  constructor(model, body) {
    this.model = model;
    this.body = body;
  }

  get = () => {
    const { user_id } = this.body;
    return this.model.find({ user_id });
  };
  post = () => {
    const { user_id, ...data } = this.body;
    if (user_id) {
      data.user_id = user_id;
    }
    const newObject = new this.model(data);
    return newObject.save();
  };
  patch = () => {
    const { object_id, ...data } = this.body;
    return this.model.updateOne({ _id: object_id }, data);
  };
  delete = () => {
    const { object_id } = this.body;
    return this.model.deleteOne({ _id: object_id });
  };
}

module.exports = FunctionConstructor;
