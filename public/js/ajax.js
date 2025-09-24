/**
 * Function to get data from a server
 * @param {*} url 
 * @returns 
 */
const getData = async (url) => {
    try {
        const res = await fetch(url);
        const items = await res.json();
        return items;
    } catch (error) {
        return {
            error,
        };
    }
}

/**
 * Function to get all data from different urls
 * @param {*} appUrlsData 
 * @returns 
 */
const getAllDataFromDifferentUrls = async (appUrlsData) => {
    // setup the promises
    const promises = appUrlsData.map((url) => getData(`http://localhost:3012${url}`));

    // fetch all appointments
    try {
        const items = await Promise.all(promises);
        return items;
    } catch (error) {
        console.log('🐮', error);
        return error;
    }
}