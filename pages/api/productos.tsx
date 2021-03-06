import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma =  new PrismaClient();

export default async function handler(req:NextApiRequest,res:NextApiResponse) {
    const productos = await prisma.producto.findMany({
        where : {
            categoriaId : 1
        }
    });
    res.status(200).json(productos)
}