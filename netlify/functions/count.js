exports.handler = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({ count: 10 }) // 假计数
    };
};