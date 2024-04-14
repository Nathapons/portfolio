const skill = require('@/datas/MySkill.json')

export async function GET() {
    return Response.json(skill)
}