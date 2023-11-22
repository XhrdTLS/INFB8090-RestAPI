const z = require('zod')

const roomSchema = z.object({
    id: z.number.int({
        invalid_type_error: 'El ID debe ser un entero',
        required_error: 'Se necesita el ID (identificador).'
    }),
    name: z.string({
        invalid_type_error: 'El nombre debe ser un string.',
        required_error: 'Se necesita conocer la capacidad.'
    }),
    capacity: z.number.int({
        invalid_type_error: 'La capacidad debe ser un entero.',
        required_error: 'Se necesita ingresar la capacidad.'
    }),
    location: z.number().int({
        invalid_type_error: 'La ubicación debe ser un entero',
        required_error: 'Se necesita conocer la ubicación'
    }).min(1).max(5),
    type: z.number({
        invalid_type_error: 'La ubicación debe ser un entero',
        required_error: 'Se necesita conocer la ubicación'
    }).min(1).max(4),
    
})

export function validateRoom(input) {
    return roomSchema.safeParse(input)
}

export function validatePartialRoom(input) {
    return roomSchema.partial().safeParse(input)
}