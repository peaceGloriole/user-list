/* eslint-disable quotes */
const baseUrl = `http://localhost:3030/jsonstore/users`;

export const getAll = async () => {
    try {
        const response = await fetch(baseUrl);
        const result = await response.json();

        const data = Object.values(result);

        return data;
    } catch (error) {
        console.log(error);
    }
};

export const create = async (user) => {
    const body = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        imageUrl: user.imageUrl,
        address: {
            country: user.country,
            city: user.city,
            street: user.street,
            streetNumber: user.streetNumber,
        }
    };

    const response = await fetch(baseUrl, {
        method: `POST`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    });

    const result = await response.json();
    console.log(result);
    return result;
};