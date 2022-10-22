import db from '../db';
import { definitions } from '@/types/supabase';
import { Request, Response } from 'express'

const create = async function (req: Request, res: Response) {
    try {
        if (!(req.body.sessionName && req.body.creatorName)) {
            throw 'Invalid form data';
        }
        // Create session and its first member as admin
        const { data: session, error: sessionError } = await db
            .from<definitions['sessions']>('sessions')
            .insert([
                {
                    name: req.body.sessionName
                }
            ])
            .limit(1)
            .single();
        if (sessionError) throw sessionError;
        if (session) {
            const { data: creator, error: creatorError } = await db
                .from<definitions['users']>('users')
                .insert([
                    {
                        session_id: session.id,
                        name: req.body.creatorName, 
                        gender: req.body.creatorGender || 'm', 
                        is_admin: true
                    },
                ])
                .limit(1)
                .single();
            if (creatorError) throw creatorError;
            if (creator) {
                res.status(201).json({
                    inviteCode: creator.invite_code
                })
            }
        }
    } catch (error) {
        error === 'Invalid form data' ?
        res.status(400).send('Invalid form data') :
        res.status(500).send('Error while creating session');
    }
}

export default {
    create
}