const { getServices, addService, editServiceByID, deleteServiceByID } = require('../services/services')

exports.getService = async (req, res, next) => {
    try {
        const result = await getServices();
        res.status(200).json(result);
    } catch (error) {
        console.error('Erro ao buscar serviços:', error.message);
        next(error);
    }
};

exports.addService = async (req, res, next) => {
    try {
        console.log("cheguei")
        const { name, description, duration, price } = req.body;
        const result = await addService({ name, description, duration, price });

        res.status(201).json(result);
    } catch (error) {
        console.error('Erro ao adicionar serviço:', error.message);
        next(error);
    }
};

exports.editService = async (req, res, next) => {
    try {
        const serviceData = req.body;
        const id = req.params.id;
        const result = await editServiceByID(id, serviceData);

        if (result.length === 0) {
            return res.status(404).json({ message: "Serviço não encontrado" });
        }

        res.status(200).send();
    } catch (error) {
        console.error('Erro ao atualizar serviço:', error.message);
        next(error);
    }
};

exports.deleteService = async (req, res, next) => {
    try {
        const id = req.params.id;
        await deleteServiceByID(id);
        res.status(204).send();
    } catch (error) {
        console.error('Erro ao deletar serviço:', error.message);
        next(error);
    }
};
