import express from "express";
const router = express.Router();
import sendMail from "../services/sendMail.js";

router.post("/", async(req, res) => {
	try {
		const { name, mobile, question } = req.body;

		const HTMLCODE = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Welcome Email Notification</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap"
                    rel="stylesheet"
                />
                <style>
                    * { 
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                        font-family: "Inter", sans-serif;
                    }
                    .container {
                        padding: 10px;
                        width: 650px;
                    }
                    .center-logo {
                        text-align: center;
                    }
                    .header-content p {
                        font-size: 25px;
                        color: rgb(29, 50, 98);
                        margin: 1em auto;
                    }
                    .header-content p span {
                        color: #ffc800;
                    }
                    .design {
                        background-color: rgb(29, 50, 98);
                        width: 100%;
                        height: 4px;
                        position: relative;
                    }
                    .design::before {
                        content: "";
                        background-color: #ffc800;
                        width: 100%;
                        position: absolute;
                        height: 4px;
                        bottom: -4px;
                    }
                    .salutation {
                        margin: 20px 0;
                    }
                    .m-text{
                        margin-bottom: 25px;
                    }
                    .list {
                        margin-top: 15px;
                        padding-bottom: 15px;
                        border-bottom: 2px solid rgba(29, 50, 98, 0.1);
                    }
                    .list p {
                        margin-bottom: 5px;
                        color: rgb(29, 50, 98);
                        font-weight: 600;
                    }
        
                    .list span{
                        font-size: 13px;
                    }
        
                    .pt-2{
                        padding-top: 1.5rem;
                        color: rgb(29, 50, 98);
                        font-weight: 600;
                    }
                    .footer {
                        margin: 17px 0;
                        font-size: 14px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="center-logo">
                        <img src="" alt="">
                    </div>
                    <div class="header-content">
                        <p>Question <span>Feedback</span> for Mucnchies and Thought</p>
                    </div>
                    <div class="design"></div>
                    <div class="message">
                        <h4 class="salutation">Dear Admin,</h4>
                        <p class="m-text">
                        A new question have been received in our website:
                        </p>

                        <p>Name:  ${name}</p>
                        <p>Mobile:  ${mobile}</p>
                        <p>Question:  ${question}</p>
                        
                        <div class="list">
                        Please take the necessary action accordingly.
                        
                        </div>
        
                    </div>
                    <div class="footer">
                        <p>
                        Thank you.
                        </p>
                    </div>
                </div>
            </body>
        </html>
        
                    `
                   
    const myStatus = sendMail('"Munchies and Thoughts" <charles.charles@kukhonadigital.co.za>', 'cedric@kukhonadigital.co.za', 'Questions Alert', HTMLCODE)

                    if(myStatus){
                        res.json({status: true, message: "message sent"})
                    }else{
                        res.json({status: false, message: "unable to establish connection"})
                    }
    
	} catch (error) {
		throw new Error(error); 
	}
});

export default router;
