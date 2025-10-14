import bcrypt from 'bcrypt';
import UserModel from '../../app/Models/UserModel.js';

export default {
    up: async () => {
        const senha = "123456";
        try {
            await UserModel.bulkCreate([
                { name: 'User1', email: 'user1@example.com', password: await bcrypt.hash(senha, 10) },
                { name: 'User2', email: 'user2@example.com', password: await bcrypt.hash(senha, 10) },
                { name: 'User3', email: 'user3@example.com', password: await bcrypt.hash(senha, 10) },
                { name: 'User4', email: 'user4@example.com', password: await bcrypt.hash(senha, 10) },
                { name: 'User5', email: 'user5@example.com', password: await bcrypt.hash(senha, 10) },
                { name: 'User6', email: 'user6@example.com', password: await bcrypt.hash(senha, 10) },
            ]);
            console.log('Usuários inseridos com sucesso!');
        } catch (error) {
            console.error('Erro ao inserir usuários:', error);
        }
    },

    down: async () => {
        try {
            await UserModel.destroy({
                where: {
                    email: [
                        'user1@example.com',
                        'user2@example.com',
                        'user3@example.com',
                        'user4@example.com',
                        'user5@example.com',
                        'user6@example.com'
                    ]
                }
            });
            console.log('Usuários removidos com sucesso!');
        } catch (error) {
            console.error('Erro ao remover usuários:', error);
        }
    }
};

// Permite rodar direto via node
if (process.argv[1].endsWith('001_users.js')) {
    (async () => {
        await import('./001_users.js').then(seed => seed.default.up());
        process.exit();
    })();
}
