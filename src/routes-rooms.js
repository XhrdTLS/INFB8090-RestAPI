import { Router } from 'express'

const router = Router()

router.get('/', (req, res, next) => {
    const { id } = req.params
    console.log('probando middleware')
    next()
})

module.exports = router;
