const Function = (model, body) => {
    this.model = model;
    this.body = body;
    this.get = async () => {
        try {
            const { object_id } = this.body;
            const res = await this.model.find({ _id: object_id });
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({ response: res, message: 'OK' }),
            });
        } catch (err) {
            callback(null, {
                statusCode: 404,
                body: JSON.stringify({ response: null, message: 'Not Found' }),
            });
        }
    };
    this.post = async () => {
        try {
            const { user_id, ...data } = this.body;
            // Ten if jest tu dlatego, ze user_id wystepuje w metodzie POST we wszystkich funkcjach z wyjatkiem 'user'
            if (user_id) {
                data.user_id = user_id;
            }
            const newObject = new this.model(data);
            const res = await newObject.save();
            callback(null, {
                statusCode: 201,
                body: JSON.stringify({ response: res, message: 'OK' }),
            });
        } catch (err) {
            callback(null, {
                statusCode: 404,
                body: JSON.stringify({
                    response: null,
                    message: 'Not found',
                }),
            });
        }
    };
    this.patch = async () => {
        try {
            const { object_id, ...data } = this.body;
            const res = await this.model.updateOne({ _id: object_id }, data);
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({ response: res, message: 'OK' }),
            });
        } catch (err) {
            callback(null, {
                statusCode: 404,
                body: JSON.stringify({
                    response: null,
                    message: 'Not found',
                }),
            });
        }
    };
    this.delete = async () => {
        try {
            const { object_id } = this.body;
            const res = await this.model.deleteOne({ _id: object_id });
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({ response: res, message: 'OK' }),
            });
        } catch (err) {
            callback(null, {
                statusCode: 404,
                body: JSON.stringify({
                    response: null,
                    message: 'Not found',
                }),
            });
        }
    };
};

module.exports = Function;
