import nodemailer from 'nodemailer'

export async function POST(request) {
   try {
    const {name, email, phone, comment} = await request.json();

    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        host: 'smtp-mail.outlook.com',
        secure: false,
        port: 587,
        auth: {
            user: 'facuchena@hotmail.com',
            pass: 'password'
        },

    })

    const mailOption = {
        from: 'facuchena@hotmail.com',
        to: 'facuchena@hotmail.com',
        subject: "EJEMPLO",
        html: `<h3>hola que tal, ${name}, ${email}, ${phone}, ${comment}</h3>`
    }

    await transporter.sendMail(mailOption)

    return NextResponse.json({ message: "Email Sent Succesfully" }, { status: 200 })
   } catch (error) {
    return NextResponse.json({ message: "ERROR"}, { status: 500 })
   }
}