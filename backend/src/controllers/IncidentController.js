const connection = require('../database/connections');

module.exports = {

    async index(Request, Response) {
        const { page = 1 } = Request.query;

        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);

        Response.header('X-Total-Count', count['count(*)']);

        return Response.json(incidents);
    },

    async create(Request, Response) {
        const { title, description, value } = Request.body;
        const ong_id = Request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });
        return Response.json({ id });
    },

    async delete(Request, Response) {
        const { id } = Request.params;
        const ong_id = Request.headers.authorization;

        const incidents = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (incidents.ong_id != ong_id) {
            return Response.status(401).json({ error: 'Operation not permitted' });
        }
        await connection('incidents').where('id', id).delete();
        return Response.status(204).send();

    }
};