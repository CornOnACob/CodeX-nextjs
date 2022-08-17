const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


export default async function exerciseById(req, res) {
    try{
        const exercise = await prisma.exercise.findUnique({
            where: {
                id: parseInt(req.query.id)
            }
        })
        res.json(exercise)
    }catch(error){
        res.status(400).json({error})
    }
  }