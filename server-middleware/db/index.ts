import { createClient } from '@supabase/supabase-js';


const db = createClient(
    process.env.DB_URL || 'url_load_failed',
    process.env.DB_PASSWORD || 'password_load_failed'
);

export default db;