import { createSchema, Type, typedModel } from 'ts-mongoose'
 
const MemberSchema = createSchema({
    parentId: Type.string(),
    idContact: Type.string({ unique: true, lowercase: true, trim: true, required: true }),
    longitude: Type.number({ required: true }),
    latitude: Type.number({ required: true }),
    active: Type.boolean(),
    registrationDate: Type.date(),
})

const Member = typedModel('member', MemberSchema)
export { Member, MemberSchema }