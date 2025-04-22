import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

interface User {
    username: string;
    password: string;
}

const users: User[] = [];

function generateToken(payload: object): string {


    return jwt.sign(
        payload,
        process.env.JWT_SECRET as string,
        {
            expiresIn: Number(process.env.JWT_EXPIRES_IN) || 1
        }
    );
}


export const register = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    users.push({ username, password: hash });
    res.status(201).json({ message: 'Usuário criado!' });
};

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Credenciais inválidas' });
    }
    const token = generateToken({ username });
    res.json({ token });
};

export const verify = (req: Request, res: Response) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'Sem token' });

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        res.json({ valid: true, user: decoded });
    } catch {
        res.status(401).json({ valid: false });
    }
};
