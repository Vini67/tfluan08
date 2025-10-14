// UserViewController.js

import UserModel from '../../../Models/UserModel.js';

export const UserViewController = {
  async index(req, res) {
    try {
      // Usuário atual vindo do middleware JWT
      const currentUser = req.user;

      // Buscar todos os usuários do banco
      const users = await UserModel.findAll();

      // Renderizar a view SSR
      res.render('users', {
        header: "Aula 07 - V de Views, SSR e SSG",
        currentUser,
        users
      });
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao carregar usuários');
    }
  },
};

