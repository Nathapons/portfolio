export async function GET() {
    const data = [
        {
            "name": "Home",
            "path": "/"
        },
        {
            "name": "Experience",
            "path": "/experience"
        }
    ]
    return  Response.json(data)
}