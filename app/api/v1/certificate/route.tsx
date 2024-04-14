const certificate = require('@/datas/Certificate.json')

export async function GET() {
    return Response.json(certificate)
}