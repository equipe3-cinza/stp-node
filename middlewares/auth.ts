import { Request, Response, NextFunction } from 'express';
import { expressjwt as jwt } from 'express-jwt';

const jwtMiddleware = jwt({ secret: 'seu-segredo', algorithms: ['HS256'] });

// Middleware para verificar as roles
const checkRole = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as { roles: string[] };
    if (roles.some(role => user.roles.includes(role))) {
      next();
    } else {
      res.status(403).send('Acesso negado');
    }
  };
};

export { jwtMiddleware, checkRole };
