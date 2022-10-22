import db from '../db';
import { definitions } from '@/types/supabase';
import { Request, Response } from 'express';


interface InviteDetails {
    id: definitions['users']['id']
    name: definitions['users']['name']
    is_admin: definitions['users']['is_admin']
    invite_code: definitions['users']['invite_code']
    invite_used: definitions['users']['invite_used']
    session: {name: definitions['sessions']['name']}
}

const getInviteDetails = async function (req: Request, res: Response) {
    try {
        if (typeof req.query.inviteCode !== 'string') {
            throw 'Invite code not found';
        };
        const { data: inviteDetails, error: inviteDetailsError } = await db
            .from<InviteDetails>('users')
            .select(`
                id,
                name,
                is_admin,
                session:session_id(name)
            `)
            .eq('invite_code', req.query.inviteCode)
            .neq('invite_used', true)
            .limit(1)
            .single();
        if (inviteDetailsError) {
            console.log(inviteDetailsError);
            throw 'Could not find user by invite';
        };
        if (inviteDetails) {
            const { data, error: stampingInviteError } = await db
                .from<definitions['users']>('users')
                .update({
                    'invite_used': true
                })
                .eq('id', inviteDetails.id);
            if (stampingInviteError) {
                console.log(stampingInviteError);  
                throw 'Could not void user\'s invite';
            };
            res.status(200).json({
                name: inviteDetails.name,
                isAdmin: inviteDetails.is_admin,
                sessionName: inviteDetails.session.name
            })
        }
    } catch (error) {
        error === 'Invite code not found' ?
        res.status(400).send(error) :
        res.status(500).send(error);
    }
}

export default {
    getInviteDetails
}