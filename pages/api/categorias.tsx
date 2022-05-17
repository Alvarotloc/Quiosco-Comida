import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma =  new PrismaClient();

export default async function handler(req:NextApiRequest,res:NextApiResponse) {
    const categorias = await prisma.categoria.findMany();
    res.status(200).json(categorias)
}