import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ndnznwzbsfyhqvodxokk.supabase.co'   // Sadəcə bir dəfə
const supabaseKey = 'sb_publishable_nvuHbPZIMRNDJtr-gROtng_60HqpFap'  // Supabase anon/public key

export const supabase = createClient(supabaseUrl, supabaseKey)