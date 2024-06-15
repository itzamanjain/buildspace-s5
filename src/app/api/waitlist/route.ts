// saving the email id of the user in the waitlist collection
import {connectDb} from '../../../dbconfig/dbConfig'
import Waitlist from "../../../models/waitlist.model.js";
import { NextRequest,NextResponse} from 'next/server'

connectDb()

export  async function POST(request:NextRequest, response:NextResponse) {
    
        try {
            const reqBody = await request.json()
            const { email } = reqBody;

        if (!email) {
            return NextResponse.json({error:'Please fill all fields'},{status:400})
        }
        const waitlist = await Waitlist.findOne({ email });
        if (waitlist) {
            return NextResponse.json({error:'You are already in the waitlist'},{status:400})

            
        }
        const newWaitlist = new Waitlist({ email });
        await newWaitlist.save();
        return NextResponse.json({Message:'You have been added to the waitlist',success:true},{status:200})
        } catch (error) {
            console.log(error);
            return NextResponse.json(error.message, {status: 500})
        }

        
}