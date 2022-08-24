const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    return await res.json();
};

export {postData};

// try {
// console.log(xz);
// console.log('normal');
// } catch (e){
// console.log(e.name);
// console.log('////////////////');
// console.log(e.message);
// console.log('////////////////');
// console.log(e.stack);
// } finally {
// console.log('Try next time :)');
// }