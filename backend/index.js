const Aws = require('aws-sdk')

Aws.config.update({
    region: 'us-east-1',
});

const dynamodb = new Aws.DynamoDB.DocumentClient();

// Tables 

const statesTable = 'states';
const affliationsTable = 'affliations';
const usersTable = 'users';


// lambda handler
exports.handler = async function (event) {
    console.log('Requested event', event);
    let response;
    switch (event.httpMethod) {
        case 'GET':
            if (event.path === '/states-affiliates') {
                response = await getStatesWithAffiliates();
            }
            break;
        case 'POST':
            if (event.path === '/register') {
                response = await registerUser(JSON.parse(event.body));
            }
            break;
        default:
            response = buildResponse(404, 'Not Found');
    }
    return response;
};


function buildResponse(statusCode, body) {
    return {
        statusCode: statusCode,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
        isBase64Encoded: false
    };
}

// function to get all the states with affiliations
async function getStatesWithAffiliates() {
    try {
        const statesData = await dynamodb.scan({ TableName: statesTable }).promise();
        const statesWithAffiliates = await Promise.all(
            statesData.Items.map(async (state) => {
                const affiliatesData = await dynamodb.scan({
                    TableName: affliationsTable,
                    FilterExpression: 'state_id = :state_id',
                    ExpressionAttributeValues: { ':state_id': state.id }
                }).promise();
                return {
                    state: state.name,
                    affiliates: affiliatesData.Items.map(affiliate => ({ id: affiliate.id, name: affiliate.name }))
                };
            })
        );
        return buildResponse(200, statesWithAffiliates);
    } catch (err) {
        console.error('Error:', err);
        return buildResponse(400, `Failed to get states and affliates due to error, ${err}`);
    }
}

// register function 
async function registerUser(data) {
    const userId = "id" + Math.random().toString(16).slice(2)
    console.log("user data", data);
    const newUser = {
        email: data.email,
        name: data.name,
        state_id: data.state_id,
        affiliate_id: data.affilate_id,
        role: data.role || 'user',
        status: data.status || 'pending',
        id: userId
    };
    try {
        await dynamodb.put({
            TableName: usersTable,
            Item: newUser
        }).promise();
        return buildResponse(200, { message: 'User registered successfully' }, newUser);
    } catch (err) {
        console.error('Registration Error:', err);
        return buildResponse(400, 'Failed to register user');
    }
}