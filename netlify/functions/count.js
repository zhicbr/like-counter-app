const { createClient } = require('@supabase/supabase-js');

exports.handler = async (event) => {
    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
    if (event.httpMethod === 'POST') { // 更新计数
        const { data, error } = await supabase.from('likes').select('count').eq('id', 1);
        if (error) return { statusCode: 500, body: JSON.stringify({ error }) };
        const newCount = data[0].count + 1;
        await supabase.from('likes').update({ count: newCount }).eq('id', 1);
        return { statusCode: 200, body: JSON.stringify({ count: newCount }) };
    } else { // GET 获取计数
        const { data, error } = await supabase.from('likes').select('count').eq('id', 1);
        if (error) return { statusCode: 500, body: JSON.stringify({ error }) };
        return { statusCode: 200, body: JSON.stringify({ count: data[0].count }) };
    }
};