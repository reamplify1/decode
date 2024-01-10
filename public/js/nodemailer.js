const nodeMailer = require('nodemailer');

const html = `
	<h1>Hello World</h1>
	<p>This is email</p>
`;

const emails = [req.body.email]

async function main(){
	const transporter = nodeMailer.createTransport({
			host: 'mail@decode.kz',
			port: 465,
			secure: true,
			auth: {
				user: 'test@openjavascript.info',
				password: '123'
			}
		});
	const info = await transporter.sendMail({
		from: 'test <test@openjavascript.info>',
		to: emails,
		subject: 'Testing, teesting, 123',
		html: html, 
		attachments: [{
			filename: 
		}]
	})
	console.log('email sent' + info.messageId);
	console.log(info.accepted);
	console.log(info.rejected);
}

main();
// .catch(e => console.log(e));
