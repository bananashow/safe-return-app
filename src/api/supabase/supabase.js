import { createClient } from '@supabase/supabase-js';
import { SUPABASE_PROJECT_URL, SUPABASE_API_KEY } from '@env';

const supabaseUrl = SUPABASE_PROJECT_URL ?? '';
const supabaseKey = SUPABASE_API_KEY ?? '';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
